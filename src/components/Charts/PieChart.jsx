import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ChartAnalysis } from "@/Data/ChartData";

function PieChart() {

      
  const [chart, setChart] = useState({
    labels: ChartAnalysis.map((data) => data.sentiment),
    datasets: [
      {
        label: "Analysis",
        data: ChartAnalysis.map((data) => data.value),
        backgroundColor: ["green", "yellow", "red"],
        borderColor: "grey",
        borderWidth: 1,
      },
    ],
  })

  return (
    // <div style={{height: "100px"}}>
      <Pie data={chart} style={{height: "100px"}} />
    // </div>
  );
}

export default PieChart;
