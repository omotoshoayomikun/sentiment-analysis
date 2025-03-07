"use client";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSnapchatSquare } from "react-icons/fa";
import styles from "./Hero.module.css";
function SocialIcons() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Icons = [
    {
      icon: FaInstagram,
      color: "#E1306C",
      size: 370,
    },
    {
      icon: FaFacebook,
      color: "#4267B2",
      size: 350,
    },
    {
      icon: FaTwitter,
      color: "#1DA1F2",
      size: 370,
    },
    {
      icon: AiFillTikTok,
      color: "",
      size: 370,
    },
    {
      icon: FaSnapchatSquare,
      color: "#FFFC00",
      size: 370,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Icons.length);
    }, 4000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [Icons.length]);

  return (
    <div>
      <div className="sm:text-[25px] text-[20px] text-center mb-5 font-bold md:hidden block text-white">
        Welcome To The World Of Sentiment
      </div>
      <div className="flex justify-center items-center">
        {/* <div className="flex justify-center items-center"> */}
        {Icons.map((icon, index) => (
          <div
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <icon.icon color={icon.color} className={`sm:text-[370px] text-[250px]`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialIcons;
