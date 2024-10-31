"use client";
import React, { useEffect, useState } from "react";
import styles from "./NavLink.module.css";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa6";
import { GetCookie } from "../../../lib/Actions";
// import { createSession } from "../../../lib/session";
function NavLink() {
  const [isLogin, setIsLogin] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    async function Check() {
      const cookie = await GetCookie();
      if (cookie) {
        setIsLogin(true);
        setUserEmail(cookie.email);
      } else {
        setIsLogin(false);
      }
    }

    Check()
  }, []);

  return (
    <div className={` sidePadding ${styles.navlin_container} text-white`}>
      <div className={styles.nav_body}>
        <ul className={styles.link_cont}>
          <li className={styles.link}>
            <Link href="/">HOME</Link>
          </li>
          <li className={styles.link}>
            <Link href="/sentiment-analysis">SENTIMENT ANALYSIS</Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">ABOUT</Link>
          </li>
          <li className={styles.link}>
            <Link href="/blog">BLOG</Link>
          </li>
        </ul>
        {isLogin ? (
          <>
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={handleToggle}
              >
                <h3 className="mr-2 text-[18px]">{userEmail}</h3>
                <FaCaretDown />
              </div>
              {toggle && (
                <div className={`absolute ${styles.drop_bar} `}>
                  <ul className="">
                    <li className="">
                      <Link href="/profile" className="block">
                        Profile
                      </Link>
                    </li>
                    <li className="">
                      <Link href="" className="block">
                        Settings
                      </Link>
                    </li>
                    <li className="">
                      <Link href="" className="block">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
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
