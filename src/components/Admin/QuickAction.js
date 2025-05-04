import { NavLink, Routes, Route } from "react-router-dom";
import TherapistList from "./TherapistList";
import AddTherapist from "./AddTherapist";
import AppointmentList from "./AppointmentList";
import BillingSettings from "./BillingSettings";
import UserManagement from "./UserManagement";
import AnnouncementCenter from "./AnnouncementCenter";

export default function QuickAction() {
  const linkClass =
    "text-sm px-4 py-2 border-b-2 font-medium transition duration-200";
  const active = "border-blue-600 text-blue-600";
  const inactive = "border-transparent text-gray-600 hover:text-blue-600";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
        </div>
        {/* Tab Navigation */}
        <nav className="max-w-7xl mx-auto px-6 flex space-x-6 border-b">
        
          <NavLink
            to="add-therapist"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? active : inactive}`
            }
          >
            + Add Therapist
          </NavLink>
         
          <NavLink
            to="appointments"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? active : inactive}`
            }
          >
            Manage Appointments
          </NavLink>
          <NavLink
            to="billing-settings"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? active : inactive}`
            }
          >
            Billing Settings
          </NavLink>
          <NavLink
            to="user-management"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? active : inactive}`
            }
          >
            Manage Users
          </NavLink>
          <NavLink
            to="announcements"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? active : inactive}`
            }
          >
            Announcements
          </NavLink>
        </nav>
      </header>

      {/* Content Below Tabs */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Routes>
          <Route path="therapists" element={<TherapistList />} />
          <Route path="add-therapist" element={<AddTherapist />} />
          <Route path="appointments" element={<AppointmentList />} />
          <Route path="billing-settings" element={<BillingSettings />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="announcements" element={<AnnouncementCenter />} />
        </Routes>
      </main>
    </div>
  );
}
