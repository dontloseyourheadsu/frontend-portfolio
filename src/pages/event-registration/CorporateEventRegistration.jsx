import React, { useState } from 'react';
import './CorporateEventRegistration.css';

const CorporateEventRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    dietaryRestrictions: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // In a real app, you would submit the form data to a server here
    console.log('Form submitted:', formData);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        dietaryRestrictions: ''
      });
    }, 5000);
  };
  
  return (
    <div className="corporate-event-registration">
      <div className="corporate-event-header">
        <div className="corporate-event-overlay"></div>
        <div className="corporate-event-header-content">
          <div className="corporate-event-logo">
            <span>ELEVATE</span>
          </div>
          <h1>Annual Business Leadership Summit</h1>
          <div className="corporate-event-details">
            <span><i className="corporate-event-icon-calendar"></i>September 15-17, 2025</span>
            <span><i className="corporate-event-icon-location"></i>Grand Hyatt, New York City</span>
          </div>
        </div>
      </div>
      
      <div className="corporate-event-content">
        <div className="corporate-event-info-column">
          <div className="corporate-event-info-section">
            <h2>About The Event</h2>
            <p>Join us for three days of inspiring keynotes, expert panels, and networking opportunities with the business world's most innovative leaders and thinkers.</p>
            
            <div className="corporate-event-highlights">
              <div className="corporate-event-highlight-item">
                <div className="corporate-event-highlight-icon">🎯</div>
                <div className="corporate-event-highlight-text">
                  <h3>Industry Insights</h3>
                  <p>Gain exclusive insights from industry experts and thought leaders.</p>
                </div>
              </div>
              
              <div className="corporate-event-highlight-item">
                <div className="corporate-event-highlight-icon">🤝</div>
                <div className="corporate-event-highlight-text">
                  <h3>Networking</h3>
                  <p>Connect with peers and potential partners from around the globe.</p>
                </div>
              </div>
              
              <div className="corporate-event-highlight-item">
                <div className="corporate-event-highlight-icon">🚀</div>
                <div className="corporate-event-highlight-text">
                  <h3>Skill Development</h3>
                  <p>Attend workshops led by professionals at the top of their fields.</p>
                </div>
              </div>
            </div>
            
            <div className="corporate-event-agenda">
              <h3>Event Schedule</h3>
              <div className="corporate-event-day">
                <h4>Day 1: Opening & Keynotes</h4>
                <p>Welcome reception, opening keynote, and panel discussions.</p>
              </div>
              <div className="corporate-event-day">
                <h4>Day 2: Workshops & Networking</h4>
                <p>Focused workshops, breakout sessions, and networking dinner.</p>
              </div>
              <div className="corporate-event-day">
                <h4>Day 3: Future Trends & Closing</h4>
                <p>Future trends panel, closing keynote, and farewell reception.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="corporate-event-registration-column">
          {isSubmitted ? (
            <div className="corporate-event-success-message">
              <div className="corporate-event-success-icon">✓</div>
              <h2>Registration Complete!</h2>
              <p>Thank you for registering for the Annual Business Leadership Summit. We've sent a confirmation email with event details to your inbox.</p>
            </div>
          ) : (
            <div className="corporate-event-registration-form-container">
              <h2>Register Now</h2>
              <p>Secure your spot at this exclusive leadership event. Early registration ends August 1st.</p>
              
              <form className="corporate-event-registration-form" onSubmit={handleSubmit}>
                <div className="corporate-event-form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="corporate-event-form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="corporate-event-form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="corporate-event-form-group">
                  <label htmlFor="company">Company *</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="corporate-event-form-group">
                  <label htmlFor="jobTitle">Job Title *</label>
                  <input 
                    type="text" 
                    id="jobTitle" 
                    name="jobTitle" 
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="corporate-event-form-group">
                  <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
                  <textarea 
                    id="dietaryRestrictions" 
                    name="dietaryRestrictions" 
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="Please let us know if you have any dietary restrictions."
                  />
                </div>
                
                <button type="submit" className="corporate-event-register-button">
                  Complete Registration
                </button>
              </form>
              
              <div className="corporate-event-note">
                <p>* Required fields</p>
                <p>By registering, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.</p>
              </div>
            </div>
          )}
          
          <div className="corporate-event-contact-info">
            <h3>Questions?</h3>
            <p>Contact our event team at <a href="mailto:events@elevatesummit.com">events@elevatesummit.com</a></p>
          </div>
        </div>
      </div>
      
      <footer className="corporate-event-footer">
        <div className="corporate-event-footer-content">
          <div className="corporate-event-sponsors">
            <h3>Event Sponsors</h3>
            <div className="corporate-event-sponsor-logos">
              <div className="corporate-event-sponsor-logo"></div>
              <div className="corporate-event-sponsor-logo"></div>
              <div className="corporate-event-sponsor-logo"></div>
              <div className="corporate-event-sponsor-logo"></div>
            </div>
          </div>
          <div className="corporate-event-copyright">
            <p>© {new Date().getFullYear()} Elevate Summit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateEventRegistration;
