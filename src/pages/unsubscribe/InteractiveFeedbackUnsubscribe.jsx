import React, { useState } from 'react';
import './InteractiveFeedbackUnsubscribe.css';

const InteractiveFeedbackUnsubscribe = () => {
  const [step, setStep] = useState(1);
  const [feedback, setFeedback] = useState('');
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [email, setEmail] = useState('');
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);

  const reasons = [
    'Too many emails',
    'Content not relevant',
    'Poor email design',
    'Found better alternatives',
    'Privacy concerns',
    'Changed interests',
    'Other'
  ];

  const handleReasonToggle = (reason) => {
    setSelectedReasons(prev => 
      prev.includes(reason) 
        ? prev.filter(r => r !== reason)
        : [...prev, reason]
    );
  };

  const handleUnsubscribe = () => {
    setIsUnsubscribed(true);
    // Here you would typically send the feedback to your backend
    console.log('Unsubscribe feedback:', { selectedReasons, feedback, email });
  };

  if (isUnsubscribed) {
    return (
      <div className="interactive-feedback-unsubscribe">
        <div className="feedback-success-container">
          <div className="success-animation">
            <div className="checkmark-circle">
              <div className="checkmark"></div>
            </div>
          </div>
          <h1>You've been unsubscribed</h1>
          <p>Thank you for your feedback. It helps us improve our service for others.</p>
          <div className="success-actions">
            <button onClick={() => window.history.back()} className="back-btn">
              Go Back
            </button>
            <button onClick={() => window.location.href = '/'} className="home-btn">
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="interactive-feedback-unsubscribe">
      <div className="feedback-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>
        
        <div className="step-indicator">
          <span className={step >= 1 ? 'active' : ''}>1</span>
          <span className={step >= 2 ? 'active' : ''}>2</span>
          <span className={step >= 3 ? 'active' : ''}>3</span>
        </div>

        {step === 1 && (
          <div className="step-content">
            <h1>We're sorry to see you go</h1>
            <p>Before you unsubscribe, could you help us understand why?</p>
            
            <div className="reasons-grid">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className={`reason-card ${selectedReasons.includes(reason) ? 'selected' : ''}`}
                  onClick={() => handleReasonToggle(reason)}
                >
                  <div className="reason-checkbox">
                    {selectedReasons.includes(reason) && <span className="checkmark-small">✓</span>}
                  </div>
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            <div className="step-actions">
              <button 
                onClick={() => setStep(2)} 
                className="next-btn"
                disabled={selectedReasons.length === 0}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step-content">
            <h1>Tell us more</h1>
            <p>Your feedback helps us improve. What could we have done better?</p>
            
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts (optional)..."
              className="feedback-textarea"
              rows={6}
            />

            <div className="step-actions">
              <button onClick={() => setStep(1)} className="back-btn">
                Back
              </button>
              <button onClick={() => setStep(3)} className="next-btn">
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step-content">
            <h1>Final step</h1>
            <p>Confirm your email address to complete the unsubscription:</p>
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="email-input"
              required
            />

            <div className="final-message">
              <p>You will no longer receive marketing emails from us.</p>
              <p>Note: You may still receive important account-related notifications.</p>
            </div>

            <div className="step-actions">
              <button onClick={() => setStep(2)} className="back-btn">
                Back
              </button>
              <button 
                onClick={handleUnsubscribe} 
                className="unsubscribe-btn"
                disabled={!email}
              >
                Unsubscribe
              </button>
            </div>
          </div>
        )}

        <div className="alternative-options">
          <h3>Or try these alternatives:</h3>
          <div className="alternatives">
            <button className="alternative-btn">
              <span className="icon">📧</span>
              Reduce email frequency
            </button>
            <button className="alternative-btn">
              <span className="icon">🎯</span>
              Update preferences
            </button>
            <button className="alternative-btn">
              <span className="icon">⏸️</span>
              Pause for 30 days
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeedbackUnsubscribe;
