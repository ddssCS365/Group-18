// src/components/Admin/AnnouncementService.js

const loadAnnouncements = () => {
  const saved = localStorage.getItem('announcements') || '[]';
  return JSON.parse(saved);
};

let announcements = loadAnnouncements();

const saveAnnouncements = (data) => {
  localStorage.setItem('announcements', JSON.stringify(data));
};

export const getAnnouncements = async () => {
  return [...announcements];
};

export const createAnnouncement = async (announcement) => {
  const newAnnouncement = {
    id: Date.now(),
    ...announcement,
    createdAt: new Date().toISOString(),
    status: 'sent'
  };
  announcements.unshift(newAnnouncement);
  saveAnnouncements(announcements);
  return newAnnouncement;
};

export const sendToAllUsers = async (message) => {
  // Simulated API call
  console.log('Broadcasting to all users:', message);
  return true;
};

