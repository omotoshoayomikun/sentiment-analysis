"use client";
import React, { useState, useEffect } from "react";
import NavLink from "@/components/Nav/NavLink";
import { ChartAnalysis } from "@/Data/ChartData";
import PieChart from "@/components/Charts/PieChart";
import Link from "next/link";
import SentimentAnalysis from "@/components/Sentiment/SentimentAnalysis";
import Loading from "@/components/Loading/Loading";

function page() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartDate, setChartDate] = useState([0, 0, 0]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await GetApi(
          `${process.env.NEXT_PUBLIC_BASEURL}/api/sentiment/review`
        );
        if (!response.success) {
          toast.error(data.message || "Error fetching data", ToastOption);
        } else {
          setReviews(response.data);
        }
      } catch (err) {
        // toast.error(err.message, ToastOption);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const Details = [
    {
      label: "facebook",
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
      label: "instagram",
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
      label: "twitter(X)",
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
      label: "snapchat",
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
      label: "tiktok",
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

  
  if (loading) {
    return (
      <div className="w-full h-[100vh-84px]">
        <Loading />
      </div>
    );
  }

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
