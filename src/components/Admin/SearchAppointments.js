import React, { useState } from "react";

export default function SearchAppointments() {
  const [searchTerm, setSearchTerm] = useState("");
  const appointments = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Roe" },
    { id: 3, name: "Ali Mohammed" },
    { id: 4, name: "Fatimah S." },
  ];

  const filteredAppointments = appointments.filter((a) =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Search Appointments</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by patient name..."
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <ul className="space-y-2">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((a) => (
            <li
              key={a.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded"
            >
              <span>{a.name}</span>
              <button className="px-2 py-1 bg-red-500 text-white rounded">
                Deactivate Account
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No appointments found.</li>
        )}
      </ul>
    </div>
  );
}
