import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-placeholder"></div>
          <span>PlayHub</span>
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h3>QUICK LINKS</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/venues">Venues</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>CONNECT WITH US</h3>
            <ul className="footer-links">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>SUPPORT</h3>
            <ul className="footer-links">
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/cancellation">Cancellation Policy</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>CONTACT US</h3>
            <ul className="footer-links">
              <li><span className="contact-icon">✉️</span> Email: support@playhub.com</li>
              <li><span className="contact-icon">📞</span> Phone: +123 456 7890</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 PlayHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 