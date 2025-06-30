import React, { useState } from 'react';
import './ModernSaaSPricing.css';

const ModernSaaSPricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small teams getting started',
      monthlyPrice: 9,
      annualPrice: 7,
      features: [
        '5 Projects',
        '10GB Storage',
        'Basic Analytics',
        'Email Support',
        'SSL Certificate',
        '99.9% Uptime'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and professional teams',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        'Unlimited Projects',
        '100GB Storage',
        'Advanced Analytics',
        'Priority Support',
        'Custom Domain',
        'Team Collaboration',
        'API Access',
        'Advanced Security'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom requirements',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Everything in Professional',
        'Unlimited Storage',
        'White Label Solution',
        'Dedicated Account Manager',
        'Custom Integrations',
        'SLA Guarantee',
        '24/7 Phone Support',
        'Advanced Permissions'
      ],
      popular: false,
      color: 'green'
    }
  ];

  return (
    <div className="modern-saas-pricing">
      <div className="saas-pricing-container">
        {/* Header */}
        <div className="saas-pricing-header">
          <h1 className="saas-pricing-title">Choose Your Plan</h1>
          <p className="saas-pricing-subtitle">
            Start with a 14-day free trial. No credit card required.
          </p>
          
          {/* Billing Toggle */}
          <div className="saas-billing-toggle">
            <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
            <button 
              className={`toggle-switch ${isAnnual ? 'annual' : 'monthly'}`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span className="toggle-slider"></span>
            </button>
            <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>
              Annual 
              <span className="save-badge">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="saas-pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`saas-pricing-card ${plan.popular ? 'popular' : ''} ${plan.color}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                
                <div className="price-section">
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="period">/month</span>
                  </div>
                  {isAnnual && (
                    <div className="annual-note">
                      Billed annually (${plan.annualPrice * 12})
                    </div>
                  )}
                </div>
              </div>

              <div className="features-section">
                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <button className={`cta-button ${plan.popular ? 'primary' : 'secondary'}`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
                <p className="trial-note">14-day free trial included</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="saas-faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I change my plan later?</h3>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a setup fee?</h3>
              <p>No setup fees, ever. What you see is what you pay.</p>
            </div>
            <div className="faq-item">
              <h3>Can I cancel anytime?</h3>
              <p>Absolutely. Cancel anytime with no questions asked. No long-term contracts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernSaaSPricing;
