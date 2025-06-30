import React, { useState, useEffect } from 'react';
import './AnimatedSplash.css';

const AnimatedSplash = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create particles for background animation
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.7 + 0.3
      });
    }
    setParticles(newParticles);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="animated-splash">
      {/* Animated Background */}
      <div className="splash-background">
        <div className="gradient-overlay"></div>
        
        {/* Floating Particles */}
        <div className="particles-container">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animationDuration: `${particle.speed}s`,
                animationDelay: `${particle.id * 0.1}s`
              }}
            ></div>
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`splash-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="content-wrapper">
          {/* Logo/Brand */}
          <div className="brand-section">
            <div className="logo-container">
              <div className="logo-inner">
                <span className="logo-text">NEXUS</span>
              </div>
            </div>
            <h1 className="brand-title">
              <span className="title-line">Revolutionary</span>
              <span className="title-line">Technology</span>
              <span className="title-line">Awaits</span>
            </h1>
          </div>

          {/* Loading Section */}
          {!isLoaded && (
            <div className="loading-section">
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
                <span className="progress-text">
                  {Math.round(Math.min(progress, 100))}%
                </span>
              </div>
              <p className="loading-message">Initializing experience...</p>
            </div>
          )}

          {/* Loaded Content */}
          {isLoaded && (
            <div className="loaded-content">
              <p className="description">
                Step into the future of digital innovation. Experience cutting-edge technology 
                that transforms possibilities into reality.
              </p>
              
              <div className="action-buttons">
                <button className="btn-primary">
                  <span>Launch Experience</span>
                  <div className="btn-glow"></div>
                </button>
                <button className="btn-secondary">
                  <span>Learn More</span>
                </button>
              </div>

              <div className="features-preview">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m8 3 4 8 5-5v11H6V6l2-3z"/>
                    </svg>
                  </div>
                  <span>AI-Powered</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
                    </svg>
                  </div>
                  <span>Lightning Fast</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <span>Secure</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Corner Navigation */}
      <div className="corner-nav">
        <button className="nav-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnimatedSplash;
