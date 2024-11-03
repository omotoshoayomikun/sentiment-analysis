import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogList({data}) {
  return (
    <>
      <div className="w-full bg-white rounded-2xl shadow-md">
        <div className="w-full h-[240px] relative">
          <Image
            src={data.image}
            alt="blog image"
            className={`rounded-t-2xl`}
            fill={true}
          />
        </div>
        <blockquote className="p-4">
          <h3 className={`text-[20px] font-bold`}>
            {data.desc}
          </h3>
          <article className="line-clamp-4">{data.body}</article>
          <Link href={data.route} className="text-[--anchor-text-color] underline">Read More</Link>
        </blockquote>
      </div>
    </>
  );
}

export default BlogList;
