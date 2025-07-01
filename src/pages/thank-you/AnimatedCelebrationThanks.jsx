import React, { useState, useEffect } from 'react';
import './AnimatedCelebrationThanks.css';

const AnimatedCelebrationThanks = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [balloonFloat, setBalloonFloat] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger animations in sequence
    setTimeout(() => setShowConfetti(true), 300);
    setTimeout(() => setBalloonFloat(true), 600);
    setTimeout(() => setShowContent(true), 900);
  }, []);

  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
    color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a55eea'][Math.floor(Math.random() * 5)]
  }));

  const balloons = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: 10 + (i * 11),
    delay: i * 0.2,
    color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'][i % 4]
  }));

  return (
    <div className="animated-celebration-thanks">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="confetti-container">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className="confetti-piece"
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`,
                backgroundColor: piece.color
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Balloons */}
      {balloonFloat && (
        <div className="balloons-container">
          {balloons.map((balloon) => (
            <div
              key={balloon.id}
              className="balloon"
              style={{
                left: `${balloon.left}%`,
                animationDelay: `${balloon.delay}s`,
                backgroundColor: balloon.color
              }}
            >
              <div className="balloon-string"></div>
            </div>
          ))}
        </div>
      )}

      {/* Background Elements */}
      <div className="celebration-background">
        <div className="sparkle-stars">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="sparkle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}>✨</div>
          ))}
        </div>
        <div className="celebration-rings">
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`celebration-content ${showContent ? 'visible' : ''}`}>
        <div className="content-container">
          {/* Success Icon */}
          <div className="success-icon-container">
            <div className="success-icon">
              <div className="checkmark">
                <svg viewBox="0 0 52 52" className="checkmark-svg">
                  <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                  <path className="checkmark-check" fill="none" d="m14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
              </div>
            </div>
            <div className="success-glow"></div>
          </div>

          {/* Main Message */}
          <div className="celebration-message">
            <h1 className="celebration-title">
              <span className="title-line wow-text">WOW!</span>
              <span className="title-line main-text">Thank You!</span>
              <span className="title-line sub-text">You're Amazing!</span>
            </h1>
            
            <p className="celebration-description">
              🎉 Your submission was successful! We're absolutely thrilled to have you on board. 
              Get ready for something SPECTACULAR coming your way!
            </p>
          </div>

          {/* Party Stats */}
          <div className="party-stats">
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-info">
                <span className="stat-number">Mission</span>
                <span className="stat-label">Complete!</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-info">
                <span className="stat-number">Lightning</span>
                <span className="stat-label">Fast Response</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-info">
                <span className="stat-number">Ready to</span>
                <span className="stat-label">Launch!</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="next-steps">
            <h2 className="steps-title">What happens next?</h2>
            <div className="steps-timeline">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Confirmation Email</h3>
                  <p>Check your inbox! We've sent you all the details.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>We'll Be In Touch</h3>
                  <p>Our team will reach out within 24 hours with next steps.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Let's Get Started!</h3>
                  <p>Time to make some magic happen together!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="celebration-actions">
            <button className="action-btn primary-btn">
              <span className="btn-text">🎊 Continue Exploring</span>
              <div className="btn-sparkle">✨</div>
            </button>
            <button className="action-btn secondary-btn">
              <span className="btn-text">📱 Follow Us</span>
              <div className="btn-glow"></div>
            </button>
          </div>

          {/* Social Share */}
          <div className="social-celebration">
            <h3 className="social-title">Share the joy! 🎉</h3>
            <div className="social-buttons">
              <a href="#" className="social-btn twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Tweet
              </a>
              <a href="#" className="social-btn facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Share
              </a>
              <a href="#" className="social-btn linkedin">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="celebration-footer">
        <p className="footer-message">
          💖 Made with love and lots of confetti! Thank you for being awesome! 💖
        </p>
      </div>
    </div>
  );
};

export default AnimatedCelebrationThanks;
