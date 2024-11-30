import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaDatabase, FaSnapchatSquare } from "react-icons/fa";
import React from "react";

function SentimentCard(props) {
  // Function to convert UNIX timestamp to a human-readable date
  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp); // Convert to milliseconds
    return date.toLocaleString(); // Returns date and time in the format of the user's locale
  };

  return (
    <>
      <div className="card">
        <div className="flex gap-7 mb-3">
          <div className="relative">
            {props?.data.social == "Instagram" && (
              <FaInstagram size={70} color="#E1306C" />
            )}
            {props?.data.social == "facebook" && (
              <FaFacebook size={70} color="#4267B2" />
            )}
            {props?.data.social == "twitter" && (
              <FaTwitter size={70} color="#1DA1F2" />
            )}
            {props?.data.social == "snapchat" && (
              <FaSnapchatSquare size={70} color="#FFFC00" />
            )}
            {props?.data.social == "tiktok" && <AiFillTikTok size={70} />}
            {props?.data.social == "Database" && <FaDatabase size={70} />}
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <div className="font-bold text-[21px]">
                {props.data?.username}
              </div>
              <div
                className={`${
                  props.data?.score > 0
                    ? "bg-green-600"
                    : props.data?.score < 0
                    ? "bg-red-600"
                    : "bg-gray-600"
                }  rounded-full flex justify-center items-center px-2 py-0 text-white text-[13px]`}
              >
                {props.data?.score > 0
                  ? "😍"
                  : props.data?.score < 0
                  ? "🙁"
                  : "🙂"}{" "}
                {props.data?.analyzed}
              </div>
            </div>
            <ul className="flex list-disc justify-between pl-0 pr-0 text-[#81878e] text-[14px] font-bold">
              <li className="list-none">{props.data?.social}</li>
              <li>Influence score {props.data?.score}/5</li>
              <li>{formatDate(props.data?.created_at)}</li>
            </ul>
          </div>
        </div>
        <div className="text-[18px] text-wrap">{props.data?.text}</div>
      </div>
    </>
  );
}

export default SentimentCard;
