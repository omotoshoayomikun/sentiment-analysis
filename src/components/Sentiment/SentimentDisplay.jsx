import React, { useState, useEffect } from "react";
import ListSentiment from "@/components/Sentiment/ListSentiment";
import PieChart from "@/components/Charts/PieChart";
import { GetApi } from "../../../lib/Actions";
import { ToastOption } from "@/Data/ToastOption";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

function SentimentDisplay({ social }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartDate, setChartDate] = useState([0, 0, 0]);

  const fetchReviews = async () => {
    try {
      const response = await GetApi(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/sentiment/review/${social}`
      );
      if (!response.success) {
        toast.error(data.message || "Error fetching data", ToastOption);
      } else {
        setReviews(response.data);
      }
    } catch (err) {
      // toast.error(err.message, ToastOption);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();

    const interval = setInterval(fetchReviews, 5000); // Poll every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [social]);

  useEffect(() => {
    const calculateChartData = () => {
      const sentimentCounts = [0, 0, 0]; // [positive, neutral, negative]

      reviews.forEach((data) => {
        if (data.sentiment === "positive") sentimentCounts[0] += 1;
        else if (data.sentiment === "neutral") sentimentCounts[1] += 1;
        else if (data.sentiment === "negative") sentimentCounts[2] += 1;
      });

      setChartDate(sentimentCounts);
    };

    calculateChartData();
  }, [reviews]);
  console.log(chartDate);

  if (loading) {
    return (
      <div className="w-full h-[500px]">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <h1 className="text-[30px] font-bold leading-[3.5rem] mb-3">
        List Sentiment for {social}
      </h1>
      <div className="flex md:flex-col flex-col gap-9 justify-between">
        <div className="flex-[1.2]">
          <ListSentiment reviews={reviews} />
        </div>
        <div className="flex-[1] flex items-center ">
          <PieChart ChartAnalysis={chartDate} />
        </div>
      </div>
    </>
  );
}

export default SentimentDisplay;
