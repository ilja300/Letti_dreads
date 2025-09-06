import styles from "./footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <img src="/image_no_bg (1).png" alt="" className={styles.footerLogo} />
      </div>
      <div className={styles.footerItem}>
        <ul>
          <li>styles.menuList</li>
          <li>styles.menuList</li>
          <li>styles.menuList</li>
        </ul>
      </div>
      <div className={styles.footerItem}>
        <ul>
          <li>styles.menuList</li>
          <li>styles.menuList</li>
        </ul>
      </div>
      <div className={styles.footerItem}>+358 99 9999999</div>
    </div>
  );
}
