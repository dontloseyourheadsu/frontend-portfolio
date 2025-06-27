import React, { useState } from 'react';
import './PremiumMembership.css';

const PremiumMembership = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('annual');
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const plans = {
    starter: {
      name: 'Starter',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Access to basic courses',
        '5 downloads per month',
        'Community access',
        'Email support',
        'Mobile app access'
      ]
    },
    pro: {
      name: 'Professional',
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        'Access to all courses',
        'Unlimited downloads',
        'Priority support',
        'Live workshops',
        'Certification programs',
        'Advanced analytics',
        'Custom learning paths'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Everything in Pro',
        'Team management',
        'Custom branding',
        'API access',
        'Dedicated support',
        'Advanced reporting',
        'SSO integration',
        'Custom integrations'
      ]
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Membership signup:', { plan: selectedPlan, billing: billingCycle, ...formData });
    // Simulate successful signup
    alert('Welcome to the family! Your membership has been activated.');
  };

  const getPrice = (plan) => {
    return billingCycle === 'annual' ? plans[plan].annualPrice : plans[plan].monthlyPrice;
  };

  const getSavings = (plan) => {
    const annual = plans[plan].annualPrice;
    const monthly = plans[plan].monthlyPrice * 12;
    return monthly - annual;
  };

  if (showSignup) {
    return (
      <div className="membership-page">
        <div className="membership-container">
          <div className="membership-signup">
            <div className="membership-signup-header">
              <h1>Complete Your Registration</h1>
              <p>You're just moments away from accessing our premium content library.</p>
              
              <div className="membership-selected-plan">
                <h3>Selected Plan: {plans[selectedPlan].name}</h3>
                <div className="membership-selected-price">
                  ${getPrice(selectedPlan)}{billingCycle === 'annual' ? '/year' : '/month'}
                  {billingCycle === 'annual' && (
                    <span className="membership-savings">Save ${getSavings(selectedPlan)}</span>
                  )}
                </div>
              </div>
            </div>
            
            <form className="membership-signup-form" onSubmit={handleSignup}>
              <div className="membership-form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="membership-form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className="membership-form-row">
                <div className="membership-form-group">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    required
                  />
                </div>
                
                <div className="membership-form-group">
                  <label htmlFor="confirmPassword">Confirm Password *</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
              
              <div className="membership-payment-info">
                <h4>💳 Payment Information</h4>
                <p>You'll be redirected to our secure payment processor to complete your purchase.</p>
                <div className="membership-security-badges">
                  <span>🔒 SSL Secured</span>
                  <span>💯 Money-back Guarantee</span>
                  <span>🔄 Cancel Anytime</span>
                </div>
              </div>
              
              <button type="submit" className="membership-complete-button">
                Complete Registration & Pay ${getPrice(selectedPlan)}
              </button>
              
              <div className="membership-terms">
                <label>
                  <input type="checkbox" required />
                  <span>I agree to the <a href="#" target="_blank">Terms of Service</a> and <a href="#" target="_blank">Privacy Policy</a></span>
                </label>
              </div>
            </form>
            
            <button 
              className="membership-back-button" 
              onClick={() => setShowSignup(false)}
            >
              ← Back to Plans
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="membership-page">
      <div className="membership-container">
        <div className="membership-header">
          <h1>Unlock Your Learning Potential</h1>
          <p>Join thousands of professionals advancing their careers with our premium membership</p>
          
          <div className="membership-stats">
            <div className="membership-stat">
              <span className="membership-stat-number">50,000+</span>
              <span className="membership-stat-label">Active Members</span>
            </div>
            <div className="membership-stat">
              <span className="membership-stat-number">500+</span>
              <span className="membership-stat-label">Expert Courses</span>
            </div>
            <div className="membership-stat">
              <span className="membership-stat-number">98%</span>
              <span className="membership-stat-label">Success Rate</span>
            </div>
          </div>
        </div>
        
        <div className="membership-billing-toggle">
          <div className="membership-toggle-container">
            <button 
              className={`membership-toggle-option ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`membership-toggle-option ${billingCycle === 'annual' ? 'active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual
              <span className="membership-save-badge">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="membership-plans">
          {Object.entries(plans).map(([planKey, plan]) => (
            <div 
              key={planKey}
              className={`membership-plan ${planKey === 'pro' ? 'featured' : ''} ${selectedPlan === planKey ? 'selected' : ''}`}
              onClick={() => setSelectedPlan(planKey)}
            >
              {planKey === 'pro' && <div className="membership-popular-badge">Most Popular</div>}
              
              <div className="membership-plan-header">
                <h3>{plan.name}</h3>
                <div className="membership-plan-price">
                  <span className="membership-price-amount">
                    ${billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="membership-price-period">
                    /{billingCycle === 'annual' ? 'year' : 'month'}
                  </span>
                </div>
                {billingCycle === 'annual' && (
                  <div className="membership-annual-savings">
                    Save ${getSavings(planKey)} annually
                  </div>
                )}
              </div>
              
              <div className="membership-plan-features">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <span className="membership-feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className={`membership-select-button ${selectedPlan === planKey ? 'selected' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan(planKey);
                  setShowSignup(true);
                }}
              >
                {selectedPlan === planKey ? 'Selected' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>
        
        <div className="membership-benefits">
          <h2>Why Choose Our Membership?</h2>
          <div className="membership-benefit-grid">
            <div className="membership-benefit-card">
              <div className="membership-benefit-icon">🎓</div>
              <h3>Expert-Led Content</h3>
              <p>Learn from industry professionals with real-world experience and proven track records.</p>
            </div>
            
            <div className="membership-benefit-card">
              <div className="membership-benefit-icon">📱</div>
              <h3>Learn Anywhere</h3>
              <p>Access content on any device - desktop, tablet, or mobile. Download for offline learning.</p>
            </div>
            
            <div className="membership-benefit-card">
              <div className="membership-benefit-icon">🏆</div>
              <h3>Certification Programs</h3>
              <p>Earn industry-recognized certificates to showcase your new skills to employers.</p>
            </div>
            
            <div className="membership-benefit-card">
              <div className="membership-benefit-icon">👥</div>
              <h3>Community Support</h3>
              <p>Connect with like-minded learners and get help from our supportive community.</p>
            </div>
          </div>
        </div>
        
        <div className="membership-testimonials">
          <h2>What Our Members Say</h2>
          <div className="membership-testimonial-grid">
            <div className="membership-testimonial">
              <div className="membership-testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>"This membership completely transformed my career. Within 6 months, I landed my dream job!"</p>
              <div className="membership-testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>Software Engineer at Google</span>
              </div>
            </div>
            
            <div className="membership-testimonial">
              <div className="membership-testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>"The quality of content is unmatched. I've tried other platforms, but this is by far the best."</p>
              <div className="membership-testimonial-author">
                <strong>Michael Chen</strong>
                <span>Product Manager at Microsoft</span>
              </div>
            </div>
            
            <div className="membership-testimonial">
              <div className="membership-testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>"The community aspect is fantastic. Having peers to learn with makes all the difference."</p>
              <div className="membership-testimonial-author">
                <strong>Emily Rodriguez</strong>
                <span>UX Designer at Adobe</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="membership-guarantee">
          <h3>🛡️ 30-Day Money-Back Guarantee</h3>
          <p>Try our membership risk-free. If you're not completely satisfied within 30 days, we'll refund every penny.</p>
        </div>
      </div>
    </div>
  );
};

export default PremiumMembership;
