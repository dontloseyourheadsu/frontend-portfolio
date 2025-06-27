import React, { useState } from 'react';
import './CommunityMembership.css';

const CommunityMembership = () => {
  const [selectedTier, setSelectedTier] = useState('creator');
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    bio: '',
    interests: [],
    experience: ''
  });

  const tiers = {
    explorer: {
      name: 'Explorer',
      price: 'Free',
      color: '#10b981',
      description: 'Perfect for getting started and exploring our community',
      features: [
        'Access to public discussions',
        'Basic profile customization',
        'Community events calendar',
        'Monthly newsletter',
        '3 direct messages per month'
      ],
      limits: 'Limited features'
    },
    creator: {
      name: 'Creator',
      price: '$19/month',
      color: '#3b82f6',
      description: 'Ideal for active community members and content creators',
      features: [
        'Everything in Explorer',
        'Create and host events',
        'Advanced profile features',
        'Unlimited direct messages',
        'Access to creator tools',
        'Priority support',
        'Early access to new features'
      ],
      limits: 'Most popular choice'
    },
    ambassador: {
      name: 'Ambassador',
      price: '$49/month',
      color: '#8b5cf6',
      description: 'For community leaders and power users',
      features: [
        'Everything in Creator',
        'Moderate community spaces',
        'Analytics dashboard',
        'Custom badge and flair',
        'Exclusive ambassador lounge',
        'Monthly 1:1 with team',
        'Beta testing access',
        'Revenue sharing opportunities'
      ],
      limits: 'Ultimate experience'
    }
  };

  const interests = [
    'Technology', 'Design', 'Business', 'Marketing', 'Programming',
    'Entrepreneurship', 'AI/ML', 'Networking', 'Mentorship', 'Learning'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestToggle = (interest) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter(i => i !== interest)
        : [...formData.interests, interest]
    });
  };

  const handleJoin = (e) => {
    e.preventDefault();
    console.log('Community membership:', { tier: selectedTier, ...formData });
    alert(`Welcome to the community! You've joined as a ${tiers[selectedTier].name} member.`);
  };

  if (showJoinForm) {
    return (
      <div className="community-page">
        <div className="community-container">
          <div className="community-join-form">
            <div className="community-join-header">
              <h1>Join Our Community</h1>
              <p>Complete your profile to get the most out of your membership experience.</p>
              
              <div className="community-selected-tier">
                <div 
                  className="community-tier-badge"
                  style={{ backgroundColor: tiers[selectedTier].color }}
                >
                  {tiers[selectedTier].name} - {tiers[selectedTier].price}
                </div>
              </div>
            </div>
            
            <form className="community-form" onSubmit={handleJoin}>
              <div className="community-form-section">
                <h3>Basic Information</h3>
                
                <div className="community-form-group">
                  <label htmlFor="username">Username *</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Choose a unique username"
                    required
                  />
                </div>
                
                <div className="community-form-group">
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
                
                <div className="community-form-row">
                  <div className="community-form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      required
                    />
                  </div>
                  
                  <div className="community-form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="community-form-section">
                <h3>Tell Us About Yourself</h3>
                
                <div className="community-form-group">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Tell the community about yourself (optional)"
                    rows="4"
                  />
                </div>
                
                <div className="community-form-group">
                  <label htmlFor="experience">Experience Level</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (0-2 years)</option>
                    <option value="intermediate">Intermediate (3-5 years)</option>
                    <option value="advanced">Advanced (6-10 years)</option>
                    <option value="expert">Expert (10+ years)</option>
                  </select>
                </div>
                
                <div className="community-form-group">
                  <label>Interests</label>
                  <div className="community-interests-grid">
                    {interests.map(interest => (
                      <button
                        key={interest}
                        type="button"
                        className={`community-interest-tag ${formData.interests.includes(interest) ? 'selected' : ''}`}
                        onClick={() => handleInterestToggle(interest)}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="community-form-actions">
                <button type="submit" className="community-join-button">
                  Join Community
                </button>
                
                <button 
                  type="button" 
                  className="community-back-button"
                  onClick={() => setShowJoinForm(false)}
                >
                  ← Back to Tiers
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="community-page">
      <div className="community-container">
        <div className="community-header">
          <h1>Join Our Thriving Community</h1>
          <p>Connect, learn, and grow with like-minded professionals from around the world</p>
          
          <div className="community-highlights">
            <div className="community-highlight">
              <span className="community-highlight-icon">👥</span>
              <div>
                <strong>25,000+</strong>
                <span>Active Members</span>
              </div>
            </div>
            
            <div className="community-highlight">
              <span className="community-highlight-icon">🌍</span>
              <div>
                <strong>150+</strong>
                <span>Countries</span>
              </div>
            </div>
            
            <div className="community-highlight">
              <span className="community-highlight-icon">💬</span>
              <div>
                <strong>1,000+</strong>
                <span>Daily Discussions</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="community-tiers">
          {Object.entries(tiers).map(([tierKey, tier]) => (
            <div 
              key={tierKey}
              className={`community-tier ${selectedTier === tierKey ? 'selected' : ''}`}
              onClick={() => setSelectedTier(tierKey)}
            >
              <div className="community-tier-header">
                <div 
                  className="community-tier-icon"
                  style={{ backgroundColor: tier.color }}
                >
                  {tierKey === 'explorer' && '🌟'}
                  {tierKey === 'creator' && '🚀'}
                  {tierKey === 'ambassador' && '👑'}
                </div>
                
                <h3>{tier.name}</h3>
                <div className="community-tier-price">{tier.price}</div>
                <p className="community-tier-description">{tier.description}</p>
              </div>
              
              <div className="community-tier-features">
                <ul>
                  {tier.features.map((feature, index) => (
                    <li key={index}>
                      <span className="community-feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="community-tier-footer">
                <div className="community-tier-limits">{tier.limits}</div>
                <button 
                  className={`community-select-button ${selectedTier === tierKey ? 'selected' : ''}`}
                  style={{ 
                    backgroundColor: selectedTier === tierKey ? tier.color : 'transparent',
                    borderColor: tier.color,
                    color: selectedTier === tierKey ? '#ffffff' : tier.color
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTier(tierKey);
                    setShowJoinForm(true);
                  }}
                >
                  {tierKey === 'explorer' ? 'Join Free' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="community-features">
          <h2>What Makes Our Community Special</h2>
          <div className="community-feature-grid">
            <div className="community-feature-card">
              <div className="community-feature-icon">💡</div>
              <h3>Knowledge Sharing</h3>
              <p>Learn from industry experts and share your own insights with the community.</p>
            </div>
            
            <div className="community-feature-card">
              <div className="community-feature-icon">🤝</div>
              <h3>Networking</h3>
              <p>Build meaningful professional relationships that can advance your career.</p>
            </div>
            
            <div className="community-feature-card">
              <div className="community-feature-icon">🎯</div>
              <h3>Skill Development</h3>
              <p>Access workshops, challenges, and resources to continuously improve your skills.</p>
            </div>
            
            <div className="community-feature-card">
              <div className="community-feature-icon">📈</div>
              <h3>Career Growth</h3>
              <p>Get mentorship, job opportunities, and career advice from successful professionals.</p>
            </div>
          </div>
        </div>
        
        <div className="community-testimonials">
          <h2>Member Success Stories</h2>
          <div className="community-testimonial-grid">
            <div className="community-testimonial">
              <div className="community-testimonial-avatar">
                <span>JS</span>
              </div>
              <div className="community-testimonial-content">
                <p>"This community completely changed my career trajectory. The connections I made here led to my dream job!"</p>
                <div className="community-testimonial-author">
                  <strong>Jessica Smith</strong>
                  <span>Product Manager • Creator Member</span>
                </div>
              </div>
            </div>
            
            <div className="community-testimonial">
              <div className="community-testimonial-avatar">
                <span>MJ</span>
              </div>
              <div className="community-testimonial-content">
                <p>"The knowledge sharing here is incredible. I've learned more in 6 months than I did in years of working alone."</p>
                <div className="community-testimonial-author">
                  <strong>Mark Johnson</strong>
                  <span>Software Engineer • Ambassador</span>
                </div>
              </div>
            </div>
            
            <div className="community-testimonial">
              <div className="community-testimonial-avatar">
                <span>AR</span>
              </div>
              <div className="community-testimonial-content">
                <p>"The supportive environment here helped me transition into tech. The mentorship programs are amazing!"</p>
                <div className="community-testimonial-author">
                  <strong>Anna Rodriguez</strong>
                  <span>UX Designer • Creator Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="community-cta">
          <h2>Ready to Join Our Community?</h2>
          <p>Start your journey today and connect with thousands of professionals who are passionate about growth and success.</p>
          <button 
            className="community-cta-button"
            onClick={() => setShowJoinForm(true)}
          >
            Join Now - It's Free to Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityMembership;
