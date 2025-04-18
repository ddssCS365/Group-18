import React from "react";
import { Routes, Route } from "react-router-dom";

import ManageAppointments from "./components/Therapist/ManageAppointments";
import ViewPatients from "./components/Therapist/ViewPatients";
import SearchResults from "./components/Therapist/SearchResults";
import MessagePatient from "./components/Therapist/MessagePatient"; // ✅ New import
import Login from "./components/login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ManageSecurityPage from "./components/Admin/ManageSecurityPage";
import TherapistDashboard from "./components/Therapist/TherapistDashboard";
import PatientDashboard from "./components/Patient/PatientDashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/manage-security" element={<ManageSecurityPage />} />
        <Route path="/therapist" element={<TherapistDashboard />} />
        <Route path="/therapist/appointments" element={<ManageAppointments />} />
        <Route path="/therapist/patients" element={<ViewPatients />} />
        <Route path="/therapist/search-results" element={<SearchResults />} />
        <Route path="/therapist/message" element={<MessagePatient />} /> {/* ✅ New route */}
        <Route path="/patient" element={<PatientDashboard />} />
        
      </Routes>
    </div>
  );
}

export default App;