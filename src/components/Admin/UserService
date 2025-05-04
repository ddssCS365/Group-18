// src/components/Admin/UserService.js
const loadUsers = () => {
  const saved = localStorage.getItem('users') || '[]';
  return JSON.parse(saved);
};

let mockUsers = loadUsers();

// Initialize with sample data if empty
if (mockUsers.length === 0) {
  mockUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "patient",
      status: "active",
      lastLogin: "2023-06-10"
    },
    {
      id: 2,
      name: "Dr. Smith",
      email: "smith@example.com",
      role: "therapist",
      status: "active",
      lastLogin: "2023-06-12"
    }
  ];
  localStorage.setItem('users', JSON.stringify(mockUsers));
}

const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const getUsers = async () => {
  return [...mockUsers];
};

export const updateUserStatus = async (id, newStatus) => {
  mockUsers = mockUsers.map(user => 
    user.id === id ? { ...user, status: newStatus } : user
  );
  saveUsers(mockUsers);
  return mockUsers.find(user => user.id === id);
};
