import React from "react";

function ListSentiment({reviews}) {
  return (
    <> 
      <div className="flex justify-around px-7 py-4 bg-[--soft-blue]">
        <div className="">REVIEWS</div>
        <div className="">SENTIMENT</div>
        <div className="">EMOTAG</div>
      </div>
      <div className={`${reviews.length === 0 ? "h-[100px]" : "h-[400px]"}  w-full overflow-y-scroll overflow-hidden`}>
        {
          reviews.length === 0 ? <div className="text-center mt-[45px]">No reviews found.</div> : (
            reviews.map((review, index) => (
              <div key={index} className="flex justify-around items-center gap-3 px-7 py-4 border-b-[1px] border-b-gray-500">
                <div className="flex-1">
                  <div className="text-center">
                   {review.message}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-center">{review.sentiment}</div>
                </div>
                <div className="flex-1">
                  <div className="text-center text-6xl">
                    {review.sentiment == "positive" && "😍"}
                    {review.sentiment == "neutral" && "🙂"}
                    {review.sentiment == "negative" && "🙁"}
                  </div>
                </div>
              </div>
            ))
          )
        }
      </div>
    </>
  );
}

export default ListSentiment;
