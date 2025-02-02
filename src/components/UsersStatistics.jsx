import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import { useNavigate } from "react-router-dom";

// import React from 'react'

const UsersStatistics = () => {
  const token = localStorage.getItem("token");
  const [usersState, setUsersState] = useState([]);
  const [flag, setFlag] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const getUsersState = async () => {
    try {
      const res = await axios.get(
        `https://wisdomcrm.onrender.com/api/statistics/users`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsersState(res.data.data);
      setFlag(false);
    } catch (error) {
      setFlag(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsersState();
  }, []);

  if (error) {
    return <div className="text-red-500 mb-3">{error}</div>;
  }
  return (
    <div className="px-5 py-5 bg-[#ffffffbe] w-full rounded-2xl my-5">
      <h2
        className="text-2xl font-bold mb-4 cursor-pointer"
        onClick={() => navigate("/dashboard/users")}
      >
        Users Statistics
      </h2>

      {/* {error && <div className="text-red-500 mb-3">{error}</div>} */}
      <div className="flex flex-wrap ">
        {flag ? (
          <LoadingPage />
        ) : (
          usersState?.map((state) => (
            <Card
              url={`/user/${state._id}`}
              key={state._id}
              value={state.role_count}
              title={state._id.split("_").join(" ")}
              icon="users"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UsersStatistics;
