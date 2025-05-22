import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <img src={logo} alt="Portal Logo" className="logo-image" />
          <span className='navbar-title'>Portal</span>
        </div>
        
        <div className="nav-links">
          {/* <a href="#portal-features" className="nav-link">Features</a>
          <a href="#challenges" className="nav-link">Challenges</a> */}
          <a href="#sign-up" className="nav-link">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 