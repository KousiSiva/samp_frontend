
import React, { useState } from 'react';
import './Login.css';
import './index.css';
import { FaUnlockAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const user = {
      username: formData.name,
      email: formData.email,
      rollNumber: 'KCE' + Math.floor(Math.random() * 100000),
      department: 'CSE'
    };

    localStorage.setItem('loggedInUser', JSON.stringify(user));
    navigate('/dashboard');
  };

  return (
    <div className='wrapper'>
      <fieldset>
        <form onSubmit={handleSignup}>
          <div>
            <h1 align='center'><u><i>Signup</i></u></h1>
          </div>

          <div className='input-box' align='center'>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FaUser className='icon' /><br />
          </div>

          <div className='input-box' align='center'>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <MdEmail className='icon' /><br />
          </div>

          <div className='input-box' align='center'>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FaUnlockAlt className='icon' /><br />
          </div>

          <button type="submit">Signup</button><br />

          <div className="register-link">
            <p>Already have an account? <a href="/">Login</a></p><br />
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Signup;
