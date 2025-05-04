// src/components/Admin/UserManagement.js
import React, { useState, useEffect } from 'react';
import { getUsers, updateUserStatus } from './UserService';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const loadUsersData = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    loadUsersData();
  }, []);

  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    return user.status === filter;
  });

  const handleStatusChange = async (userId, newStatus) => {
    try {
      await updateUserStatus(userId, newStatus);
      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
      setSuccessMessage(`User ${newStatus} successfully!`);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  return (
    <div className="user-management">
      <h2>User Account Management</h2>
      
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      <div className="filter-controls">
        <label>
          Filter by status:
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Users</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
            <option value="deactivated">Deactivated</option>
          </select>
        </label>
      </div>

      <div className="user-list">
        {filteredUsers.map(user => (
          <div key={user.id} className={`user-card status-${user.status}`}>
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
              <p>Last Login: {user.lastLogin}</p>
              <span className={`status-badge ${user.status}`}>
                Status: {user.status}
              </span>
            </div>
            
            <div className="user-actions">
              <select
                value={user.status}
                onChange={(e) => handleStatusChange(user.id, e.target.value)}
                className="status-select"
              >
                <option value="active">Active</option>
                <option value="suspended">Suspend</option>
                <option value="deactivated">Deactivate</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
