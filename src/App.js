import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import AdminDashboard from './components/Admin/AdminDashboard';
import TherapistDashboard from './components/Therapist/TherapistDashboard';
import PatientDashboard from './components/Patient/PatientDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/therapist" element={<TherapistDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
