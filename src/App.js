import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import MarkAttendance from './MarkAttendance';
import Login from './Login';
import LeaveRequest from './LeaveRequest'; 
import TrackRequest from './TrackRequest'; 
import Signup from './Signup';
import ViewAnnouncements from './ViewAnnouncements';
import AdminDashboard from './AdminDashboard';
import AttendanceManagement from './AttendanceManagement'; 
import AdminProfile from './AdminProfile'; 
import AdminLeaveManagement from './AdminLeaveManagement';
import AdminAnnouncements from './AdminAnnouncements';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/admin-leave-requests" element={<AdminLeaveManagement />} />
      <Route path="/admin-announcements" element={<AdminAnnouncements />} />
        <Route path="/" element={<Login />} />
        <Route path="/admin-attendance" element={<AttendanceManagement />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/view-announcements" element={<ViewAnnouncements />} />
<Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mark-attendance" element={<MarkAttendance />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/leave-status" element={<TrackRequest />} />       

      </Routes>
    </Router>
  );
}
