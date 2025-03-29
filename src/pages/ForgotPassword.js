import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // For demo purposes - in a real app this would send a password reset email
    setIsSubmitted(true);
    setError('');
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <div className="forgot-password-header">
          <h2>Reset Password</h2>
          <p>Enter your email to receive password reset instructions</p>
        </div>
        
        {error && <div className="forgot-password-error">{error}</div>}
        
        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Check your email</h3>
            <p>We've sent password reset instructions to {email}</p>
            <Link to="/login" className="back-to-login">Back to Login</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <button type="submit" className="reset-button">Send Reset Link</button>
            
            <div className="login-link">
              <Link to="/login">Back to Login</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword; 