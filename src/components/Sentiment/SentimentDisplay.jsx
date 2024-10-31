import React, { useState, useEffect } from "react";
import ListSentiment from "@/components/Sentiment/ListSentiment";
import PieChart from "@/components/Charts/PieChart";
import { GetApi } from "../../../lib/Actions";
import { ToastOption } from "@/Data/ToastOption";
import { toast } from "react-toastify";

function SentimentDisplay({ social }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await GetApi(`${process.env.NEXT_PUBLIC_BASEURL}/api/sentiment/review/${social}`);
        if (!response.success) {
          toast.error(data.message || "Error fetching data", ToastOption);
        } else {
          setReviews(response.data);
        }
      } catch (err) {
        toast.error(err.message, ToastOption);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [social]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-[30px] font-bold leading-[3.5rem] mb-3">
        List Sentiment for {social}
      </h1>
      <div className="flex gap-9">
        <div className="flex-[2]">
          <ListSentiment reviews={reviews} />
        </div>
        <div className="flex-[1.2] flex items-center ">
          <PieChart />
        </div>
      </div>
    </>
  );
}

export default SentimentDisplay;
