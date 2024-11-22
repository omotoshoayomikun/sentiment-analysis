"use client";

import React, { useEffect, useState } from "react";
import { TextArea } from "../Form/Input";
import { RoundBtn } from "../Form/Btn";

import Sentiment from "sentiment";
import { CreateSentimentAction, GetCookie } from "../../../lib/Actions";
import { ToastOption } from "@/Data/ToastOption";
import { toast } from "react-toastify";
import DisplayModel from "../DisplayModel/DisplayModel";

function Comment() {
  const [loading, setLoading] = useState({ login: false });
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [model, setModel] = useState(false);
  // const [comment, setComment] = useState("");
  const sentiment = new Sentiment();
  const [value, setValue] = useState({
    userId: "",
    sentiment: "",
    message: "",
    social: "",
    icon: "",
    color: "",
  });

  
  useEffect(() => {
    async function Check() {
      const cookie = await GetCookie();
      if (cookie) {
        setValue({ ...value, userId: cookie.user_id });
      }
    }

    Check();
  }, []);


  const handleOnchange = (event) => {
    const message = event.target.value;
    const result = sentiment.analyze(message);
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
      setError("");
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
      <div className="relative">
        <h3 className="font-bold text-[18px] mb-4">Review</h3>

        {value.sentiment && (
          <div
            className={`absolute right-2 bottom-[50px] ${
              value.sentiment == "positive"
                ? "bg-green-600"
                : value.sentiment == "negative"
                ? "bg-red-600"
                : "bg-gray-600"
            }  rounded-full flex justify-center items-center px-2 py-0 text-white text-[13px]`}
          >
            {value.sentiment == "positive"
              ? "😍"
              : value.sentiment == "negative"
              ? "🙁"
              : "🙂"}{" "}
            {value.sentiment}
          </div>
        )}
        <TextArea
          handleOnchange={handleOnchange}
          placeholder="Enter your comment"
          value={value.message}
          styles={{ height: "80px" }}
        />
        <small className="text-red-600 text-center">{error}</small>
        <RoundBtn
          title="Send"
          styles={{
            width: "min-content",
            padding: "7px 20px",
            marginLeft: "auto",
          }}
          handleClick={handleCreateSentiment}
        />
      </div>
      {model && <DisplayModel setModel={setModel} />}
    </>
  );
}

export default Comment;
