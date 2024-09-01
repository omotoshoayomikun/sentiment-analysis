import React from "react";

function ListSentiment(props) {
  return (
    <>
      <h1 className="text-[30px] font-bold leading-[3.5rem] mb-3">
        List Sentiment for {props.title}
      </h1>
      <div className="flex gap-9">
        <div className="flex-[2]">
          <div className="flex justify-around px-7 py-4 bg-[--soft-blue]">
            <div className="">REVIEWS</div>
            <div className="">SENTIMENT</div>
            <div className="">EMOTAG</div>
          </div>
          <div className="h-[400px] w-full overflow-y-scroll overflow-hidden">
            <div className="flex justify-around items-center gap-3 px-7 py-4 border-b-[1px] border-b-gray-500">
              <div className="flex-1">
                <div className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, unde ex ipsum obcaecati hic saepe aperiam ullam
                  adipisci
                </div>
              </div>
              <div className="flex-1">
                <div className="text-center">Positive</div>
              </div>
              <div className="flex-1">
                <div className="text-center text-6xl">😍</div>
              </div>
            </div>
            <div className="flex justify-around items-center gap-3 px-7 py-4 border-b-[1px] border-b-gray-500">
              <div className="flex-1">
                <div className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, unde ex ipsum obcaecati hic saepe aperiam ullam
                  adipisci
                </div>
              </div>
              <div className="flex-1">
                <div className="text-center">Positive</div>
              </div>
              <div className="flex-1">
                <div className="text-center text-6xl">😍</div>
              </div>
            </div>
            <div className="flex justify-around items-center gap-3 px-7 py-4 border-b-[1px] border-b-gray-500">
              <div className="flex-1">
                <div className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, unde ex ipsum obcaecati hic saepe aperiam ullam
                  adipisci
                </div>
              </div>
              <div className="flex-1">
                <div className="text-center">Positive</div>
              </div>
              <div className="flex-1">
                <div className="text-center text-6xl">😍</div>
              </div>
            </div>
            <div className="flex justify-around items-center gap-3 px-7 py-4 border-b-[1px] border-b-gray-500">
              <div className="flex-1">
                <div className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, unde ex ipsum obcaecati hic saepe aperiam ullam
                  adipisci
                </div>
              </div>
              <div className="flex-1">
                <div className="text-center">Positive</div>
              </div>
              <div className="flex-1">
                <div className="text-center text-6xl">😍</div>
              </div>
            </div>
            <div className="flex justify-around items-center gap-3 px-7 py-4 border-b-[1px] border-b-gray-500">
              <div className="flex-1">
                <div className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, unde ex ipsum obcaecati hic saepe aperiam ullam
                  adipisci
                </div>
              </div>
              <div className="flex-1">
                <div className="text-center">Positive</div>
              </div>
              <div className="flex-1">
                <div className="text-center text-6xl">😍</div>
              </div>
            </div>
            <div className="flex justify-around items-center gap-3 px-7 py-4 border-b-[1px] border-b-gray-500">
              <div className="flex-1">
                <div className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, unde ex ipsum obcaecati hic saepe aperiam ullam
                  adipisci
                </div>
              </div>
              <div className="flex-1">
                <div className="text-center">Positive</div>
              </div>
              <div className="flex-1">
                <div className="text-center text-6xl">😍</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1.2]">Side 2</div>
      </div>
    </>
  );
}

export default ListSentiment;
