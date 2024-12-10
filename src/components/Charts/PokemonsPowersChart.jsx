import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PokemonsPowersChart = ({ stats }) => {
  console.log(stats);

  // Chart data
  const data = {
    labels: ["HP", "Attack", "Defense", "Power"],
    datasets: [
      {
        label: "Stats",
        data: stats, // Example data (scale: 0 to 100)
        backgroundColor: [
          "rgba(15, 255, 92, 1)",
          "rgba(255, 12, 5, 1)",
          "rgba(255, 186, 86, 1)",
          "rgba(255, 99, 252, 0.6)",
        ],
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures responsiveness
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0, // Adds extra space for labels
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 0, // Ensures labels are not rotated
          minRotation: 0, // Ensures labels are straight
          color: "white", // Optional: Makes label text white for dark backgrounds
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: true,
        },
        ticks: {
          color: "white", // Optional: Makes Y-axis labels white for dark backgrounds
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PokemonsPowersChart;
