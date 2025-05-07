import React, { useEffect, useState } from 'react';
import './ViewAnnouncements.css';

export default function ViewAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const allAnnouncements = JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(allAnnouncements);
  }, []);

  return (
    <div className="announcement-container">
      <h2>Announcements</h2>
      {announcements.length === 0 ? (
        <p>No announcements available.</p>
      ) : (
        <ul className="announcement-list">
          {announcements.map((ann, idx) => (
            <li key={idx} className="announcement-item">
              <h3>{ann.title}</h3>
              <p>{ann.content}</p>
              <small>Posted on: {ann.createdAt}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
