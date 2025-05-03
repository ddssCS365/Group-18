// src/components/Admin/TherapistList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTherapists, deleteTherapist } from './TherapistService'; // Mock API calls

export default function TherapistList() {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    fetchTherapists();
  }, []);

  const fetchTherapists = async () => {
    const data = await getTherapists();
    setTherapists(data);
  };

  const handleDelete = async (id) => {
    await deleteTherapist(id);
    fetchTherapists(); // Refresh list
  };

  return (
    <div className="therapist-list">
      {therapists.map((therapist) => (
        <div key={therapist.id} className="therapist-item">
          <span>{therapist.name} - {therapist.specialization}</span>
          <div className="action-buttons">
            <Link 
              to={`/admin/edit-therapist/${therapist.id}`}
              className="update-btn"
            >
              Update
            </Link>
            <button 
              onClick={() => handleDelete(therapist.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}