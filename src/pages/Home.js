import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const venues = [
    {
      id: 1,
      name: 'Singapore Indoor Stadium',
      location: 'Kallang, Singapore',
      features: ['Food', 'Music', 'Lights'],
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Mercedes-Benz Arena',
      location: 'Shanghai, China',
      features: ['Food', 'Music', 'Lights'],
      rating: 4.5,
    },
    {
      id: 3,
      name: 'LCS Studio',
      location: 'Los Angeles, USA',
      features: ['Food', 'Music', 'Lights'],
      rating: 5,
    },
  ];

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Your <span className="highlight">ULTIMATE</span> Venue Booking Platform
            </h1>
            <p className="hero-text">
              Experience The Ease Of Booking Premium Venues For Esports
              Tournaments, Gaming Sessions, And Traditional Sports Events, All In One
              Place.
            </p>
          </div>
          <div className="hero-image-placeholder">
            {/* Hero image will be placed here */}
          </div>
        </div>
      </section>

      <section className="featured-venues">
        <div className="container">
          <div className="venue-cards">
            {venues.map((venue) => (
              <Link to={`/venue/${venue.id}`} key={venue.id} className="venue-card-link">
                <div className="venue-card">
                  <div className="venue-image-placeholder">
                    {/* Venue image will be placed here */}
                  </div>
                  <div className="venue-info">
                    <h3>{venue.name}</h3>
                    <p className="venue-location">{venue.location}</p>
                    <div className="venue-features">
                      {venue.features.map((feature, index) => (
                        <span key={index} className="venue-feature">
                          <span className="feature-icon">{feature === 'Food' ? '🍔' : feature === 'Music' ? '🎵' : '💡'}</span>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="venue-rating">
                      {[...Array(Math.floor(venue.rating))].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                      {venue.rating % 1 !== 0 && <span className="star half">★</span>}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-container">
          <Link to="/game" className="cta-button game">
            JOIN A GAME <span className="cta-icon">🎮</span>
          </Link>
          <Link to="/venues" className="cta-button book">
            BOOK NOW <span className="cta-icon">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 