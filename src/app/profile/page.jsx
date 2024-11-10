"use client";
import NavLink from "@/components/Nav/NavLink";
// import ProfileTab from "@/components/Profile/ProfileTab";
import React, { useEffect, useState } from "react";
import { GetApi, GetCookie } from "../../../lib/Actions";
import { useRouter } from "next/navigation";
import { ToastOption } from "@/Data/ToastOption";
import dynamic from 'next/dynamic';
import { toast } from "react-toastify";
import Loading from "@/components/Loading/Loading";

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
            setLoading({ ...loading, login: false });
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
        router.push("/");
      }
    };

    GetData();
  }, []);

  if(loading.login) {
    return(
      <>
      <NavLink />
      <div className="w-full h-[calc(100vh-84px)] top-[84px] fixed">
        <Loading />
    </div>
      </>
    )
  }

  return (
    <>
      <NavLink />
      <div className="sidePadding w-full h-auto pb-14  mt-8">
        <div className="flex md:flex-row flex-col gap-5">
          <div className="flex-1">
            <div className="w-full md:block flex gap-4 items-center bg-white rounded-lg p-5 shadow-md">
              <div className="relative rounded-full flex justify-center items-center bg-[--anchor-text-color] md:w-[160px] w-[100px] md:h-[160px] h-[100px] mx-auto">
                <h1 className="text-white md:text-[80px] text-[40px]">{data.firstname && data.lastname && `${data.firstname.slice(0, 1)}${data.lastname.slice(0, 1)}`}</h1>
              </div>
              <div className="text-center mb-4">
                {/* <h1 className="font-bold text-xl">{data.firstname && data.lastname && `${firstname} ${lastname}`}</h1> */}
                {/* <p className="text-sm">Lorem ipsum dolor sit amet</p> */}
              </div>
              <div className="md:border-t-2 md:border-dashed md:border-[#ecf0f4] py-3 md:block hidden">
                <h2 className="mb-3 text-[18px] text-[#1B00FF] font-bold">
                  Contact Information
                </h2>
              </div>
              <ul className="">
                <li className="text-sm h-[43px] mb-3">
                  <span className="text-[#1B00FF] font-medium block pb-1">
                    Full Name:
                  </span>
                  {data.firstname && data.lastname && `${data.firstname} ${data.lastname}`}
                </li>
                <li className="text-sm h-[43px] mb-3">
                  <span className="text-[#1B00FF] font-medium block pb-1">
                    Email Address:
                  </span>
                  {data.email}
                </li>
                <li className="text-sm h-[43px] mb-3">
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
