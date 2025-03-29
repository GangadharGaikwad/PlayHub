import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h1 className="section-title">ABOUT US</h1>
        
        <div className="about-content">
          <div className="about-image-placeholder">
            {/* About image will be placed here */}
          </div>
          
          <div className="about-text">
            <p className="about-description">
              At PlayHub, we are passionate about bringing together the thrill
              of esports and traditional sports under one seamless platform.
              Our mission is to empower gamers, athletes, and event
              organizers by simplifying venue bookings, ensuring world-class
              experiences for everyone.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h2 className="stat-number">50k+</h2>
                <p className="stat-label">USERS</p>
              </div>
              <div className="stat-item">
                <h2 className="stat-number">100+</h2>
                <p className="stat-label">VENUES</p>
              </div>
            </div>
            
            <div className="about-cards">
              <div className="about-card">
                <h3>
                  <span className="card-icon">⭐</span> What We Do:
                </h3>
                <p>
                  We provide a comprehensive platform to explore, compare,
                  and book esports arenas and sports facilities tailored to your
                  needs. From casual matches to professional tournaments,
                  we've got you covered.
                </p>
              </div>
              
              <div className="about-card">
                <h3>
                  <span className="card-icon">💡</span> Why We Started:
                </h3>
                <p>
                  We recognized the growing demand for accessible, high-
                  quality venues for both virtual and physical sports. PlayHub
                  was born to bridge this gap, creating opportunities for
                  communities to connect, compete, and excel.
                </p>
              </div>
              
              <div className="about-card">
                <h3>
                  <span className="card-icon">🏆</span> Our Promise:
                </h3>
                <p>
                  With PlayHub, you're not just booking a venue; you're
                  unlocking potential, fostering connections, and elevating
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 