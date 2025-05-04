import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTherapists, deleteTherapist } from './TherapistService';

export default function ViewTherapists() {
  const [therapists, setTherapists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTherapists = async () => {
      const data = await getTherapists();
      setTherapists(data);
    };
    fetchTherapists();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/admin/therapists/edit/${id}`);
  };

  const handleRemove = async (id) => {
    if (window.confirm(`Are you sure you want to remove this therapist?`)) {
      await deleteTherapist(id);
      setTherapists(therapists.filter((t) => t.id !== id));
    }
  };

  const handleAdd = () => {
    navigate('/admin/therapists/add');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Therapists</h2>
      <button onClick={handleAdd} className="mb-4 px-4 py-2 bg-green-500 text-white rounded">+ Add Therapist</button>
      <ul className="space-y-2">
        {therapists.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded"            
          >
            <span>{t.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleUpdate(t.name)}
                className="px-2 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleRemove(t.id)}
                className="px-2 py-1 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
