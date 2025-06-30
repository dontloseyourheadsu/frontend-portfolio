import React, { useState, useEffect } from 'react';
import './MinimalSplash.css';

const MinimalSplash = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);

    return () => clearInterval(timeInterval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="minimal-splash">
      {/* Background Elements */}
      <div className="minimal-background">
        <div className="bg-grid"></div>
        <div className="floating-shapes">
          <div className="shape circle-1"></div>
          <div className="shape circle-2"></div>
          <div className="shape square-1"></div>
          <div className="shape triangle-1"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`minimal-content ${isVisible ? 'visible' : ''}`}>
        <div className="content-container">
          {/* Header Section */}
          <header className="minimal-header">
            <div className="brand-mark">
              <div className="mark-inner">
                <span className="mark-dot"></span>
              </div>
            </div>
            <h1 className="brand-name">Zenith</h1>
            <p className="brand-tagline">Simplicity in perfection</p>
          </header>

          {/* Main Message */}
          <main className="main-message">
            <h2 className="message-title">
              Something beautiful
              <br />
              is coming soon
            </h2>
            <p className="message-description">
              We're crafting an experience that celebrates simplicity and elegance. 
              Every detail matters, every moment counts.
            </p>
          </main>

          {/* Countdown Section */}
          <section className="countdown-section">
            <div className="countdown-grid">
              <div className="countdown-item">
                <span className="countdown-number">42</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">18</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">23</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">17</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>
          </section>

          {/* Email Signup */}
          <section className="signup-section">
            <div className="signup-container">
              <h3 className="signup-title">Be the first to know</h3>
              <form className="signup-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="email-input"
                    required
                  />
                  <button type="submit" className="submit-button">
                    <span>Notify Me</span>
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12,5 19,12 12,19"/>
                    </svg>
                  </button>
                </div>
              </form>
              <p className="signup-note">
                No spam, just updates. Unsubscribe at any time.
              </p>
            </div>
          </section>

          {/* Social Links */}
          <section className="social-section">
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Info */}
      <footer className="minimal-footer">
        <div className="footer-content">
          <div className="current-time">
            <span className="time-display">{formatTime(currentTime)}</span>
            <span className="date-display">{formatDate(currentTime)}</span>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Contact</a>
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalSplash;
