import React from "react";

function SocialQuote() {
  return (
    <section className={`w-full bg-[var(--s-blue-dark)] flex flex-col justify-center items-center md:px-[200px] px-5 py-16`}>
      <blockquote className="md:text-[45px] text-[25px] text-center text-white">
        “Don’t use social media to impress people; use it to impact people.”
      </blockquote>
      <i className="float-right md:text-[30px] text-[20px] text-white">— Dave Willis</i>
    </section>
  );
}

export default SocialQuote;
