"use client";
import NavLink from "@/components/Nav/NavLink";
// import ProfileTab from "@/components/Profile/ProfileTab";
import React, { useEffect, useState } from "react";
import { GetApi, GetCookie, PutApi } from "../../../lib/Actions";
import { useRouter } from "next/navigation";
import { ToastOption } from "@/Data/ToastOption";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import Loading from "@/components/Loading/Loading";
import Reviews from "@/components/Profile/Reviews";
import Settings from "@/components/Profile/Settings";

function Page() {
  const ProfileTab = dynamic(() => import("@/components/Profile/ProfileTab"), {
    ssr: false, // Set to true if server-side rendering is needed
  });

  const router = useRouter();
  const [loading, setLoading] = useState({ login: false, reviews: false, settings: false });
  const [userId, setUserId] = useState("");
  const [reviews, setReviews] = useState([]);
  const [tab, setTab] = useState("reviews");
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(false)

  
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    id: data._id
  });


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
            setValue(response.data);     
            // toast.success(response.message, ToastOption);
          }
        } catch (error) {
          setLoading({ ...loading, login: false });
          toast.error(error.message, ToastOption);
        } finally {
          setLoading({ ...loading, login: false });
        }




      
        try {
          setLoading({ ...loading, reviews: true });
          const response = await GetApi(
            `${process.env.NEXT_PUBLIC_BASEURL}/api/user/profile/review/${cookie.user_id}`
          );
          if (!response.success) {
            toast.error(response.message, ToastOption);
          } else {
            setReviews(response.data);
          }
        } catch (error) {
          toast.error(error.message, ToastOption);
        } finally {
          setLoading({ ...loading, reviews: false });
        }

      } else {
        router.push("/");
      }
    };

    GetData();
    // getReviews();
  }, [refresh]);


  
  useEffect(() => {
    const GetData = async () => {
      try {
        setLoading({ ...loading, login: true });
        const response = await GetApi(
          `${process.env.NEXT_PUBLIC_BASEURL}/api/user/profile/review/${userId}`
        );
        if (!response.success) {
          toast.error(response.message, ToastOption);
        } else {
          setData(response.data);
        }
      } catch (error) {
        toast.error(error.message, ToastOption);
      } finally {
        setLoading({ ...loading, login: false });
      }
    };
    GetData();
  }, [userId]);

  const handleOnchange = (e, name) => {
    setValue({...value, [name]: e.target.value});
  }

  console.log(value)
  
  const handleSubmit = async () => {
    try {
      setLoading({ ...loading, settings: true });
      const response = await PutApi(`${process.env.NEXT_PUBLIC_BASEURL}/api/user/profile/${value.id}`, JSON.stringify(value) );
      if (!response.success) {
        toast.error(response.message, ToastOption);
      } else {
        toast.success(response.message, ToastOption);
        setValue(response.data);
        setRefresh(!refresh)
      }
    } catch (error) {
      setLoading({ ...loading, settings: false });
      toast.error(error.message, ToastOption);
    } finally {
      setLoading({ ...loading, settings: false });
    }
  }



  if (loading.login) {
    return (
      <>
        <NavLink />
        <div className="w-full h-[calc(100vh-84px)] top-[84px] fixed">
          <Loading />
        </div>
      </>
    );
  }

  return (
    <>
      <NavLink />
      <div className="sidePadding w-full h-auto pb-14  mt-8">
        <div className="flex md:flex-row flex-col gap-5">
          <div className="flex-1">
            <div className="w-full md:block flex gap-4 items-center bg-white rounded-lg p-5 shadow-md">
              <div className="relative rounded-full flex justify-center items-center bg-[--anchor-text-color] md:w-[160px] w-[100px] md:h-[160px] h-[100px] mx-auto">
                <h1 className="text-white md:text-[80px] text-[40px]">
                  {data.firstname &&
                    data.lastname &&
                    `${data.lastname.slice(0, 1)}${data.firstname.slice(0, 1)}`}
                </h1>
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
                  {data.firstname &&
                    data.lastname &&
                    `${data.lastname} ${data.firstname}`}
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
              <div className="border-b border-[#dee2e6] border-solid mb-5">
                <ul className="flex">
                  <li
                    onClick={() => setTab("reviews")}
                    className={`pb-[15px] pt-2 px-[20px] hover:border-b-2 hover:border-[--anchor-text-color] border-b-2 ${
                      tab === "reviews"
                        ? "border-[--anchor-text-color]"
                        : "border-b-transparent"
                    } cursor-pointer`}
                  >
                    Your Reviews
                  </li>
                  <li
                    onClick={() => setTab("settings")}
                    className={`pb-[15px] pt-2 px-[20px] hover:border-b-2 hover:border-[--anchor-text-color] border-b-2 ${
                      tab === "settings"
                        ? "border-[--anchor-text-color]"
                        : "border-b-transparent"
                    } cursor-pointer`}
                  >
                    Settings
                  </li>
                </ul>
              </div>
              {tab === "reviews" ? (
                <Reviews data={reviews} loading={loading.reviews} />
              ) : (
                <Settings data={data} handleSubmit={handleSubmit} handleOnchange={handleOnchange} value={value} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
