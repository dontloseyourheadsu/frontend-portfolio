import React, { useState, useEffect } from 'react';
import './MinimalZenSqueeze.css';

const MinimalZenSqueeze = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [breathePhase, setBreathePhase] = useState('inhale');

  useEffect(() => {
    // Breathing animation cycle
    const breatheInterval = setInterval(() => {
      setBreathePhase(prev => prev === 'inhale' ? 'exhale' : 'inhale');
    }, 4000); // 4 second cycles

    return () => clearInterval(breatheInterval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="minimal-zen-squeeze">
      {/* Background Elements */}
      <div className="zen-background">
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="zen-pattern"></div>
      </div>

      {/* Main Container */}
      <div className="zen-container">
        {/* Breathing Guide */}
        <div className="breathing-guide">
          <div className={`breathe-circle ${breathePhase}`}>
            <div className="breathe-inner">
              <span className="breathe-text">{breathePhase}</span>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <header className="zen-header">
          <div className="zen-logo">
            <div className="logo-circle">
              <div className="logo-dot"></div>
            </div>
          </div>
          <h1 className="zen-title">Mindful Mastery</h1>
          <p className="zen-subtitle">Transform your daily practice with intention</p>
        </header>

        {/* Main Content */}
        <div className="zen-content">
          {/* Value Proposition */}
          <section className="value-section">
            <div className="zen-card">
              <div className="card-content">
                <h2 className="value-title">
                  Discover the Art of
                  <span className="highlight">Mindful Living</span>
                </h2>
                
                <p className="value-description">
                  Join thousands who have transformed their daily routine into a practice of 
                  mindfulness, clarity, and intentional growth. Our guided journey helps you 
                  cultivate inner peace while achieving your goals.
                </p>

                <div className="zen-stats">
                  <div className="stat-group">
                    <div className="stat-number">10,000+</div>
                    <div className="stat-label">Mindful practitioners</div>
                  </div>
                  <div className="stat-group">
                    <div className="stat-number">95%</div>
                    <div className="stat-label">Report increased clarity</div>
                  </div>
                  <div className="stat-group">
                    <div className="stat-number">7 days</div>
                    <div className="stat-label">To see results</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="benefits-section">
            <h3 className="benefits-title">What awaits you</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🧘</div>
                <h4>Daily Meditation</h4>
                <p>Guided sessions tailored to your schedule and experience level</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🌱</div>
                <h4>Personal Growth</h4>
                <p>Tools and insights for continuous self-improvement and awareness</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">✨</div>
                <h4>Inner Peace</h4>
                <p>Techniques to find calm and clarity in any situation</p>
              </div>
            </div>
          </section>

          {/* Email Capture */}
          <section className="capture-section">
            <div className="capture-container">
              <div className="capture-header">
                <h3 className="capture-title">Begin Your Journey</h3>
                <p className="capture-subtitle">
                  Take the first step towards a more mindful, intentional life
                </p>
              </div>

              <form onSubmit={handleSubmit} className="zen-form">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <div className="input-container">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="zen-input"
                      required
                    />
                    <div className="input-underline"></div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`zen-button ${isSubmitted ? 'submitted' : ''}`}
                  disabled={isSubmitted}
                >
                  <span className="button-content">
                    {isSubmitted ? (
                      <>
                        <span className="check-icon">✓</span>
                        Welcome to the journey
                      </>
                    ) : (
                      <>
                        Start my practice
                        <span className="arrow">→</span>
                      </>
                    )}
                  </span>
                  <div className="button-ripple"></div>
                </button>
              </form>

              <div className="privacy-note">
                <div className="privacy-icon">🔒</div>
                <p>Your privacy is sacred to us. No spam, just mindful content.</p>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="testimonial-section">
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <blockquote className="testimonial-quote">
                This practice has transformed not just my mornings, but my entire approach 
                to life. I'm more present, more intentional, and surprisingly more productive.
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <div className="author-name">Sarah Chen</div>
                  <div className="author-title">Designer & Mother</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="zen-footer">
          <div className="footer-content">
            <div className="footer-quote">
              "The present moment is the only time over which we have dominion."
            </div>
            <div className="footer-attribution">— Thích Nhất Hạnh</div>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Terms</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MinimalZenSqueeze;
