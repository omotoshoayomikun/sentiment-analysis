"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function SentimentLineChart(props) {


  return (
    <div className="overflow-x-scroll">
      {/* <h3>Sentiment Breakdown Over Time</h3> */}
      <LineChart
        width={820}
        height={250}
        data={props.data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          className="w-[800px] h-[250px]"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="positive" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="negative" stroke="#82ca9d" />
        <Line type="monotone" dataKey="neutral" stroke="#ffc658" />
      </LineChart>
    </div>
  );
}

export default SentimentLineChart;
