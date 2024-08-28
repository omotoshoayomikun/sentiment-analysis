import React from "react";
import styles from "./Hero.module.css";
import NavLink from "../Nav/NavLink";
import SocialIcons from "./SocialIcons";
import AnalysisSlide from "./AnalysisSlide";
import { Input } from "../Form/Input";
import Link from "next/link";
function Hero() {
  return (
    <div>
      <NavLink />
    <div className={` ${styles.hero_content}  pt-8 sidePadding`}>
      <div className="w-full flex justify-between gap-16 px-[10px]">
        <div className="flex-[2] flex flex-col justify-between pb-20 text-white overflow-x-hidden h-[calc(100vh-120px)]">
          <div>
            <h1 className="text-[50px] font-bold leading-[3.5rem]">
              Welcome To The World Of Sentiment
            </h1>
            <h5 className={`mt-4 mb-7`}>Sentiment Analysis/Emotion Analysis</h5>
          </div>
          <AnalysisSlide />
          <div className="mt-16 text-[19px]">
           <Link href="" title="Click to see full details" className="text-green-600 font-bold text-[22px]">View Full Details</Link> and Perform <Link href=""  title="Click to see full details"  className="text-green-600 font-bold text-[22px]">Sentiment</Link> Analysis On Social
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
