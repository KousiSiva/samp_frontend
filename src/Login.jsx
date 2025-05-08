import React, { useState } from 'react';
import './Login.css'; 
import './index.css';
import { FaUnlockAlt, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin123') {
      const adminUser = { username: 'admin', role: 'admin' };
      localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
      navigate('/admin-dashboard');
    } else {
      const user = {
        username,
        email: `${username}@student.kce.edu`,
        rollNumber: 'KCE' + Math.floor(Math.random() * 100000),
        department: 'CSE',
        role: 'student'
      };
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      localStorage.setItem('studentName', username);

      navigate('/dashboard');
    }
  };

  return (
    <div className='wrapper'>
      <fieldset>
        <form onSubmit={handleLogin}>
          <div>
            <h1 align='center'><u><i>Login</i></u></h1>
          </div>

          <div className='input-box' align='center'>
            <input
              type="text"
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className='icon' /><br />
          </div>

          <div className='input-box' align='center'>
            <input
              type="password"
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaUnlockAlt className='icon' /><br />
          </div>

          <div className="remember-forgot">
  <label className="remember-label">
    <input type="checkbox" /> Remember me
  </label>
  <a href="#">Forgot password?</a><br />
</div>

          <button type="submit">Login</button><br />

          <div className="register-link">
            <p>Don't have an account? <a href="/signup">Sign Up</a></p><br />
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
