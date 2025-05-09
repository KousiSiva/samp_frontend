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

    const validStudents = {
      kousima: 'Kousima123',
      anu: 'Anu123',
      keerthi: 'Keerthi123',
    };

    if (username === 'admin' && password === 'admin123') {
      navigate('/admin-dashboard');
    } else if (validStudents[username.toLowerCase()] === password) {
      navigate('/dashboard', { state: { username } });
    } else {
      alert('Invalid User');
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
            <label className="remember-label"><input type="checkbox" />Remember me</label>
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
