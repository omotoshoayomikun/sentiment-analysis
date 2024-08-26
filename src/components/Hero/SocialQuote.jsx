import React from "react";

function SocialQuote() {
  return (
    <section className={`w-full bg-white flex flex-col justify-center items-center px-[200px] py-7`}>
      <blockquote className="text-[45px] text-center text-gray-700">
        “Don’t use social media to impress people; use it to impact people.”
      </blockquote>
      <i className="float-right text-[30px]">— Dave Willis</i>
    </section>
  );
}

export default SocialQuote;
