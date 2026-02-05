"use client";

import { useMemo, useState } from "react";
import styles from "./login.module.scss";

type FieldErrors = {
  username?: string;
  password?: string;
};

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<FieldErrors>({});

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

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    validate();
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

        <button className={styles.button} disabled={!isValid}>
          Login
        </button>
      </form>
    </section>
  );
}
