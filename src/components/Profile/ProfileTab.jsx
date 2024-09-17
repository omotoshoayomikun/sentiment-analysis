"use client";

import React, { useState } from "react";
import Reviews from "./Reviews";
import Settings from "./Settings";

function ProfileTab() {
  const [tab, setTab] = useState("reviews");

  return (
    <>
      <div className="border-b border-[#dee2e6] border-solid mb-5">
        <ul className="flex">
          <li
            onClick={() => setTab("reviews")}
            className={`pb-[15px] pt-2 px-[20px] hover:border-b-2 hover:border-[--anchor-text-color] border-b-2 ${tab == "reviews" ? "border-[--anchor-text-color]" : "border-b-transparent"} cursor-pointer`}
          >
            Your Reviews
          </li>
          <li
            onClick={() => setTab("settings")}
            className={`pb-[15px] pt-2 px-[20px] hover:border-b-2 hover:border-[--anchor-text-color] border-b-2 ${tab == "settings" ? "border-[--anchor-text-color]" : "border-b-transparent"} cursor-pointer`}
          >
            Settings
          </li>
        </ul>
      </div>
      
        {tab == "reviews" ? <Reviews /> : <Settings />}
    
    </>
  );
}

export default ProfileTab;
