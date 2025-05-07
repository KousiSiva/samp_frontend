import React, { useState } from 'react';
import './MarkAttendance.css';

export default function MarkAttendance() {
  const [status, setStatus] = useState('Present');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const studentName = "Kousima"; 

  const handleMarkAttendance = () => {
    if (!date) {
      setMessage('Please select a date');
      return;
    }

   
    const storedAttendance = JSON.parse(localStorage.getItem('attendance')) || {};


    storedAttendance[date] = storedAttendance[date] || {};
    storedAttendance[date][studentName] = status;


    localStorage.setItem('attendance', JSON.stringify(storedAttendance));

    setMessage(`Attendance marked as ${status} for ${studentName} on ${date}`);
  };

  return (
    <div className="attendance-container">
      <h2 className="attendance-title">Mark Your Attendance</h2>

      <div className="form-group">
        <label className="label">Select Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="date-picker"
          required
        />
      </div>

      <div className="form-group">
        <label className="label">Select Attendance</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="select-box"
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Late">Late</option>
        </select>
      </div>

      <button onClick={handleMarkAttendance} className="submit-btn">
        Submit Attendance
      </button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}
