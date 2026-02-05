import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={`${styles.topInner} container`}>
          <div className={styles.topLeft}>
            <span className={styles.topItem}>
              <span className={styles.dot} /> +021 95-51-84
            </span>
            <span className={styles.topItem}>
              <span className={styles.dot} /> shop@abelohost.com
            </span>
            <span className={styles.topItem}>
              <span className={styles.dot} /> 1734 Stonecoal Road
            </span>
          </div>

          <div className={styles.topRight}>
            <Link className={styles.loginLink} href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.mainBar}>
        <div className={`${styles.mainInner} container`}>
          <div className={styles.logo}>
            Abelohost Shop<span className={styles.logoDot}>.</span>
          </div>
          <div className={styles.banner}>600 x 70</div>
        </div>
      </div>

      <div className={styles.redLine} />

      <nav className={styles.nav}>
        <div className={`${styles.navInner} container`}>
          <Link className={styles.navLink} href="/">
            Home
          </Link>
          <a className={styles.navLink} href="#">
            Hot Deals
          </a>
          <a className={styles.navLink} href="#">
            Categories
          </a>
          <a className={styles.navLink} href="#">
            Laptops
          </a>
          <a className={styles.navLink} href="#">
            Smartphones
          </a>
          <a className={styles.navLink} href="#">
            Cameras
          </a>
          <a className={styles.navLink} href="#">
            Accessories
          </a>
        </div>
      </nav>

      <div className={styles.bottomLine} />
    </header>
  );
}
