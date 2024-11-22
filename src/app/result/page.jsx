"use client";
import React from "react";
import Comment from "@/components/SentimentSource/Comment";
import SentimentCard from "@/components/SentimentSource/SentimentCard";
import SentimentSelect from "@/components/SentimentSource/SentimentSelect";
import SourceSentiment from "@/components/SentimentSource/SourceSentiment";
import SocialOptions from "@/components/Hero/SocialOptions";
import SocialQuote from "@/components/Hero/SocialQuote";
import { RoundBtn } from "@/components/Form/Btn";
import { SearchInput } from "@/components/Form/Input";
import { ToastOption } from "@/Data/ToastOption";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { GetApi } from "../../../lib/Actions";
import NavLink from "@/components/Nav/NavLink";
// import SentimentOverview from "@/components/SentimentSource/SentimentOverview";
import Search from "@/components/SentimentSource/Search";

const chartData = [
  {
    name: "Jan",
    postive: 4000,
    negative: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    postive: 3000,
    negative: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    postive: 3000,
    negative: 1398,
    amt: 2210,
  },
  {
    name: "Apr",
    postive: 2000,
    negative: 9800,
    amt: 2290,
  },
  {
    name: "May",
    postive: 2780,
    negative: 3908,
    amt: 2000,
  },
  {
    name: "Jun",
    postive: 1890,
    negative: 4800,
    amt: 2181,
  },
  {
    name: "Jul",
    postive: 2390,
    negative: 3800,
    amt: 2500,
  },
  {
    name: "Aug",
    postive: 3490,
    negative: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    postive: 3490,
    negative: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    postive: 1890,
    negative: 4800,
    amt: 2181,
  },
  {
    name: "Nov",
    postive: 2390,
    negative: 3800,
    amt: 2500,
  },
  {
    name: "Dec",
    postive: 3490,
    negative: 4300,
    amt: 2100,
  },
];

const dummyData = [
  {
    social: "reddit",
    score: 5,
    analyzed: "positive",
    id: 12345,
    user: "Unknown",
    username: "Unknown",
    text: "Forex is an easy way to make money",
    created_at: "2024",
    subreddit: "Unknown",
    upvotes: 200,
  },
  {
    social: "reddit",
    score: -3,
    analyzed: "negative",
    id: 5689,
    user: "Unknown",
    username: "Unknown",
    text: "Forex is an easy way to make money",
    created_at: "2024",
    subreddit: "Unknown",
    upvotes: 200,
  },
  {
    social: "reddit",
    score: 0,
    analyzed: "neutral",
    id: 1976,
    user: "Unknown",
    username: "Unknown",
    text: "Forex is an easy way to make money",
    created_at: "2024",
    subreddit: "Unknown",
    upvotes: 200,
  },
];

function Page() {
  const SentimentOverview = dynamic(
    () => import("@/components/SentimentSource/SentimentOverview"),
    { ssr: false }
  );

  // Memoize data so that the chart only updates when the actual data changes
  // const memoizedData = useMemo(() => chartData, [chartData]);

  const [loading, setLoading] = useState({ login: false });
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [value, setValue] = useState("");
  const [data, setData] = useState();
  const [keepData, setKeepData] = useState();
  const [checked, setChecked] = useState({
    positive: true,
    negative: true,
    neutral: true,
  });

  // const handleOnchange = (e) => {
  //   const value = e.target.value;
  //   setValue(value);
  // };

  const handleSearch = async (e) => {
    setValue(e);
    // console.log(value)
    // if (value == "") toast.error("Please input your search !!!", ToastOption);
    if (e == "") toast.error("Please input your search !!!", ToastOption);

    try {
      setLoading({ ...loading, login: true });
      const response = await GetApi(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/sentiment/social/reddit?query=${e}`
      );
      if (!response.success) {
        toast.error(response.message, ToastOption);
      } else {
        setData(response.data);
        setKeepData(response.data);
        // toast.success(response.message, ToastOption);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading({ ...loading, login: false });
    }
  };

  const handleTwitter = async () => {
    try {
      const response = await GetApi(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/sentiment/social/twitter?query=${value}`
      );
      if (!response.success) {
        toast.error(response.message, ToastOption);
      } else {
        console.log(response.data);
        // setValue(response.data);
        // toast.success(response.message, ToastOption);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // const handleCheckbox = (e, name) => {
  //   setChecked({...checked, [name]: !checked[name]});

  //   if(!e.target.checked) {
  //     const filterData = data.filter((content) => (content.analyzed  !== name))
  //     setData(filterData)
  //   } else {
  //     const filterData = keepData.filter((content) => (content.analyzed  == name))

  //     setData([...data, ...filterData])
  //   }

  // };

  return (
    <>
      <NavLink />
      <div className="flex sidePadding gap-7 my-12 text-[#636363]">
        <div className="flex-[2]">
          <div className="card h-[401px]">
            <Search
              handleSearch={handleSearch}
              setValue={setValue}
              loading={loading}
            />
            <hr />
            {/* <SentimentLineChart data={memoizedData} /> */}
            <SentimentOverview data={data} />
          </div>
          <div
            className="card mt-5"
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
           <select name="" id="" className="border-2 p-2 py-1 rounded-3">
            <option value="">Recent first</option>
           </select>
          </div>
          {data.length > 0 &&
            data.map((item, index) => (
              <div key={index} className="mt-5">
                <SentimentCard data={item} />
              </div>
            ))}
        </div>
        <div className="flex-1">
          <div className="card">
            <SourceSentiment />
            <SentimentSelect
              data={data}
              setData={setData}
              keepData={keepData}
              setChecked={setChecked}
              checked={checked}
            />
          </div>
          <div className="card mt-4">
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
