import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const username = user?.username || 'User';

  const handleLogout = () => {
   
    navigate('/');
  };

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <div className="profile-icon" onClick={() => navigate('/profile')}>
          <FaUserCircle size={32} />
          <span>{username}</span>
        </div>
        <div className="logout-icon" onClick={handleLogout}>
          <FaSignOutAlt size={28} />
          <span>Logout</span>
        </div>
      </div>

      <div className="main-dashboard">
        <h1 className="dashboard-title">Welcome {username}</h1>

        <div className="dashboard-cards">
          <div className="dashboard-card" onClick={() => navigate('/mark-attendance')}>
            <h3>Mark Attendance</h3>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/leave-request')}>
            <h3>Leave Request</h3>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/leave-status')}>
            <h3>Track Leave Status</h3>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/view-announcements')}>
            <h3>View Announcements</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
