// src/components/Admin/AddTherapist.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTherapist } from './TherapistService';

export default function AddTherapist() {
  const [formData, setFormData] = useState({ name: '', email: '', specialization: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.specialization) {
      setError('All fields are required.');
      return;
    }
    try {
      await createTherapist(formData);
      navigate('/admin/therapists'); // Redirect after success
    } catch (err) {
      setError(err.message || 'Failed to create therapist.');
    }
  };

  return (
    <div className="add-therapist">
      <h2>Add Therapist</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
        />
        <button type="submit" className="add-btn">Create</button>
      </form>
    </div>
  );
}