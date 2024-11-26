"use client";

import { RoundBtn } from "@/components/Form/Btn";
import { SearchInput } from "@/components/Form/Input";
import Hero from "@/components/Hero/Hero";
import SocialOptions from "@/components/Hero/SocialOptions";
import SocialQuote from "@/components/Hero/SocialQuote";
import NavLink from "@/components/Nav/NavLink";
import Comment from "@/components/SentimentSource/Comment";
import SentimentCard from "@/components/SentimentSource/SentimentCard";
import SentimentSelect from "@/components/SentimentSource/SentimentSelect";
import SourceSentiment from "@/components/SentimentSource/SourceSentiment";
import { ToastOption } from "@/Data/ToastOption";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { GetApi } from "../../lib/Actions";
import ShowCase from "@/components/Hero/ShowCase";
import Footer from "@/components/Footer/Footer";
import MiniBlog from "@/components/Hero/MiniBlog";

const Blogs = [
  {
    desc: "How to Effectively Share Your Sentiments on Social Media",
    body: "Social media has become a powerful platform for expressing our thoughts and feelings. Whether you're sharing excitement about a new product, frustration with a service, or your personal opinions on current events, your sentiments matter.",
    route: "/blog/1",
    image: "/images/FirstBlog.jpg",
  },
  {
    desc: "Creating a Sentiment Analysis Strategy",
    body: "In the digital age, understanding public sentiment can provide invaluable insights for businesses, organizations, and individuals alike. Whether you're managing a brand, launching a new product, or simply trying to gauge public opinion",
    route: "/blog/2",
    image: "/images/SecondBlog.jpg",
  },
  {
    desc: "Why Authenticity Matters in Social Media Sentiment Analysis",
    body: "In the ever-evolving world of social media, where every post, tweet, and comment can spark conversations, authenticity has become a critical factor in sentiment analysis. As businesses and individuals strive to understand public sentiment, ",
    route: "/blog/3",
    image: "/images/ThirdBlog.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <NavLink />
      {/* <div className="flex sidePadding gap-7 my-12 text-[#636363]">
        <div className="flex-[2]">
          <div className="card">
            <div className="mb-[20px] flex gap-5">
              <div className="flex-1">
                <SearchInput
                  handleOnchange={handleOnchange}
                  placeholder="Search through mentions, autors & domain...."
                  // rel_styles={{ width: "70%" }}
                />
              </div>
              <RoundBtn
                handleClick={handleSearch}
                disabled={loading.login}
                title="Search"
                styles={{ width: "120px", backgroundColor: "#007bff", height: "40px"}}
              />
            </div>
            <hr />
            <SentimentLineChart data={memoizedData} />
          </div>
          <div className="card mt-5 font-bold text-[20px]" style={{paddingTop: "10px", paddingBottom: "10px"}}>Result Output</div>
          {
            data.length > 0 && (
              data.map((item, index) => (
                <div key={index} className="mt-5">
                <SentimentCard data={item} />
              </div>
              ))
            )
          }
        </div>
        <div className="flex-1">
          <div className="card">
            <SourceSentiment />
            <SentimentSelect />
          </div>
          <div className="card mt-4">
            <Comment />
          </div>
        </div>
      </div> */}
      <Hero />
      <SocialQuote />
      <ShowCase />
      <div className=" sidePadding bg-white py-12">
      
        <blockquote className="md:text-[45px] text-[25px] text-center text-gray-700 mb-10">Blogs </blockquote>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 justify-center mb-8">
        {Blogs.map((blog, index) => (
          <MiniBlog key={index} data={blog} />
        ))}
      </div>
      </div>
      <SocialOptions />
      {/* <div className="mt-10"> */}
      <Footer />

      {/* </div> */}
    </main>
  );
}
