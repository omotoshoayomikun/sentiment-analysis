import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({chartData}) {
  return (
    // <div style={{height: "100px"}}>
      <Pie data={chartData} style={{height: "100px"}} />
    // </div>
  );
}

export default PieChart;
