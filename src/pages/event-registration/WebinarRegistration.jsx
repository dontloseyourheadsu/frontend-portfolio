import React, { useState } from 'react';
import './WebinarRegistration.css';

const WebinarRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
    industry: '',
    questions: '',
    marketingConsent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // In a real app, you would submit the form data to a server here
    console.log('Form submitted:', formData);
  };
  
  // Calculate countdown timer values
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-07-15T15:00:00.000Z'); // July 15, 2025 at 3:00 PM UTC
    const now = new Date();
    const difference = eventDate - now;
    
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      
      return { days, hours, minutes };
    }
    
    return { days: 0, hours: 0, minutes: 0 };
  };
  
  const timeLeft = calculateTimeLeft();
  
  return (
    <div className="webinar-registration">
      <div className="webinar-container">
        <div className="webinar-content-area">
          <div className="webinar-content">
            <div className="webinar-header">
              <div className="webinar-logo-container">
                <div className="webinar-logo">INSIGHT<span>PRO</span></div>
              </div>
              <span className="webinar-live-badge">LIVE WEBINAR</span>
            </div>
            
            <div className="webinar-main-content">
              <h1>How AI is Transforming Data Analytics in 2025</h1>
              
              <div className="webinar-details">
                <div className="webinar-detail">
                  <div className="webinar-detail-icon calendar-icon"></div>
                  <div className="webinar-detail-text">
                    <span className="webinar-detail-label">Date & Time</span>
                    <span className="webinar-detail-value">July 15, 2025 • 11am ET | 8am PT</span>
                  </div>
                </div>
                
                <div className="webinar-detail">
                  <div className="webinar-detail-icon duration-icon"></div>
                  <div className="webinar-detail-text">
                    <span className="webinar-detail-label">Duration</span>
                    <span className="webinar-detail-value">60 minutes + Q&A</span>
                  </div>
                </div>
                
                <div className="webinar-detail">
                  <div className="webinar-detail-icon cost-icon"></div>
                  <div className="webinar-detail-text">
                    <span className="webinar-detail-label">Cost</span>
                    <span className="webinar-detail-value">Free</span>
                  </div>
                </div>
              </div>
              
              <div className="webinar-countdown">
                <div className="webinar-countdown-label">Webinar Starts In:</div>
                <div className="webinar-countdown-timer">
                  <div className="webinar-countdown-item">
                    <span className="webinar-countdown-number">{timeLeft.days}</span>
                    <span className="webinar-countdown-unit">Days</span>
                  </div>
                  <div className="webinar-countdown-separator">:</div>
                  <div className="webinar-countdown-item">
                    <span className="webinar-countdown-number">{timeLeft.hours}</span>
                    <span className="webinar-countdown-unit">Hours</span>
                  </div>
                  <div className="webinar-countdown-separator">:</div>
                  <div className="webinar-countdown-item">
                    <span className="webinar-countdown-number">{timeLeft.minutes}</span>
                    <span className="webinar-countdown-unit">Minutes</span>
                  </div>
                </div>
              </div>
              
              <div className="webinar-description">
                <h2>What You'll Learn</h2>
                <p>
                  Join us for an in-depth exploration of how artificial intelligence is revolutionizing
                  data analytics across industries. Our expert panel will share real-world case studies,
                  practical implementation strategies, and insights into emerging trends.
                </p>
                
                <ul className="webinar-highlights">
                  <li>The latest AI-powered analytics tools transforming business intelligence</li>
                  <li>How predictive analytics is evolving with machine learning integration</li>
                  <li>Practical strategies for implementing AI analytics in your organization</li>
                  <li>Future trends: What to expect in the next wave of analytics innovation</li>
                </ul>
              </div>
              
              <div className="webinar-speakers">
                <h2>Meet Our Speakers</h2>
                
                <div className="webinar-speaker-list">
                  <div className="webinar-speaker">
                    <div className="webinar-speaker-image speaker-1"></div>
                    <div className="webinar-speaker-info">
                      <h3>Dr. Sarah Chen</h3>
                      <span className="webinar-speaker-title">Chief Data Scientist, TechVantage</span>
                      <p>
                        Dr. Chen leads AI research initiatives focusing on predictive analytics
                        and has authored numerous papers on machine learning applications in
                        business intelligence.
                      </p>
                    </div>
                  </div>
                  
                  <div className="webinar-speaker">
                    <div className="webinar-speaker-image speaker-2"></div>
                    <div className="webinar-speaker-info">
                      <h3>Marcus Johnson</h3>
                      <span className="webinar-speaker-title">Director of Analytics, Global Solutions Inc.</span>
                      <p>
                        With 15+ years of experience implementing data-driven strategies,
                        Marcus specializes in transforming complex datasets into actionable
                        business insights using AI technologies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="webinar-speaker">
                    <div className="webinar-speaker-image speaker-3"></div>
                    <div className="webinar-speaker-info">
                      <h3>Aisha Patel</h3>
                      <span className="webinar-speaker-title">AI Strategy Consultant, InnovateX</span>
                      <p>
                        Aisha advises Fortune 500 companies on AI implementation strategies
                        and has successfully led digital transformation projects across
                        multiple sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="webinar-form-area">
          {isSubmitted ? (
            <div className="webinar-confirmation">
              <div className="webinar-confirmation-icon">✓</div>
              <h2>Registration Confirmed!</h2>
              <p>You're all set for our webinar on <strong>How AI is Transforming Data Analytics in 2025</strong>.</p>
              
              <div className="webinar-confirmation-details">
                <div className="webinar-confirmation-detail">
                  <span className="webinar-confirmation-label">Date & Time:</span>
                  <span className="webinar-confirmation-value">July 15, 2025 • 11am ET | 8am PT</span>
                </div>
                
                <div className="webinar-confirmation-detail">
                  <span className="webinar-confirmation-label">Email:</span>
                  <span className="webinar-confirmation-value">{formData.email}</span>
                </div>
              </div>
              
              <div className="webinar-next-steps">
                <h3>What's Next?</h3>
                <ol>
                  <li>You'll receive a confirmation email with calendar invite.</li>
                  <li>We'll send you a reminder email 24 hours before the webinar.</li>
                  <li>Click the link in the email to join the webinar.</li>
                </ol>
              </div>
              
              <div className="webinar-share">
                <span>Share this webinar:</span>
                <div className="webinar-share-buttons">
                  <button className="webinar-share-button linkedin">LinkedIn</button>
                  <button className="webinar-share-button twitter">Twitter</button>
                  <button className="webinar-share-button facebook">Facebook</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="webinar-form-container">
              <h2>Reserve Your Spot Now</h2>
              <p className="webinar-form-subtitle">Complete the form below to register for this free webinar</p>
              
              <form className="webinar-form" onSubmit={handleSubmit}>
                <div className="webinar-form-row">
                  <div className="webinar-form-group">
                    <label htmlFor="firstName">First Name*</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="webinar-form-group">
                    <label htmlFor="lastName">Last Name*</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="webinar-form-group">
                  <label htmlFor="email">Work Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="webinar-form-row">
                  <div className="webinar-form-group">
                    <label htmlFor="jobTitle">Job Title*</label>
                    <input 
                      type="text" 
                      id="jobTitle" 
                      name="jobTitle" 
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="webinar-form-group">
                    <label htmlFor="company">Company*</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="webinar-form-group">
                  <label htmlFor="industry">Industry*</label>
                  <select 
                    id="industry" 
                    name="industry" 
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Please select</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="healthcare">Healthcare & Pharmaceuticals</option>
                    <option value="retail">Retail & E-Commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="education">Education</option>
                    <option value="government">Government</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="webinar-form-group">
                  <label htmlFor="questions">Questions for our speakers? (Optional)</label>
                  <textarea 
                    id="questions" 
                    name="questions" 
                    value={formData.questions}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Enter any questions you'd like addressed during the Q&A session"
                  />
                </div>
                
                <div className="webinar-form-group webinar-checkbox-group">
                  <label className="webinar-checkbox-label">
                    <input 
                      type="checkbox" 
                      name="marketingConsent" 
                      checked={formData.marketingConsent}
                      onChange={handleChange}
                    />
                    <span>
                      Yes, I'd like to receive marketing communications about products, services, 
                      and events from InsightPro. I understand I can unsubscribe at any time.
                    </span>
                  </label>
                </div>
                
                <div className="webinar-privacy-notice">
                  By submitting this form, you acknowledge our <a href="#">privacy policy</a> and agree to the processing of your data.
                </div>
                
                <button type="submit" className="webinar-register-button">
                  Register Now - Save My Spot
                </button>
              </form>
              
              <div className="webinar-form-footer">
                <p>
                  <strong>Can't make it live?</strong> Register anyway and we'll send you the recording.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="webinar-footer">
        <div className="webinar-footer-content">
          <div className="webinar-footer-logo">INSIGHT<span>PRO</span></div>
          <div className="webinar-footer-links">
            <a href="#">Privacy Policy</a>
            <span className="webinar-footer-divider">|</span>
            <a href="#">Terms of Service</a>
            <span className="webinar-footer-divider">|</span>
            <a href="#">Contact Us</a>
          </div>
          <div className="webinar-copyright">
            © {new Date().getFullYear()} InsightPro. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarRegistration;
