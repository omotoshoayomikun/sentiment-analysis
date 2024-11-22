import React from "react";
import styles from "./Hero.module.css";
import NavLink from "../Nav/NavLink";
import SocialIcons from "./SocialIcons";
import AnalysisSlide from "./AnalysisSlide";
import { Input } from "../Form/Input";
import Link from "next/link";
import { RoundBtn } from "../Form/Btn";
function Hero() {
  return (
    <div>
      {/* <NavLink /> */}
    <div className={` ${styles.hero_content}  pt-8 sidePadding`}>
      <div className="w-full flex lg:flex-row flex-col-reverse  justify-between md:gap-16 gap-3 px-[10px]">
        <div className="flex-[2] flex flex-col justify-between text-white overflow-hidden">
          <div>
            <h1 className="text-[50px] font-bold leading-[3.5rem]  md:block hidden">
              Welcome To The World Of Sentiment
            </h1>
            <h5 className={`sm:mt-4 sm:mb-7 sm:text-left text-center`}>Sentiment Analysis/Emotion Analysis</h5>
          </div>
          <AnalysisSlide />
          <div className="mt-16 flex gap-5 sm:text-[19px] text-[16px]">
           {/* <Link href="" title="Click to see full details" className="text-green-600 font-bold sm:text-[22px] text-[18px]">View Full Details</Link> and Perform <Link href=""  title="Click to see full details"  className="text-green-600 font-bold sm:text-[22px] text-[18px]">Sentiment</Link> Analysis On Social */}
           <Link href="login" className="flex-1">
           <RoundBtn title="Login" />
           </Link>
           <Link href="sign-up" className="flex-1">
           <RoundBtn title="Register" />
           </Link>
          </div>
        </div>
        <div className="flex-1">
          <SocialIcons />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
