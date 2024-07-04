// Dashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import NavbarMain from './NavbarMain';
const Dashboard = () => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem('token');

  useEffect(() => {
    const checkToken = async () => {
    

      if (!storedToken) {
        navigate('/LoginPage');
        return;
      }

      try {
        const response = await fetch('https://mrv1.indianwelfarefoundation.org.in/validate-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: storedToken }),
        });

        const data = await response.json();

        if (data.isValid) {
          // Token is valid, stay on the current page
         
        } else {
            localStorage.removeItem('token')
          // Token is not valid, navigate to login page
         
          navigate('/LoginPage');
        }
      } catch (error) {
        localStorage.removeItem('token')
        

    
        navigate('/LoginPage');
      }
    };

    checkToken();
  }, [navigate]);

  const handleGenerateNewOfferLetter = () => {
    navigate('/pdf');
  };

  const handleViewGeneratedOfferLetters = () => {
    navigate('/offer');
  };
  const handleViewGeneratedJoinLetters = () => {
    navigate('/Joining');
  };

  return (
    <div>      <NavbarMain/>

    <div className="dashboard-container">
    <div className="button-container">
      <button onClick={handleGenerateNewOfferLetter} className="dashboard-button">
        Generate New Offer Letter
      </button>
      <div className="vertical-line1"></div>
      <button onClick={handleViewGeneratedOfferLetters} className="dashboard-button">
        Offer Letters Generated
      </button>
      <div className="vertical-line1"></div>
      <button onClick={handleViewGeneratedJoinLetters} className="dashboard-button">
        Joining Letters Received
      </button>
    </div>
  </div></div>
  );
};

export default Dashboard;
