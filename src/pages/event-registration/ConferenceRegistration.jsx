import React, { useState } from 'react';
import './ConferenceRegistration.css';

const ConferenceRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    organization: '',
    role: '',
    ticketType: 'standard',
    workshops: [],
    paymentMethod: 'creditCard',
    promoCode: '',
    agreeTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'workshops') {
      let updatedWorkshops = [...formData.workshops];
      if (checked) {
        updatedWorkshops.push(value);
      } else {
        updatedWorkshops = updatedWorkshops.filter(workshop => workshop !== value);
      }
      setFormData(prev => ({
        ...prev,
        workshops: updatedWorkshops
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };
  
  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // In a real app, you would submit the form data to a server here
    console.log('Form submitted:', formData);
  };
  
  // Calculate ticket price
  const getTicketPrice = () => {
    const prices = {
      standard: 499,
      premium: 899,
      vip: 1299
    };
    return prices[formData.ticketType];
  };
  
  return (
    <div className="conf-registration">
      <div className="conf-registration-header">
        <div className="conf-registration-header-inner">
          <div className="conf-registration-logo">
            <span>TECH<span className="conf-registration-logo-accent">CON</span>2025</span>
          </div>
          
          <div className="conf-registration-header-content">
            <h1>The Ultimate Tech Conference</h1>
            <p className="conf-registration-tagline">Explore the future of technology with industry leaders and innovators</p>
            <div className="conf-registration-header-details">
              <div className="conf-registration-header-detail">
                <i className="conf-registration-icon-calendar"></i>
                <span>October 10-12, 2025</span>
              </div>
              <div className="conf-registration-header-detail">
                <i className="conf-registration-icon-location"></i>
                <span>Tech Innovation Center, San Francisco</span>
              </div>
              <div className="conf-registration-header-detail">
                <i className="conf-registration-icon-ticket"></i>
                <span>Limited Spots Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="conf-registration-container">
        {isSubmitted ? (
          <div className="conf-registration-success">
            <div className="conf-registration-success-icon">✓</div>
            <h2>Registration Confirmed!</h2>
            <p>You're all set for TechCon 2025! Check your email for a confirmation receipt and event details.</p>
            <div className="conf-registration-ticket">
              <div className="conf-registration-ticket-header">
                <div className="conf-registration-ticket-logo">TECHCON2025</div>
                <div className="conf-registration-ticket-type">{formData.ticketType.toUpperCase()} PASS</div>
              </div>
              <div className="conf-registration-ticket-details">
                <div className="conf-registration-ticket-detail">
                  <span className="conf-registration-ticket-label">ATTENDEE</span>
                  <span className="conf-registration-ticket-value">{formData.fullName}</span>
                </div>
                <div className="conf-registration-ticket-detail">
                  <span className="conf-registration-ticket-label">EMAIL</span>
                  <span className="conf-registration-ticket-value">{formData.email}</span>
                </div>
                <div className="conf-registration-ticket-detail">
                  <span className="conf-registration-ticket-label">EVENT DATE</span>
                  <span className="conf-registration-ticket-value">OCTOBER 10-12, 2025</span>
                </div>
                <div className="conf-registration-ticket-detail">
                  <span className="conf-registration-ticket-label">LOCATION</span>
                  <span className="conf-registration-ticket-value">TECH INNOVATION CENTER, SF</span>
                </div>
              </div>
              <div className="conf-registration-ticket-barcode"></div>
              <div className="conf-registration-ticket-note">
                Please bring this ticket and a valid ID to check in at the conference.
              </div>
            </div>
            
            <div className="conf-registration-next-steps">
              <h3>Next Steps</h3>
              <ul>
                <li>Check your email for your ticket and receipt</li>
                <li>Book your accommodation using our discount code</li>
                <li>Join our Slack community to connect with other attendees</li>
                <li>Download the conference app to plan your schedule</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="conf-registration-form-container">
            <div className="conf-registration-progress">
              <div className={`conf-registration-progress-step ${step >= 1 ? 'active' : ''}`}>
                <div className="conf-registration-step-number">1</div>
                <div className="conf-registration-step-label">Personal Info</div>
              </div>
              <div className="conf-registration-progress-line"></div>
              <div className={`conf-registration-progress-step ${step >= 2 ? 'active' : ''}`}>
                <div className="conf-registration-step-number">2</div>
                <div className="conf-registration-step-label">Ticket Selection</div>
              </div>
              <div className="conf-registration-progress-line"></div>
              <div className={`conf-registration-progress-step ${step >= 3 ? 'active' : ''}`}>
                <div className="conf-registration-step-number">3</div>
                <div className="conf-registration-step-label">Payment</div>
              </div>
            </div>
            
            <form className="conf-registration-form" onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="conf-registration-step-content">
                  <h2>Your Information</h2>
                  <p>Let's start with your basic information for registration.</p>
                  
                  <div className="conf-registration-form-group">
                    <label htmlFor="fullName">Full Name*</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required 
                    />
                  </div>
                  
                  <div className="conf-registration-form-group">
                    <label htmlFor="email">Email Address*</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required 
                    />
                    <div className="conf-registration-form-hint">We'll send your ticket and updates to this email</div>
                  </div>
                  
                  <div className="conf-registration-form-row">
                    <div className="conf-registration-form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phoneNumber" 
                        name="phoneNumber" 
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="conf-registration-form-group">
                      <label htmlFor="organization">Organization*</label>
                      <input 
                        type="text" 
                        id="organization" 
                        name="organization" 
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Company or organization name"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="conf-registration-form-group">
                    <label htmlFor="role">Job Title/Role</label>
                    <input 
                      type="text" 
                      id="role" 
                      name="role" 
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Enter your job title or role"
                    />
                  </div>
                  
                  <div className="conf-registration-form-actions">
                    <button type="button" className="conf-registration-next-button" onClick={nextStep}>
                      Next: Select Ticket
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Ticket Selection */}
              {step === 2 && (
                <div className="conf-registration-step-content">
                  <h2>Choose Your Ticket</h2>
                  <p>Select the ticket type and optional workshop sessions.</p>
                  
                  <div className="conf-registration-ticket-options">
                    <div className={`conf-registration-ticket-option ${formData.ticketType === 'standard' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        id="standard" 
                        name="ticketType" 
                        value="standard"
                        checked={formData.ticketType === 'standard'}
                        onChange={handleChange}
                      />
                      <label htmlFor="standard" className="conf-registration-ticket-label">
                        <div className="conf-registration-ticket-header">
                          <h3>Standard Pass</h3>
                          <span className="conf-registration-ticket-price">$499</span>
                        </div>
                        <div className="conf-registration-ticket-features">
                          <ul>
                            <li>Access to all keynote sessions</li>
                            <li>Conference materials</li>
                            <li>Lunch and refreshments</li>
                            <li>Networking events</li>
                          </ul>
                        </div>
                      </label>
                    </div>
                    
                    <div className={`conf-registration-ticket-option ${formData.ticketType === 'premium' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        id="premium" 
                        name="ticketType" 
                        value="premium"
                        checked={formData.ticketType === 'premium'}
                        onChange={handleChange}
                      />
                      <label htmlFor="premium" className="conf-registration-ticket-label">
                        <div className="conf-registration-ticket-header">
                          <h3>Premium Pass</h3>
                          <span className="conf-registration-ticket-price">$899</span>
                        </div>
                        <div className="conf-registration-ticket-features">
                          <ul>
                            <li>All Standard Pass features</li>
                            <li>Workshop access (choose 2)</li>
                            <li>Conference dinner</li>
                            <li>Exclusive Q&A sessions</li>
                          </ul>
                        </div>
                      </label>
                    </div>
                    
                    <div className={`conf-registration-ticket-option ${formData.ticketType === 'vip' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        id="vip" 
                        name="ticketType" 
                        value="vip"
                        checked={formData.ticketType === 'vip'}
                        onChange={handleChange}
                      />
                      <label htmlFor="vip" className="conf-registration-ticket-label">
                        <div className="conf-registration-ticket-header">
                          <h3>VIP Pass</h3>
                          <span className="conf-registration-ticket-price">$1,299</span>
                        </div>
                        <div className="conf-registration-ticket-features">
                          <ul>
                            <li>All Premium Pass features</li>
                            <li>Unlimited workshop access</li>
                            <li>VIP lounge access</li>
                            <li>One-on-one sessions with speakers</li>
                            <li>Priority seating at all events</li>
                          </ul>
                        </div>
                        <div className="conf-registration-ribbon">RECOMMENDED</div>
                      </label>
                    </div>
                  </div>
                  
                  <div className={`conf-registration-workshops ${(formData.ticketType === 'premium' || formData.ticketType === 'vip') ? '' : 'conf-registration-workshops-disabled'}`}>
                    <h3>Optional Workshops</h3>
                    <p>
                      {formData.ticketType === 'standard' ? 'Workshops available with Premium or VIP tickets only' : 
                       formData.ticketType === 'premium' ? 'Select up to 2 workshops (included with your Premium ticket)' :
                       'Select any workshops you wish to attend (all included with your VIP ticket)'}
                    </p>
                    
                    <div className="conf-registration-workshop-options">
                      <div className="conf-registration-workshop-option">
                        <input 
                          type="checkbox" 
                          id="workshop1" 
                          name="workshops" 
                          value="ai-ml-fundamentals"
                          checked={formData.workshops.includes('ai-ml-fundamentals')}
                          onChange={handleChange}
                          disabled={formData.ticketType === 'standard'}
                        />
                        <label htmlFor="workshop1">
                          AI & Machine Learning Fundamentals
                          <span className="conf-registration-workshop-time">Day 1, 1:00 PM - 3:30 PM</span>
                        </label>
                      </div>
                      
                      <div className="conf-registration-workshop-option">
                        <input 
                          type="checkbox" 
                          id="workshop2" 
                          name="workshops" 
                          value="cloud-architecture"
                          checked={formData.workshops.includes('cloud-architecture')}
                          onChange={handleChange}
                          disabled={formData.ticketType === 'standard'}
                        />
                        <label htmlFor="workshop2">
                          Cloud Architecture Best Practices
                          <span className="conf-registration-workshop-time">Day 1, 4:00 PM - 6:30 PM</span>
                        </label>
                      </div>
                      
                      <div className="conf-registration-workshop-option">
                        <input 
                          type="checkbox" 
                          id="workshop3" 
                          name="workshops" 
                          value="blockchain-defi"
                          checked={formData.workshops.includes('blockchain-defi')}
                          onChange={handleChange}
                          disabled={formData.ticketType === 'standard'}
                        />
                        <label htmlFor="workshop3">
                          Blockchain & DeFi Development
                          <span className="conf-registration-workshop-time">Day 2, 9:00 AM - 11:30 AM</span>
                        </label>
                      </div>
                      
                      <div className="conf-registration-workshop-option">
                        <input 
                          type="checkbox" 
                          id="workshop4" 
                          name="workshops" 
                          value="cybersecurity"
                          checked={formData.workshops.includes('cybersecurity')}
                          onChange={handleChange}
                          disabled={formData.ticketType === 'standard'}
                        />
                        <label htmlFor="workshop4">
                          Advanced Cybersecurity Techniques
                          <span className="conf-registration-workshop-time">Day 2, 1:00 PM - 3:30 PM</span>
                        </label>
                      </div>
                      
                      <div className="conf-registration-workshop-option">
                        <input 
                          type="checkbox" 
                          id="workshop5" 
                          name="workshops" 
                          value="fullstack-development"
                          checked={formData.workshops.includes('fullstack-development')}
                          onChange={handleChange}
                          disabled={formData.ticketType === 'standard'}
                        />
                        <label htmlFor="workshop5">
                          Modern Full-Stack Development
                          <span className="conf-registration-workshop-time">Day 3, 9:00 AM - 11:30 AM</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="conf-registration-form-actions">
                    <button type="button" className="conf-registration-back-button" onClick={prevStep}>
                      Back
                    </button>
                    <button type="button" className="conf-registration-next-button" onClick={nextStep}>
                      Next: Payment
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="conf-registration-step-content">
                  <h2>Payment Details</h2>
                  <p>Complete your registration with payment information.</p>
                  
                  <div className="conf-registration-order-summary">
                    <h3>Order Summary</h3>
                    
                    <div className="conf-registration-order-items">
                      <div className="conf-registration-order-item">
                        <span className="conf-registration-item-name">
                          {formData.ticketType === 'standard' ? 'Standard Pass' : 
                           formData.ticketType === 'premium' ? 'Premium Pass' : 'VIP Pass'}
                        </span>
                        <span className="conf-registration-item-price">${getTicketPrice()}</span>
                      </div>
                      
                      {formData.workshops.length > 0 && formData.ticketType === 'standard' && (
                        <div className="conf-registration-order-item">
                          <span className="conf-registration-item-name">Workshop Access (Upgrade Required)</span>
                          <span className="conf-registration-item-price">--</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="conf-registration-order-total">
                      <span>Total</span>
                      <span>${getTicketPrice()}</span>
                    </div>
                  </div>
                  
                  <div className="conf-registration-payment-methods">
                    <h3>Payment Method</h3>
                    
                    <div className="conf-registration-payment-options">
                      <div className={`conf-registration-payment-option ${formData.paymentMethod === 'creditCard' ? 'selected' : ''}`}>
                        <input 
                          type="radio" 
                          id="creditCard" 
                          name="paymentMethod" 
                          value="creditCard"
                          checked={formData.paymentMethod === 'creditCard'}
                          onChange={handleChange}
                        />
                        <label htmlFor="creditCard">
                          <i className="conf-registration-icon-card"></i>
                          Credit/Debit Card
                        </label>
                      </div>
                      
                      <div className={`conf-registration-payment-option ${formData.paymentMethod === 'paypal' ? 'selected' : ''}`}>
                        <input 
                          type="radio" 
                          id="paypal" 
                          name="paymentMethod" 
                          value="paypal"
                          checked={formData.paymentMethod === 'paypal'}
                          onChange={handleChange}
                        />
                        <label htmlFor="paypal">
                          <i className="conf-registration-icon-paypal"></i>
                          PayPal
                        </label>
                      </div>
                      
                      <div className={`conf-registration-payment-option ${formData.paymentMethod === 'invoice' ? 'selected' : ''}`}>
                        <input 
                          type="radio" 
                          id="invoice" 
                          name="paymentMethod" 
                          value="invoice"
                          checked={formData.paymentMethod === 'invoice'}
                          onChange={handleChange}
                        />
                        <label htmlFor="invoice">
                          <i className="conf-registration-icon-invoice"></i>
                          Company Invoice
                        </label>
                      </div>
                    </div>
                    
                    {/* Credit Card Form (simplified for demo) */}
                    {formData.paymentMethod === 'creditCard' && (
                      <div className="conf-registration-cc-form">
                        <div className="conf-registration-form-group">
                          <label htmlFor="cardNumber">Card Number</label>
                          <input 
                            type="text" 
                            id="cardNumber" 
                            placeholder="1234 5678 9012 3456"
                            disabled
                          />
                        </div>
                        
                        <div className="conf-registration-form-row">
                          <div className="conf-registration-form-group">
                            <label htmlFor="expDate">Expiration Date</label>
                            <input 
                              type="text" 
                              id="expDate" 
                              placeholder="MM/YY"
                              disabled
                            />
                          </div>
                          
                          <div className="conf-registration-form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input 
                              type="text" 
                              id="cvv" 
                              placeholder="123"
                              disabled
                            />
                          </div>
                        </div>
                        
                        <div className="conf-registration-form-group">
                          <label htmlFor="cardName">Name on Card</label>
                          <input 
                            type="text" 
                            id="cardName" 
                            placeholder="John Smith"
                            disabled
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* PayPal option */}
                    {formData.paymentMethod === 'paypal' && (
                      <div className="conf-registration-payment-message">
                        <p>You'll be redirected to PayPal to complete your payment after registration.</p>
                      </div>
                    )}
                    
                    {/* Invoice option */}
                    {formData.paymentMethod === 'invoice' && (
                      <div className="conf-registration-invoice-form">
                        <div className="conf-registration-form-group">
                          <label htmlFor="billingEmail">Billing Email</label>
                          <input 
                            type="email" 
                            id="billingEmail" 
                            placeholder="finance@yourcompany.com"
                            disabled
                          />
                        </div>
                        
                        <div className="conf-registration-form-group">
                          <label htmlFor="poNumber">Purchase Order Number (if applicable)</label>
                          <input 
                            type="text" 
                            id="poNumber" 
                            placeholder="PO-12345"
                            disabled
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="conf-registration-promo-code">
                      <label htmlFor="promoCode">Have a Promo Code?</label>
                      <div className="conf-registration-promo-input">
                        <input 
                          type="text" 
                          id="promoCode" 
                          name="promoCode" 
                          value={formData.promoCode}
                          onChange={handleChange}
                          placeholder="Enter promo code"
                        />
                        <button type="button" className="conf-registration-promo-button">Apply</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="conf-registration-terms">
                    <label className="conf-registration-checkbox-label">
                      <input 
                        type="checkbox" 
                        name="agreeTerms" 
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                      />
                      <span>I agree to the event <a href="#" target="_blank">Terms & Conditions</a> and <a href="#" target="_blank">Privacy Policy</a></span>
                    </label>
                  </div>
                  
                  <div className="conf-registration-form-note">
                    <p>* This is a demo - no actual payment will be processed.</p>
                  </div>
                  
                  <div className="conf-registration-form-actions">
                    <button type="button" className="conf-registration-back-button" onClick={prevStep}>
                      Back
                    </button>
                    <button 
                      type="submit" 
                      className="conf-registration-submit-button"
                      disabled={!formData.agreeTerms}
                    >
                      Complete Registration
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
      
      <footer className="conf-registration-footer">
        <div className="conf-registration-footer-content">
          <div className="conf-registration-footer-branding">
            <div className="conf-registration-logo-footer">
              TECH<span className="conf-registration-logo-accent">CON</span>2025
            </div>
            <p>The premier conference for tech professionals and innovators.</p>
          </div>
          
          <div className="conf-registration-footer-links">
            <div className="conf-registration-footer-column">
              <h4>Event Info</h4>
              <ul>
                <li><a href="#">Schedule</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">Venue</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            
            <div className="conf-registration-footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Sponsorship</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
            
            <div className="conf-registration-footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Code of Conduct</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="conf-registration-footer-bottom">
          <p>© {new Date().getFullYear()} TechCon. All rights reserved.</p>
          <div className="conf-registration-social-links">
            <a href="#" className="conf-registration-social-link"></a>
            <a href="#" className="conf-registration-social-link"></a>
            <a href="#" className="conf-registration-social-link"></a>
            <a href="#" className="conf-registration-social-link"></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConferenceRegistration;
