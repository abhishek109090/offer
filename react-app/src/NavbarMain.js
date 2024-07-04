// Navbar.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const NavbarMain = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const storedUser = localStorage.getItem('user');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
     
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token')
    setUser(null);
    navigate('/loginPage'); // Adjust the route as needed
  };
const dash=()=>{
    navigate('/')
}

  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src="https://indianwelfarefoundation.s3.ap-south-1.amazonaws.com/images.jpg" alt="Logo" />
    </div>
    <div className="navbar-center">
      
            <h3 onClick={dash} className='dash'>Dashboard</h3>
      
    </div>
    <div className="navbar-right">

        <div className="user-menu">
          <button className="login-button1">{user}</button>
          <div className="dropdown-content">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
     
    </div>
  </nav>
  );
};

export default NavbarMain;
