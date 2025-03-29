import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  // Check login status
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedInStatus);
    };
    
    // Check initially
    checkLoginStatus();
    
    // Set up event listener for storage changes
    window.addEventListener('storage', checkLoginStatus);
    
    // Custom event for login status change
    window.addEventListener('loginStatusChanged', checkLoginStatus);
    
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      window.removeEventListener('loginStatusChanged', checkLoginStatus);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLogin = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    // Dispatch event to notify other components
    window.dispatchEvent(new Event('loginStatusChanged'));
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-placeholder"></div>
          <span>PlayHub</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? 'hamburger active' : 'hamburger'}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about-us" 
              className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/venues" 
              className={`nav-link ${location.pathname === '/venues' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Venues
            </Link>
          </li>
        </ul>
        
        {isLoggedIn ? (
          <button className="nav-btn logout-btn" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <Link to="/login" className="nav-btn" onClick={() => setIsMenuOpen(false)}>
            Log In <span className="arrow-icon">→</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 