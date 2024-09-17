"use client"
import { Btn } from "@/components/Form/Btn";
import { Input } from "@/components/Form/Input";
import NavLink from "@/components/Nav/NavLink";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function page() {

  const router = useRouter();
    const handlLogin = () => {
      router.push("/profile")
    }

  return (
    <div className="w-full h-[100vh]">
        <NavLink />
      <div className="w-full h-full flex justify-center items-center">
        <div className={`login_card mt-[-140px]`}>
          <h3 className="mb-5 text-[22px] font-bold text-center">LOGIN</h3>
        <div>
          <div className="mb-5">
            <Input label="Email" placeholder="Enter your email" />
          </div>
          <div className="mb-5">
            <Input label="Password" placeholder="Enter your Password" />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <small className="font-bold text-[12px]">Remember Me</small>
            </div>
            <div className="">
              <Link
                href=""
                className="text-[15px] text-[--anchor-text-color] cursor-pointer"
              >
                Forget Password
              </Link>
            </div>
          </div>
          <div className="">
            <Btn title="Login" handleClick={handlLogin} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default page;
