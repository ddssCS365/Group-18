// src/components/Admin/ManageSecurity.js

import React from 'react';

export default function ManageSecurity() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6">
          <h1 className="text-xl font-semibold">Admin Dashboard - Security Settings</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Manage Security</h2>
        <p className="text-gray-700 mb-6">
          Here you can configure security policies such as password rules, account lockout, and two-factor authentication (2FA).
        </p>

        <div className="space-y-4">
          <div className="bg-white p-4 shadow rounded border">
            <h3 className="font-semibold mb-2">Password Policy</h3>
            <p className="text-sm text-gray-600">Minimum 8 characters, must include numbers and symbols.</p>
          </div>

          <div className="bg-white p-4 shadow rounded border">
            <h3 className="font-semibold mb-2">Two-Factor Authentication (2FA)</h3>
            <p className="text-sm text-gray-600">2FA is currently <strong>disabled</strong>. Enable it to add an extra layer of security.</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Enable 2FA
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
