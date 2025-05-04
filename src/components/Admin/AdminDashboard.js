import { useState, useRef } from "react";
import { Save, X, ArrowLeft, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function AdminProfilePage() {
  const [admin, setAdmin] = useState({
    fullName: "Hussain Alnasser",
    lastApprove: "Hassaan Alshalman",
    lastActivity: "approve patient: Hussain",
    lastAssigned: "Dr. Alotaiby to Hassaan Alshalman",
    email: "s201272010@kfupm.edu.sa",
  });

  const navigate = useNavigate(); // Correct placement of useNavigate hook

  const goToManageSecurity = () => {
    navigate("/manage-security"); // Navigate to the "Manage Security" page
  };
  const goToQuick = () => {
    navigate("quick-action"); // Navigate to the "Manage Security" page
  };


  const [editing, setEditing] = useState({});
  const [tempValues, setTempValues] = useState({ ...admin });
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleEdit = (field) => {
    setTempValues((prev) => ({ ...prev, [field]: admin[field] }));
    setEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = (field) => {
    setAdmin((prev) => ({ ...prev, [field]: tempValues[field] }));
    setEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleCancel = (field) => {
    setEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (field, value) => {
    setTempValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const handleBack = () => window.history.back();


  const EditableField = ({ field, label }) => (
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
        <p className="text-base text-gray-800">{admin[field]}</p>
      ) : (
        <input
          type="text"
          value={tempValues[field] || ""}
          onChange={(e) => handleChange(field, e.target.value)}
          className="w-full p-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          autoFocus
        />
      )}
    </div>
  );

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        <div className="bg-white shadow rounded-lg overflow-hidden">
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

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <EditableField field="fullName" label="Full Name" />
              <EditableField field="lastActivity" label="Last Activity" />
              <EditableField field="email" label="Email" />
            </div>
            <div className="space-y-4">
              <EditableField field="lastApprove" label="Last Approve" />
              <div>
                <label className="text-sm font-medium text-gray-500 mb-1 block">
                  quick actions
                </label>
                <button
                  onClick={goToQuick} // Call goToManageSecurity on click
                  className="text-sm text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700"
                >
                  go to quick actions
                </button>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 mb-1 block">
                  Security
                </label>
                <button
                  onClick={goToManageSecurity} // Call goToManageSecurity on click
                  className="text-sm text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700"
                >
                  Manage Security
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

