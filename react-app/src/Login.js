import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Navbar from './Navbar';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage('Both fields are required');
      return;
    }
  
    const credentials = { username, password };
  
    try {
      const response = await fetch('https://mrv1.indianwelfarefoundation.org.in/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.ok) {
        const data = await response.json();
        const userData = data.user;
        const token = data.token;
        const name = userData.name;
       
        localStorage.setItem('token', token);
        localStorage.setItem('user', name);
        navigate('/');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Invalid credentials');
      }
    } catch (error) {
    
      setErrorMessage('An error occurred. Please try again.');
    }
  };
  const token = localStorage.getItem('token')
useEffect(()=>{
    if(token){
        navigate('/');
    }
})
  return (
    <div><Navbar/>
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          <img src="https://mrvitsolutions.com/wp-content/uploads/2024/05/cropped-undefined-Imgur-3-e1714990918516-1-192x192.png" alt="Login" />
        </div>
        <div className="vertical-line"></div>
        <div className="login-form">
          <h2>Admin Login</h2>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="form-group">
            <label>Username</label>
            <input 
              type="email" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Username" 
              className={errorMessage && !username ? 'input-error' : ''}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              className={errorMessage && !password ? 'input-error' : ''}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div></div>
  );
};

export default LoginPage;
