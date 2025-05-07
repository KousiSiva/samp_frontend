import React, { useState } from 'react';
import './AdminAnnouncements.css';

export default function AdminAnnouncements() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handlePost = () => {
    if (!title || !message) {
      alert('Please fill in both fields.');
      return;
    }

    const all = JSON.parse(localStorage.getItem('announcements')) || [];

    const newAnnouncement = {
      title,
      content: message,
      createdAt: new Date().toLocaleString()
    };

    localStorage.setItem('announcements', JSON.stringify([...all, newAnnouncement]));
    alert('Announcement posted!');
    setTitle('');
    setMessage('');
  };

  return (
    <div className="announcement-form-container">
  <h2>Post Announcement</h2>
  <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"/>
        <button onClick={handlePost}>Post Announcement</button>
      
</div>
    
  );
}
