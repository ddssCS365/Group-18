import React, { useState } from "react";
import { Calendar, Clock, ChevronRight, ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AppointmentBooking() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDoctorProfileOpen, setIsDoctorProfileOpen] = useState(false);

  const doctorProfiles = {
    "Dr. Alnasser": {
      name: "Dr. Alnasser",
      specialization: "General Medicine",
      fees: "$100 per session",
    },
    "Dr. Ali": {
      name: "Dr. Ali",
      specialization: "Neurology",
      fees: "$200 per session",
    },
  };

  const handleBooking = () => {
    if (!selectedDoctor || !selectedDate || !selectedTime) return;
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f3efec]">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4">
        <button onClick={() => navigate(-1)} className="text-gray-700">
          <ArrowLeft />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">
          Manage Booking an Appointment
        </h1>
        <Menu />
      </header>

      <main className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4 py-6">
        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow p-6 space-y-5">
          <div>
            <label className="block font-medium mb-1">Select Date</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar className="text-gray-400 mr-2" />
              <input
                type="date"
                className="flex-1 bg-transparent outline-none text-sm"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Select Doctor</label>
            <div className="flex items-center border rounded-lg px-3 py-2 justify-between">
              <select
                className="bg-transparent flex-1 outline-none text-sm"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                <option value="">Choose a doctor</option>
                {Object.keys(doctorProfiles).map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>
              <ChevronRight className="text-gray-400" />
            </div>
          </div>

          <button
            disabled={!selectedDoctor}
            onClick={() => setIsDoctorProfileOpen(true)}
            className={`w-full rounded-lg py-2 text-sm font-medium ${
              selectedDoctor
                ? "bg-gray-200 hover:bg-gray-300"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            View Doctor Profile
          </button>

          <div>
            <label className="block font-medium mb-1">Select Time</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Clock className="text-gray-400 mr-2" />
              <input
                type="time"
                className="flex-1 bg-transparent outline-none text-sm"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-indigo-700 text-white rounded-lg py-2 text-sm font-semibold hover:bg-indigo-800"
          >
            Book Appointment
          </button>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-md font-semibold mb-4">Current Appointment</h2>
          <div className="border rounded-lg p-4 space-y-2 text-center">
            <p>{selectedDate || "No date selected"}</p>
            <p className="font-semibold">Doctor</p>
            <p>{selectedDoctor || "No doctor selected"}</p>
            <p className="font-semibold">Time</p>
            <p>{selectedTime || "--:--"}</p>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-md text-center w-80">
            <h3 className="font-semibold text-lg mb-2">Appointment Confirmed</h3>
            <p className="text-sm">
              {selectedDoctor} on {selectedDate} at {selectedTime}
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 text-sm"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Doctor Profile Modal */}
      {isDoctorProfileOpen && selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-md text-center w-80">
            <h3 className="font-semibold text-lg mb-2">Doctor Profile</h3>
            <p className="text-sm">
              <strong>Name:</strong> {doctorProfiles[selectedDoctor].name}
            </p>
            <p className="text-sm">
              <strong>Specialization:</strong>{" "}
              {doctorProfiles[selectedDoctor].specialization}
            </p>
            <p className="text-sm">
              <strong>Fees:</strong> {doctorProfiles[selectedDoctor].fees}
            </p>
            <button
              onClick={() => setIsDoctorProfileOpen(false)}
              className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
