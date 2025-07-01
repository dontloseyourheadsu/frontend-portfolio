import React, { useState, useEffect } from 'react';
import './GentleFarewellUnsubscribe.css';

const GentleFarewellUnsubscribe = () => {
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const [reason, setReason] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const handleUnsubscribe = (e) => {
    e.preventDefault();
    setIsUnsubscribed(true);
    setShowFeedback(true);
  };

  const handleKeepSubscribed = () => {
    // Simulate redirecting to preferences
    alert('Redirecting to email preferences...');
  };

  return (
    <div className="gentle-farewell-unsubscribe">
      {/* Background Elements */}
      <div className="gentle-background">
        <div className="floating-bubbles">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="bubble" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Main Container */}
      <div className={`gentle-container ${isVisible ? 'visible' : ''}`}>
        <div className="content-wrapper">
          {!isUnsubscribed ? (
            <>
              {/* Header */}
              <header className="gentle-header">
                <div className="header-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75z" />
                  </svg>
                </div>
                <h1 className="gentle-title">We're sorry to see you go</h1>
                <p className="gentle-subtitle">
                  Your journey with us has been meaningful, and we respect your decision.
                </p>
              </header>

              {/* Main Content */}
              <div className="gentle-content">
                <div className="farewell-message">
                  <h2 className="message-title">Before you leave...</h2>
                  <p className="message-text">
                    We understand that email preferences change, and that's perfectly okay. 
                    We're grateful for the time you've spent with us and want to make this 
                    process as smooth as possible.
                  </p>
                </div>

                {/* Options */}
                <div className="unsubscribe-options">
                  <div className="option-card preferred">
                    <div className="option-header">
                      <div className="option-icon">⚙️</div>
                      <h3>Customize instead?</h3>
                    </div>
                    <p>
                      Maybe you'd prefer fewer emails or different topics? 
                      You can adjust your preferences without leaving entirely.
                    </p>
                    <button 
                      className="option-button primary"
                      onClick={handleKeepSubscribed}
                    >
                      Manage Preferences
                    </button>
                  </div>

                  <div className="option-card">
                    <div className="option-header">
                      <div className="option-icon">👋</div>
                      <h3>Unsubscribe completely</h3>
                    </div>
                    <p>
                      We'll remove you from all our email lists. 
                      You can always come back whenever you'd like.
                    </p>
                    
                    <form onSubmit={handleUnsubscribe} className="unsubscribe-form">
                      <div className="form-group">
                        <label htmlFor="reason" className="form-label">
                          Help us improve (optional)
                        </label>
                        <select 
                          id="reason"
                          value={reason}
                          onChange={(e) => setReason(e.target.value)}
                          className="gentle-select"
                        >
                          <option value="">Why are you unsubscribing?</option>
                          <option value="too-frequent">Too many emails</option>
                          <option value="not-relevant">Content not relevant</option>
                          <option value="not-interested">No longer interested</option>
                          <option value="never-signed-up">Never signed up</option>
                          <option value="other">Other reason</option>
                        </select>
                      </div>

                      {reason === 'other' && (
                        <div className="form-group">
                          <label htmlFor="feedback" className="form-label">
                            Tell us more
                          </label>
                          <textarea
                            id="feedback"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="Your feedback helps us improve..."
                            className="gentle-textarea"
                            rows="3"
                          />
                        </div>
                      )}

                      <button type="submit" className="option-button secondary">
                        Unsubscribe
                      </button>
                    </form>
                  </div>
                </div>

                {/* Reassurance */}
                <div className="reassurance-section">
                  <div className="reassurance-item">
                    <div className="reassurance-icon">🔒</div>
                    <span>Your data is safe and will be handled respectfully</span>
                  </div>
                  <div className="reassurance-item">
                    <div className="reassurance-icon">🔄</div>
                    <span>You can resubscribe anytime in the future</span>
                  </div>
                  <div className="reassurance-item">
                    <div className="reassurance-icon">⚡</div>
                    <span>Changes take effect immediately</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="success-content">
              <div className="success-animation">
                <div className="success-checkmark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
              </div>
              
              <h2 className="success-title">You've been unsubscribed</h2>
              <p className="success-message">
                Thank you for letting us be part of your journey. We hope our paths 
                cross again in the future. Take care! 💙
              </p>

              {showFeedback && reason && (
                <div className="feedback-received">
                  <h3>Thank you for your feedback</h3>
                  <p>Your insights help us create better experiences for everyone.</p>
                </div>
              )}

              <div className="final-actions">
                <button 
                  className="action-button"
                  onClick={() => window.close()}
                >
                  Close this page
                </button>
                <a href="/" className="action-link">
                  Visit our website
                </a>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="gentle-footer">
            <div className="footer-content">
              <p className="footer-text">
                Need help? <a href="mailto:support@company.com" className="footer-link">Contact our support team</a>
              </p>
              <div className="footer-links">
                <a href="#" className="footer-link">Privacy Policy</a>
                <span className="footer-divider">•</span>
                <a href="#" className="footer-link">Terms of Service</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default GentleFarewellUnsubscribe;
