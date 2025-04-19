import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { useState } from 'react';
export default function ManageSecurityPage() {
  
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const [securitySettings, setSecuritySettings] = React.useState({

    allowPatientsToEdit: false,
    restrictAccessLoggedInUsers: true,
    enableTwoFactorAuth: false,
    requireApprovalNewPatients: true,
    allowPatientsToCancel: false,
    allowTherapistsToEditAvailability: true,
  });



  const handleToggle = (key) => {
    setSecuritySettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-sm">back</span>
          </button>
          <button className="text-gray-500">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>

          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Manage Security Options</h2>
          </div>
          <div className="p-6 grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-500">Allow Patients to Edit Profiles</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleToggle("allowPatientsToEdit")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    securitySettings.allowPatientsToEdit ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  YES
                </button>
                <button
                  onClick={() => handleToggle("allowPatientsToEdit")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    !securitySettings.allowPatientsToEdit ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  NO
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-500">Restrict Access to Logged-In Users ONLY</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleToggle("restrictAccessLoggedInUsers")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    securitySettings.restrictAccessLoggedInUsers ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  YES
                </button>
                <button
                  onClick={() => handleToggle("restrictAccessLoggedInUsers")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    !securitySettings.restrictAccessLoggedInUsers ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  NO
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-500">Enable Two-Factor Authentication</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleToggle("enableTwoFactorAuth")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    securitySettings.enableTwoFactorAuth ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  YES
                </button>
                <button
                  onClick={() => handleToggle("enableTwoFactorAuth")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    !securitySettings.enableTwoFactorAuth ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  NO
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-500">Require Approval for New Patient Registrations</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleToggle("requireApprovalNewPatients")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    securitySettings.requireApprovalNewPatients ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  YES
                </button>
                <button
                  onClick={() => handleToggle("requireApprovalNewPatients")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    !securitySettings.requireApprovalNewPatients ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  NO
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-500">Allow Patients to Cancel Appointments</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleToggle("allowPatientsToCancel")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    securitySettings.allowPatientsToCancel ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  YES
                </button>
                <button
                  onClick={() => handleToggle("allowPatientsToCancel")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    !securitySettings.allowPatientsToCancel ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  NO
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-500">Allow Therapists to Edit Availability</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleToggle("allowTherapistsToEditAvailability")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    securitySettings.allowTherapistsToEditAvailability ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  YES
                </button>
                <button
                  onClick={() => handleToggle("allowTherapistsToEditAvailability")}
                  className={`px-4 py-1 rounded text-sm font-medium ${
                    !securitySettings.allowTherapistsToEditAvailability ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  NO
                </button>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 flex justify-between">
            <p className="text-sm text-gray-500">
              <span className="font-medium">Last Change:</span> 28/02/2025
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Made by:</span> Hussain Alnasser
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

