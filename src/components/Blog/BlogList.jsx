import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogList() {
  return (
    <>
      <div className="w-full bg-white rounded-2xl shadow-md">
        <div className="w-full h-[240px] relative">
          <Image
            src="/images/FirstBlog.jpg"
            alt="blog image"
            className={`rounded-t-2xl`}
            fill={true}
          />
        </div>
        <blockquote className="p-4">
          <h3 className={`text-[20px] font-bold`}>
            How to Share Your Sentiments on Social Media
          </h3>
          <article>
            Social media has become a powerful platform for expressing our
            thoughts and feelings. Whether you're sharing excitement about a new
            product, frustration with a service, or your personal opinions on
            current events, your sentiments matter.
          </article>
          <Link href={`/blog/1234`} className="text-[--anchor-text-color] underline">Read More</Link>
        </blockquote>
      </div>
    </>
  );
}

export default BlogList;
