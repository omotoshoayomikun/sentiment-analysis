"use client"

import NavLink from "@/components/Nav/NavLink";
import React from "react";

function page() {
  return (
    <>
      <NavLink />
      <div className="sidePadding mt-8">
        <div className="">
          <h1 className="text-[30px] font-bold leading-[3.5rem]">About Us </h1>
          <p>
            Welcome to our website, where understanding sentiment is just a
            click away. We are passionate about providing you with the tools and
            insights to navigate the complex world of social media sentiment.
            Our platform is designed to be your go-to resource for sharing your
            own feelings and opinions, as well as exploring the sentiments
            expressed by others.
          </p>
        </div>
        <div className="">
          <h1 className="text-[30px] font-bold leading-[3.5rem]">
            Our Mission
          </h1>
          <p>
            At our website, our mission is simple: to empower individuals and
            businesses by offering a transparent and intuitive way to understand
            social media sentiment. Whether you're looking to share your own
            thoughts or dive into the collective feelings of the community, we
            aim to deliver valuable insights that can inform your decisions and
            strategies.
          </p>
        </div>
        <div className="">
          <h1 className="text-[30px] font-bold leading-[3.5rem]">
            What we offered
          </h1>
          <ul className="list-disc pl-10 my-5">
            <li>
              <span className="font-bold">Share Your Sentiments:</span> Our
              platform allows you to easily contribute your opinions and
              feelings on various topics. Your voice matters, and we believe in
              creating a space where everyone can share their perspective.
            </li>
            <li>
              <span className="font-bold">Explore Historical Data:</span> Gain
              access to a wealth of sentiment data collected from past reviews
              and analyses. See trends, understand shifts in public opinion, and
              leverage this information to stay ahead in your industry or simply
              gain a deeper understanding of the conversation.
            </li>
            <li>
              <span className="font-bold">Real-Time Insights:</span> Stay
              up-to-date with real-time sentiment analysis to gauge current
              public opinion. Our tools are designed to give you immediate
              feedback on the sentiments surrounding topics of interest.
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-[30px] font-bold leading-[3.5rem]">
            Why Choose Us?
          </h1>
          <ul className="list-disc pl-10 my-5">
            <li>
              <span className="font-bold">User-Friendly Interface:</span>Our
              platform is designed with simplicity in mind, making it easy for
              anyone to navigate and contribute.
            </li>
            <li>
              <span className="font-bold">Comprehensive Data:</span> We
              aggregate and analyze a wide range of sentiments to provide you
              with a complete picture of public opinion.
            </li>
            <li>
              <span className="font-bold">Trustworthy Insights:</span>Our
              sentiment analysis is powered by cutting-edge technology and
              algorithms to ensure accurate and reliable data.
            </li>
            <li>
              <span className="font-bold">Community Focused:</span>We value
              every user's contribution and strive to create a community where
              diverse voices are heard and respected.
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-[30px] font-bold leading-[3.5rem]">
            Our Commitment
          </h1>
          <p>
            We are committed to providing a platform that not only meets your
            needs but also exceeds your expectations. Our team is dedicated to
            continuously improving our services and expanding our features to
            ensure that you have the best tools at your disposal for sentiment
            analysis.
          </p>
          <p>
            Thank you for choosing our website. We look forward to helping you
            navigate the world of social media sentiment and providing you with
            the insights you need to make informed decisions.
          </p>
          <p>
            Feel free to contact us with any questions or feedback. Together,
            let's explore and understand the sentiments that shape our world.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          p,
          li {
            font-size: 20px;
          }
          h3 {
            font-size: 28px;
          }
        `}
      </style>
    </>
  );
}

export default page;
