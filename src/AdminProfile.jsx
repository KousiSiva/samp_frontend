import React from 'react';
import { useLocation } from 'react-router-dom';
import './AdminProfile.css';

export default function AdminProfile() {
  const location = useLocation();
  const { adminProfile } = location.state || {};

  return (
    <div className="admin-profile-page">
      <h1>Admin Profile</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {adminProfile?.name || 'John Doe'}</p>
        <p><strong>Roll No:</strong> {adminProfile?.rollNo || 'A123456'}</p>
        <p><strong>Degree:</strong> {adminProfile?.degree || 'B.E'}</p>
        <p><strong>Department:</strong> {adminProfile?.department || 'CSE'}</p>
        <p><strong>Mobile:</strong> {adminProfile?.mobile || '9597642109'}</p>
        <p><strong>Email:</strong> {adminProfile?.email || 'admin@gmail.com'}</p>
      </div>
    </div>
  );
}
