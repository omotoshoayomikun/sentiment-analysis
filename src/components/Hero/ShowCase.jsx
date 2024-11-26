import Image from "next/image";
import React from "react";

function ShowCase() {
  return (
    <div className="bg-[#F6FBFA] w-full sm:flex block sidePadding md:py-10 py-3 md:gap-[80px] gap-[20px] items-center">
      <div className="flex-1">
        <div className="relative w-full h-[500px]">
          <div className="relative md:w-[70%] w-[100%] h-full bg-[#a3c1bb] rounded-[40px]">
            <Image
              src="/images/edited.png"
              fill={true}
              className="object-contain"
              alt="student Image"
              // objectFit="contain"
            />
          </div>
          <div className="absolute bg-white w-[220px] h-[90px] rounded-[7px] flex flex-col items-center justify-center bottom-[67px] right-[40px] m-auto ">
            <h3 className="font-bold text-[20px]">John Emmanuel</h3>
            <small>CS/HND/F22/3241</small>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h1 className=" md:text-[58px] text-[30px]">
          “A student of computer science, A Forex Trader and Software Developer”
        </h1>
      </div>
    </div>
  );
}

export default ShowCase;
