"use client";
import React, { useEffect, useState } from "react";
// import styles from "./CreateSentiment.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSnapchatSquare } from "react-icons/fa";
import NavLink from "@/components/Nav/NavLink";
import EmojiPicker from "@/components/EmojiPicker/EmojiPicker";
import { TextArea } from "@/components/Form/Input";
import { Btn } from "@/components/Form/Btn";
import ListSentiment from "@/components/Sentiment/ListSentiment";
import { ChartAnalysis } from "@/Data/ChartData";
import PieChart from "@/components/Charts/PieChart";
import Sentiment from "sentiment";

function Page({ searchParams }) {
  const sentiment = new Sentiment();
  const [detail, setDetail] = useState({
    icon: "",
    title: "",
  });

  const [sentValue, setSentValue] = useState("")

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

  const [chart, setChart] = useState({
    labels: ChartAnalysis.map((data) => data.sentiment),
    datasets: [
      {
        label: "Analysis",
        data: ChartAnalysis.map((data) => data.value),
        backgroundColor: ["green", "yellow", "red"],
        borderColor: "grey",
        borderWidth: 1,
      },
    ],
  });

  const handleOnchange = (event) => {
    const result = sentiment.analyze(event.target.value)
    if(event.target.value == "") {
      setSentValue("")
    } else {
      result.score > 0 && setSentValue("Positve") || result.score < 0 && setSentValue("Negative") || result.score == 0 && setSentValue("Neutral")
    }
  }

  console.log(sentValue)

  return (
    <>
      <NavLink />
      <div className="w-full h-auto pb-14  mt-8">
        <div className="sidePadding">
          <div className={`w-full flex justify-between gap-16 px-[10px]`}>
            <div className="flex-1">
              {detail.icon && <detail.icon color={detail.color} size={390} />}
            </div>
            <div className="flex-[2] pb-3 text-b">
              <div className="w-[500px]">
                <h1 className="text-[55px] font-bold leading-[3.5rem]">
                  Sentiment Analysis
                </h1>
                <h5 className={`mt-4 mb-7`}>
                  Categories reviews under positive, Neutral and Negative
                </h5>
                <div className="">
                  <EmojiPicker sentiment={sentValue} />
                </div>
                <div className="mt-6">
                  <TextArea
                    styles={{ height: "150px" }}
                    placeholder="Write your Reviews"
                    handleOnchange={handleOnchange}
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
          <h1 className="text-[30px] font-bold leading-[3.5rem] mb-3">
            List Sentiment for {searchParams.social}
          </h1>
          <div className="flex gap-9">
            <div className="flex-[2]">
              <ListSentiment />
            </div>
            <div className="flex-[1.2] flex items-center ">
              <PieChart chartData={chart} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
