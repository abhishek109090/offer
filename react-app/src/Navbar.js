// Navbar.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
   
  </nav>
  );
};

export default Navbar;
