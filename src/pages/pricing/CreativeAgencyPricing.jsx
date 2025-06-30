import React, { useState, useEffect } from 'react';
import './CreativeAgencyPricing.css';

const CreativeAgencyPricing = () => {
  const [activeTab, setActiveTab] = useState('design');
  const [animatedCards, setAnimatedCards] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setAnimatedCards(true), 300);
  }, []);

  const services = {
    design: {
      title: 'Design Services',
      subtitle: 'Visual identity that speaks your language',
      packages: [
        {
          name: 'Brand Starter',
          price: 2500,
          duration: '2 weeks',
          features: [
            'Logo Design',
            'Brand Guidelines',
            'Business Card Design',
            'Letterhead Template',
            '3 Revision Rounds',
            'Final Files (AI, PNG, JPG)'
          ],
          accent: 'pink'
        },
        {
          name: 'Complete Identity',
          price: 7500,
          duration: '4 weeks',
          features: [
            'Everything in Brand Starter',
            'Website Design (5 pages)',
            'Social Media Templates',
            'Packaging Design',
            'Photography Direction',
            'Brand Strategy Session',
            'Style Guide Manual',
            'Unlimited Revisions'
          ],
          accent: 'orange',
          featured: true
        },
        {
          name: 'Enterprise Brand',
          price: 15000,
          duration: '8 weeks',
          features: [
            'Everything in Complete Identity',
            'Multi-platform Campaign',
            'Video Brand Guidelines',
            'Employee Brand Training',
            'Ongoing Support (3 months)',
            'Brand Application System',
            'Market Research Analysis',
            'Competitive Analysis'
          ],
          accent: 'purple'
        }
      ]
    },
    development: {
      title: 'Development Services',
      subtitle: 'Code that performs as beautifully as it looks',
      packages: [
        {
          name: 'Landing Page',
          price: 3500,
          duration: '1 week',
          features: [
            'Responsive Design',
            'Contact Form',
            'SEO Optimization',
            'Speed Optimization',
            'Analytics Setup',
            'Mobile-First Approach'
          ],
          accent: 'blue'
        },
        {
          name: 'Business Website',
          price: 8500,
          duration: '3 weeks',
          features: [
            'Everything in Landing Page',
            'Content Management System',
            'E-commerce Integration',
            'Custom Functionality',
            'Security Implementation',
            'Performance Monitoring',
            'Training & Documentation',
            '30-day Support'
          ],
          accent: 'green',
          featured: true
        },
        {
          name: 'Web Application',
          price: 25000,
          duration: '8 weeks',
          features: [
            'Everything in Business Website',
            'Custom Backend Development',
            'API Development',
            'Database Architecture',
            'User Authentication',
            'Admin Dashboard',
            'Cloud Deployment',
            '90-day Support'
          ],
          accent: 'red'
        }
      ]
    },
    marketing: {
      title: 'Marketing Services',
      subtitle: 'Strategies that convert browsers into buyers',
      packages: [
        {
          name: 'Growth Starter',
          price: 2000,
          duration: 'Monthly',
          features: [
            'Social Media Management',
            'Content Calendar',
            'Basic Analytics',
            'Email Marketing Setup',
            'Monthly Strategy Call',
            'Performance Reports'
          ],
          accent: 'yellow'
        },
        {
          name: 'Marketing Pro',
          price: 5000,
          duration: 'Monthly',
          features: [
            'Everything in Growth Starter',
            'Paid Ad Management',
            'SEO Optimization',
            'Conversion Tracking',
            'A/B Testing',
            'Advanced Analytics',
            'Weekly Strategy Calls',
            'Custom Campaigns'
          ],
          accent: 'cyan',
          featured: true
        },
        {
          name: 'Enterprise Marketing',
          price: 12000,
          duration: 'Monthly',
          features: [
            'Everything in Marketing Pro',
            'Marketing Automation',
            'Lead Scoring System',
            'Attribution Modeling',
            'Custom Integrations',
            'Dedicated Account Manager',
            'Daily Monitoring',
            'Custom Reporting Dashboard'
          ],
          accent: 'indigo'
        }
      ]
    }
  };

  return (
    <div className="creative-agency-pricing">
      {/* Background Elements */}
      <div className="agency-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="agency-pricing-container">
        {/* Header */}
        <header className="agency-pricing-header">
          <h1 className="agency-main-title">
            Pricing That
            <span className="title-accent"> Scales</span>
            <br />
            With Your
            <span className="title-accent"> Vision</span>
          </h1>
          <p className="agency-subtitle">
            From startup dreams to enterprise reality, we've got packages that grow with you.
            No hidden fees, no surprises – just transparent pricing for exceptional work.
          </p>
        </header>

        {/* Service Tabs */}
        <div className="agency-service-tabs">
          {Object.keys(services).map((serviceKey) => (
            <button
              key={serviceKey}
              className={`service-tab ${activeTab === serviceKey ? 'active' : ''}`}
              onClick={() => setActiveTab(serviceKey)}
            >
              {services[serviceKey].title}
            </button>
          ))}
        </div>

        {/* Current Service */}
        <div className="agency-service-content">
          <div className="service-header">
            <h2 className="service-title">{services[activeTab].title}</h2>
            <p className="service-subtitle">{services[activeTab].subtitle}</p>
          </div>

          {/* Pricing Cards */}
          <div className={`agency-pricing-cards ${animatedCards ? 'animated' : ''}`}>
            {services[activeTab].packages.map((pkg, index) => (
              <div
                key={index}
                className={`agency-pricing-card ${pkg.accent} ${pkg.featured ? 'featured' : ''}`}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                {pkg.featured && (
                  <div className="featured-badge">
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="card-top">
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-price">
                    <span className="price-symbol">$</span>
                    <span className="price-amount">{pkg.price.toLocaleString()}</span>
                  </div>
                  <p className="package-duration">{pkg.duration}</p>
                </div>

                <div className="card-features">
                  <ul className="feature-list">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <div className="feature-check">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20,6 9,17 4,12"></polyline>
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-bottom">
                  <button className="agency-cta-button">
                    Get Started
                  </button>
                  <p className="card-note">Free consultation included</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="agency-contact-section">
          <div className="contact-content">
            <h2 className="contact-title">Ready to Start Your Project?</h2>
            <p className="contact-description">
              Let's discuss your vision over coffee (virtual or real). 
              Every great project starts with a conversation.
            </p>
            <div className="contact-buttons">
              <button className="contact-primary">Schedule a Call</button>
              <button className="contact-secondary">View Our Work</button>
            </div>
          </div>
          <div className="contact-visual">
            <div className="contact-shape"></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="agency-trust-section">
          <p className="trust-title">Trusted by startups and Fortune 500 companies</p>
          <div className="trust-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24h</span>
              <span className="stat-label">Response Time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeAgencyPricing;
