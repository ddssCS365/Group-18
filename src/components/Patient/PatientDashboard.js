// src/components/Therapist/TherapistDashboard.js

import { useState, useRef, useEffect } from "react";
import {
  Mail,
  Calendar,
  ClipboardList,
  User,
  Save,
  X,
  ArrowLeft,
  Upload,
  Menu,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import useFullname from "../useFullname";

function EditableField({
  field,
  label,
  value,
  editing,
  tempValue,
  onEdit,
  onSave,
  onCancel,
  onChange,
}) {
  return (
    <div className="flex items-center">
      <span className="w-32 text-sm text-gray-500">{label}:</span>
      {!editing ? (
        <>
          <span className="text-base">{value}</span>
          <button
            onClick={onEdit}
            className="text-xs text-blue-600 hover:text-blue-800 ml-2"
          >
            Edit
          </button>
        </>
      ) : (
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            value={tempValue}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSave()}
            className="w-full p-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            autoFocus
          />
          <button
            onClick={onSave}
            className="text-xs flex items-center text-green-600 hover:text-green-800"
          >
            <Save className="h-3 w-3 mr-1" /> Save
          </button>
          <button
            onClick={onCancel}
            className="text-xs flex items-center text-red-600 hover:text-red-800"
          >
            <X className="h-3 w-3 mr-1" /> Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default function TherapistDashboard() {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchType, setSearchType] = useState("Date");
  const [searchValue, setSearchValue] = useState("");
  const [fullName, setFullName] = useFullname("fullName", "");

  const [therapist, setTherapist] = useState({
    fullName: fullName,
    phone: "0553322112",
    Email: "s202112345@gmail.com",
    nextAppointment: "4/19/2025",
    nextPatient: "dr.majid bin afif",
    dateOfBirth: "1/1/2000",
  });

  const [editing, setEditing] = useState({
    fullName: false,
    Email: false,
  });

  const [tempValues, setTempValues] = useState({ ...therapist });
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleBack = () => window.history.back();
  const triggerFileInput = () => fileInputRef.current.click();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => setProfileImage(null);

  const handleEdit = (field) => {
    setTempValues((prev) => ({ ...prev, [field]: therapist[field] }));
    setEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = (field) => {
    setTherapist((prev) => ({ ...prev, [field]: tempValues[field] }));
    setEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleCancel = (field) => {
    setEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (field, value) => {
    setTempValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    navigate("AppointmentBooking");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:5000/api/users/${fullName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setTherapist({
        fullName: data.fullName,
        phone: data.phone,
        Email: data.email,
        nextAppointment: data.nextAppointment,
        nextPatient: data.therapist,
        dateOfBirth: data.dateOfBirth,
      });
    })();
  }, []);
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
          <h2 className="text-lg font-semibold">Book Appointments</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm"
        >
          Book
        </button>
      </div>

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
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-500"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Profile Card */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Avatar */}
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
                  <User className="h-12 w-12 text-gray-400" />
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
              <div className="flex gap-4 mt-2">
                <p
                  className="text-sm text-blue-600 cursor-pointer"
                  onClick={triggerFileInput}
                >
                  Click to upload photo
                </p>
                {profileImage && (
                  <button
                    onClick={removePhoto}
                    className="text-xs flex items-center text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left */}
              <div className="space-y-4">
                <EditableField
                  field="fullName"
                  label="Full Name"
                  value={therapist.fullName}
                  editing={editing.fullName}
                  tempValue={tempValues.fullName}
                  onEdit={() => handleEdit("fullName")}
                  onSave={() => handleSave("fullName")}
                  onCancel={() => handleCancel("fullName")}
                  onChange={(value) => handleChange("fullName", value)}
                />
                <EditableField
                  field="phone"
                  label="phone"
                  value={therapist.phone}
                  editing={editing.phone}
                  tempValue={tempValues.phone}
                  onEdit={() => handleEdit("phone")}
                  onSave={() => handleSave("phone")}
                  onCancel={() => handleCancel("phone")}
                  onChange={(value) => handleChange("phone", value)}
                />
                <EditableField
                  field="Email"
                  label="Email"
                  value={therapist.Email}
                  editing={editing.Email}
                  tempValue={tempValues.Email}
                  onEdit={() => handleEdit("Email")}
                  onSave={() => handleSave("Email")}
                  onCancel={() => handleCancel("Email")}
                  onChange={(value) => handleChange("Email", value)}
                />
              </div>

              {/* Right */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-500">
                    Next Appointment:
                  </span>
                  <span className="text-base flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    {therapist.nextAppointment}
                    <button
                      onClick={() => navigate("AppointmentBooking")}
                      className="text-xs text-blue-600 hover:text-blue-800 ml-2"
                    >
                      manage
                    </button>
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-500">
                    Current Therapist:
                  </span>
                  <span className="text-base flex items-center gap-2">
                    <ClipboardList className="h-4 w-4 text-gray-400" />
                    {therapist.nextPatient}
                    <button
                      onClick={() => navigate("view-therapist")}
                      className="text-xs text-blue-600 hover:text-blue-800 ml-2"
                    >
                      View Details
                    </button>
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-500">
                    Date of Birth:
                  </span>
                  <span className="text-base">{therapist.dateOfBirth}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
