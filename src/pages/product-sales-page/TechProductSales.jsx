import React, { useState } from 'react';
import './TechProductSales.css';

const TechProductSales = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [activeTab, setActiveTab] = useState('features');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 49,
      originalPrice: 79,
      features: [
        'Core Analytics Dashboard',
        'Up to 1,000 data points',
        'Email Support',
        'Basic API Access',
        'Standard Security'
      ]
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 149,
      originalPrice: 199,
      popular: true,
      features: [
        'Everything in Basic',
        'Advanced Analytics',
        'Up to 10,000 data points',
        'Priority Support',
        'Full API Access',
        'Advanced Security',
        'Custom Integrations',
        'Team Collaboration'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 399,
      originalPrice: 499,
      features: [
        'Everything in Pro',
        'Unlimited data points',
        'White-label solution',
        '24/7 Dedicated Support',
        'Custom Development',
        'SLA Guarantee',
        'Advanced Permissions',
        'On-premise Deployment'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO at DataFlow',
      content: 'This platform transformed how we handle analytics. The insights are incredible and the interface is so intuitive.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager at TechCorp',
      content: 'Best investment we made this year. ROI was visible within the first month of implementation.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Data Scientist at InnovateLab',
      content: 'The API is well-documented and the support team is incredibly responsive. Highly recommended.',
      rating: 5
    }
  ];

  return (
    <div className="tech-product-sales">
      {/* Hero Section */}
      <section className="tech-hero-section">
        <div className="tech-container">
          <div className="tech-hero-content">
            <div className="tech-hero-text">
              <span className="tech-badge">🚀 New Release v3.0</span>
              <h1 className="tech-hero-title">
                Analytics Platform That
                <span className="tech-gradient-text"> Actually Works</span>
              </h1>
              <p className="tech-hero-subtitle">
                Transform your data into actionable insights with our AI-powered analytics platform. 
                Trusted by 10,000+ companies worldwide.
              </p>
              
              <div className="tech-hero-stats">
                <div className="tech-stat">
                  <span className="tech-stat-number">10K+</span>
                  <span className="tech-stat-label">Active Users</span>
                </div>
                <div className="tech-stat">
                  <span className="tech-stat-number">99.9%</span>
                  <span className="tech-stat-label">Uptime</span>
                </div>
                <div className="tech-stat">
                  <span className="tech-stat-number">24/7</span>
                  <span className="tech-stat-label">Support</span>
                </div>
              </div>

              <div className="tech-hero-actions">
                <button className="tech-btn tech-btn-primary">Start Free Trial</button>
                <button className="tech-btn tech-btn-secondary">
                  <svg className="tech-play-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="tech-hero-visual">
              <div className="tech-dashboard-mockup">
                <div className="tech-mockup-header">
                  <div className="tech-mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="tech-mockup-content">
                  <div className="tech-chart-placeholder">
                    <div className="tech-chart-bars">
                      <div className="tech-bar" style={{height: '60%'}}></div>
                      <div className="tech-bar" style={{height: '80%'}}></div>
                      <div className="tech-bar" style={{height: '45%'}}></div>
                      <div className="tech-bar" style={{height: '90%'}}></div>
                      <div className="tech-bar" style={{height: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="tech-product-tabs">
        <div className="tech-container">
          <div className="tech-tabs-nav">
            <button 
              className={`tech-tab ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button 
              className={`tech-tab ${activeTab === 'integrations' ? 'active' : ''}`}
              onClick={() => setActiveTab('integrations')}
            >
              Integrations
            </button>
            <button 
              className={`tech-tab ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              Security
            </button>
          </div>

          <div className="tech-tab-content">
            {activeTab === 'features' && (
              <div className="tech-features-grid">
                <div className="tech-feature-card">
                  <div className="tech-feature-icon">📊</div>
                  <h3>Real-time Analytics</h3>
                  <p>Monitor your data as it flows in with live dashboards and instant alerts.</p>
                </div>
                <div className="tech-feature-card">
                  <div className="tech-feature-icon">🤖</div>
                  <h3>AI-Powered Insights</h3>
                  <p>Let machine learning algorithms discover patterns and trends in your data.</p>
                </div>
                <div className="tech-feature-card">
                  <div className="tech-feature-icon">🔗</div>
                  <h3>Easy Integration</h3>
                  <p>Connect to 100+ data sources with our simple drag-and-drop interface.</p>
                </div>
                <div className="tech-feature-card">
                  <div className="tech-feature-icon">📱</div>
                  <h3>Mobile Ready</h3>
                  <p>Access your dashboards anywhere with our responsive mobile app.</p>
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div className="tech-integrations-content">
                <h3>Connect to Your Favorite Tools</h3>
                <div className="tech-integration-logos">
                  <div className="tech-integration-item">Salesforce</div>
                  <div className="tech-integration-item">HubSpot</div>
                  <div className="tech-integration-item">Slack</div>
                  <div className="tech-integration-item">Google Analytics</div>
                  <div className="tech-integration-item">Shopify</div>
                  <div className="tech-integration-item">WordPress</div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="tech-security-content">
                <h3>Enterprise-Grade Security</h3>
                <div className="tech-security-features">
                  <div className="tech-security-item">
                    <span className="tech-check">✓</span>
                    SOC 2 Type II Certified
                  </div>
                  <div className="tech-security-item">
                    <span className="tech-check">✓</span>
                    GDPR Compliant
                  </div>
                  <div className="tech-security-item">
                    <span className="tech-check">✓</span>
                    256-bit SSL Encryption
                  </div>
                  <div className="tech-security-item">
                    <span className="tech-check">✓</span>
                    Regular Security Audits
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="tech-pricing-section">
        <div className="tech-container">
          <div className="tech-pricing-header">
            <h2 className="tech-section-title">Simple, Transparent Pricing</h2>
            <p className="tech-section-subtitle">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

          <div className="tech-pricing-grid">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`tech-pricing-card ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && <div className="tech-popular-badge">Most Popular</div>}
                
                <h3 className="tech-plan-name">{plan.name}</h3>
                <div className="tech-plan-pricing">
                  <span className="tech-plan-price">${plan.price}</span>
                  <span className="tech-plan-period">/month</span>
                  <span className="tech-plan-original">${plan.originalPrice}</span>
                </div>

                <ul className="tech-plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="tech-plan-feature">
                      <span className="tech-check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`tech-plan-button ${plan.popular ? 'primary' : 'secondary'}`}>
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>

          <div className="tech-pricing-guarantee">
            <p>💰 30-day money-back guarantee • 🔒 No setup fees • 📞 Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="tech-social-proof">
        <div className="tech-container">
          <h2 className="tech-section-title">Loved by Thousands of Companies</h2>
          
          <div className="tech-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="tech-testimonial-card">
                <div className="tech-testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="tech-star">⭐</span>
                  ))}
                </div>
                <p className="tech-testimonial-content">"{testimonial.content}"</p>
                <div className="tech-testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tech-cta-section">
        <div className="tech-container">
          <div className="tech-cta-content">
            <h2 className="tech-cta-title">Ready to Transform Your Data?</h2>
            <p className="tech-cta-subtitle">
              Join thousands of companies already using our platform to make data-driven decisions.
            </p>
            <div className="tech-cta-buttons">
              <button className="tech-btn tech-btn-primary tech-btn-large">
                Start Your Free Trial
              </button>
              <button className="tech-btn tech-btn-outline tech-btn-large">
                Schedule Demo
              </button>
            </div>
            <p className="tech-cta-note">No credit card required • Setup in under 5 minutes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechProductSales;
