import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSnapchatSquare } from "react-icons/fa";
import styles from "./Hero.module.css";
import Link from "next/link";

function SocialOptions() {
  const Icons = [
    {
      icon: FaInstagram,
      color: "#E1306C",
      size: 150,
      title: "instagram"
    },
    {
      icon: FaFacebook,
      color: "#4267B2",
      size: 150,
      title: "facebook"
    },
    {
      icon: FaSnapchatSquare,
      color: "#FFFC00",
      size: 150,
      title: "snapchat"
    },
    {
      icon: FaTwitter,
      color: "#1DA1F2",
      size: 150,
      title: "twitter"
    },
    {
      icon: AiFillTikTok,
      color: "",
      size: 150,
      title: "tiktok"
    },
  ];

  return (
    <div className={`sidePadding ${styles.social_options_container}`}>
      <h1 className="md:text-[30px] text-[20px] font-bold md:leading-[3.5rem] text-center mt-4">
        Choose The Social Media You Want To Sentiment Analyse Below
      </h1>
      <div className="flex justify-between md:gap-5 gap-2 mt-9 flex-wrap">
        {Icons.map((icon) => (
          <Link href={`/create-sentiment/${icon.title}`} key={icon.title} className="cursor-pointer">
            <div className="flex justify-center items-center">
              <icon.icon color={icon.color} className="md:text-[150px] text-[70px]" />
            </div>
            <div className="text-[17px] mt-3 text-center">{icon.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SocialOptions;
