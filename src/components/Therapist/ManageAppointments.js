// src/components/Therapist/ManageAppointments.js

import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Menu, User, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ManageAppointments() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchType, setSearchType] = useState("Date");
  const [searchValue, setSearchValue] = useState("");
  const sidebarRef = useRef(null);

  const [profileImage, setProfileImage] = useState(() =>
    localStorage.getItem("therapistProfileImage") || null
  );

  const [selectedDate, setSelectedDate] = useState("2025-08-22");

  const [appointments, setAppointments] = useState([
    { time: "08:00 - 09:00", status: "unavailable", patient: "", editing: false },
    { time: "09:00 - 10:00", status: "available", patient: "", editing: false },
    { time: "10:00 - 11:00", status: "booked", patient: "Ali Mohammed", editing: false },
    { time: "11:00 - 12:00", status: "available", patient: "", editing: false },
    { time: "13:00 - 14:00", status: "available", patient: "", editing: false },
    { time: "14:00 - 15:00", status: "available", patient: "", editing: false },
    { time: "15:00 - 16:00", status: "booked", patient: "Fatimah S.", editing: false },
  ]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  const handleStatusChange = (index, newStatus) => {
    const updated = [...appointments];
    updated[index].status = newStatus;
    if (newStatus === "available") updated[index].patient = "";
    setAppointments(updated);
  };

  const handleEditToggle = (index) => {
    const updated = [...appointments];
    updated[index].editing = !updated[index].editing;
    setAppointments(updated);
  };

  const handleInputChange = (index, value) => {
    const updated = [...appointments];
    updated[index].patient = value;
    setAppointments(updated);
  };

  const handleSave = (index) => {
    const updated = [...appointments];
    updated[index].editing = false;
    if (updated[index].patient.trim() !== "") {
      updated[index].status = "booked";
    }
    setAppointments(updated);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") handleSave(index);
  };

  const handleSearch = () => {
    if (searchType === "Date") {
      navigate("/therapist/appointments");
    } else if (searchType === "Patient Name") {
      navigate("/therapist/patients");
    }
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Sidebar Drawer */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-4 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Search Appointments</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="w-full mb-3 p-2 border rounded text-sm"
        >
          <option>Date</option>
          <option>Patient Name</option>
        </select>
        <input
          type="text"
          placeholder={`Enter ${searchType.toLowerCase()}`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full mb-3 p-2 border rounded text-sm"
        />
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm"
        >
          Search
        </button>
      </div>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
          <button
            onClick={() => navigate("/therapist")}
            className="flex items-center text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-sm">back</span>
          </button>
          <button onClick={() => setSidebarOpen(true)} className="text-gray-500">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Appointments</h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full border overflow-hidden bg-gray-200 flex items-center justify-center">
            {profileImage ? (
              <img src={profileImage} alt="Therapist" className="w-full h-full object-cover" />
            ) : (
              <User className="h-10 w-10 text-gray-400" />
            )}
          </div>
        </div>

        {/* Date Picker */}
        <div className="flex justify-center mb-6">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border p-2 rounded text-sm"
          />
        </div>

        {/* Appointments */}
        <div className="space-y-4">
          {appointments.map((appt, index) => (
            <div key={index} className="p-4 bg-white shadow rounded border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">{appt.time}</p>
                  {appt.status === "unavailable" ? (
                    <p className="font-semibold text-gray-600">No patient</p>
                  ) : appt.editing ? (
                    <input
                      type="text"
                      value={appt.patient}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="border p-1 rounded mt-1 text-sm w-full"
                      placeholder="Enter patient name"
                      autoFocus
                    />
                  ) : (
                    <p className="font-semibold text-gray-900">
                      {appt.patient || "No patient"}
                    </p>
                  )}
                  <p
                    className={`text-sm mt-1 ${
                      appt.status === "available"
                        ? "text-green-600"
                        : appt.status === "unavailable"
                        ? "text-red-500"
                        : "text-blue-700"
                    }`}
                  >
                    {appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
                  </p>
                </div>

                <div className="text-right space-y-1">
                  {appt.status !== "unavailable" && (
                    <>
                      {appt.editing ? (
                        <button
                          onClick={() => handleSave(index)}
                          className="text-blue-600 text-sm"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditToggle(index)}
                          className="text-blue-600 text-sm"
                        >
                          Edit
                        </button>
                      )}
                    </>
                  )}
                  {appt.status === "unavailable" && (
                    <button
                      onClick={() => handleStatusChange(index, "available")}
                      className="text-blue-600 text-sm block"
                    >
                      Set Available
                    </button>
                  )}
                  {appt.status !== "unavailable" && (
                    <button
                      onClick={() => handleStatusChange(index, "unavailable")}
                      className="text-red-500 text-sm block"
                    >
                      Set Unavailable
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
