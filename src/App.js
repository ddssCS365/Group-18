import React from "react";
import { Routes, Route } from "react-router-dom";
import ManageAppointments from "./components/Therapist/ManageAppointments";
import ViewPatients from "./components/Therapist/ViewPatients";
import SearchResults from "./components/Therapist/SearchResults";
import MessagePatient from "./components/Therapist/MessagePatient";
import Login from "./components/login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ManageSecurityPage from "./components/Admin/ManageSecurityPage";
import TherapistDashboard from "./components/Therapist/TherapistDashboard";
import PatientDashboard from "./components/Patient/PatientDashboard";
import AppointmentBooking from "./components/Patient/AppointmentBooking";
import QuickAction from "./components/Admin/QuickAction";
import AddTherapist from "./components/Admin/AddTherapist";

import ViewTherapist from "./components/Patient/ViewTherapist";
import MessageTherapist from "./components/Patient/MessageTherapist";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/quick-action/*" element={<QuickAction />} />
        <Route path="/admin/addtherapist" element={<AddTherapist/>}/>
        <Route path="/manage-security" element={<ManageSecurityPage />} />
        <Route path="/therapist" element={<TherapistDashboard />} />
        <Route path="/therapist/appointments" element={<ManageAppointments />} />
        <Route path="/therapist/patients" element={<ViewPatients />} />
        <Route path="/therapist/search-results" element={<SearchResults />} />
        <Route path="/therapist/message" element={<MessagePatient />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/patient/AppointmentBooking" element={<AppointmentBooking />} />
        <Route path="/patient/view-therapist" element={<ViewTherapist />} />
        <Route path="/patient/view-therapist/message-therapist" element={<MessageTherapist />} />
      </Routes>
    </div>
  );
}

export default App;
