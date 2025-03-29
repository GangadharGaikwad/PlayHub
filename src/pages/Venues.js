import React from 'react';
import { Link } from 'react-router-dom';
import './Venues.css';

const Venues = () => {
  const venues = [
    {
      id: 1,
      name: 'Esports Stadium Arlington',
      location: 'Arlington, Texas, United States',
      type: 'Esports Venue',
      color: 'pink',
    },
    {
      id: 2,
      name: 'OVO Arena Wembley',
      location: 'Wembley, London, England',
      type: 'Esports Venue',
      color: 'purple',
    },
    {
      id: 3,
      name: 'Climate Pledge Arena',
      location: 'Seattle, Washington, United States',
      type: 'Sports Venue',
      color: 'pink',
    },
    {
      id: 4,
      name: 'Crypto.com Arena',
      location: 'Downtown Los Angeles, United States',
      type: 'Sports Venue',
      color: 'purple',
    },
    {
      id: 5,
      name: 'Deutsche Bank Park',
      location: 'Frankfurt, Hesse, Germany',
      type: 'Sports Venue',
      color: 'purple',
    },
    {
      id: 6,
      name: 'SAP Center',
      location: 'San Jose, California, United States',
      type: 'Sports Venue',
      color: 'pink',
    },
    {
      id: 7,
      name: 'Seoul World Cup Stadium',
      location: 'Mapogu, Seoul, South Korea',
      type: 'Sports Venue',
      color: 'purple',
    },
    {
      id: 8,
      name: 'Copper Box Arena',
      location: 'London, England',
      type: 'Esports Venue',
      color: 'pink',
    },
  ];

  return (
    <div className="venues-page">
      <div className="container">
        <h1 className="section-title">TOP VENUES</h1>
        
        <div className="venues-grid">
          {venues.map((venue) => (
            <Link 
              to={`/venue/${venue.id}`} 
              key={venue.id}
              className="venue-card-link"
            >
              <div 
                className={`venue-card ${venue.color === 'pink' ? 'pink' : 'purple'}`}
              >
                <div className="venue-image-placeholder">
                  {/* Venue image will be placed here */}
                </div>
                <div className="venue-info">
                  <h3>{venue.name}</h3>
                  <p className="venue-location">{venue.location}</p>
                  <span className="venue-type">{venue.type}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Venues; 