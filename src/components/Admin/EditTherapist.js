// src/components/Admin/EditTherapist.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTherapistById, updateTherapist } from './TherapistService';

export default function EditTherapist() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '', specialization: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTherapist = async () => {
      const therapist = await getTherapistById(id);
      setFormData(therapist);
    };
    fetchTherapist();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.specialization) {
      setError('All fields are required.');
      return;
    }
    try {
      await updateTherapist(id, formData);
      navigate('/admin/therapists');
    } catch (err) {
      setError(err.message || 'Failed to update therapist.');
    }
  };

  return (
    <div className="edit-therapist">
      <h2>Edit Therapist</h2>
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
        <button type="submit" className='update-btn'>Update</button>
      </form>
    </div>
  );
}