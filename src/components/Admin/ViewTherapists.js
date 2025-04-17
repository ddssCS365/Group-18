import React from 'react';

export default function ViewTherapists() {
  const therapists = [
    { id: 1, name: 'Dr. Smith' },
    { id: 2, name: 'Dr. Jane' },
  ];

  const handleUpdate = (name) => {
    alert(`Update requested for ${name}`);
  };

  const handleRemove = (name) => {
    if (window.confirm(`Are you sure you want to remove ${name}?`)) {
      alert(`${name} removed`);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Therapists</h2>
      <button className="mb-4 px-4 py-2 bg-green-500 text-white rounded">+ Add Therapist</button>
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
                onClick={() => handleRemove(t.name)}
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
