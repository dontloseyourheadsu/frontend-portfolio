import React, { useState } from 'react';
import './ProfessionalExecutiveWebinar.css';

const ProfessionalExecutiveWebinar = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    position: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Webinar registration:', formData);
  };

  return (
    <div className="professional-executive-webinar">
      <div className="professional-executive-webinar__container">
        {/* Header Section */}
        <header className="professional-executive-webinar__header">
          <div className="professional-executive-webinar__header-content">
            <div className="professional-executive-webinar__badge">
              <span>EXECUTIVE BRIEFING</span>
            </div>
            
            <h1 className="professional-executive-webinar__title">
              Strategic Leadership in Digital Transformation
            </h1>
            
            <p className="professional-executive-webinar__subtitle">
              Master the art of leading organizational change in an increasingly digital world
            </p>
            
            <div className="professional-executive-webinar__meta">
              <div className="professional-executive-webinar__meta-item">
                <svg className="professional-executive-webinar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>December 15, 2024</span>
              </div>
              
              <div className="professional-executive-webinar__meta-item">
                <svg className="professional-executive-webinar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span>2:00 PM EST (90 minutes)</span>
              </div>
              
              <div className="professional-executive-webinar__meta-item">
                <svg className="professional-executive-webinar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span>C-Level Executives Only</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="professional-executive-webinar__main">
          <div className="professional-executive-webinar__content">
            {/* Speaker Section */}
            <section className="professional-executive-webinar__speaker">
              <div className="professional-executive-webinar__speaker-image">
                <div className="professional-executive-webinar__avatar">
                  <svg viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="35" r="15" fill="#1e3a8a"/>
                    <path d="M20 85c0-16.569 13.431-30 30-30s30 13.431 30 30" fill="#1e3a8a"/>
                  </svg>
                </div>
              </div>
              
              <div className="professional-executive-webinar__speaker-info">
                <h3>Dr. Sarah Mitchell</h3>
                <p>Former Chief Digital Officer at Fortune 500 Companies</p>
                <div className="professional-executive-webinar__credentials">
                  <span>Harvard Business School</span>
                  <span>McKinsey & Company Alum</span>
                  <span>20+ Years Experience</span>
                </div>
              </div>
            </section>

            {/* Agenda Section */}
            <section className="professional-executive-webinar__agenda">
              <h3>Executive Agenda</h3>
              <div className="professional-executive-webinar__agenda-list">
                <div className="professional-executive-webinar__agenda-item">
                  <span className="professional-executive-webinar__agenda-time">2:00 - 2:20</span>
                  <div className="professional-executive-webinar__agenda-content">
                    <h4>Digital Transformation ROI Framework</h4>
                    <p>Quantifying the business impact of digital initiatives</p>
                  </div>
                </div>
                
                <div className="professional-executive-webinar__agenda-item">
                  <span className="professional-executive-webinar__agenda-time">2:20 - 2:45</span>
                  <div className="professional-executive-webinar__agenda-content">
                    <h4>Leadership Through Change</h4>
                    <p>Building organizational resilience and adaptability</p>
                  </div>
                </div>
                
                <div className="professional-executive-webinar__agenda-item">
                  <span className="professional-executive-webinar__agenda-time">2:45 - 3:15</span>
                  <div className="professional-executive-webinar__agenda-content">
                    <h4>Strategic Implementation</h4>
                    <p>From vision to execution: practical frameworks</p>
                  </div>
                </div>
                
                <div className="professional-executive-webinar__agenda-item">
                  <span className="professional-executive-webinar__agenda-time">3:15 - 3:30</span>
                  <div className="professional-executive-webinar__agenda-content">
                    <h4>Executive Q&A Session</h4>
                    <p>Private discussion with industry peers</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="professional-executive-webinar__benefits">
              <h3>Executive Takeaways</h3>
              <div className="professional-executive-webinar__benefits-grid">
                <div className="professional-executive-webinar__benefit">
                  <div className="professional-executive-webinar__benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 11l3 3l8-8"/>
                      <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9s4.03-9 9-9c1.51 0 2.93.37 4.18 1.03"/>
                    </svg>
                  </div>
                  <h4>Strategic Framework</h4>
                  <p>Proven methodologies for digital transformation success</p>
                </div>
                
                <div className="professional-executive-webinar__benefit">
                  <div className="professional-executive-webinar__benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5l10-5l-10-5z"/>
                      <path d="M2 17l10 5l10-5"/>
                      <path d="M2 12l10 5l10-5"/>
                    </svg>
                  </div>
                  <h4>Leadership Tools</h4>
                  <p>Executive templates and assessment frameworks</p>
                </div>
                
                <div className="professional-executive-webinar__benefit">
                  <div className="professional-executive-webinar__benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h4>Peer Network</h4>
                  <p>Connect with fellow C-level executives</p>
                </div>
              </div>
            </section>
          </div>

          {/* Registration Form */}
          <div className="professional-executive-webinar__registration">
            <div className="professional-executive-webinar__form-container">
              <div className="professional-executive-webinar__form-header">
                <h3>Secure Your Executive Seat</h3>
                <p>Limited to 50 senior executives</p>
                <div className="professional-executive-webinar__availability">
                  <span className="professional-executive-webinar__spots">12 spots remaining</span>
                </div>
              </div>
              
              <form className="professional-executive-webinar__form" onSubmit={handleSubmit}>
                <div className="professional-executive-webinar__form-row">
                  <div className="professional-executive-webinar__form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="professional-executive-webinar__form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="professional-executive-webinar__form-group">
                  <label>Business Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="professional-executive-webinar__form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="professional-executive-webinar__form-group">
                  <label>Executive Position</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your position</option>
                    <option value="CEO">Chief Executive Officer</option>
                    <option value="COO">Chief Operating Officer</option>
                    <option value="CTO">Chief Technology Officer</option>
                    <option value="CDO">Chief Digital Officer</option>
                    <option value="CFO">Chief Financial Officer</option>
                    <option value="Other C-Level">Other C-Level Executive</option>
                  </select>
                </div>
                
                <button type="submit" className="professional-executive-webinar__submit">
                  Reserve Executive Seat
                  <svg className="professional-executive-webinar__submit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7l-7 7"/>
                  </svg>
                </button>
                
                <p className="professional-executive-webinar__form-note">
                  Registration subject to executive verification
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExecutiveWebinar;
