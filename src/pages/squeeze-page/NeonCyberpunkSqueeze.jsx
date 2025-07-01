import React, { useState, useEffect } from 'react';
import './NeonCyberpunkSqueeze.css';

const NeonCyberpunkSqueeze = () => {
  const [email, setEmail] = useState('');
  const [glitchText, setGlitchText] = useState('UNLOCK THE FUTURE');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const glitchWords = ['UNLOCK THE FUTURE', 'ACCESS GRANTED', 'INITIALIZE SEQUENCE', 'NEURAL LINK ACTIVE'];

  useEffect(() => {
    // Glitch text effect
    const glitchInterval = setInterval(() => {
      const randomWord = glitchWords[Math.floor(Math.random() * glitchWords.length)];
      setGlitchText(randomWord);
      setTimeout(() => setGlitchText('UNLOCK THE FUTURE'), 100);
    }, 3000);

    // Update time
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const formatTime = () => {
    return currentTime.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="neon-cyberpunk-squeeze">
      {/* Background Effects */}
      <div className="cyber-background">
        <div className="grid-overlay"></div>
        <div className="scanlines"></div>
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`
            }}></div>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="cyber-container">
        {/* Header Terminal */}
        <div className="terminal-header">
          <div className="terminal-bar">
            <div className="terminal-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <div className="terminal-title">NEURAL_INTERFACE_v2.1.exe</div>
            <div className="terminal-time">{formatTime()}</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="cyber-content">
          {/* System Status */}
          <div className="system-status">
            <div className="status-line">
              <span className="status-prompt">$</span>
              <span className="status-text">Initializing quantum neural network...</span>
              <span className="cursor"></span>
            </div>
            <div className="status-line">
              <span className="status-prompt">$</span>
              <span className="status-text">Status: READY FOR ENHANCEMENT</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="cyber-title-section">
            <h1 className="cyber-title glitch" data-text={glitchText}>
              {glitchText}
            </h1>
            <div className="title-underline"></div>
          </div>

          {/* Value Proposition */}
          <div className="value-section">
            <div className="cyber-card">
              <div className="card-header">
                <span className="card-icon">⚡</span>
                <h2 className="card-title">NEURAL ENHANCEMENT PROTOCOL</h2>
              </div>
              <div className="card-content">
                <p className="cyber-description">
                  Join the elite network of enhanced individuals. Access classified algorithms 
                  that will boost your cognitive abilities by 300% and unlock hidden potential 
                  in your neural pathways.
                </p>
                
                <div className="enhancement-stats">
                  <div className="stat-item">
                    <div className="stat-number">2,847</div>
                    <div className="stat-label">Enhanced Users</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">99.7%</div>
                    <div className="stat-label">Success Rate</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Potential</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Capture Form */}
          <div className="capture-section">
            <div className="form-container">
              <h3 className="form-title">
                <span className="bracket">[</span>
                INITIATE ENHANCEMENT SEQUENCE
                <span className="bracket">]</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="cyber-form">
                <div className="input-group">
                  <label className="input-label">NEURAL_ID (EMAIL):</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="username@neural.net"
                      className="cyber-input"
                      required
                    />
                    <div className="input-glow"></div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className={`cyber-button ${isSubmitted ? 'submitted' : ''}`}
                  disabled={isSubmitted}
                >
                  <span className="button-text">
                    {isSubmitted ? 'ENHANCEMENT INITIATED' : 'ACTIVATE NEURAL LINK'}
                  </span>
                  <div className="button-glow"></div>
                </button>
              </form>

              <div className="security-notice">
                <div className="notice-icon">🔒</div>
                <p>Encrypted with quantum-resistant algorithms. Your data is protected by military-grade security protocols.</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h4>Cognitive Boost</h4>
              <p>Enhance memory, focus, and processing speed through advanced neural optimization.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Lightning Response</h4>
              <p>Instant access to enhanced decision-making algorithms and predictive analysis.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h4>Global Network</h4>
              <p>Connect with other enhanced individuals in our exclusive underground network.</p>
            </div>
          </div>

          {/* Footer Terminal */}
          <div className="terminal-footer">
            <div className="footer-line">
              <span className="prompt">neural@enhancement:~$</span>
              <span className="command">run --privacy-protocol --secure-mode</span>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">[PRIVACY_POLICY]</a>
              <a href="#" className="footer-link">[TERMS_OF_SERVICE]</a>
              <a href="#" className="footer-link">[CONTACT_ADMIN]</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeonCyberpunkSqueeze;
