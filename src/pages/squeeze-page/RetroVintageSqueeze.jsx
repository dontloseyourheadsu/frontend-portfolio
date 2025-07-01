import React, { useState, useEffect } from 'react';
import './RetroVintageSqueeze.css';

const RetroVintageSqueeze = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [scanlinePosition, setScanlinePosition] = useState(0);

  const heroTexts = [
    'TOTALLY RADICAL',
    'GNARLY VIBES',
    'BODACIOUS DEAL',
    'RADICAL OFFER'
  ];

  useEffect(() => {
    // Text rotation effect
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % heroTexts.length);
    }, 2000);

    // VHS scanline effect
    const scanlineInterval = setInterval(() => {
      setScanlinePosition(prev => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(textInterval);
      clearInterval(scanlineInterval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="retro-vintage-squeeze">
      {/* VHS Effects */}
      <div className="vhs-effects">
        <div className="vhs-noise"></div>
        <div 
          className="vhs-scanline" 
          style={{ top: `${scanlinePosition}%` }}
        ></div>
        <div className="vhs-grain"></div>
      </div>

      {/* Background Patterns */}
      <div className="retro-background">
        <div className="grid-pattern"></div>
        <div className="geometric-shapes">
          <div className="shape triangle-1"></div>
          <div className="shape circle-1"></div>
          <div className="shape square-1"></div>
          <div className="shape triangle-2"></div>
          <div className="shape circle-2"></div>
        </div>
      </div>

      {/* Main Container */}
      <div className="retro-container">
        {/* Header */}
        <header className="retro-header">
          <div className="retro-logo">
            <div className="logo-stack">
              <span className="logo-line line-1">RAD</span>
              <span className="logo-line line-2">FIT</span>
              <span className="logo-line line-3">85</span>
            </div>
            <div className="logo-neon">
              <span className="neon-text">RADICAL FITNESS</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">★ LIMITED TIME ★</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line-1">GET</span>
              <span className="title-line-2 glitch-text" data-text={heroTexts[currentText]}>
                {heroTexts[currentText]}
              </span>
              <span className="title-line-3">RESULTS!</span>
            </h1>

            <div className="hero-subtitle">
              <div className="retro-box">
                <span className="box-text">
                  🎯 Transform your body with the most BODACIOUS workout system of the 80s! 
                  Join thousands who've achieved RADICAL results with our proven method!
                </span>
              </div>
            </div>
          </div>

          <div className="hero-graphics">
            <div className="neon-frame">
              <div className="frame-content">
                <div className="retro-stats">
                  <div className="stat-item">
                    <span className="stat-number">500K+</span>
                    <span className="stat-label">RADICAL MEMBERS</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">30 DAYS</span>
                    <span className="stat-label">TO GET GNARLY</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">TUBULAR GUARANTEE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2 className="benefits-title">
            <span className="title-shadow">WHAT'S TOTALLY AWESOME:</span>
          </h2>
          
          <div className="benefits-grid">
            <div className="benefit-card card-1">
              <div className="card-header">
                <div className="card-icon">💪</div>
                <h3>RADICAL WORKOUTS</h3>
              </div>
              <p>High-energy routines that'll make you feel GNARLY! No boring exercises here!</p>
              <div className="card-corner"></div>
            </div>

            <div className="benefit-card card-2">
              <div className="card-header">
                <div className="card-icon">🕺</div>
                <h3>BODACIOUS MOVES</h3>
              </div>
              <p>Dance-inspired fitness that's totally FRESH! Get fit while having a blast!</p>
              <div className="card-corner"></div>
            </div>

            <div className="benefit-card card-3">
              <div className="card-header">
                <div className="card-icon">⚡</div>
                <h3>LIGHTNING RESULTS</h3>
              </div>
              <p>See changes in just 30 days! This system is totally TUBULAR and proven!</p>
              <div className="card-corner"></div>
            </div>
          </div>
        </section>

        {/* Capture Section */}
        <section className="capture-section">
          <div className="capture-container">
            <div className="capture-header">
              <div className="header-decoration">
                <span className="deco-line"></span>
                <span className="deco-star">★</span>
                <span className="deco-line"></span>
              </div>
              <h2 className="capture-title">
                DON'T BE A COUCH POTATO!
              </h2>
              <p className="capture-subtitle">
                Get instant access to the most RADICAL fitness program that's sweeping the nation! 
                Join the thousands who are already getting GNARLY results!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="retro-form">
              <div className="form-wrapper">
                <div className="input-section">
                  <label className="form-label">
                    📧 YOUR TOTALLY RAD EMAIL:
                  </label>
                  <div className="input-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.radical@email.com"
                      className="retro-input"
                      required
                    />
                    <div className="input-glow"></div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`retro-button ${isSubmitted ? 'submitted' : ''}`}
                  disabled={isSubmitted}
                >
                  <div className="button-bg"></div>
                  <div className="button-content">
                    <span className="button-text">
                      {isSubmitted ? '✓ TOTALLY AWESOME!' : '🚀 GET RADICAL NOW!'}
                    </span>
                    <div className="button-sparkles">
                      <span className="sparkle">✨</span>
                      <span className="sparkle">⭐</span>
                      <span className="sparkle">✨</span>
                    </div>
                  </div>
                </button>
              </div>
            </form>

            <div className="guarantee-badge">
              <div className="badge-inner">
                <span className="guarantee-text">30-DAY MONEY BACK GUARANTEE!</span>
                <span className="guarantee-subtext">If you're not TOTALLY satisfied!</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="testimonial-section">
          <div className="testimonial-container">
            <div className="testimonial-header">
              <span className="testimonial-label">RADICAL REVIEW:</span>
            </div>
            <blockquote className="testimonial-quote">
              "This program is TOTALLY GNARLY! I lost 20 pounds and gained so much energy. 
              My friends say I look BODACIOUS! Best decision ever!"
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span className="avatar-text">JD</span>
              </div>
              <div className="author-info">
                <span className="author-name">Jenny "Dynamo" Davidson</span>
                <span className="author-title">Aerobics Enthusiast</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="retro-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-brand">RADFIT '85</span>
            </div>
            <div className="footer-tagline">
              "Making fitness TOTALLY AWESOME since 1985!"
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <span className="footer-divider">|</span>
              <a href="#" className="footer-link">Terms of Service</a>
              <span className="footer-divider">|</span>
              <a href="#" className="footer-link">Contact Us</a>
            </div>
            <div className="footer-copyright">
              © 1985-2025 RadFit Industries. All rights totally reserved, dude!
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RetroVintageSqueeze;
