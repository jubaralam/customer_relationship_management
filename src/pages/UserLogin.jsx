/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserAuthDetailsContext } from "../contexts//UserAuthDetails";
import { administrationRoles } from "../data";
const UserLogin = () => {
  const { login, isLoggedIn } = useContext(UserAuthDetailsContext);

  console.log(isLoggedIn);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [redirectToAdmin, setRedirectToAdmin] = useState(false);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const loginUser = async (data) => {
    try {
      const res = await axios.post(
        "https://wisdomcrm.onrender.com/api/user/login",
        data
      );

      const { user, token } = res.data;
      login(user, token);
      console.log("user", user);
      console.log("token", token);
      setLoading(false);
      if (administrationRoles.includes(user.role)) {
        setRedirectToAdmin(true);
      } else {
        setRedirectToDashboard(true);
      }
    } catch (error) {
      setLoading(false);

      if (error.response) {
        // The server responded with a status other than 2xx
        setError(
          error.response.data.message || "Login failed. Please try again."
        );
      } else if (error.request) {
        // The request was made, but no response was received
        setError("Network error. Please try again.");
      } else {
        // Something happened in setting up the request
        setError("An unexpected error occurred.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setLoading(true);
    setError("");
    loginUser({ email, password });
  };

  if (redirectToAdmin) {
    console.log("redirect if", redirectToAdmin);
    return <Navigate to="/administration" />;
  }
  if (redirectToDashboard) {
    console.log("redirect if", redirectToAdmin);
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f5f7]">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-[#0052cc] text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#2684ff] mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2684ff] focus:border-transparent"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#2684ff] mb-1"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2684ff] focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute  bottom-0 right-3 transform -translate-y-1/2 text-[#2684ff] text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 text-white font-semibold bg-[#0052cc] rounded-md hover:bg-[#003c99] transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mx-auto" />
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center text-sm">
          <a href="#" className="text-[#2684ff] hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
