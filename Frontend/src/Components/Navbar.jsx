import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Professional Logo */}
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            <div className="logo-wrapper">
              <div className="logo-square">
                <span className="logo-letter">E</span>
              </div>
              <div className="logo-text">
                <span className="logo-primary">Edu</span>
                <span className="logo-secondary">Enroll</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Desktop Navigation - Enrollment, Login, Signup on right */}
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item">
              <Link 
                to="/enrollment" 
                className={`nav-link ${isActive('/enrollment') ? 'active' : ''}`}
              >
                Enrollment
              </Link>
            </li>
          </ul>

          <div className="auth-buttons">
            <Link to="/login" className="btn btn-login">
              Login
            </Link>
            <Link to="/signup" className="btn btn-signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;