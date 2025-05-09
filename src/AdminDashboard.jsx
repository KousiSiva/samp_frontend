import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [adminProfile, setAdminProfile] = useState({
    name: 'John Doe', 
    rollNo: 'A123456', 
    degree: 'B.E', 
    department: 'CSE', 
    mobile: '9876543210', 
    email: 'admin@example.com', 
  });

  const handleLogout = () => {
   
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/admin-profile', { state: { adminProfile } });
  };

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <div className="profile-icon" onClick={() => navigate('/admin-profile')}>
                  <FaUserCircle size={32} />
                  <span>{adminProfile.name}</span>
                </div>
       
        <div className="logout-icon" onClick={handleLogout}>
          <FaSignOutAlt size={28} />
          <span>Logout</span>
        </div>
      </div>

      <div className="main-dashboard">
        <h1>Welcome Admin!</h1>

        <div className="dashboard-cards">
          <div className="dashboard-card" onClick={() => navigate('/admin-attendance')}>
            <h3>View Attendance</h3>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/admin-leave-requests')}>
            <h3>Manage Leave Request</h3>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/admin-announcements')}>
            <h3>Make Announcements</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
