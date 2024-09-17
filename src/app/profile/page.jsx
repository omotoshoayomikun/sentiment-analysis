import NavLink from "@/components/Nav/NavLink";
import ProfileTab from "@/components/Profile/ProfileTab";
import React from "react";

function page() {
  return (
    <>
      <NavLink />
      <div className="sidePadding w-full h-auto pb-14  mt-8">
        <div className="flex gap-5">
          <div className="flex-1">
            <div className="w-full bg-white rounded-lg p-5 shadow-md">
              <div className="relative rounded-full flex justify-center items-center bg-[--anchor-text-color] w-[160px] h-[160px] mx-auto">
               <h1 className="text-white text-[100px]">EE</h1>
              </div>
              <div className="text-center mb-4">
                <h1 className="font-bold text-xl">Emmanuel Emmanuel</h1>
                <p className="text-sm">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="border-t-2 border-dashed border-[#ecf0f4] py-3">
                <h2 className="mb-3 text-[18px] text-[#1B00FF] font-bold">Contact Information</h2>
              </div>
              <ul className="">
                <li className="text-sm mb-3">
                  <span className="text-[#1B00FF] font-medium block pb-1">Full Name:</span>
                  Emmanuel Peace
                </li>
                <li className="text-sm mb-3">
                  <span className="text-[#1B00FF] font-medium block pb-1">Email Address:</span>
                  Enumanuel@gmail.com
                </li>
                <li className="text-sm mb-3">
                  <span className="text-[#1B00FF] font-medium block pb-1">Phone Number:</span>
                  09054544641
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-[2]">
            <div className="w-full bg-white rounded-lg p-5 shadow-md">
              <ProfileTab />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
