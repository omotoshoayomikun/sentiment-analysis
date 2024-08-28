"use client";
import React, { useEffect, useState } from "react";
import styles from "./CreateSentiment.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSnapchatSquare } from "react-icons/fa";
import NavLink from "@/components/Nav/NavLink";
import EmojiPicker from "@/components/EmojiPicker/EmojiPicker";
import { TextArea } from "@/components/Form/Input";
import { Btn } from "@/components/Form/Btn";

function page({ searchParams }) {
  const [detail, setDetail] = useState({
    icon: "",
    title: "",
  });

  console.log(searchParams.social);

  useEffect(() => {
    switch (searchParams.social) {
      case "instagram":
        setDetail({
          icon: FaInstagram,
          title: "instagram",
          color: "#E1306C",
        });
        break;
      case "facebook":
        setDetail({
          icon: FaFacebook,
          title: "facebook",
          color: "#4267B2",
        });
        break;
      case "snapchat":
        setDetail({
          icon: FaSnapchatSquare,
          title: "snapchat",
          color: "#FFFC00",
        });
        break;
      case "twitter":
        setDetail({
          icon: FaTwitter,
          title: "twitter",
          color: "#1DA1F2",
        });
        break;
      case "tiktok":
        setDetail({
          icon: AiFillTikTok,
          title: "tiktok",
        });
        break;

      default:
        break;
    }
  }, []);

  console.log(detail);

  return (
    <>
      <NavLink />
      <div className="w-full h-auto pb-14  mt-8">
        <div className="sidePadding"></div>
        <div
          className={`w-full flex justify-between gap-16 px-[10px] sidePadding ${styles.create_container}`}
        >
          <div className="flex-1">
            {detail.icon && <detail.icon color={detail.color} size={390} />}
          </div>
          <div className="flex-[2] pb-20 text-b">
            <div className="w-[500px]">
              <h1 className="text-[55px] font-bold leading-[3.5rem]">
                Sentiment Analysis
              </h1>
              <h5 className={`mt-4 mb-7`}>
                Categories reviews under positive, Neutral and Negative
              </h5>
              <div className="">
                <EmojiPicker />
              </div>
              <div className="mt-6">
                <TextArea
                  styles={{ height: "150px" }}
                  placeholder="Write your Reviews"
                />
              </div>
              <div>
                <Btn
                  title="send"
                  styles={{
                    width: "max-content",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    marginTop: "5px",
                    float: "right",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
