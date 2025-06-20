import React, { useState } from 'react';
import './MinimalComingSoon.css';

const MinimalComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };
  
  return (
    <div className="minimal-coming-soon">
      <div className="content-wrapper">
        <header>
          <div className="logo">
            <span className="logo-text">MONOCHROME</span>
          </div>
        </header>
        
        <main className="main-content">
          <div className="shape-container">
            <div className="shape-one"></div>
            <div className="shape-two"></div>
          </div>
          
          <h1 className="page-title">We're Coming Soon</h1>
          <p className="description">
            Our minimalist design studio is launching soon. We specialize in creating
            clean, purposeful, and elegant experiences for brands that appreciate
            simplified aesthetics.
          </p>
          
          <div className="subscribe-container">
            {isSubscribed ? (
              <div className="success-message">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="subscribe-form">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  required 
                />
                <button type="submit">Notify Me</button>
              </form>
            )}
          </div>
          
          <div className="launch-info">
            <div className="info-item">
              <span className="label">Launch Date</span>
              <span className="value">January 2023</span>
            </div>
            <div className="info-item">
              <span className="label">Location</span>
              <span className="value">Worldwide</span>
            </div>
            <div className="info-item">
              <span className="label">Focus</span>
              <span className="value">Minimal Design</span>
            </div>
          </div>
        </main>
        
        <footer>
          <div className="social-links">
            <a href="#" className="social-link"></a>
            <a href="#" className="social-link"></a>
            <a href="#" className="social-link"></a>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Monochrome Studio. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MinimalComingSoon;
