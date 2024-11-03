import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastOption } from "@/Data/ToastOption";
import { GetApi } from "../../../lib/Actions";
import Loading from "../Loading/Loading";

function Reviews({ userId }) {
  const [loading, setLoading] = useState({ login: false });
  const [data, setData] = useState([]);
  const [len, setLen] = useState({ start: 0, end: 3 });

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

  if (loading.login) {
    return (
      <>
      <div className="w-full h-[350px] relative">
        <Loading />
    </div>
      </>
    );
  }

  return (
    <>
      <div className="h-[387px] overflow-hidden overflow-y-auto">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex gap-5 mb-4 pb-4 border-b-2 border-dashed border-[#ecf0f4]"
          >
            <div className="flex-1">
              <h1 className="text-xl">{value.message}</h1>
              <div className="flex text-[#90a4ae] text-[16px] gap-5">
                <p>
                  <span>{value.social}</span>
                </p>
                <p>
                  <span> - {value.createdAt}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col w-[110px] border-l-2 border-[#dee2e6]">
              <div className="text-center text-4xl mb-2">
                {value.sentiment == "positive" && "😍"}
                {value.sentiment == "neutral" && "🙂"}
                {value.sentiment == "negative" && "🙁"}
              </div>
              <p>{value.sentiment}</p>
            </div>
          </div>
        ))}
        {/* VIEW MORE BUTTON */}
      </div>
      {/* <div className="float-right mr-4 text-[--anchor-text-color] text-xl">
        View More
      </div> */}
    </>
  );
}

export default Reviews;
