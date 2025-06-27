import React, { useState } from 'react';
import './ConsultationBooking.css';

const ConsultationBooking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    challenge: '',
    preferredTime: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Consultation booking:', formData);
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="consultation-page">
        <div className="consultation-container">
          <div className="consultation-success">
            <div className="consultation-success-icon">🎉</div>
            <h1>Your Consultation is Booked!</h1>
            <p>
              Thanks {formData.firstName}! We've received your request and will contact you within 24 hours to confirm your free strategy consultation.
            </p>
            
            <div className="consultation-confirmation-card">
              <h3>📅 What's Next?</h3>
              <div className="consultation-next-steps">
                <div className="consultation-step">
                  <div className="consultation-step-number">1</div>
                  <div className="consultation-step-content">
                    <strong>Confirmation Call</strong>
                    <p>Our team will call you within 24 hours to confirm your preferred time slot</p>
                  </div>
                </div>
                
                <div className="consultation-step">
                  <div className="consultation-step-number">2</div>
                  <div className="consultation-step-content">
                    <strong>Pre-Call Preparation</strong>
                    <p>We'll send you a brief questionnaire to maximize your consultation value</p>
                  </div>
                </div>
                
                <div className="consultation-step">
                  <div className="consultation-step-number">3</div>
                  <div className="consultation-step-content">
                    <strong>Strategy Session</strong>
                    <p>45-minute deep dive into your business challenges and opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="consultation-what-to-expect">
              <h3>💡 What to Expect in Your Consultation</h3>
              <div className="consultation-expectation-grid">
                <div className="consultation-expectation-item">
                  <span className="consultation-expectation-icon">🎯</span>
                  <div>
                    <strong>Business Analysis</strong>
                    <p>We'll analyze your current situation and identify growth opportunities</p>
                  </div>
                </div>
                
                <div className="consultation-expectation-item">
                  <span className="consultation-expectation-icon">📊</span>
                  <div>
                    <strong>Custom Strategy</strong>
                    <p>Receive a tailored action plan specific to your business goals</p>
                  </div>
                </div>
                
                <div className="consultation-expectation-item">
                  <span className="consultation-expectation-icon">🚀</span>
                  <div>
                    <strong>Implementation Roadmap</strong>
                    <p>Get a clear 90-day roadmap to achieve your objectives</p>
                  </div>
                </div>
                
                <div className="consultation-expectation-item">
                  <span className="consultation-expectation-icon">💰</span>
                  <div>
                    <strong>ROI Projections</strong>
                    <p>See projected returns and investment requirements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="consultation-contact-info">
              <h4>Need to Reschedule or Have Questions?</h4>
              <div className="consultation-contact-methods">
                <div className="consultation-contact-method">
                  <span>📞</span>
                  <div>
                    <strong>Call us directly</strong>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="consultation-contact-method">
                  <span>📧</span>
                  <div>
                    <strong>Send us an email</strong>
                    <p>consultations@company.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="consultation-success-actions">
              <button className="consultation-primary-button">
                📚 Download Our Free Guide
              </button>
              <button className="consultation-secondary-button">
                🏠 Return to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="consultation-page">
      <div className="consultation-container">
        <div className="consultation-header">
          <h1>Book Your Free Strategy Consultation</h1>
          <p>Get a personalized growth plan for your business - absolutely free</p>
          
          <div className="consultation-value-props">
            <div className="consultation-value-prop">
              <span className="consultation-value-icon">💰</span>
              <span>$500 Value</span>
            </div>
            <div className="consultation-value-prop">
              <span className="consultation-value-icon">⏱️</span>
              <span>45 Minutes</span>
            </div>
            <div className="consultation-value-prop">
              <span className="consultation-value-icon">🎯</span>
              <span>100% Personalized</span>
            </div>
          </div>
        </div>
        
        <div className="consultation-main">
          <div className="consultation-content">
            <div className="consultation-benefits">
              <h2>What You'll Get From This Call</h2>
              <div className="consultation-benefit-list">
                <div className="consultation-benefit-item">
                  <div className="consultation-benefit-icon">🔍</div>
                  <div className="consultation-benefit-content">
                    <h3>Business Analysis</h3>
                    <p>Complete audit of your current marketing and sales processes</p>
                  </div>
                </div>
                
                <div className="consultation-benefit-item">
                  <div className="consultation-benefit-icon">📈</div>
                  <div className="consultation-benefit-content">
                    <h3>Growth Opportunities</h3>
                    <p>Identify untapped revenue streams and optimization areas</p>
                  </div>
                </div>
                
                <div className="consultation-benefit-item">
                  <div className="consultation-benefit-icon">🎯</div>
                  <div className="consultation-benefit-content">
                    <h3>Custom Strategy</h3>
                    <p>Tailored action plan designed specifically for your business</p>
                  </div>
                </div>
                
                <div className="consultation-benefit-item">
                  <div className="consultation-benefit-icon">🚀</div>
                  <div className="consultation-benefit-content">
                    <h3>Implementation Plan</h3>
                    <p>Step-by-step roadmap to achieve your goals in 90 days</p>
                  </div>
                </div>
              </div>
              
              <div className="consultation-testimonial">
                <div className="consultation-testimonial-content">
                  <div className="consultation-testimonial-stars">⭐⭐⭐⭐⭐</div>
                  <p>"The strategy consultation was incredible. They identified $50k in missed opportunities in just 45 minutes!"</p>
                  <div className="consultation-testimonial-author">
                    <strong>David Rodriguez</strong>
                    <span>CEO, TechStartup Inc</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="consultation-form-section">
            <div className="consultation-progress">
              <div className="consultation-progress-bar">
                <div 
                  className="consultation-progress-fill"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
              <div className="consultation-progress-text">
                Step {currentStep} of 3
              </div>
            </div>
            
            <form className="consultation-form" onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <div className="consultation-step-content">
                  <h3>👋 Let's Get Started</h3>
                  <p>Tell us a bit about yourself</p>
                  
                  <div className="consultation-form-row">
                    <div className="consultation-form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    
                    <div className="consultation-form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="consultation-form-group">
                    <label htmlFor="email">Business Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  
                  <div className="consultation-form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
              )}
              
              {currentStep === 2 && (
                <div className="consultation-step-content">
                  <h3>🏢 About Your Business</h3>
                  <p>Help us understand your company</p>
                  
                  <div className="consultation-form-group">
                    <label htmlFor="company">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company Inc."
                      required
                    />
                  </div>
                  
                  <div className="consultation-form-group">
                    <label htmlFor="revenue">Annual Revenue</label>
                    <select
                      id="revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleInputChange}
                    >
                      <option value="">Select revenue range</option>
                      <option value="under-100k">Under $100K</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="over-10m">Over $10M</option>
                    </select>
                  </div>
                  
                  <div className="consultation-form-group">
                    <label htmlFor="challenge">Primary Challenge *</label>
                    <select
                      id="challenge"
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select your main challenge</option>
                      <option value="lead-generation">Lead Generation</option>
                      <option value="conversion-optimization">Conversion Optimization</option>
                      <option value="scaling-operations">Scaling Operations</option>
                      <option value="brand-awareness">Brand Awareness</option>
                      <option value="customer-retention">Customer Retention</option>
                      <option value="marketing-strategy">Marketing Strategy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div className="consultation-step-content">
                  <h3>📅 Schedule Your Call</h3>
                  <p>When would you prefer to have your consultation?</p>
                  
                  <div className="consultation-form-group">
                    <label htmlFor="preferredTime">Preferred Time</label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>
                  
                  <div className="consultation-final-note">
                    <h4>🎯 You're Almost Done!</h4>
                    <p>Our team will contact you within 24 hours to schedule your free consultation. This call typically results in identifying $10K+ in growth opportunities.</p>
                    
                    <div className="consultation-guarantee">
                      <strong>🔒 100% No-Risk Guarantee</strong>
                      <p>If you don't find value in our consultation, we'll send you a $50 Amazon gift card for your time.</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="consultation-form-actions">
                {currentStep > 1 && (
                  <button 
                    type="button" 
                    className="consultation-prev-button"
                    onClick={handlePrev}
                  >
                    ← Previous
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button 
                    type="button" 
                    className="consultation-next-button"
                    onClick={handleNext}
                    disabled={
                      (currentStep === 1 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone)) ||
                      (currentStep === 2 && (!formData.company || !formData.challenge))
                    }
                  >
                    Next Step →
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="consultation-submit-button"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="consultation-loading-spinner"></span>
                        Booking Your Call...
                      </>
                    ) : (
                      '📞 Book My Free Consultation'
                    )}
                  </button>
                )}
              </div>
            </form>
            
            <div className="consultation-trust-indicators">
              <div className="consultation-trust-item">
                <span>🔒</span>
                <p>100% Confidential</p>
              </div>
              <div className="consultation-trust-item">
                <span>🆓</span>
                <p>Completely Free</p>
              </div>
              <div className="consultation-trust-item">
                <span>⚡</span>
                <p>No Obligation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;
