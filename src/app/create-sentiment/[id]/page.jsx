"use client";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSnapchatSquare } from "react-icons/fa";
import NavLink from "@/components/Nav/NavLink";
import EmojiPicker from "@/components/EmojiPicker/EmojiPicker";
import { TextArea } from "@/components/Form/Input";
import { Btn } from "@/components/Form/Btn";
import Sentiment from "sentiment";
import { useRouter, useParams } from "next/navigation";
import { CreateSentimentAction, GetCookie } from "../../../../lib/Actions";
import { toast } from "react-toastify";
import DisplayModel from "@/components/DisplayModel/DisplayModel";
import SentimentDisplay from "@/components/Sentiment/SentimentDisplay";
import { ToastOption } from "@/Data/ToastOption";

function Page() {
  const params = useParams();
  const sentiment = new Sentiment();
  const router = useRouter();
  const [value, setValue] = useState({
    userId: "",
    sentiment: "",
    message: "",
    social: "",
    icon: "",
    color: "",
  });
  const [loading, setLoading] = useState({ login: false });
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [model, setModel] = useState(false);

  useEffect(() => {
    async function Check() {
      const cookie = await GetCookie();
      if (cookie) {
        setValue({ ...value, userId: cookie.user_id });
      }

      switch (params.id) {
        case "instagram":
          setValue({ ...value, icon: FaInstagram, social: "instagram", color: "#E1306C", userId: cookie.user_id });
          break;
        case "facebook":
          setValue({ ...value, icon: FaFacebook, social: "facebook", color: "#4267B2", userId: cookie.user_id });
          break;
        case "snapchat":
          setValue({ ...value, icon: FaSnapchatSquare, social: "snapchat", color: "#FFFC00", userId: cookie.user_id });
          break;
        case "twitter":
          setValue({ ...value, icon: FaTwitter, social: "twitter", color: "#1DA1F2", userId: cookie.user_id });
          break;
        case "tiktok":
          setValue({ ...value, icon: AiFillTikTok, social: "tiktok", userId: cookie.user_id });
          break;
        default:
          router.replace("/");
          break;
      }
    }

    Check();
  }, []);

  const handleOnchange = (event) => {
    const result = sentiment.analyze(event.target.value);
    const message = event.target.value;
    if (event.target.value === "") {
      setValue({ ...value, message: "", sentiment: "" });
    } else {
      let sentimentLabel = "neutral";
      if (result.score > 0) sentimentLabel = "positive";
      else if (result.score < 0) sentimentLabel = "negative";

      setValue({ ...value, message: message, sentiment: sentimentLabel });
    }
  };

  const handleCreateSentiment = async () => {
    if (value.message === "") {
      setError("Please enter your review");
    } else {
      if (!value.userId) {
        setModel(true);
      } else {
        try {
          setLoading({ ...loading, login: true });
          const body = JSON.stringify(value);
          const response = await CreateSentimentAction(
            `${process.env.NEXT_PUBLIC_BASEURL}/api/sentiment/review/${params.id}`,
            body
          );
          if (!response.success) {
            toast.error(response.message, ToastOption);
          } else {
            toast.success(response.message, ToastOption);
            setValue({ ...value, message: "", sentiment: "" });
          }
        } catch (error) {
          setLoading({ ...loading, login: false });
          toast.error(error.message, ToastOption);
        } finally {
          setLoading({ ...loading, login: false });
        }
      }
    }
  };

  return (
    <>
      <NavLink />
      <div className="w-full h-auto relative pb-[50px]">
        <div className="sidePadding pt-8">
          <div className="w-full md:flex md:flex-row flex-col md:justify-between justify-center items-center lg:gap-16 md:gap-7 px-[10px]">
            <div className="flex-1 md:text-left flex justify-center">
              {value.icon && <value.icon color={value.color} className="lg:text-[390px] md:text-[290px] text-[170px]" />}
            </div>
            <div className="flex-[1] pb-3 text-b">
              <div className="md:w-[500px]">
                <h1 className="md:text-[55px] text-[40px] text-center font-bold md:leading-[3.5rem]">Sentiment Analysis</h1>
                <h5 className="mt-4 mb-7 text-center">Categories reviews under positive, Neutral and Negative</h5>
                <EmojiPicker sentiment={value.sentiment} />
                <TextArea styles={{ height: "150px", marginTop: "20px" }} placeholder="Write your Reviews" handleOnchange={handleOnchange} value={value.message} />
                <Btn title="send" disabled={loading.login} styles={{ width: "max-content", paddingLeft: "30px", paddingRight: "30px", marginTop: "5px", float: "right" }} handleClick={handleCreateSentiment} />
              </div>
            </div>
          </div>
          <SentimentDisplay social={params.id} />
        </div>
        {model && <DisplayModel setModel={setModel} />}
      </div>
    </>
  );
}

export default Page;
