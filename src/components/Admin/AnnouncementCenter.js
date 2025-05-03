// src/components/Admin/AnnouncementCenter.js
import React, { useState, useEffect } from 'react';
import { createAnnouncement, sendToAllUsers, getAnnouncements } from './AnnouncementService';

export default function AnnouncementCenter() {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    urgency: 'normal',
    recipientType: 'all'
  });
  const [announcements, setAnnouncements] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const data = await getAnnouncements();
      setAnnouncements(data);
    };
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.message) {
      alert('Title and message are required');
      return;
    }

    setIsSending(true);
    try {
      // Save announcement
      const announcement = await createAnnouncement(formData);
      
      // Send to users
      await sendToAllUsers({
        title: formData.title,
        body: formData.message,
        urgency: formData.urgency
      });

      setSuccessMessage(`Announcement sent to ${formData.recipientType} users!`);
      setFormData({ title: '', message: '', urgency: 'normal', recipientType: 'all' });
      
      // Refresh list
      const updated = await getAnnouncements();
      setAnnouncements(updated);
      
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error('Failed to send announcement:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="announcement-center">
      <h2>System Announcements</h2>
      
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      <div className="announcement-form">
        <h3>Create New Announcement</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title*</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Message*</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              rows="5"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Urgency</label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({...formData, urgency: e.target.value})}
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>

            <div className="form-group">
              <label>Send To</label>
              <select
                value={formData.recipientType}
                onChange={(e) => setFormData({...formData, recipientType: e.target.value})}
              >
                <option value="all">All Users</option>
                <option value="patients">Patients Only</option>
                <option value="therapists">Therapists Only</option>
                <option value="admins">Admins Only</option>
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            className="send-button"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Announcement'}
          </button>
        </form>
      </div>

      <div className="announcement-history">
        <h3>Recent Announcements</h3>
        {announcements.length === 0 ? (
          <p>No announcements sent yet</p>
        ) : (
          <ul>
            {announcements.map(ann => (
              <li key={ann.id} className={`announcement-item urgency-${ann.urgency}`}>
                <div className="announcement-header">
                  <h4>{ann.title}</h4>
                  <span className="urgency-badge">{ann.urgency}</span>
                </div>
                <p>{ann.message}</p>
                <div className="announcement-meta">
                  <span>Sent to: {ann.recipientType}</span>
                  <span>{new Date(ann.createdAt).toLocaleString()}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}