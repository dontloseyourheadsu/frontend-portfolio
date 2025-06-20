import React, { useState } from 'react';
import './AnimatedComingSoon.css';

const AnimatedComingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="animated-coming-soon">
      <div className="animated-area">
        {/* Animated circles */}
        {[...Array(10)].map((_, index) => (
          <div key={index} className="circle-container">
            <div className="circle"></div>
          </div>
        ))}
      </div>
      
      <div className="content-container">
        <div className="brand">
          <div className="brand-logo">
            <div className="brand-cube"></div>
            <div className="brand-circle"></div>
          </div>
          <div className="brand-name">CUBERIO</div>
        </div>
        
        <div className="coming-soon">
          <h1>Something Amazing is Coming</h1>
          <p className="description">
            We're working hard to bring you a new digital experience. Our website is launching soon, 
            packed with features that will transform the way you interact with technology.
          </p>
        </div>
        
        <div className="progress-container">
          <div className="progress-label">
            <span>Development Progress</span>
            <span>85%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '85%' }}></div>
          </div>
        </div>
        
        <div className="subscribe">
          <h3>{submitted ? 'Thank you! We\'ll notify you soon!' : 'Be the first to know'}</h3>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
              />
              <button type="submit">NOTIFY ME</button>
            </form>
          ) : (
            <div className="success-message">
              <div className="checkmark">✓</div>
              <p>You're on the list!</p>
            </div>
          )}
        </div>
        
        <div className="social-links">
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">LinkedIn</a>
        </div>
        
        <div className="footer">
          <p>© {new Date().getFullYear()} Cuberio. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedComingSoon;
