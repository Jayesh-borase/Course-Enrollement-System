import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">
              <span className="logo-primary">Edu</span>
              <span className="logo-secondary">Enroll</span>
            </span>
          </div>
          <p className="footer-description">
            Empowering students with quality education through modern learning platforms.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Platform</h4>
            <a href="/dashboard">Dashboard</a>
            <a href="/courses">Courses</a>
            <a href="/enrollment">Enrollment</a>
            <a href="/progress">Progress</a>
          </div>
          
          <div className="link-group">
            <h4>Support</h4>
            <a href="/help">Help Center</a>
            <a href="/contact">Contact Us</a>
            <a href="/faq">FAQ</a>
            <a href="/community">Community</a>
          </div>
          
          <div className="link-group">
            <h4>Legal</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {currentYear} EduEnroll. All rights reserved.</p>
        <div className="social-links">
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="GitHub">⚡</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;