import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookF, FaLinkedin, FaReddit, FaSnapchatGhost, FaSnapchatSquare, FaTelegram, FaTiktok } from "react-icons/fa";
import styles from "./Hero.module.css";
import Link from "next/link";

function SocialOptions() {

  return (
    <div className="sidePadding bg-[#22272A] flex justify-center py-12">
      <div className="w-[500px] grid grid-cols-4 gap-[55px]">
        <div className="flex flex-col justify-center items-center">
          <FaInstagram size={35} color="#ffffff" /> <span className="text-[#83919A]">Instagram</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaFacebookF size={35} color="#ffffff" /> <span className="text-[#83919A]">Facebook</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaTwitter  size={35} color="#ffffff" /> <span className="text-[#83919A]">Twitter</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaTiktok  size={35} color="#ffffff" /> <span className="text-[#83919A]">TikTok</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaSnapchatGhost  size={35} color="#ffffff" /> <span className="text-[#83919A]">Snapchat</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaLinkedin size={35} color="#ffffff" /> <span className="text-[#83919A]">LinkedIn</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaTelegram size={35} color="#ffffff" /> <span className="text-[#83919A]">Telegram</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaReddit size={35} color="#ffffff" /> <span className="text-[#83919A]">Reddit</span>
        </div>
      </div>
    </div>
  );
}

export default SocialOptions;
