import React, { useState } from 'react';
import './ExclusiveMembership.css';

const ExclusiveMembership = () => {
  const [selectedMembership, setSelectedMembership] = useState('platinum');
  const [showApplication, setShowApplication] = useState(false);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: '',
    motivation: '',
    reference: '',
    linkedIn: ''
  });

  const memberships = {
    gold: {
      name: 'Gold Elite',
      price: '$500/month',
      spots: '50 available',
      color: '#f59e0b',
      description: 'For established professionals seeking elite networking',
      benefits: [
        'Monthly exclusive events',
        'Priority booking system',
        'Concierge services',
        'Executive lounge access',
        'Quarterly business reviews',
        'Personal brand consulting',
        'Investment opportunities board'
      ],
      application: 'Application required'
    },
    platinum: {
      name: 'Platinum Executive',
      price: '$1,200/month',
      spots: '25 available',
      color: '#6b7280',
      description: 'For C-level executives and senior leadership',
      benefits: [
        'Everything in Gold Elite',
        'Weekly private dinners',
        'Executive coaching sessions',
        'Board advisory opportunities',
        'Private jet access program',
        'Family services included',
        'Global chapter access',
        'Dedicated relationship manager'
      ],
      application: 'Invitation + Application'
    },
    diamond: {
      name: 'Diamond Founders',
      price: '$3,000/month',
      spots: '10 available',
      color: '#8b5cf6',
      description: 'By invitation only - for industry leaders and founders',
      benefits: [
        'Everything in Platinum',
        'Private deal flow access',
        'Exclusive founding member benefits',
        'Personal staff support',
        'Private residence access',
        'Yacht club privileges',
        'Art collection viewings',
        'Philanthropic committee seats',
        'Legacy planning services'
      ],
      application: 'Invitation only'
    }
  };

  const handleInputChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    console.log('Membership application:', { membership: selectedMembership, ...applicationData });
    alert('Your application has been submitted! Our membership committee will review it within 48 hours.');
  };

  if (showApplication) {
    return (
      <div className="exclusive-page">
        <div className="exclusive-container">
          <div className="exclusive-application">
            <div className="exclusive-application-header">
              <h1>Membership Application</h1>
              <p>Thank you for your interest in our exclusive community. Please complete the application below.</p>
              
              <div className="exclusive-selected-membership">
                <div 
                  className="exclusive-membership-badge"
                  style={{ backgroundColor: memberships[selectedMembership].color }}
                >
                  {memberships[selectedMembership].name} - {memberships[selectedMembership].price}
                </div>
              </div>
            </div>
            
            <form className="exclusive-application-form" onSubmit={handleApplicationSubmit}>
              <div className="exclusive-form-section">
                <h3>Personal Information</h3>
                
                <div className="exclusive-form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={applicationData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full legal name"
                    required
                  />
                </div>
                
                <div className="exclusive-form-row">
                  <div className="exclusive-form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  
                  <div className="exclusive-form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>
                
                <div className="exclusive-form-group">
                  <label htmlFor="linkedIn">LinkedIn Profile</label>
                  <input
                    type="url"
                    id="linkedIn"
                    name="linkedIn"
                    value={applicationData.linkedIn}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>
              
              <div className="exclusive-form-section">
                <h3>Professional Background</h3>
                
                <div className="exclusive-form-row">
                  <div className="exclusive-form-group">
                    <label htmlFor="company">Current Company *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={applicationData.company}
                      onChange={handleInputChange}
                      placeholder="Company name"
                      required
                    />
                  </div>
                  
                  <div className="exclusive-form-group">
                    <label htmlFor="position">Position/Title *</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={applicationData.position}
                      onChange={handleInputChange}
                      placeholder="Your current role"
                      required
                    />
                  </div>
                </div>
                
                <div className="exclusive-form-group">
                  <label htmlFor="experience">Professional Experience *</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={applicationData.experience}
                    onChange={handleInputChange}
                    placeholder="Describe your professional background, key achievements, and industry experience (minimum 200 words)"
                    rows="4"
                    required
                  />
                </div>
                
                <div className="exclusive-form-group">
                  <label htmlFor="motivation">Why do you want to join? *</label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={applicationData.motivation}
                    onChange={handleInputChange}
                    placeholder="Tell us about your goals and how membership would benefit you and our community"
                    rows="4"
                    required
                  />
                </div>
                
                <div className="exclusive-form-group">
                  <label htmlFor="reference">Professional Reference</label>
                  <input
                    type="text"
                    id="reference"
                    name="reference"
                    value={applicationData.reference}
                    onChange={handleInputChange}
                    placeholder="Name and contact of a professional reference (optional)"
                  />
                </div>
              </div>
              
              <div className="exclusive-application-notice">
                <h4>📋 Application Process</h4>
                <ul>
                  <li>Initial review within 48 hours</li>
                  <li>Background verification (3-5 business days)</li>
                  <li>Committee interview (if selected)</li>
                  <li>Final approval and onboarding</li>
                </ul>
              </div>
              
              <div className="exclusive-form-actions">
                <button type="submit" className="exclusive-submit-button">
                  Submit Application
                </button>
                
                <button 
                  type="button" 
                  className="exclusive-back-button"
                  onClick={() => setShowApplication(false)}
                >
                  ← Back to Memberships
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="exclusive-page">
      <div className="exclusive-container">
        <div className="exclusive-hero">
          <div className="exclusive-hero-content">
            <h1>The Executive Circle</h1>
            <p>An exclusive membership for industry leaders, executives, and visionaries who demand excellence.</p>
            
            <div className="exclusive-prestige-indicators">
              <div className="exclusive-indicator">
                <span className="exclusive-indicator-icon">👑</span>
                <div>
                  <strong>By Invitation</strong>
                  <span>Curated community</span>
                </div>
              </div>
              
              <div className="exclusive-indicator">
                <span className="exclusive-indicator-icon">🌟</span>
                <div>
                  <strong>Ultra-Premium</strong>
                  <span>Luxury experiences</span>
                </div>
              </div>
              
              <div className="exclusive-indicator">
                <span className="exclusive-indicator-icon">🤝</span>
                <div>
                  <strong>Elite Network</strong>
                  <span>C-level connections</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="exclusive-hero-image">
            <div className="exclusive-luxury-card">
              <div className="exclusive-card-header">
                <h3>The Executive Circle</h3>
                <span>EST. 2015</span>
              </div>
              <div className="exclusive-card-details">
                <p>Membership</p>
                <p>Since 2024</p>
              </div>
              <div className="exclusive-card-number">
                **** **** **** 1892
              </div>
            </div>
          </div>
        </div>
        
        <div className="exclusive-memberships">
          <h2>Choose Your Membership Level</h2>
          <div className="exclusive-membership-grid">
            {Object.entries(memberships).map(([membershipKey, membership]) => (
              <div 
                key={membershipKey}
                className={`exclusive-membership ${selectedMembership === membershipKey ? 'selected' : ''}`}
                onClick={() => setSelectedMembership(membershipKey)}
              >
                <div className="exclusive-membership-header">
                  <div 
                    className="exclusive-membership-icon"
                    style={{ backgroundColor: membership.color }}
                  >
                    {membershipKey === 'gold' && '🥇'}
                    {membershipKey === 'platinum' && '🏆'}
                    {membershipKey === 'diamond' && '💎'}
                  </div>
                  
                  <h3>{membership.name}</h3>
                  <div className="exclusive-membership-price">{membership.price}</div>
                  <div className="exclusive-membership-spots">{membership.spots}</div>
                  <p className="exclusive-membership-description">{membership.description}</p>
                </div>
                
                <div className="exclusive-membership-benefits">
                  <ul>
                    {membership.benefits.map((benefit, index) => (
                      <li key={index}>
                        <span className="exclusive-benefit-check">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="exclusive-membership-footer">
                  <div className="exclusive-application-type">{membership.application}</div>
                  <button 
                    className="exclusive-apply-button"
                    style={{ 
                      backgroundColor: selectedMembership === membershipKey ? membership.color : 'transparent',
                      borderColor: membership.color,
                      color: selectedMembership === membershipKey ? '#ffffff' : membership.color
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMembership(membershipKey);
                      setShowApplication(true);
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="exclusive-experiences">
          <h2>Exclusive Member Experiences</h2>
          <div className="exclusive-experience-grid">
            <div className="exclusive-experience">
              <div className="exclusive-experience-image">🏖️</div>
              <h3>Private Retreats</h3>
              <p>Quarterly executive retreats at exclusive destinations around the world.</p>
            </div>
            
            <div className="exclusive-experience">
              <div className="exclusive-experience-image">🍷</div>
              <h3>Wine & Dine</h3>
              <p>Private dinners with industry legends at Michelin-starred restaurants.</p>
            </div>
            
            <div className="exclusive-experience">
              <div className="exclusive-experience-image">🎭</div>
              <h3>Cultural Events</h3>
              <p>Exclusive access to art galleries, theater premieres, and cultural experiences.</p>
            </div>
            
            <div className="exclusive-experience">
              <div className="exclusive-experience-image">⛳</div>
              <h3>Private Clubs</h3>
              <p>Access to elite golf clubs, yacht clubs, and private sporting facilities.</p>
            </div>
            
            <div className="exclusive-experience">
              <div className="exclusive-experience-image">✈️</div>
              <h3>Luxury Travel</h3>
              <p>Curated travel experiences with private jets and luxury accommodations.</p>
            </div>
            
            <div className="exclusive-experience">
              <div className="exclusive-experience-image">💼</div>
              <h3>Deal Flow</h3>
              <p>Exclusive investment opportunities and private equity deal access.</p>
            </div>
          </div>
        </div>
        
        <div className="exclusive-testimonials">
          <h2>What Our Members Say</h2>
          <div className="exclusive-testimonial-carousel">
            <div className="exclusive-testimonial">
              <div className="exclusive-testimonial-content">
                <p>"The connections I've made through The Executive Circle have been transformational for both my business and personal growth."</p>
                <div className="exclusive-testimonial-author">
                  <div className="exclusive-author-avatar">RJ</div>
                  <div>
                    <strong>Robert Johnson</strong>
                    <span>CEO, TechCorp International</span>
                    <div className="exclusive-membership-level">Diamond Member</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="exclusive-testimonial">
              <div className="exclusive-testimonial-content">
                <p>"The level of discretion and the quality of fellow members is unmatched. This is true luxury networking."</p>
                <div className="exclusive-testimonial-author">
                  <div className="exclusive-author-avatar">SM</div>
                  <div>
                    <strong>Sarah Martinez</strong>
                    <span>Founder, Global Ventures</span>
                    <div className="exclusive-membership-level">Platinum Member</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="exclusive-footer-cta">
          <h2>Ready to Join the Elite?</h2>
          <p>Membership is by application only and subject to approval by our committee.</p>
          <button 
            className="exclusive-footer-button"
            onClick={() => setShowApplication(true)}
          >
            Begin Application Process
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveMembership;
