"use client";
import React, { useState } from "react";
import styles from "./NavLink.module.css";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa6";
function NavLink() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={` sidePadding ${styles.navlin_container}`}>
      <div className={styles.nav_body}>
        <ul className={styles.link_cont}>
          <li className={styles.link}>
            <Link href="/">HOME</Link>
          </li>
          <li className={styles.link}>
            <Link href="">ABOUT</Link>
          </li>
          <li className={styles.link}>
            <Link href="">SENTIMENT ANALYSIS</Link>
          </li>
        </ul>
        {isLogin ? (
          <>
          <div className="relative">
            <div className="flex items-center">
              <h3 className="mr-2">emmanuel@gmail.com</h3>
              <FaCaretDown />
            </div>
            <div className={`absolute ${styles.drop_bar} `}>
              <ul className="">
                <li className=""><Link className="block" href="">Profile</Link></li>
                <li className=""><Link className="block" href="">Settings</Link></li>
                <li className=""><Link className="block" href="">Logout</Link></li>
              </ul>
            </div>

          </div>
          </>
        ) : (
          <ul className={styles.link_cont}>
            <li className={styles.link}>
              <Link href="/login">LOGIN</Link>
            </li>
            <li className={styles.link}>
              <Link href="/sign-up">SIGN UP</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavLink;
