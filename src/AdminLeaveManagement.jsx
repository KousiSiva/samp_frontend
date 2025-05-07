import React, { useEffect, useState } from 'react';
import './AdminLeaveManagement.css';

export default function AdminLeaveManagement() {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const allRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
    setLeaveRequests(allRequests);
  }, []);

  const updateStatus = (index, status) => {
    const updatedRequests = [...leaveRequests];
    updatedRequests[index].status = status;

    setLeaveRequests(updatedRequests);
    localStorage.setItem('leaveRequests', JSON.stringify(updatedRequests));
  };

  return (
    <div className="admin-leave-container">
      <h2 className="admin-leave-title">Manage Leave Requests</h2>
      {leaveRequests.length === 0 ? (
        <p>No leave requests found.</p>
      ) : (
        <table className="leave-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Department</th>
              <th>Tutor</th>
              <th>Leave Letter</th>
              <th>Action</th>
              <th>Status</th> 
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((req, index) => (
              <tr key={index}>
                <td>{req.submittedAt}</td>
                <td>{req.name}</td>
                <td>{req.rollNumber}</td>
                <td>{req.department}</td>
                <td>{req.tutor}</td>
                <td>{req.leaveLetter}</td>
                <td>
                  <button
                    className="approve-btn"
                    onClick={() => updateStatus(index, 'Approved')}
                  >
                    Approve
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => updateStatus(index, 'Rejected')}
                  >
                    Reject
                  </button>
                </td>
                <td className={`status-cell ${req.status?.toLowerCase() || 'pending'}`}>
                  {req.status || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
