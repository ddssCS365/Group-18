import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Menu, User, X, Calendar, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ViewTherapist() {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchType, setSearchType] = useState("Date");
  const [searchValue, setSearchValue] = useState("");

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

  const handleSearch = () => {
    navigate("AppointmentBooking");
  };

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
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-sm">back</span>
          </button>
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Main Content Styled Like Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Avatar */}
          <div className="p-6 border-b border-gray-200 flex flex-col items-center justify-center">
            <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center border border-gray-300">
              <User className="h-12 w-12 text-gray-400" />
            </div>
            <p className="text-sm text-blue-600 mt-2">Profile photo</p>
          </div>

          {/* Patient Info */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-500">Full Name:</span>
                  <span className="text-base font-semibold">Ahmed Naji</span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-500">
                    Date of Birth:
                  </span>
                  <span className="text-base font-semibold">22/9/1993</span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-500">Email:</span>
                  <span className="text-base font-semibold">
                    ddss4038@gmail.com
                  </span>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-500">
                    Next Appointment:
                  </span>
                  <span className="text-base font-semibold flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    22/8/2025
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-500">Contact:</span>
                  <span className="text-base font-semibold flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    054 336 2816
                  </span>
                </div>
              </div>
            </div>

            {/* Message Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => navigate("message-therapist")}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Message
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
