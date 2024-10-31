"use client";
import NavLink from "@/components/Nav/NavLink";
// import ProfileTab from "@/components/Profile/ProfileTab";
import React, { useEffect, useState } from "react";
import { GetApi, GetCookie } from "../../../lib/Actions";
import { useRouter } from "next/navigation";
import { ToastOption } from "@/Data/ToastOption";
import dynamic from 'next/dynamic';
import { toast } from "react-toastify";

function Page() {

  const ProfileTab = dynamic(() => import('@/components/Profile/ProfileTab'), {
    ssr: false,  // Set to true if server-side rendering is needed
  });

  const router = useRouter();
  const [loading, setLoading] = useState({ login: false });
  const [userId, setUserId] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    const GetData = async () => {
      const cookie = await GetCookie();
      if (cookie) {
        try {
          setLoading({ ...loading, login: true });
          const response = await GetApi(
            `${process.env.NEXT_PUBLIC_BASEURL}/api/user/profile/${cookie.user_id}`
          );
          if (!response.success) {
            setLoading({ ...loading, login: false });
            toast.error(response.message, ToastOption);
          } else {
            setData(response.data);
            // toast.success(response.message, ToastOption);
          }
        } catch (error) {
          setLoading({ ...loading, login: false });
          toast.error(error.message, ToastOption);
        } finally {
          setLoading({ ...loading, login: false });
        }
      } else {
        router.back();
      }
    };

    GetData();
  }, []);

  if(loading.login) {
    return <>Loading...</>
  }

  return (
    <>
      <NavLink />
      <div className="sidePadding w-full h-auto pb-14  mt-8">
        <div className="flex gap-5">
          <div className="flex-1">
            <div className="w-full bg-white rounded-lg p-5 shadow-md">
              <div className="relative rounded-full flex justify-center items-center bg-[--anchor-text-color] w-[160px] h-[160px] mx-auto">
                <h1 className="text-white text-[100px]">{data.firstname && data.lastname && `${firstname.slice(0, 1)} ${lastname.slice(0, 1)}`}</h1>
              </div>
              <div className="text-center mb-4">
                <h1 className="font-bold text-xl">{data.firstname && data.lastname && `${firstname} ${lastname}`}</h1>
                {/* <p className="text-sm">Lorem ipsum dolor sit amet</p> */}
              </div>
              <div className="border-t-2 border-dashed border-[#ecf0f4] py-3">
                <h2 className="mb-3 text-[18px] text-[#1B00FF] font-bold">
                  Contact Information
                </h2>
              </div>
              <ul className="">
                <li className="text-sm mb-3">
                  <span className="text-[#1B00FF] font-medium block pb-1">
                    Full Name:
                  </span>
                  {data.firstname && data.lastname && `${firstname} ${lastname}`}
                </li>
                <li className="text-sm mb-3">
                  <span className="text-[#1B00FF] font-medium block pb-1">
                    Email Address:
                  </span>
                  {data.email}
                </li>
                <li className="text-sm mb-3">
                  <span className="text-[#1B00FF] font-medium block pb-1">
                    Phone Number:
                  </span>
                  {data.phone && data.phone}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-[2]">
            <div className="w-full bg-white rounded-lg p-5 shadow-md">
              <ProfileTab userId={data._id} userData={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
