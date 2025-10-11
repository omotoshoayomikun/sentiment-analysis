"use client"

import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import NavLink from "../Nav/NavLink";
import SocialIcons from "./SocialIcons";
import { Input } from "../Form/Input";
import Link from "next/link";
import { RoundBtn } from "../Form/Btn";
import { GetCookie } from "../../../lib/Actions";
import Image from "next/image";
function Hero() {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function Check() {
      const cookie = await GetCookie();
      if (cookie) {
        setUser(cookie.user_id);
      }
    }

    Check();
  }, []);

  return (
    <div>
      {/* <NavLink /> */}
      <div className={` ${styles.hero_content}  pt-8 sidePadding`}>
        <div className="w-full h-full flex lg:flex-row flex-col-reverse  justify-between md:gap-16 gap-3 px-[10px]">
          <div className="flex-1 flex flex-col justify-around text-[var(--s-blue)] overflow-hidden ">
            <div>
              <h1 className="text-[60px] font-extrabold leading-[4rem]  md:block hidden">
                Welcome To The <br /> World Of Sentiment
              </h1>
              {/* <h5 className={`sm:mt-4 sm:text-left text-center  md:block hidden`}>
                Sentiment Analysis/Emotion Analysis
              </h5> */}
            <p className="md:text-[1.3rem] text-[1rem] mt-3">
              Get AI-powered access to mentions across social media, news, blogs,
              videos, forums, podcasts, reviews, and more.
            </p>
            {user ? (
              <div>
                <div className="flex items-center flex-wrap gap-3  sm:text-[25px] text-[18px]">
                  Perform <Link href="/result" title="Click to perform sentiment analysis" className="text-green-600 font-bold sm:text-[30px] text-[18px]">Sentiment</Link> Analysis On Social

                </div>
              </div>
            ) : (
              <div className="mt-16 flex gap-5 sm:text-[19px] text-[16px]">
                <Link href="login" className="">
                  <RoundBtn title="Login" styles={{paddingInline: "80px", paddingBlock: "15px"}} />
                </Link>
                <Link href="sign-up" className="">
                  <RoundBtn title="Register" styles={{paddingInline: "80px", paddingBlock: "15px"}} />
                </Link>
              </div>
            )}
            </div>
          </div>
          <div className="flex-[1] relative h-full">
            <Image src={`/images/x3.png`} alt="hero image" fill className="absolute" objectFit="contain" />
            {/* <SocialIcons /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
