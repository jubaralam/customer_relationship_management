// import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2"; // Import Bar chart component

const RevenueGenerated = () => {
  // Demo data for revenue for the year
  const revenueData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Months of the year
    datasets: [
      {
        label: "Revenue ($)",
        data: [
          12000, 15000, 18000, 2000, 25000, 27000, 30000, 35000, 38000, 42000,
          45000, 10000,
        ], // Demo revenue data
        backgroundColor: "rgba(75, 192, 192, 0.5)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 1,
      },
    ],
  };

  // Options for chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw.toLocaleString()}`; // Formatting tooltip value as currency
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value.toLocaleString()}`; // Formatting y-axis value as currency
          },
        },
      },
    },
  };

  return (
    <div className="w-full  p-5 shadow-md rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">Revenue for this Year</h2>
      <Bar data={revenueData} options={options} /> {/* Render Bar chart */}
    </div>
  );
};

export default RevenueGenerated;
