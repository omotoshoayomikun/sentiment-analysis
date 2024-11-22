"use client";
import React, { useState } from "react";
import { Checkbox } from "../Form/Input";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSnapchatSquare } from "react-icons/fa";

function SourceSentiment() {



  return (
    <>
      <h3 className="font-bold text-[18px]">Source</h3>
      <div className="flex flex-wrap w-full mt-5">
       <ul className="flex flex-wrap w-full">
        <li disabled className="basis-[50%] mb-4 items-center" >
          <div className="flex gap-2" disabled={true}>
            <Checkbox /> <span><FaTwitter color="#1DA1F2" size={25} /></span> <span className="text-[#1DA1F2]">Twitter</span>
          </div>
        </li>
        <li className="basis-[50%] flex gap-2 mb-4 items-center" >
            <Checkbox /> <span><FaInstagram color="#E1306C" size={25}/></span> <span className="text-[#E1306C]">Instagram</span>
        </li>
        <li className="basis-[50%] flex gap-2 mb-4 items-center" >
            <Checkbox /> <span><FaFacebook color="#4267B2" size={25} /></span> <span className="text-[#4267B2]">Facebook</span>
        </li>
        <li className="basis-[50%] flex gap-2 mb-4 items-center" >
            <Checkbox /> <span><AiFillTikTok color="" size={25} /></span> <span className="text-[]">TikTok</span>
        </li>
        <li className="basis-[50%] flex gap-2 mb-4 items-center" >
            <Checkbox /> <span><FaSnapchatSquare color="#FFFC00" size={25} /></span> <span className="text-[]">Snapchat</span>
        </li>
       </ul>
       {/* <div className="radios">
            <label htmlFor=""><input type="radio" name="propertyStudio" onChange={handleStudio} value="no" defaultChecked /><span>No</span></label>
            <label htmlFor=""><input type="radio" name="propertyStudio" onChange={handleStudio} value="yes" /><span>Yes</span></label>
        </div> */}
      </div>
    </>
  );
}

export default SourceSentiment;
