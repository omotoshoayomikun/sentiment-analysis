"use client";
import React, { useEffect, useState } from "react";
import styles from "./NavLink.module.css";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa6";
import { DeleteCookie, GetCookie } from "../../../lib/Actions";
import { CiMenuFries, CiSettings } from "react-icons/ci";
import { useRouter } from "next/navigation";
// import { createSession } from "../../../lib/session";
function NavLink() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggleSm, setToggleSm] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  async function Check() {
    const cookie = await GetCookie();
    if (cookie) {
      setIsLogin(true);
      setUserEmail(cookie.email);
    } else {
      setIsLogin(false);
    }
  }

  useEffect(() => {
    Check();
  }, []);

  const handleLogout = async () => {
    await DeleteCookie();
    await Check();
    router.refresh();
  };

  return (
    <div>
      <div className={` sidePadding ${styles.navlin_container} text-white`}>
        <div className={`${styles.nav_body} md:flex hidden`}>
          <ul className={styles.link_cont}>
            <li className={styles.link}>
              <Link href="/">HOME</Link>
            </li>
            <li className={styles.link}>
              <Link href="/result">SENTIMENT ANALYSIS</Link>
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
                  className={`flex items-center cursor-pointer ${styles.toggleNav}`}
                  onMouseEnter={() => setToggle(true)}
                  onMouseLeave={() => setToggle(false)}
                   // onClick={handleToggle}
                >
                  <h3 className="mr-2 text-[18px]">{userEmail}</h3>
                  <FaCaretDown />
                </div>
                {toggle && (
                <div 
                className={`absolute ${styles.drop_bar} w-[200px] right-0 top-0 pt-[56px]`}
                onMouseEnter={() => setToggle(true)}
                onMouseLeave={() => setToggle(false)}
                >
                  <div
                   className={`bg-[--soft-blue] p-3`}
                  
                   >
                    <ul className="">
                      <li className="">
                        <Link href="/profile" className="block">
                          Profile
                        </Link>
                      </li>
                      {/* <li className="">
                        <Link href="" className="block">
                          Settings
                        </Link>
                      </li> */}
                      <li className="" onClick={handleLogout}>
                        <Link href="" className="block">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>

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
        <div className={`md:hidden block ml-auto`}>
          <div
            className={` cursor-pointer`}
            onClick={() => setToggleSm(!toggleSm)}
          >
            <CiMenuFries color="#fff" size={30} className="font-bold" />
          </div>
        </div>
      </div>

      {toggleSm && (
        <div className={`${styles.nav_body_sm} md:hidden z-50`}>
          <ul className={styles.link_cont_sm}>
            <li className={styles.link}>
              <Link href="/">HOME</Link>
            </li>
            <li className={styles.link}>
              <Link href="/result">SENTIMENT ANALYSIS</Link>
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
              <div className="relative py-2 px-5 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="rounded-full w-auto bg-gray-700 flex items-center px-4 py-2 cursor-pointer">
                      <h3 className="mr-2 text-[20px]">{userEmail}</h3>
                    </div>
                  </div>
                  <div
                    className="rounded-full w-auto bg-gray-700 flex items-center px-2 py-2 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <CiSettings size={35} className="font-bold" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <ul className={styles.link_cont_sm}>
              <li className={styles.link}>
                <Link href="/login">LOGIN</Link>
              </li>
              <li className={styles.link}>
                <Link href="/sign-up">SIGN UP</Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default NavLink;
