import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Menu, User } from "lucide-react";
import TherapistList from "./TherapistList";
import AddTherapist from "./AddTherapist";
import EditTherapist from "./EditTherapist";
import AppointmentList from "./AppointmentList";
import BillingSettings from "./BillingSettings";

export default function QuickAction() {
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
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Quick Actions
        </h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="therapists" // Relative path (resolves to /admin/therapists)
              className="block p-4 bg-white shadow rounded hover:bg-gray-100 text-blue-600 font-medium"
            >
              View Therapists
            </Link>
          </li>
          <li>
            <Link
              to="add-therapist" // Relative path (resolves to /admin/add-therapist)
              className="block p-4 bg-white shadow rounded hover:bg-gray-100 text-blue-600 font-medium"
            >
              + Add Therapist
            </Link>
          </li>

          <li>
            <Link
              to="appointments"
              className="block p-4 bg-white shadow rounded hover:bg-gray-100 text-blue-600 font-medium"
            >
              Manage Appointments
            </Link>
          </li>

          <li>
            <Link
              to="billing-settings"
              className="block p-4 bg-white shadow rounded hover:bg-gray-100 text-blue-600 font-medium"
            >
              Billing Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Nested Routes Container */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6">
        <Routes>
          <Route path="therapists" element={<TherapistList />} />
          <Route path="add-therapist" element={<AddTherapist />} />
          <Route path="edit-therapist/:id" element={<EditTherapist />} />
          <Route path="appointments" element={<AppointmentList />} />
          <Route path="billing-settings" element={<BillingSettings />} />
        </Routes>
      </div>
    </div>
  );
}
