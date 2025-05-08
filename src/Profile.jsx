import React, { useState, useEffect } from 'react';
import './Profile.css';

export default function Profile() {
  const [profileData, setProfileData] = useState({
    fullName: '',
    rollNumber: '',
    dob: '',
    email: '',
    department: '',
    fatherName: '',
    motherName: '',
    parentPhone: '',
    parentEmail: ''
  });

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
      setProfileData(prev => ({ ...prev, ...storedProfile }));
    }
  }, []);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    alert('Profile saved successfully!');
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form onSubmit={handleSave} className="profile-form">
        {Object.entries(profileData).map(([key, value]) => (
          <div key={key} className="form-group">
            <label>{key.replace(/([A-Z])/g, ' $1')}</label>
            {key === 'department' ? (
              <select
                name="department"
                value={profileData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="MECH">MECH</option>
              </select>
            ) : (
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}
        <button type="submit" className="submit-btn">Save Profile</button>
      </form>
    </div>
  );
}
