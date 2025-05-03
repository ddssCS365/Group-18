// src/components/Admin/TherapistService.js

// Load from localStorage or initialize
const loadTherapists = () => {
  const saved = localStorage.getItem('therapists');
  return saved ? JSON.parse(saved) : [
    { id: 1, name: 'Dr. Smith', email: 'smith@example.com', specialization: 'Psychology' }
  ];
};

let mockTherapists = loadTherapists();

// Save to localStorage
const saveTherapists = (data) => {
  localStorage.setItem('therapists', JSON.stringify(data));
};

// GET all therapists
export const getTherapists = async () => {
  return [...mockTherapists];
};

// GET single therapist
export const getTherapistById = async (id) => {
  return mockTherapists.find(t => t.id === parseInt(id));
};

// CREATE new therapist
export const createTherapist = async (data) => {
  const newTherapist = { id: Date.now(), ...data };
  mockTherapists.push(newTherapist);
  saveTherapists(mockTherapists);
  return newTherapist;
};

// UPDATE therapist
export const updateTherapist = async (id, data) => {
  mockTherapists = mockTherapists.map(t => 
    t.id === parseInt(id) ? { ...t, ...data } : t
  );
  saveTherapists(mockTherapists);
};

// DELETE therapist
export const deleteTherapist = async (id) => {
  mockTherapists = mockTherapists.filter(t => t.id !== parseInt(id));
  saveTherapists(mockTherapists);
};