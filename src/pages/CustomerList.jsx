import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../components/Table";

const CustomerList = () => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);

  const increasePageNo = () => {
    setPage((prev) => prev + 1);
  };

  const decresePageNo = () => {
    // alert("working")
    if (page > 1) {
      setPage((prev) => prev - 1); // Decrease the page number only when it is greater than 1
    } else {
      console.warn("You are already on the first page.");
    }
  };

  const getCustomers = async () => {
    // Check for token before making the request
    if (!token) {
      setError("You are not authorized. Please log in first.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(
        `https://wisdomcrm.onrender.com/api/customer/?limit=${10}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      setCustomers(res.data.data);
    } catch (error) {
      if (error.response) {
        // The server responded with an error status
        setError(error.response.data.message || "Failed to fetch customers.");
      } else if (error.request) {
        // No response was received
        setError("Network error. Please check your internet connection.");
      } else {
        // Other errors
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCustomers();
  }, [page]);

  // if (loading) {
  //   return (
  //     <div className="w-10 h-10 border-t-3 border-black border-solid rounded-full animate-spin mx-auto" />
  //   );
  // }

  return (
    <>
      <div className="p-4 h-[85vh] overflow-hidden w-full bg-img">
        <Table data={customers} loading={loading} error={error} />
      </div>
      <div className="flex justify-center items-center py-3">
        <button
          onClick={decresePageNo}
          disabled={page == 1 || loading}
          className={`${
            page == 1 ? "hover:bg-gray-400" : ""
          } py-2 px-4 text-white font-semibold bg-[#0052cc] rounded-md hover:bg-[#003c99] transition duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mx-auto" />
          ) : (
            "- Prev "
          )}
        </button>
        <p className=" px-6 font-semibold text-[#0052cc]">{page}</p>
        <button
          onClick={increasePageNo}
          disabled={loading}
          className={` py-2 px-4 text-white font-semibold bg-[#0052cc] rounded-md hover:bg-[#003c99] transition duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mx-auto" />
          ) : (
            "Next +"
          )}
        </button>
      </div>
    </>
  );
};

export default CustomerList;
