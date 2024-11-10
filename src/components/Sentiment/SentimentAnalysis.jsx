"use client";
import { ChartAnalysis } from "@/Data/ChartData";
import React, { useState } from "react";
import PieChart from "../Charts/PieChart";
import Link from "next/link";

function SentimentAnalysis({ data }) {
  
  const chart = [9, 5, 4]

  return (
    <div className="w-full bg-white rounded-lg p-5 shadow-md">
      <div className="text-[25px] font-bold leading-[3rem] mb-2 text-center capitalize">
        {data.label}
      </div>
      <div className="h-[250px] flex justify-center">
        <PieChart ChartAnalysis={chart} />
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-1 text-sm">
          <div className="w-5 h-4 bg-green-700"></div>
          Positive <span className="font-bold">{data.rate[0]}%</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <div className="w-5 h-4 bg-yellow-700"></div>
          Neutral <span className="font-bold">{data.rate[1]}%</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <div className="w-5 h-4 bg-red-700"></div>
          Negative <span className="font-bold">{data.rate[2]}%</span>
        </div>
      </div>
      <div className="text-[20px] font-bold leading-[2.5rem] mb-2 mt-2">
        Reviews
      </div>
      {data.reviews.map((review, index) => (
        <div key={index} className="flex gap-5 mb-4 pb-3  border-b-2 border-dashed border-[#ecf0f4]">
          <div className="flex-1">
            <h1 className="text-sm">
             {review.msg}
            </h1>
            <div className="flex text-[#90a4ae] text-[11px] gap-5">
              <p className="">
                <span>{data.label}</span>
              </p>
              <p className="">
                <span> - {review.date}</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col px-3 border-l-2 border-[#dee2e6]">
            <div className="text-center text-3xl mb-1">{review.icon}</div>
            <p className="text-[12px]">{review.sentiment}</p>
          </div>
        </div>
      )).slice(0, 3)}
      <div className="flex justify-center">
        <Link href={`/create-sentiment/?social=${data.label}`} className="text-[--anchor-text-color]">
          View all Reviews
        </Link>
      </div>
    </div>
  );
}

export default SentimentAnalysis;
