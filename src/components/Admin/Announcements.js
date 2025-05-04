// src/components/Admin/Announcements.js

import React, { useState } from "react";

export default function Announcements() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      alert("Announcement sent: " + message);
      setMessage("");
    } else {
      alert("Please enter a message before sending.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6">
          <h1 className="text-xl font-semibold">Admin Dashboard - Announcement</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Send Announcement</h2>
        <div className="bg-white shadow p-6 rounded-lg">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your announcement here..."
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          />
          <button
            onClick={handleSend}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Send Announcement
          </button>
        </div>
      </main>
    </div>
  );
}

