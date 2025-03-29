import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './VenueDetail.css';

const VenueDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [venueData, setVenueData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []);

  // Venue data for different venues
  const venuesData = {
    '1': {
      id: '1',
      name: 'Esports Stadium Arlington',
      location: 'Arlington, Texas, United States',
      features: ['Food', 'Music', 'Lights'],
      rating: 4.5,
      description: 'The Largest Turnkey Esports Facility In North America, Esports Stadium Arlington, Is Under New Management As Of 2022, OpTic Gaming.',
      images: [
        '/venue-images/stadium-1.jpg', 
        '/venue-images/stadium-2.jpg',
        '/venue-images/stadium-3.jpg', 
        '/venue-images/stadium-4.jpg'
      ]
    },
    '2': {
      id: '2',
      name: 'OVO Arena Wembley',
      location: 'Wembley, London, England',
      features: ['Food', 'Music', 'Lights'],
      rating: 4.0,
      description: 'OVO Arena Wembley is London\'s most iconic concert and events venue, hosting the world\'s most famous entertainment events for esports tournaments.',
      images: [
        '/venue-images/wembley-1.jpg', 
        '/venue-images/wembley-2.jpg',
        '/venue-images/wembley-3.jpg', 
        '/venue-images/wembley-4.jpg'
      ]
    },
    '3': {
      id: '3',
      name: 'Climate Pledge Arena',
      location: 'Seattle, Washington, United States',
      features: ['Food', 'Music', 'Lights'],
      rating: 5.0,
      description: 'Climate Pledge Arena is a multi-purpose arena in Seattle, Washington. It is the home of several sports teams and hosts major esports championships.',
      images: [
        '/venue-images/climate-1.jpg', 
        '/venue-images/climate-2.jpg',
        '/venue-images/climate-3.jpg', 
        '/venue-images/climate-4.jpg'
      ]
    },
    '4': {
      id: '4',
      name: 'Crypto.com Arena',
      location: 'Downtown Los Angeles, United States',
      features: ['Food', 'Music', 'Lights'],
      rating: 4.5,
      description: 'Crypto.com Arena is a multi-purpose arena in Downtown Los Angeles, hosting events ranging from sports championships to esports tournaments.',
      images: [
        '/venue-images/crypto-1.jpg', 
        '/venue-images/crypto-2.jpg',
        '/venue-images/crypto-3.jpg', 
        '/venue-images/crypto-4.jpg'
      ]
    },
    '5': {
      id: '5',
      name: 'Deutsche Bank Park',
      location: 'Frankfurt, Hesse, Germany',
      features: ['Food', 'Music', 'Lights'],
      rating: 4.0,
      description: 'Deutsche Bank Park is a stadium in Frankfurt, Germany. It hosts various events including football matches and esports competitions.',
      images: [
        '/venue-images/deutsche-1.jpg', 
        '/venue-images/deutsche-2.jpg',
        '/venue-images/deutsche-3.jpg', 
        '/venue-images/deutsche-4.jpg'
      ]
    },
    '6': {
      id: '6',
      name: 'SAP Center',
      location: 'San Jose, California, United States',
      features: ['Food', 'Music', 'Lights'],
      rating: 4.5,
      description: 'SAP Center at San Jose is an indoor arena located in San Jose, California. It hosts ice hockey, figure skating, MMA, and esports tournaments.',
      images: [
        '/venue-images/sap-1.jpg', 
        '/venue-images/sap-2.jpg',
        '/venue-images/sap-3.jpg', 
        '/venue-images/sap-4.jpg'
      ]
    },
    '7': {
      id: '7',
      name: 'Seoul World Cup Stadium',
      location: 'Mapogu, Seoul, South Korea',
      features: ['Food', 'Music', 'Lights'],
      rating: 4.5,
      description: 'Seoul World Cup Stadium is a sports and entertainment venue in Seoul, South Korea, that hosts major sporting events and esports competitions, especially League of Legends tournaments.',
      images: [
        '/venue-images/seoul-1.jpg', 
        '/venue-images/seoul-2.jpg',
        '/venue-images/seoul-3.jpg', 
        '/venue-images/seoul-4.jpg'
      ]
    },
    '8': {
      id: '8',
      name: 'Copper Box Arena',
      location: 'London, England',
      features: ['Food', 'Music', 'Lights'],
      rating: 4.0,
      description: 'The Copper Box Arena is a multi-sport venue used for the 2012 Summer Olympics and now hosts a variety of sports and esports events in London.',
      images: [
        '/venue-images/copper-1.jpg', 
        '/venue-images/copper-2.jpg',
        '/venue-images/copper-3.jpg', 
        '/venue-images/copper-4.jpg'
      ]
    }
  };

  // Maximum venue ID
  const maxVenueId = 8;

  // Load venue data based on ID
  useEffect(() => {
    const venue = venuesData[id] || venuesData['1']; // Fallback to first venue if ID not found
    setVenueData(venue);
  }, [id]);

  // If venue data hasn't loaded yet
  if (!venueData) {
    return <div className="loading">Loading venue details...</div>;
  }

  // Get calendar days for the current month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<td key={`empty-${i}`} className="empty-day">·</td>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <td 
          key={`day-${day}`} 
          className={`calendar-day ${selectedDate && selectedDate.getDate() === day ? 'selected' : ''}`}
          onClick={() => setSelectedDate(new Date(year, month, day))}
        >
          {day}
        </td>
      );
    }
    
    return days;
  };

  // Generate weeks for the calendar
  const generateCalendarWeeks = () => {
    const days = generateCalendarDays();
    const weeks = [];
    let week = [];
    
    days.forEach((day, index) => {
      week.push(day);
      if ((index + 1) % 7 === 0 || index === days.length - 1) {
        // Pad the last week if needed
        while (week.length < 7) {
          week.push(<td key={`empty-end-${week.length}`} className="empty-day">·</td>);
        }
        weeks.push(<tr key={`week-${weeks.length}`}>{week}</tr>);
        week = [];
      }
    });
    
    return weeks;
  };

  const handleBookNow = () => {
    if (isLoggedIn) {
      setShowCalendar(!showCalendar);
    } else {
      setShowLoginPrompt(true);
    }
  };

  const navigateToLogin = () => {
    // Save current location for redirect after login
    sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
    navigate('/login');
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const formatMonth = (date) => {
    return date.toLocaleString('default', { month: 'long' }).toUpperCase();
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="venue-detail-page">
      <div className="back-button" onClick={goBack}>
        <div className="circle-btn">
          <span className="back-icon">&#8592;</span>
        </div>
      </div>
      
      <div className="container venue-detail-container">
        <div className="venue-gallery">
          <div className="main-image-container">
            <div className="venue-main-image"></div>
          </div>
          
          <div className="thumbnail-container">
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
          </div>
        </div>
        
        <div className="venue-details">
          <h1 className="venue-name">{venueData.name}</h1>
          <p className="venue-location">{venueData.location}</p>
          
          <div className="venue-features">
            {venueData.features.map((feature, index) => (
              <div key={index} className="feature">
                <span className="feature-icon">
                  {feature === 'Food' ? '🍔' : feature === 'Music' ? '🎵' : '💡'}
                </span> 
                {feature}
              </div>
            ))}
          </div>
          
          <div className="venue-rating">
            {[...Array(Math.floor(venueData.rating))].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
            {venueData.rating % 1 !== 0 && <span className="star half">★</span>}
          </div>
          
          <p className="venue-description">{venueData.description}</p>
          
          <div className="booking-section">
            <button className="book-now-button" onClick={handleBookNow}>
              BOOK NOW <span className="arrow-icon">→</span>
            </button>
            
            {showCalendar && (
              <div className="calendar-container">
                <div className="calendar-header">
                  <button className="month-nav prev" onClick={handlePrevMonth}>←</button>
                  <div className="current-month">
                    {formatMonth(currentMonth)} {currentMonth.getFullYear()}
                  </div>
                  <button className="month-nav next" onClick={handleNextMonth}>→</button>
                </div>
                
                <table className="calendar">
                  <thead>
                    <tr>
                      <th>Su</th>
                      <th>Mo</th>
                      <th>Tu</th>
                      <th>We</th>
                      <th>Th</th>
                      <th>Fr</th>
                      <th>St</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generateCalendarWeeks()}
                  </tbody>
                </table>
                
                {selectedDate && (
                  <div className="selected-date-info">
                    Selected date: {selectedDate.toLocaleDateString()}
                    <button className="confirm-booking">Confirm Booking</button>
                  </div>
                )}
              </div>
            )}
            
            {showLoginPrompt && (
              <div className="login-prompt">
                <div className="login-prompt-content">
                  <h3>Login Required</h3>
                  <p>You need to be logged in to book this venue.</p>
                  <div className="login-prompt-buttons">
                    <button 
                      className="login-prompt-button login" 
                      onClick={navigateToLogin}
                    >
                      Log In
                    </button>
                    <button 
                      className="login-prompt-button cancel" 
                      onClick={() => setShowLoginPrompt(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="venue-navigation">
        <button className="nav-arrow prev" onClick={() => {
          const prevId = String(Math.max(1, parseInt(id) - 1));
          navigate(`/venue/${prevId}`);
        }}>
          <span>&#8592;</span>
        </button>
        <button className="nav-arrow next" onClick={() => {
          const nextId = String(Math.min(maxVenueId, parseInt(id) + 1));
          navigate(`/venue/${nextId}`);
        }}>
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default VenueDetail; 