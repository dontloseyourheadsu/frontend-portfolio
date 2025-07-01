import React, { useState } from 'react';
import './MinimalCorporateUnsubscribe.css';

const MinimalCorporateUnsubscribe = () => {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsProcessing(false);
    setIsUnsubscribed(true);
  };

  if (isUnsubscribed) {
    return (
      <div className="minimal-corporate-unsubscribe">
        <div className="corporate-container">
          <div className="corporate-header">
            <div className="company-logo">
              <div className="logo-square"></div>
              <span className="company-name">TechCorp</span>
            </div>
          </div>

          <div className="success-content">
            <div className="success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            
            <h1>Unsubscription Confirmed</h1>
            <p>Your email address has been successfully removed from our mailing list.</p>
            
            <div className="confirmation-details">
              <div className="detail-row">
                <span className="label">Email:</span>
                <span className="value">{email}</span>
              </div>
              <div className="detail-row">
                <span className="label">Date:</span>
                <span className="value">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="detail-row">
                <span className="label">Reference:</span>
                <span className="value">#UN{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
            </div>

            <div className="next-steps">
              <h3>What happens next?</h3>
              <ul>
                <li>You will stop receiving marketing emails within 24-48 hours</li>
                <li>You may still receive transactional emails related to your account</li>
                <li>This change affects all marketing communications from TechCorp</li>
              </ul>
            </div>

            <div className="action-buttons">
              <button onClick={() => window.history.back()} className="secondary-btn">
                Go Back
              </button>
              <button onClick={() => window.location.href = '/'} className="primary-btn">
                Return to Website
              </button>
            </div>
          </div>

          <div className="corporate-footer">
            <p>&copy; 2024 TechCorp. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#contact">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="minimal-corporate-unsubscribe">
      <div className="corporate-container">
        <div className="corporate-header">
          <div className="company-logo">
            <div className="logo-square"></div>
            <span className="company-name">TechCorp</span>
          </div>
        </div>

        <div className="unsubscribe-content">
          <h1>Unsubscribe from Email Communications</h1>
          <p className="subtitle">We're sorry to see you go. Please confirm your email address to unsubscribe from our mailing list.</p>

          <form onSubmit={handleUnsubscribe} className="unsubscribe-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="email-input"
              />
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                disabled={!email || isProcessing}
                className="unsubscribe-btn"
              >
                {isProcessing ? (
                  <>
                    <div className="loading-spinner"></div>
                    Processing...
                  </>
                ) : (
                  'Unsubscribe'
                )}
              </button>
            </div>
          </form>

          <div className="alternatives-section">
            <div className="divider">
              <span>Or</span>
            </div>

            <h3>Manage Your Preferences Instead</h3>
            <p>You don't have to unsubscribe completely. Consider these alternatives:</p>

            <div className="preference-options">
              <div className="preference-card">
                <div className="preference-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>Reduce Frequency</h4>
                <p>Receive fewer emails - weekly or monthly instead of daily</p>
                <button 
                  onClick={() => setShowPreferences(true)}
                  className="preference-btn"
                >
                  Choose Frequency
                </button>
              </div>

              <div className="preference-card">
                <div className="preference-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M17 7V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V7M17 7H7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>Update Interests</h4>
                <p>Only receive emails about topics that interest you</p>
                <button 
                  onClick={() => setShowPreferences(true)}
                  className="preference-btn"
                >
                  Manage Topics
                </button>
              </div>

              <div className="preference-card">
                <div className="preference-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>Pause Temporarily</h4>
                <p>Take a break for 30, 60, or 90 days</p>
                <button 
                  onClick={() => setShowPreferences(true)}
                  className="preference-btn"
                >
                  Pause Emails
                </button>
              </div>
            </div>
          </div>

          <div className="legal-notice">
            <h4>Important Information</h4>
            <ul>
              <li>Unsubscribing will remove you from all marketing communications</li>
              <li>You will continue to receive important account and security notifications</li>
              <li>Changes may take up to 48 hours to take effect</li>
              <li>You can resubscribe at any time by visiting our website</li>
            </ul>
          </div>
        </div>

        <div className="corporate-footer">
          <p>&copy; 2024 TechCorp. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact Support</a>
          </div>
        </div>
      </div>

      {showPreferences && (
        <div className="preferences-modal">
          <div className="modal-overlay" onClick={() => setShowPreferences(false)}></div>
          <div className="modal-content">
            <h3>Email Preferences</h3>
            <p>This feature would redirect to a full preferences management page.</p>
            <button 
              onClick={() => setShowPreferences(false)}
              className="modal-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MinimalCorporateUnsubscribe;
