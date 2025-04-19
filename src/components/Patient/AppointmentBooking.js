import React, { useState } from "react";
import "./styles.css";

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
    <div className="booking-container">
      <div className="header">
        <span className="icon-left" onClick={handleBack}>
          ⬅
        </span>
        Manage booking an appointment for patient
        <span className="icon-right">☰</span>
      </div>

      <div className="main-content">
        <div className="form-container">
          <div className="form-group">
            <label>Select date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Select doctor</label>
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              <option value="">Select a doctor</option>
              <option value="Dr. Mohammed">Dr. Mohammed</option>
              <option value="Dr. Ali">Dr. Ali</option>
              <option value="Dr. Fatimah">Dr. Fatimah</option>
            </select>
          </div>
          <button
            className="view-doctor-button"
            onClick={handleViewDoctorProfile}
            disabled={!selectedDoctor}
          >
            view doctor profile
          </button>
          <div className="form-group">
            <label>Select Time</label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            />
          </div>
          <button className="book-button" onClick={handleBooking}>
            BOOK
          </button>
        </div>

        <div className="current-appointment">
          <h3>Current Appointment</h3>
          <p>{appointmentDetails.date}</p>
          <p>
            <strong>Doctor</strong>
          </p>
          <p>{appointmentDetails.doctor}</p>
          <p>
            <strong>Time:</strong> {appointmentDetails.time}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="confirmation-wrapper">
            <h3 className="confirmation-label">Confirmation message</h3>
            <div className="confirmation-box">
              <h2>Successful Appointment</h2>
              <p>your current appointment now is:</p>
              <p className="highlight">
                {appointmentDetails.date} at {appointmentDetails.time}
              </p>
              <p>with the doctor</p>
              <p>{appointmentDetails.doctor}</p>
              <button onClick={handleCloseModal}>RETURN TO HOMPAGE</button>
            </div>
          </div>
        </div>
      )}

      {isDoctorProfileOpen && selectedDoctor && (
        <div className="modal-overlay">
          <div className="doctor-profile-box">
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
            <button onClick={handleCloseDoctorProfile}>CLOSE</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;
