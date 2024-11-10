import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// import { ChartAnalysis } from "@/Data/ChartData";

function PieChart({ChartAnalysis}) {

      
  const chart = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Analysis",
        data: ChartAnalysis.map((data) => data),
        backgroundColor: ["green", "yellow", "red"],
        borderColor: "grey",
        borderWidth: 1,
      },
    ],
  }

  return (
    // <div style={{height: "100px"}}>
      <Pie data={chart} style={{height: "80px"}} />
    // </div>
  );
}

export default PieChart;
