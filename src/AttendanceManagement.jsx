import React, { useState, useEffect } from 'react';
import './AttendanceManagement.css';

export default function AttendanceManagement() {
  const [attendanceData, setAttendanceData] = useState({});
  const students = ["Kousima", "Anu", "Keerthi", "Raja", "Sonu", "Dan"];

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('attendance')) || {};
      setAttendanceData(data);
    } catch (err) {
      console.error('Invalid attendance data:', err);
    }
  }, []);

  const allDates = Object.keys(attendanceData).sort();

  return (
    <div className="admin-attendance-container">
      <h2>Student Attendance Records</h2>
      {allDates.length === 0 ? (
        <p>No attendance records found.</p>
      ) : (
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Student Name</th>
              {allDates.map(date => (
                <th key={date}>{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student}>
                <td>{student}</td>
                {allDates.map(date => (
                  <td key={date}>
                    {attendanceData[date] && attendanceData[date][student]
                      ? attendanceData[date][student]
                      : '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
