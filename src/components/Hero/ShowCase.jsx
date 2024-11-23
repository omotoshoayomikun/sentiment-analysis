import Image from "next/image";
import React from "react";

function ShowCase() {
  return (
    <div className="bg-[#F6FBFA] w-full sm:flex block sidePadding md:py-10 py-3 md:gap-[80px] gap-[20px] items-center">
      <div className="flex-1">
        <div className="relative w-full h-[500px]">
        <Image src="/images/student.png" fill={true} className="" alt="student Image" objectFit="contain" />
        <div className="absolute bg-white w-[240px] h-[100px] rounded-[7px] flex flex-col items-center justify-center bottom-[67px] right-[40px]">
            <h3 className="font-bold text-[20px]">John Emmanuel</h3>
            <small>CS/HND/F22/3201</small>
        </div>
        </div>
      </div>
      <div className="flex-1">
        <h1 className=" md:text-[58px] text-[30px]">
          “A student of computer science, having great intreste in Forex and software development”
        </h1>
      </div>
    </div>
  );
}

export default ShowCase;
