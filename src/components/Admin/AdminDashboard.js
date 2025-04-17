// src/components/Admin/AdminDashboard.js

import React from "react";
import { Link } from "react-router-dom";
import { Menu, User } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <Menu className="h-6 w-6 text-gray-600" />
        </div>
      </header>

      {/* Profile Image */}
      <div className="flex justify-center mt-6">
        <div className="w-24 h-24 rounded-full border overflow-hidden bg-gray-200 flex items-center justify-center">
          <User className="h-10 w-10 text-gray-400" />
        </div>
      </div>

      {/* Dashboard Links */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Quick Actions</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/admin/view-therapists" className="block p-4 bg-white shadow rounded hover:bg-gray-100 text-blue-600 font-medium">
              View Therapists
            </Link>
          </li>
          <li>
            <Link to="/admin/appointments" className="block p-4 bg-white shadow rounded hover:bg-gray-100 text-blue-600 font-medium">
              Manage Appointments
            </Link>
          </li>
          <li>
            <Link to="/admin/search-appointments" className="block p-4 bg-white shadow rounded hover:bg-gray-100 text-blue-600 font-medium">
              Search Appointments
            </Link>
          </li>
          <li>
            <Link to="/admin/announcements" className="block p-4 bg-white shadow rounded hover:bg-gray-100 text-blue-600 font-medium">
              Send Announcement
            </Link>
          </li>
          <li>
            <Link to="/admin/manage-security" className="block p-4 bg-white shadow rounded hover:bg-gray-100 text-blue-600 font-medium">
              Manage Security
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
