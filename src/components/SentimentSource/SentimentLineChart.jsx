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
    <div style={{ margin: "20px" }}>
      {/* <h3>Sentiment Breakdown Over Time</h3> */}
      <LineChart
        width={700}
        height={250}
        data={props.data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="postive" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="negative" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default SentimentLineChart;
