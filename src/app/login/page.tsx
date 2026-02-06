"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.scss";
import { login } from "@/lib/api/auth.api";
import { useAuthStore } from "@/store/auth.store";

type FieldErrors = {
  username?: string;
  password?: string;
};

export default function LoginPage() {
  const router = useRouter();
  const loginSuccess = useAuthStore((s) => s.loginSuccess);
  const token = useAuthStore((s) => s.token);
  const isHydrated = useAuthStore((s) => s.isHydrated);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<FieldErrors>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isHydrated) return;
    if (token) router.replace("/");
  }, [isHydrated, token, router]);

  const isValid = useMemo(
    () => username.trim().length >= 3 && password.trim().length >= 3,
    [username, password]
  );

  function validate(): boolean {
    const e: FieldErrors = {};
    if (username.trim().length < 3) e.username = "Minimum 3 characters";
    if (password.trim().length < 3) e.password = "Minimum 3 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError(null);
    if (!validate()) return;

    try {
      setLoading(true);

      const res = await login({ username, password });
      const t = res.token ?? res.accessToken;

      if (!t) {
        setApiError("Token was not returned by API.");
        return;
      }

      loginSuccess({
        token: t,
        user: {
          id: res.id,
          username: res.username,
          email: res.email,
          firstName: res.firstName,
          lastName: res.lastName,
        },
      });

      router.push("/");
    } catch {
      setApiError("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  }

  if (isHydrated && token) {
    return (
      <section className={styles.wrap}>
        <h1 className={styles.title}>Redirecting...</h1>
      </section>
    );
  }

  return (
    <section className={styles.wrap}>
      <h1 className={styles.title}>Login</h1>

      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.field}>
          <input
            className={styles.input}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username ? <div className={styles.error}>{errors.username}</div> : null}
        </div>

        <div className={styles.field}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password ? <div className={styles.error}>{errors.password}</div> : null}
        </div>

        {apiError ? <div className={styles.apiError}>{apiError}</div> : null}

        <button className={styles.button} disabled={!isValid || loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </section>
  );
}
