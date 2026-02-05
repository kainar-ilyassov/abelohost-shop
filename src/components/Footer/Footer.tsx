"use client";

import styles from "./Footer.module.scss";
import { useAuthStore } from "@/store/auth.store";

export default function Footer() {
  const year = new Date().getFullYear();
  const { user, token, isHydrated } = useAuthStore();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>{year}</span>
        {isHydrated && token && user?.email ? <span>Logged as {user.email}</span> : null}
      </div>
    </footer>
  );
}
