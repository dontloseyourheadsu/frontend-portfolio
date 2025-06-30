import React, { useState } from 'react';
import './EnterprisePricing.css';

const EnterprisePricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [showComparison, setShowComparison] = useState(true);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'For small teams',
      price: 49,
      yearlyPrice: 39,
      users: 'Up to 5 users',
      billing: 'monthly',
      features: {
        'Core Features': {
          'Project Management': true,
          'Task Tracking': true,
          'Team Collaboration': true,
          'File Storage (10GB)': true,
          'Basic Reporting': true,
          'Email Support': true
        },
        'Advanced Features': {
          'Advanced Analytics': false,
          'Custom Workflows': false,
          'API Access': false,
          'SSO Integration': false,
          'Priority Support': false,
          'Custom Branding': false
        },
        'Enterprise Features': {
          'Advanced Security': false,
          'Audit Logs': false,
          'Custom Integrations': false,
          'Dedicated Manager': false,
          'SLA Guarantee': false,
          'White Labeling': false
        }
      }
    },
    {
      id: 'professional',
      name: 'Professional',
      subtitle: 'For growing businesses',
      price: 99,
      yearlyPrice: 79,
      users: 'Up to 25 users',
      billing: 'monthly',
      popular: true,
      features: {
        'Core Features': {
          'Project Management': true,
          'Task Tracking': true,
          'Team Collaboration': true,
          'File Storage (100GB)': true,
          'Basic Reporting': true,
          'Email Support': true
        },
        'Advanced Features': {
          'Advanced Analytics': true,
          'Custom Workflows': true,
          'API Access': true,
          'SSO Integration': true,
          'Priority Support': true,
          'Custom Branding': true
        },
        'Enterprise Features': {
          'Advanced Security': false,
          'Audit Logs': false,
          'Custom Integrations': false,
          'Dedicated Manager': false,
          'SLA Guarantee': false,
          'White Labeling': false
        }
      }
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'For large organizations',
      price: 199,
      yearlyPrice: 159,
      users: 'Unlimited users',
      billing: 'monthly',
      features: {
        'Core Features': {
          'Project Management': true,
          'Task Tracking': true,
          'Team Collaboration': true,
          'File Storage (Unlimited)': true,
          'Basic Reporting': true,
          'Email Support': true
        },
        'Advanced Features': {
          'Advanced Analytics': true,
          'Custom Workflows': true,
          'API Access': true,
          'SSO Integration': true,
          'Priority Support': true,
          'Custom Branding': true
        },
        'Enterprise Features': {
          'Advanced Security': true,
          'Audit Logs': true,
          'Custom Integrations': true,
          'Dedicated Manager': true,
          'SLA Guarantee': true,
          'White Labeling': true
        }
      }
    }
  ];

  const [isYearly, setIsYearly] = useState(false);

  const getFeatureValue = (plan, category, feature) => {
    return plan.features[category][feature];
  };

  const allFeatures = {};
  plans.forEach(plan => {
    Object.keys(plan.features).forEach(category => {
      if (!allFeatures[category]) {
        allFeatures[category] = [];
      }
      Object.keys(plan.features[category]).forEach(feature => {
        if (!allFeatures[category].includes(feature)) {
          allFeatures[category].push(feature);
        }
      });
    });
  });

  return (
    <div className="enterprise-pricing">
      <div className="enterprise-container">
        {/* Header */}
        <div className="enterprise-header">
          <div className="header-content">
            <span className="enterprise-badge">Enterprise Solutions</span>
            <h1 className="enterprise-title">
              Choose the Right Plan for Your Organization
            </h1>
            <p className="enterprise-subtitle">
              Scalable pricing designed for teams of all sizes. Start with a plan that fits 
              your current needs and upgrade as you grow.
            </p>
          </div>
          
          {/* Billing Toggle */}
          <div className="billing-toggle">
            <span className={`billing-option ${!isYearly ? 'active' : ''}`}>Monthly</span>
            <button 
              className="toggle-button"
              onClick={() => setIsYearly(!isYearly)}
            >
              <span className={`toggle-slider ${isYearly ? 'yearly' : 'monthly'}`}></span>
            </button>
            <span className={`billing-option ${isYearly ? 'active' : ''}`}>
              Yearly
              <span className="discount-badge">20% off</span>
            </span>
          </div>
        </div>

        {/* Plan Selection Cards */}
        <div className="plan-selection">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''} ${plan.popular ? 'popular' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="popular-label">Most Popular</div>
              )}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-subtitle">{plan.subtitle}</p>
                
                <div className="plan-pricing">
                  <span className="plan-price">
                    ${isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="price-period">
                    /{isYearly ? 'month' : 'month'}
                  </span>
                </div>
                
                {isYearly && (
                  <div className="yearly-savings">
                    Save ${(plan.price - plan.yearlyPrice) * 12}/year
                  </div>
                )}
                
                <p className="plan-users">{plan.users}</p>
              </div>
              
              <button className={`select-plan-btn ${plan.popular ? 'primary' : 'secondary'}`}>
                {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Toggle */}
        <div className="comparison-toggle">
          <button 
            className={`toggle-comparison ${showComparison ? 'active' : ''}`}
            onClick={() => setShowComparison(!showComparison)}
          >
            {showComparison ? 'Hide' : 'Show'} Feature Comparison
            <svg 
              className={`chevron ${showComparison ? 'up' : 'down'}`} 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Feature Comparison Table */}
        {showComparison && (
          <div className="feature-comparison">
            <div className="comparison-table">
              <div className="table-header">
                <div className="feature-column">
                  <h3>Features</h3>
                </div>
                {plans.map(plan => (
                  <div key={plan.id} className={`plan-column ${plan.popular ? 'popular' : ''}`}>
                    <div className="plan-header-cell">
                      <h4>{plan.name}</h4>
                      <p className="plan-price-cell">
                        ${isYearly ? plan.yearlyPrice : plan.price}/mo
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {Object.keys(allFeatures).map(category => (
                <div key={category} className="feature-category">
                  <div className="category-header">
                    <h4 className="category-title">{category}</h4>
                  </div>
                  
                  {allFeatures[category].map(feature => (
                    <div key={feature} className="feature-row">
                      <div className="feature-name">
                        {feature}
                      </div>
                      {plans.map(plan => (
                        <div key={plan.id} className={`feature-cell ${plan.popular ? 'popular' : ''}`}>
                          {getFeatureValue(plan, category, feature) ? (
                            <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="x-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="enterprise-cta">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Join over 10,000+ organizations that trust our platform to manage their projects efficiently.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">Start Free Trial</button>
              <button className="cta-secondary">Schedule Demo</button>
            </div>
            <p className="cta-note">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="trust-indicators">
          <div className="trust-content">
            <p className="trust-heading">Trusted by industry leaders</p>
            <div className="trust-logos">
              <div className="trust-logo">TechCorp</div>
              <div className="trust-logo">InnovateCo</div>
              <div className="trust-logo">GlobalTech</div>
              <div className="trust-logo">DataFlow</div>
              <div className="trust-logo">CloudSync</div>
            </div>
            <div className="trust-stats">
              <div className="trust-stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime SLA</span>
              </div>
              <div className="trust-stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="trust-stat">
                <span className="stat-number">SOC 2</span>
                <span className="stat-label">Compliant</span>
              </div>
              <div className="trust-stat">
                <span className="stat-number">GDPR</span>
                <span className="stat-label">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePricing;
