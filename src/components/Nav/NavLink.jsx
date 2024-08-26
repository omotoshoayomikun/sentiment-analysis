import React from "react";
import styles from "./NavLink.module.css";
import Link from "next/link";
function NavLink() {
  return (
    <div className={styles.navlin_container}>
      <div className={styles.nav_body}>
        <ul className={styles.link_cont}>
          <li className={styles.link}><Link href="">HOME</Link></li>
          <li className={styles.link}><Link href="">ABOUT</Link></li>
          <li className={styles.link}><Link href="">SENTIMENT ANALYSIS</Link></li>
        </ul>
        <ul className={styles.link_cont}>
          <li className={styles.link}><Link href="">LOGIN</Link></li>
          <li className={styles.link}><Link href="">SING UP</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavLink;
