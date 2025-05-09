import React, { useState } from 'react';
import './LeaveRequest.css';

export default function LeaveRequest() {
  const [leaveData, setLeaveData] = useState({
    name: '',
    rollNumber: '',
    department: '',
    tutor: '',
    leaveLetter: ''
  });

  const tutorOptions = {
    CSE: ['John Doe', 'Priya Raj', 'Amit Shah'],
    ECE: ['Jane Smith', 'Lakshmi Menon', 'Ajay Kumar'],
    MECH: ['Robert Brown', 'Kiran Rao', 'Dinesh Mehta']
  };

  const handleChange = (e) => {
    setLeaveData({ ...leaveData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      ...leaveData,
      submittedAt: new Date().toLocaleDateString(),
      status: 'Pending'
    };

    const allRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
    allRequests.push(newRequest);
    localStorage.setItem('leaveRequests', JSON.stringify(allRequests));

    alert('Leave request submitted');
    console.log('Submitted Request:', newRequest);
  };

  const currentTutors = tutorOptions[leaveData.department] || [];

  return (
    <div className="leave-request-container">
      <h2 className="leave-request-title">Leave Request</h2>
      <form onSubmit={handleSubmit} className="leave-request-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={leaveData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={leaveData.rollNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={leaveData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Tutor Selection</label>
          <select
            name="tutor"
            value={leaveData.tutor}
            onChange={handleChange}
            required
          >
            <option value="">Select Tutor</option>
            {currentTutors.map((tutor) => (
              <option key={tutor} value={tutor}>{tutor}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Leave Letter</label>
          <textarea
            name="leaveLetter"
            value={leaveData.leaveLetter}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit Leave Request</button>
      </form>
    </div>
  );
}
