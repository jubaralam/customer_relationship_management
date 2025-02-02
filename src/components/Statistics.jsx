import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import LoadingPage from "./LoadingPage";

const Statistics = () => {
  const token = localStorage.getItem("token");
  const [statistics, setStatistics] = useState(null); // Initialize as null for better conditional rendering
  const [error, setError] = useState("");

  const getStatistics = async () => {
    try {
      const res = await axios.get(
        `https://wisdomcrm.onrender.com/api/statistics/customers`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStatistics(res.data.data); // Assuming the response has a `data` field with the required statistics
      console.log("Statistics:", res.data.data);
    } catch (err) {
      setError("Failed to fetch statistics");
      console.error("Error fetching statistics:", err);
    }
  };

  useEffect(() => {
    getStatistics();
  }, []);

  return (
    <div className="px-5 py-5 bg-[#ffffffbe] w-full rounded-2xl my-5">
      <h2 className="text-2xl font-bold mb-4">Customer Statistics</h2>

      {error && <div className="text-red-500 mb-3">{error}</div>}

      {!statistics ? (
        <LoadingPage />
      ) : (
        <div className="flex flex-wrap ">
          <Card
            title="Total Customers"
            value={statistics.totalCustomers}
            icon="user"
          />
          <Card
            title="Active Customers"
            value={statistics.activeCustomers}
            icon="users"
          />
          <Card
            title="New Customers"
            value={statistics.newCustomers}
            icon="user-plus"
          />
        </div>
      )}
    </div>
  );
};

export default Statistics;
