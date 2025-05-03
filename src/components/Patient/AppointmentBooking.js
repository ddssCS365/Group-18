import React, { useState } from "react";

const AppointmentBooking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDoctorProfileOpen, setIsDoctorProfileOpen] = useState(false); // State for doctor profile modal
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "2025-09-22",
    time: "15:25",
    doctor: "DR. Alnasser",
  });

  // State for form inputs
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const doctorProfiles = {
    "Dr. Mohammed": {
      name: "Dr. Mohammed",
      specialization: "Cardiology",
      fees: "$150 per session",
    },
    "Dr. Ali": {
      name: "Dr. Ali",
      specialization: "Neurology",
      fees: "$200 per session",
    },
    "Dr. Fatimah": {
      name: "Dr. Fatimah",
      specialization: "Pediatrics",
      fees: "$120 per session",
    },
  };

  const handleBooking = () => {
    setAppointmentDetails({
      date: selectedDate
        ? new Date(selectedDate).toLocaleDateString("en-GB")
        : "Not selected",
      time: selectedTime || "Not selected",
      doctor: selectedDoctor || "Not selected",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleViewDoctorProfile = () => {
    if (selectedDoctor) {
      setIsDoctorProfileOpen(true);
    }
  };

  const handleCloseDoctorProfile = () => {
    setIsDoctorProfileOpen(false);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "20px", fontWeight: "bold", padding: "15px", backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <span style={{ cursor: "pointer", fontSize: "20px" }} onClick={handleBack}>
          ⬅
        </span>
        Manage booking an appointment for patient
        <span style={{ cursor: "pointer", fontSize: "20px" }}>☰</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "20px" }}>
        <div style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <div style={{ marginBottom: "20px" }}>
            <label>Select date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", width: "100%", fontSize: "14px", marginTop: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Select doctor</label>
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", width: "100%", fontSize: "14px", marginTop: "8px" }}
            >
              <option value="">Select a doctor</option>
              <option value="Dr. Mohammed">Dr. Mohammed</option>
              <option value="Dr. Ali">Dr. Ali</option>
              <option value="Dr. Fatimah">Dr. Fatimah</option>
            </select>
          </div>
          <button
            onClick={handleViewDoctorProfile}
            disabled={!selectedDoctor}
            style={{ padding: "12px 20px", backgroundColor: "#007bff", color: "white", borderRadius: "8px", border: "none", fontSize: "16px", cursor: "pointer", width: "100%", marginTop: "15px", transition: "background-color 0.3s ease" }}
          >
            View Doctor Profile
          </button>
          <div style={{ marginBottom: "20px" }}>
            <label>Select Time</label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", width: "100%", fontSize: "14px", marginTop: "8px" }}
            />
          </div>
          <button
            onClick={handleBooking}
            style={{ padding: "12px 20px", backgroundColor: "#007bff", color: "white", borderRadius: "8px", border: "none", fontSize: "16px", cursor: "pointer", width: "100%", marginTop: "15px", transition: "background-color 0.3s ease" }}
          >
            Book Appointment
          </button>
        </div>

        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h3>Current Appointment</h3>
          <p>{appointmentDetails.date}</p>
          <p>
            <strong>Doctor:</strong> {appointmentDetails.doctor}
          </p>
          <p>
            <strong>Time:</strong> {appointmentDetails.time}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div style={{ position: "fixed", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", width: "80%", maxWidth: "500px" }}>
            <h3 style={{ fontSize: "22px", fontWeight: "600" }}>Confirmation message</h3>
            <div style={{ padding: "15px" }}>
              <h2>Successful Appointment</h2>
              <p>Your current appointment is:</p>
              <p style={{ color: "#007bff", fontWeight: "600" }}>
                {appointmentDetails.date} at {appointmentDetails.time}
              </p>
              <p>With Dr. {appointmentDetails.doctor}</p>
              <button onClick={handleCloseModal} style={{ backgroundColor: "#ccc", color: "white", borderRadius: "5px", padding: "10px 20px", fontSize: "14px", cursor: "pointer" }}>
                Return to Homepage
              </button>
            </div>
          </div>
        </div>
      )}

      {isDoctorProfileOpen && selectedDoctor && (
        <div style={{ position: "fixed", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", width: "80%", maxWidth: "500px" }}>
            <h2>Doctor Profile</h2>
            <p>
              <strong>Name:</strong> {doctorProfiles[selectedDoctor].name}
            </p>
            <p>
              <strong>Specialization:</strong>{" "}
              {doctorProfiles[selectedDoctor].specialization}
            </p>
            <p>
              <strong>Fees:</strong> {doctorProfiles[selectedDoctor].fees}
            </p>
            <button
              onClick={handleCloseDoctorProfile}
              style={{ backgroundColor: "#ccc", color: "white", borderRadius: "5px", padding: "10px 20px", fontSize: "14px", cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;
