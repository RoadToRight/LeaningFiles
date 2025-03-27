import React from "react";
import { Line as ChartLine } from "react-chartjs-2"; // Renamed import to avoid conflict
import {
  Chart as ChartJS,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { toast } from "react-toastify";

// Ensure the data object is defined correctly
export const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "2023 Sales", // Label for the first dataset
      data: [65, 59, 80, 81, 56, 55],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4,
    },
    {
      label: "2022 Sales", // Label for the second dataset
      data: [40, 48, 60, 70, 45, 40],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      tension: 0.4,
    },
  ],
};

// Registering Chart.js components
ChartJS.register(
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

// Renamed the component to avoid conflict
const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
       
      },
      title: {
        display: true,
        text: "Sales Data",
      },
    },
  };
  toast("hello",{
    style:{
        backgroundColor:"black",
        color:"white",
    }
  })
  return (

    <div></div>
    //   <ChartLine options={options} data={data} />
   
  );
};

export default LineChart; // Ensure to export the renamed component
