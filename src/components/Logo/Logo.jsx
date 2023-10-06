// Logo.jsx

import React from 'react';
import './Logo.css'; // Import your CSS file for styling
import logoImage from '../../logo.png'; // Import the image from the src directory

const Logo = () => {
  const logoStyle = {
    backgroundImage: `url(${logoImage})`, // Use the imported image as a background
  };

  return (
    <div className="logo-container">
      <div className="logo" style={logoStyle}></div>
    </div>
  );
};

export default Logo;
