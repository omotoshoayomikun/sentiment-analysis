"use client";
import React, { useState } from "react";
import NavLink from "@/components/Nav/NavLink";
import { ChartAnalysis } from "@/Data/ChartData";
import PieChart from "@/components/Charts/PieChart";
import Link from "next/link";
import SentimentAnalysis from "@/components/Sentiment/SentimentAnalysis";

function page() {
  const Details = [
    {
      label: "Facebook",
      rate: [80, 20, 10],
      reviews: [
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
      ],
    },
    {
      label: "Instagram",
      rate: [70, 10, 20],
      reviews: [
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
      ],
    },
    {
      label: "Twitter(X)",
      rate: [60, 10, 30],
      reviews: [
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
      ],
    },
    {
      label: "Snapchat",
      rate: [90, 4, 6],
      reviews: [
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
      ],
    },
    {
      label: "Tiktok",
      rate: [40, 20, 40],
      reviews: [
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
        {
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde ex ipsum obcaecati hic saepe",
          date: "22/10/2024",
          sentiment: "Positive",
          icon: "😍",
        },
      ],
    },
  ];

  return (
    <>
      <NavLink />
      <div className="sidePadding mt-8">
        <div className="w-full grid grid-cols-3 gap-6">
          {Details.map((data, index) => (
            <SentimentAnalysis key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
