import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

// Reusable toggle row component
const ToggleRow = ({ label, value, onToggle }) => (
  <div className="flex justify-between items-center py-2">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <div className="flex space-x-2">
      <button
        aria-label={`Set ${label} to Yes`}
        onClick={() => !value && onToggle()}
        className={`px-4 py-1 rounded text-sm font-medium transition ${
          value ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        YES
      </button>
      <button
        aria-label={`Set ${label} to No`}
        onClick={() => value && onToggle()}
        className={`px-4 py-1 rounded text-sm font-medium transition ${
          !value ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        NO
      </button>
    </div>
  </div>
);

export default function ManageSecurityPage({ currentUser = "Hussain Alnasser" }) {
  const navigate = useNavigate();

  const [securitySettings, setSecuritySettings] = useState({
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

  const getFormattedDate = () => {
    const now = new Date();
    return now.toLocaleDateString("en-GB");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-800 transition"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <section className="bg-white shadow rounded-xl overflow-hidden">
          {/* Title */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Manage Security Options</h2>
            <p className="text-sm text-gray-500 mt-1">Toggle each option to update security settings in real time.</p>
          </div>

          {/* Toggle Controls */}
          <div className="p-6 divide-y divide-gray-100">
            <ToggleRow
              label="Allow Patients to Edit Profiles"
              value={securitySettings.allowPatientsToEdit}
              onToggle={() => handleToggle("allowPatientsToEdit")}
            />
            <ToggleRow
              label="Restrict Access to Logged-In Users ONLY"
              value={securitySettings.restrictAccessLoggedInUsers}
              onToggle={() => handleToggle("restrictAccessLoggedInUsers")}
            />
            <ToggleRow
              label="Enable Two-Factor Authentication"
              value={securitySettings.enableTwoFactorAuth}
              onToggle={() => handleToggle("enableTwoFactorAuth")}
            />
            <ToggleRow
              label="Require Approval for New Patient Registrations"
              value={securitySettings.requireApprovalNewPatients}
              onToggle={() => handleToggle("requireApprovalNewPatients")}
            />
            <ToggleRow
              label="Allow Patients to Cancel Appointments"
              value={securitySettings.allowPatientsToCancel}
              onToggle={() => handleToggle("allowPatientsToCancel")}
            />
            <ToggleRow
              label="Allow Therapists to Edit Availability"
              value={securitySettings.allowTherapistsToEditAvailability}
              onToggle={() => handleToggle("allowTherapistsToEditAvailability")}
            />
          </div>

          {/* Footer Info */}
          <div className="p-6 border-t border-gray-100 flex justify-between items-center bg-gray-50 text-sm text-gray-600">
            <span>
              <span className="font-medium text-gray-800">Last Change:</span> {getFormattedDate()}
            </span>
            <span>
              <span className="font-medium text-gray-800">Made by:</span> {currentUser}
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
