const API_URL = 'http://localhost:5000/api/therapists';

export const getTherapists = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

export const getTherapistById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
};

export const createTherapist = async (data) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

export const updateTherapist = async (id, data) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

export const deleteTherapist = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};
