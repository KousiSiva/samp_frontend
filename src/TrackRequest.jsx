
import React, { useEffect, useState } from 'react';
import './TrackRequest.css';

export default function TrackRequest() {
    const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const allRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
    const userRequests = allRequests.filter(
      (req) => req.rollNumber === userProfile.rollNumber
    );
    setRequests(userRequests);
  }, [userProfile.rollNumber]);

  return (
    <div className="track-request-container">
      <h2 className="track-request-title">Your Leave Request Status</h2>
      {requests.length === 0 ? (
        <p>No leave requests found.</p>
      ) : (
        <table className="request-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Tutor</th>
              <th>Leave Letter</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={index}>
                <td>{req.submittedAt}</td>
                <td>{req.tutor}</td>
                <td>{req.leaveLetter}</td>
                <td
                  className={`status ${
                    req.status.toLowerCase()
                  }`}
                >
                  {req.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
