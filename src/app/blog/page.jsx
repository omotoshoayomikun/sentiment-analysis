import BlogList from "@/components/Blog/BlogList";
import NavLink from "@/components/Nav/NavLink";
import React from "react";

function page() {
  
      const Blogs = [
        {
          desc: "How to Effectively Share Your Sentiments on Social Media: A Step-by-Step Guide",
          body: "Social media has become a powerful platform for expressing our thoughts and feelings. Whether you're sharing excitement about a new product, frustration with a service, or your personal opinions on current events, your sentiments matter.",
          route: "/blog/1",
          image: "/images/FirstBlog.jpg",
        },
        {
          desc: "Creating a Sentiment Analysis Strategy: From Data Collection to Actionable Insights",
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
      ]

  return (


    <>
      <NavLink />
      <div className="sidePadding w-full h-auto pb-14  mt-8">
        <div className="grid gap-10 grid-cols-3">
          {
            Blogs.map((blog, index) => (
              <BlogList key={index} data={blog} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default page;
