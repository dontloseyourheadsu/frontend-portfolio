import React, { useState } from 'react';
import './ServiceSetup.css';

const ServiceSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    industry: '',
    description: '',
    goals: [],
    budget: '',
    timeline: '',
    contactName: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const totalSteps = 4;
  
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$2,999',
      duration: '2-3 weeks',
      features: [
        '5-page responsive website',
        'Mobile optimization',
        'Basic SEO setup',
        'Contact form integration',
        '30 days support'
      ],
      recommended: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '$4,999',
      duration: '3-4 weeks',
      features: [
        '10-page responsive website',
        'Custom design & branding',
        'Advanced SEO optimization',
        'E-commerce integration',
        'Analytics setup',
        '90 days support'
      ],
      recommended: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      duration: '4-6 weeks',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Advanced integrations',
        'Performance optimization',
        'Security hardening',
        '6 months support'
      ],
      recommended: false
    }
  ];
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'goals') {
      let updatedGoals = [...formData.goals];
      if (checked) {
        updatedGoals.push(value);
      } else {
        updatedGoals = updatedGoals.filter(goal => goal !== value);
      }
      setFormData(prev => ({
        ...prev,
        goals: updatedGoals
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Service setup submitted:', { ...formData, selectedPlan });
    setIsSubmitted(true);
  };
  
  if (isSubmitted) {
    return (
      <div className="service-setup">
        <div className="service-setup-container">
          <div className="service-success-screen">
            <div className="service-success-header">
              <div className="service-success-icon">✨</div>
              <h1>Project Consultation Scheduled!</h1>
              <p>Thank you for choosing our web development services. We're excited to bring your vision to life.</p>
            </div>
            
            <div className="service-project-summary">
              <h2>Project Summary</h2>
              <div className="service-summary-grid">
                <div className="service-summary-item">
                  <span className="service-summary-label">Selected Plan:</span>
                  <span className="service-summary-value">
                    {plans.find(p => p.id === selectedPlan)?.name} - {plans.find(p => p.id === selectedPlan)?.price}
                  </span>
                </div>
                <div className="service-summary-item">
                  <span className="service-summary-label">Business:</span>
                  <span className="service-summary-value">{formData.businessName}</span>
                </div>
                <div className="service-summary-item">
                  <span className="service-summary-label">Industry:</span>
                  <span className="service-summary-value">{formData.industry}</span>
                </div>
                <div className="service-summary-item">
                  <span className="service-summary-label">Timeline:</span>
                  <span className="service-summary-value">{formData.timeline}</span>
                </div>
              </div>
            </div>
            
            <div className="service-next-steps">
              <h2>What Happens Next?</h2>
              <div className="service-timeline">
                <div className="service-timeline-item">
                  <div className="service-timeline-icon">📞</div>
                  <div className="service-timeline-content">
                    <h3>Discovery Call (Today)</h3>
                    <p>Our team will contact you within 2 hours to schedule a detailed consultation call.</p>
                  </div>
                </div>
                
                <div className="service-timeline-item">
                  <div className="service-timeline-icon">📋</div>
                  <div className="service-timeline-content">
                    <h3>Project Planning (24-48 hours)</h3>
                    <p>We'll create a detailed project proposal with timeline, milestones, and deliverables.</p>
                  </div>
                </div>
                
                <div className="service-timeline-item">
                  <div className="service-timeline-icon">🚀</div>
                  <div className="service-timeline-content">
                    <h3>Project Kickoff (1 week)</h3>
                    <p>Once approved, we'll begin development and keep you updated throughout the process.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="service-contact-info">
              <div className="service-contact-card">
                <h3>Your Project Manager</h3>
                <div className="service-manager-info">
                  <div className="service-manager-avatar">👨‍💼</div>
                  <div className="service-manager-details">
                    <h4>Alex Johnson</h4>
                    <p>Senior Project Manager</p>
                    <a href="mailto:alex@webdev.com">alex@webdev.com</a>
                    <a href="tel:+1234567890">(123) 456-7890</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="service-resources">
              <h3>Helpful Resources</h3>
              <div className="service-resource-links">
                <a href="#" className="service-resource-link">
                  <span className="service-resource-icon">📖</span>
                  Project Process Guide
                </a>
                <a href="#" className="service-resource-link">
                  <span className="service-resource-icon">💬</span>
                  Client Portal Access
                </a>
                <a href="#" className="service-resource-link">
                  <span className="service-resource-icon">📞</span>
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="service-setup">
      <div className="service-setup-container">
        <div className="service-setup-header">
          <div className="service-logo">
            <span className="service-logo-icon">🚀</span>
            <span className="service-logo-text">WebDev<span className="service-logo-accent">Pro</span></span>
          </div>
          
          <div className="service-step-indicator">
            <div className="service-step-track">
              {Array.from({ length: totalSteps }, (_, index) => (
                <div 
                  key={index}
                  className={`service-step-dot ${index + 1 <= currentStep ? 'active' : ''} ${index + 1 === currentStep ? 'current' : ''}`}
                />
              ))}
            </div>
            <span className="service-step-text">Step {currentStep} of {totalSteps}</span>
          </div>
        </div>
        
        <div className="service-setup-content">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="service-step-content">
              <div className="service-step-header">
                <h1>Choose Your Service Package</h1>
                <p>Select the package that best fits your business needs and budget.</p>
              </div>
              
              <div className="service-plans-grid">
                {plans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`service-plan-card ${selectedPlan === plan.id ? 'selected' : ''} ${plan.recommended ? 'recommended' : ''}`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.recommended && <div className="service-plan-badge">Most Popular</div>}
                    
                    <div className="service-plan-header">
                      <h3>{plan.name}</h3>
                      <div className="service-plan-price">{plan.price}</div>
                      <div className="service-plan-duration">{plan.duration} delivery</div>
                    </div>
                    
                    <ul className="service-plan-features">
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    <div className="service-plan-selector">
                      <input 
                        type="radio" 
                        name="plan" 
                        value={plan.id}
                        checked={selectedPlan === plan.id}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                      />
                      <span>Select {plan.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Step 2: Business Information */}
          {currentStep === 2 && (
            <div className="service-step-content">
              <div className="service-step-header">
                <h1>Tell Us About Your Business</h1>
                <p>Help us understand your business so we can create the perfect solution.</p>
              </div>
              
              <form className="service-form">
                <div className="service-form-group">
                  <label htmlFor="businessName">Business Name *</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Enter your business name"
                    required
                  />
                </div>
                
                <div className="service-form-row">
                  <div className="service-form-group">
                    <label htmlFor="website">Current Website (if any)</label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://your-website.com"
                    />
                  </div>
                  
                  <div className="service-form-group">
                    <label htmlFor="industry">Industry *</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select your industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail/E-commerce</option>
                      <option value="education">Education</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="service-form-group">
                  <label htmlFor="description">Business Description *</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your business, products/services, and target audience"
                    rows="4"
                    required
                  />
                </div>
              </form>
            </div>
          )}
          
          {/* Step 3: Project Requirements */}
          {currentStep === 3 && (
            <div className="service-step-content">
              <div className="service-step-header">
                <h1>Project Requirements</h1>
                <p>Let us know your goals and requirements for this project.</p>
              </div>
              
              <form className="service-form">
                <div className="service-form-group">
                  <label>Primary Goals (select all that apply)</label>
                  <div className="service-checkbox-grid">
                    {[
                      { value: 'increase-sales', label: 'Increase Online Sales' },
                      { value: 'brand-awareness', label: 'Build Brand Awareness' },
                      { value: 'lead-generation', label: 'Generate More Leads' },
                      { value: 'customer-engagement', label: 'Improve Customer Engagement' },
                      { value: 'modernize-design', label: 'Modernize Current Design' },
                      { value: 'mobile-optimization', label: 'Better Mobile Experience' }
                    ].map((goal) => (
                      <label key={goal.value} className="service-checkbox-label">
                        <input
                          type="checkbox"
                          name="goals"
                          value={goal.value}
                          checked={formData.goals.includes(goal.value)}
                          onChange={handleInputChange}
                        />
                        <span>{goal.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="service-form-row">
                  <div className="service-form-group">
                    <label htmlFor="budget">Total Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>
                  
                  <div className="service-form-group">
                    <label htmlFor="timeline">Preferred Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush job)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          )}
          
          {/* Step 4: Contact Information */}
          {currentStep === 4 && (
            <div className="service-step-content">
              <div className="service-step-header">
                <h1>Contact Information</h1>
                <p>How can we reach you to discuss your project in detail?</p>
              </div>
              
              <form className="service-form" onSubmit={handleSubmit}>
                <div className="service-form-group">
                  <label htmlFor="contactName">Full Name *</label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="service-form-row">
                  <div className="service-form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div className="service-form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div className="service-agreement">
                  <label className="service-checkbox-label">
                    <input type="checkbox" required />
                    <span>
                      I agree to receive project updates and communications via email and phone. 
                      I understand that submitting this form initiates a consultation process.
                    </span>
                  </label>
                </div>
                
                <div className="service-consultation-note">
                  <div className="service-note-icon">💡</div>
                  <div className="service-note-content">
                    <h4>Free Consultation Included</h4>
                    <p>
                      This form starts your free consultation process. We'll review your requirements 
                      and provide a detailed proposal with no obligation.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          )}
          
          <div className="service-form-actions">
            {currentStep > 1 && (
              <button 
                type="button" 
                className="service-back-button" 
                onClick={prevStep}
              >
                ← Back
              </button>
            )}
            
            <button 
              type={currentStep === totalSteps ? "submit" : "button"}
              className="service-next-button"
              onClick={currentStep === totalSteps ? handleSubmit : nextStep}
            >
              {currentStep === totalSteps ? 'Start Project Consultation' : 'Continue →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSetup;
