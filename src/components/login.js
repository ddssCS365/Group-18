// src/components/login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/Kfupm.png";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.toLowerCase().includes("admin")) {
      navigate("/admin");
    } else if (username.toLowerCase().includes("therapist")) {
      navigate("/therapist");
    } else {
      navigate("/patient");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-10 flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-5xl">
        {/* Image section */}
        <img
          src={loginImage}
          alt="Medical Center"
          className="w-80 h-80 object-contain rounded"
        />

        {/* Login form section */}
        <div className="flex-1 w-full">
          <h2 className="text-xl font-semibold mb-1">
            Welcome Medical Center User,
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            log in or register to continue
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">User Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded text-sm"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded text-sm"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 text-sm"
          >
            log in
          </button>

          <p className="mt-3 text-sm text-right text-blue-600 cursor-pointer hover:underline">
            register
          </p>
        </div>
      </div>
    </div>
  );
}
