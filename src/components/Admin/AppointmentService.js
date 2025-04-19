// src/components/Admin/AppointmentService.js
const loadAppointments = () => {
    const saved = localStorage.getItem('appointments') || '[]';
    return JSON.parse(saved);
  };
  
  let mockAppointments = loadAppointments();
  
  const saveAppointments = (data) => {
    localStorage.setItem('appointments', JSON.stringify(data));
  };
  
  export const getAppointments = async () => {
    return [...mockAppointments];
  };
  
  export const updateAppointment = async (id, updates) => {
    mockAppointments = mockAppointments.map(appt => 
      appt.id === id ? { ...appt, ...updates } : appt
    );
    saveAppointments(mockAppointments);
  };
  
  export const cancelAppointment = async (id) => {
    mockAppointments = mockAppointments.filter(appt => appt.id !== id);
    saveAppointments(mockAppointments);
  };
  
  // Initialize with sample data if empty
  if (mockAppointments.length === 0) {
    mockAppointments = [
      {
        id: 1,
        patientName: "John Doe",
        therapistName: "Dr. Smith",
        date: "2023-06-15",
        time: "14:00",
        status: "confirmed"
      },
      {
        id: 2,
        patientName: "Jane Smith",
        therapistName: "Dr. Johnson",
        date: "2023-06-16",
        time: "10:30",
        status: "pending"
      }
    ];
    saveAppointments(mockAppointments);
  }