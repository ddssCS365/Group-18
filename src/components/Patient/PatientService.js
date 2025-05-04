const API_URL = 'http://localhost:5001/api/patients';

export const getPatients = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

export const getPatientById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
};

export const createPatient = async (data) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

export const updatePatient = async (id, data) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

export const deletePatient = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};