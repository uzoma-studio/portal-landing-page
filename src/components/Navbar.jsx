import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Portal Logo" className="logo-image" />
          <span>Portal</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 