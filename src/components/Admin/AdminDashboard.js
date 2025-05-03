import { useState, useRef } from "react";
import { Save, X, ArrowLeft, Upload, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminProfilePage() {
  const [admin, setAdmin] = useState({
    fullName: "Hussain Alnasser",
    lastApprove: "Hassaan Alshalman",
    lastActivity: "approve patient: Hussain",
    lastAssigned: "Dr. Alotaiby to Hassaan Alshalman",
    email: "s201272010@kfupm.edu.sa",
  });

  const navigate = useNavigate();

  const goToManageSecurity = () => navigate("/manage-security");
  const goToQuick = () => {
    navigate("/admin/quick-action");
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

  const handleCancel = (field) => setEditing((prev) => ({ ...prev, [field]: false }));

  const handleChange = (field, value) => setTempValues((prev) => ({ ...prev, [field]: value }));

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
      <div className="flex items-center mb-2">
        <label className="text-sm font-semibold text-gray-600 mr-2">
          {label}:
        </label>
        {!editing[field] ? (
          <button
            onClick={() => handleEdit(field)}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={() => handleSave(field)}
              className="text-xs flex items-center text-green-600 hover:text-green-800"
            >
              <Save className="h-4 w-4 mr-1" /> Save
            </button>
            <button
              onClick={() => handleCancel(field)}
              className="text-xs flex items-center text-red-600 hover:text-red-800"
            >
              <X className="h-4 w-4 mr-1" /> Cancel
            </button>
          </div>
        )}
      </div>
      {!editing[field] ? (
        <p className="text-base text-gray-800 bg-gray-50 p-2 rounded border border-gray-200">
          {admin[field]}
        </p>
      ) : (
        <input
          type="text"
          value={tempValues[field] || ""}
          onChange={(e) => handleChange(field, e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          autoFocus
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Back</span>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex flex-col items-center">
              <div
                className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden border border-gray-300 cursor-pointer"
                onClick={triggerFileInput}
              >
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <Upload className="h-12 w-12 text-gray-400 mx-auto my-10" />
                )}
              </div>
              <p className="mt-3 text-sm text-blue-600 cursor-pointer" onClick={triggerFileInput}>
                Click to upload photo
              </p>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <EditableField field="fullName" label="Full Name" />
            <EditableField field="email" label="Email" />
            <EditableField field="lastActivity" label="Last Activity" />
            <EditableField field="lastApprove" label="Last Approve" />

            <button
              onClick={goToQuick}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Quick Actions
            </button>

            <button
              onClick={goToManageSecurity}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Manage Security
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}