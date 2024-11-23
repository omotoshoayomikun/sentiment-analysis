"use client";

import { RoundBtn } from "@/components/Form/Btn";
import { SearchInput } from "@/components/Form/Input";
import Hero from "@/components/Hero/Hero";
import SocialOptions from "@/components/Hero/SocialOptions";
import SocialQuote from "@/components/Hero/SocialQuote";
import NavLink from "@/components/Nav/NavLink";
import Comment from "@/components/SentimentSource/Comment";
import SentimentCard from "@/components/SentimentSource/SentimentCard";
import SentimentSelect from "@/components/SentimentSource/SentimentSelect";
import SourceSentiment from "@/components/SentimentSource/SourceSentiment";
import { ToastOption } from "@/Data/ToastOption";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { GetApi } from "../../lib/Actions";
import ShowCase from "@/components/Hero/ShowCase";
import Footer from "@/components/Footer/Footer";
// import SentimentLineChart from "@/components/SentimentSource/SentimentLineChart";


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


export default function Home() {


  const SentimentLineChart = dynamic(
    () => import("@/components/SentimentSource/SentimentLineChart"),
    { ssr: false }
  );

  // Memoize data so that the chart only updates when the actual data changes
const memoizedData = useMemo(() => chartData, [chartData]);

const [loading, setLoading] = useState({ login: false });
const [error, setError] = useState(false);
const [errMsg, setErrMsg] = useState("");
  const [ value, setValue ] = useState("")
  const [ data, setData ] = useState([])


  const handleOnchange = (e) => {
    const value = e.target.value;
    setValue(value)
  };

  const handleSearch = async() => {
    if (value === "") toast.error("Please input your search !!!", ToastOption);

    try {
      setLoading({...loading, login: true });
      const response = await GetApi(`${process.env.NEXT_PUBLIC_BASEURL}/api/sentiment/social/reddit?query=${value}`);
      if (!response.success) {
        toast.error(response.message, ToastOption);
      } else {
        setData(response.data)
        // toast.success(response.message, ToastOption);
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading({...loading, login: false });

    }
  };


  const handleTwitter = async() => {

    try {
      const response = await GetApi(`${process.env.NEXT_PUBLIC_BASEURL}/api/sentiment/social/twitter?query=${value}`);
      if (!response.success) {
        toast.error(response.message, ToastOption);
      } else {
        console.log(response.data)
        setValue(response.data)
        // toast.success(response.message, ToastOption);
      }
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <main>
      <NavLink />
      {/* <div className="flex sidePadding gap-7 my-12 text-[#636363]">
        <div className="flex-[2]">
          <div className="card">
            <div className="mb-[20px] flex gap-5">
              <div className="flex-1">
                <SearchInput
                  handleOnchange={handleOnchange}
                  placeholder="Search through mentions, autors & domain...."
                  // rel_styles={{ width: "70%" }}
                />
              </div>
              <RoundBtn
                handleClick={handleSearch}
                disabled={loading.login}
                title="Search"
                styles={{ width: "120px", backgroundColor: "#007bff", height: "40px"}}
              />
            </div>
            <hr />
            <SentimentLineChart data={memoizedData} />
          </div>
          <div className="card mt-5 font-bold text-[20px]" style={{paddingTop: "10px", paddingBottom: "10px"}}>Result Output</div>
          {
            data.length > 0 && (
              data.map((item, index) => (
                <div key={index} className="mt-5">
                <SentimentCard data={item} />
              </div>
              ))
            )
          }
        </div>
        <div className="flex-1">
          <div className="card">
            <SourceSentiment />
            <SentimentSelect />
          </div>
          <div className="card mt-4">
            <Comment />
          </div>
        </div>
      </div> */}
      <Hero />
      <SocialQuote />
      <ShowCase />
      <SocialOptions />
      {/* <div className="mt-10"> */}
      <Footer />

      {/* </div> */}
    </main>
  );
}
