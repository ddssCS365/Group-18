import { useState, useRef } from "react";
import {
  Calendar,
  Phone,
  Mail,
  Clock,
  Save,
  X,
  ArrowLeft,
  Upload,
} from "lucide-react";

export default function PatientProfilePage() {
  const [patient, setPatient] = useState({
    fullName: "Maryam Alexander",
    dateOfBirth: "22/9/1993",
    email: "0262720610@cityhospital.co",
    doctor: "Dr. Alami",
    nextAppointment: "22/4/2025",
    contact: "054 336 2816",
  });

  const [editing, setEditing] = useState({
    fullName: false,
    dateOfBirth: false,
    email: false,
    doctor: false,
    nextAppointment: false,
    contact: false,
  });

  const [tempValues, setTempValues] = useState({ ...patient });
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleEdit = (field) => {
    // Set the temporary value to the current patient value
    setTempValues((prev) => ({ ...prev, [field]: patient[field] }));
    // Enable editing for this field only
    setEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = (field) => {
    // Update the patient data with the temporary value
    setPatient((prev) => ({ ...prev, [field]: tempValues[field] }));
    // Disable editing for this field
    setEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleCancel = (field) => {
    // Disable editing without saving changes
    setEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (field, value) => {
    // Update only the specific field's temporary value
    setTempValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleBack = () => {
    window.history.back();
  };

  // Creates an editable field component for reuse
  const EditableField = ({ field, label, icon }) => {
    const Icon = icon;

    return (
      <div>
        <div className="flex items-center mb-1">
          <label className="text-sm font-medium text-gray-500 mr-1">
            {label}:
          </label>
          {!editing[field] ? (
            <button
              onClick={() => handleEdit(field)}
              className="text-xs text-blue-600 hover:text-blue-800 ml-1"
            >
              Edit
            </button>
          ) : (
            <div className="flex space-x-2 ml-1">
              <button
                onClick={() => handleSave(field)}
                className="text-xs flex items-center text-green-600 hover:text-green-800"
              >
                <Save className="h-3 w-3 mr-1" />
                Save
              </button>
              <button
                onClick={() => handleCancel(field)}
                className="text-xs flex items-center text-red-600 hover:text-red-800"
              >
                <X className="h-3 w-3 mr-1" />
                Cancel
              </button>
            </div>
          )}
        </div>

        {!editing[field] ? (
          <div className="flex items-center">
            {icon && <Icon className="h-4 w-4 text-gray-400 mr-2" />}
            <p
              className={`${
                field === "email"
                  ? "text-sm text-gray-600 break-all"
                  : "text-base"
              } ${
                field === "fullName" || field === "doctor" ? "font-medium" : ""
              }`}
            >
              {patient[field]}
            </p>
          </div>
        ) : (
          <div className="flex items-center">
            {icon && <Icon className="h-4 w-4 text-gray-400 mr-2" />}
            <input
              type="text"
              value={tempValues[field] || ""}
              onChange={(e) => handleChange(field, e.target.value)}
              className="w-full p-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              autoFocus
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Patient Profile Card */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Profile Header with Avatar Placeholder */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center border border-gray-300 relative overflow-hidden group cursor-pointer"
                onClick={triggerFileInput}
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <p className="mt-2 text-sm text-blue-600">
                Click to upload photo
              </p>
            </div>
          </div>

          {/* Patient Information */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <EditableField field="fullName" label="Full Name" />
                <EditableField
                  field="dateOfBirth"
                  label="Date of Birth"
                  icon={Calendar}
                />
                <EditableField field="email" label="Email" icon={Mail} />
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <EditableField field="doctor" label="Doctor" />
                <EditableField
                  field="nextAppointment"
                  label="Next Appointment"
                  icon={Clock}
                />
                <EditableField field="contact" label="Contact" icon={Phone} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
