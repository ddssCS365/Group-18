// src/components/Admin/AppointmentList.js
import React, { useState, useEffect } from 'react';
import { getAppointments, updateAppointment, cancelAppointment } from './AppointmentService';

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const loadData = async () => {
      const data = await getAppointments();
      setAppointments(data);
    };
    loadData();
  }, []);

  const filteredAppointments = appointments.filter(appt => {
    if (filter === 'all') return true;
    return appt.status === filter;
  });

  const handleStatusChange = async (id, newStatus) => {
    await updateAppointment(id, { status: newStatus });
    const updated = await getAppointments();
    setAppointments(updated);
  };

  const handleCancel = async (id) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      await cancelAppointment(id);
      const updated = await getAppointments();
      setAppointments(updated);
    }
  };

  return (
    <div className="appointment-management">
      <h2>Manage Appointments</h2>
      
      <div className="filter-controls">
        <label>
          Filter by status:
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Appointments</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>

      <div className="appointment-list">
        {filteredAppointments.map(appt => (
          <div key={appt.id} className={`appointment-card status-${appt.status}`}>
            <div className="appointment-info">
              <h3>{appt.patientName}</h3>
              <p>With: {appt.therapistName}</p>
              <p>{appt.date} at {appt.time}</p>
              <span className={`status-badge ${appt.status}`}>
                {appt.status}
              </span>
            </div>
            
            <div className="appointment-actions">
              <select
                value={appt.status}
                onChange={(e) => handleStatusChange(appt.id, e.target.value)}
                className="status-select"
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
              </select>
              
              <button 
                onClick={() => handleCancel(appt.id)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
       
