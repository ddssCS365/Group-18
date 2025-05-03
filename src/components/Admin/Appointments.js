// src/components/Admin/Appointments.js

import React from 'react';

export default function Appointments() {
  const appointments = [
    { id: 1, patient: 'John Doe', time: '10:00 AM - 11:00 AM' },
    { id: 2, patient: 'Jane Roe', time: '12:00 PM - 1:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6">
          <h1 className="text-xl font-semibold">Admin Dashboard - Appointments</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Manage Appointments</h2>
        <ul className="space-y-4">
          {appointments.map((a) => (
            <li
              key={a.id}
              className="flex justify-between items-center bg-white shadow p-4 rounded border"
            >
              <div>
                <p className="font-semibold">{a.patient}</p>
                <p className="text-sm text-gray-500">{a.time}</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Manage
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
