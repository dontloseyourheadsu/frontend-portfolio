import React, { useState } from 'react';
import './MembershipSite.css';

const MembershipSite = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Toggle FAQ item
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  // Membership features
  const features = [
    {
      icon: '🎯',
      title: 'Step-By-Step Framework',
      description: 'Follow our proven 5-step process to master content creation and audience growth.'
    },
    {
      icon: '📚',
      title: 'Comprehensive Library',
      description: 'Access 200+ trainings, templates, and resources updated weekly.'
    },
    {
      icon: '👥',
      title: 'Community Support',
      description: 'Join our private community of creators for feedback, collaborations, and networking.'
    },
    {
      icon: '💬',
      title: 'Expert Coaching',
      description: 'Get personalized advice in monthly coaching calls and strategy sessions.'
    },
    {
      icon: '🛠️',
      title: 'Tech & Tool Training',
      description: 'Learn to use the latest tools with our detailed tech tutorials and walkthroughs.'
    },
    {
      icon: '📈',
      title: 'Business Strategies',
      description: 'Discover proven monetization strategies to turn your passion into profit.'
    }
  ];
  
  // Pricing plans
  const pricingPlans = [
    {
      name: 'Monthly',
      price: '49',
      period: 'per month',
      features: [
        'Full access to all courses',
        'Private community access',
        'Monthly group coaching',
        'Content templates library',
        'Mobile app access',
      ],
      cta: 'Join Monthly',
      popular: false
    },
    {
      name: 'Annual',
      price: '399',
      period: 'per year',
      features: [
        'Everything in Monthly',
        '2 months free ($98 savings)',
        'Private 1:1 coaching session',
        'Content calendar planner',
        'Priority support'
      ],
      cta: 'Join Annual',
      popular: true
    },
    {
      name: 'Lifetime',
      price: '997',
      period: 'one-time',
      features: [
        'Everything in Annual',
        'Lifetime updates & access',
        'VIP mastermind group',
        'Quarterly strategy sessions',
        'White-glove account setup'
      ],
      cta: 'Get Lifetime Access',
      popular: false
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      name: 'Jessica Miller',
      role: 'Food Blogger',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      content: "This membership has completely transformed my approach to content creation. In just 3 months, I've doubled my audience and launched my first successful digital product.",
    },
    {
      name: 'Marcus Johnson',
      role: 'Fitness Coach',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: "The community alone is worth the price. I've found collaboration partners, received invaluable feedback on my content, and the monthly coaching calls have helped me overcome major hurdles.",
    },
    {
      name: 'Sophia Garcia',
      role: 'Travel Content Creator',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      content: "As someone who was struggling with consistency and direction, the frameworks and systems in this membership have been a game-changer. My engagement has increased by 320%!",
    }
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: 'How long will I have access to the content?',
      answer: 'Monthly and annual members have access as long as their subscription is active. Lifetime members have permanent access to all current and future content in the membership.'
    },
    {
      question: 'Is this suitable for beginners?',
      answer: 'Absolutely! Our step-by-step framework is designed to help both beginners and experienced creators. We provide fundamentals for those just starting out, as well as advanced strategies for scaling your existing content.'
    },
    {
      question: 'How is this different from other memberships?',
      answer: 'Unlike generic courses that offer theoretical knowledge, our membership focuses on implementation. You\'ll get proven frameworks, personalized coaching, and an active community of peers who provide feedback and support.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, monthly and annual memberships can be canceled at any time from your account dashboard. You\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee for new members. If you\'re not satisfied with the membership, contact our support team within 14 days of joining for a full refund.'
    },
    {
      question: 'How often is new content added?',
      answer: 'New trainings, resources, and templates are added weekly. We also host live coaching calls and workshops monthly, all of which are recorded and added to the library.'
    }
  ];

  return (
    <div className="membership-site">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h5 className="pre-title">THE CONTENT CREATOR COLLECTIVE</h5>
              <h1>Build a Thriving Online Audience Without Burnout or Overwhelm</h1>
              <p className="hero-description">
                Join our membership for content creators and get access to proven frameworks, 
                personalized coaching, and a supportive community that will help you create 
                impactful content and grow your audience consistently.
              </p>
              <div className="cta-group">
                <a href="#pricing" className="primary-button">Join the Membership</a>
                <a href="#features" className="secondary-button">Explore Features</a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-value">3,500+</span>
                  <span className="stat-label">Active Members</span>
                </div>
                <div className="stat">
                  <span className="stat-value">94%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
                <div className="stat">
                  <span className="stat-value">200+</span>
                  <span className="stat-label">Training Resources</span>
                </div>
              </div>
            </div>
            <div className="hero-video">
              {isVideoPlaying ? (
                <div className="video-player">
                  <div className="video-placeholder">
                    <p>Video would play here.</p>
                    <button onClick={() => setIsVideoPlaying(false)}>Close Video</button>
                  </div>
                </div>
              ) : (
                <div className="video-thumbnail" onClick={() => setIsVideoPlaying(true)}>
                  <div className="play-button">
                    <div className="play-icon"></div>
                  </div>
                  <p className="video-text">Watch how it works (2:45)</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hero-wave"></div>
      </section>
      
      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h5 className="pre-title">MEMBERSHIP BENEFITS</h5>
            <h2>Everything You Need to Succeed</h2>
            <p className="section-description">
              Our membership provides all the tools, training, and support you need to create 
              consistent content, grow your audience, and monetize your expertise.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Inside Look Section */}
      <section className="inside-look">
        <div className="container">
          <div className="section-header">
            <h5 className="pre-title">A LOOK INSIDE</h5>
            <h2>What's Included in Your Membership</h2>
          </div>
          
          <div className="inside-content">
            <div className="inside-image">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Membership Dashboard" />
              <div className="image-badge">
                <span>Updated Weekly</span>
              </div>
            </div>
            
            <div className="inside-details">
              <div className="inside-item">
                <div className="item-number">01</div>
                <div className="item-content">
                  <h3>Step-by-Step Training Library</h3>
                  <p>Access our comprehensive course library covering content creation, audience growth, and monetization strategies organized into easy-to-follow learning paths.</p>
                </div>
              </div>
              
              <div className="inside-item">
                <div className="item-number">02</div>
                <div className="item-content">
                  <h3>Templates & Swipe Files</h3>
                  <p>Save hours of work with our ready-to-use templates for content planning, social media posts, email sequences, and sales pages.</p>
                </div>
              </div>
              
              <div className="inside-item">
                <div className="item-number">03</div>
                <div className="item-content">
                  <h3>Live Coaching & Q&A</h3>
                  <p>Join monthly live coaching calls where you can ask questions, get feedback on your content, and receive personalized advice from our expert coaches.</p>
                </div>
              </div>
              
              <div className="inside-item">
                <div className="item-number">04</div>
                <div className="item-content">
                  <h3>Private Community</h3>
                  <p>Connect with fellow creators in our active community where you can share wins, get feedback, find collaboration partners, and stay motivated.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h5 className="pre-title">MEMBER SUCCESS STORIES</h5>
            <h2>What Our Members Say</h2>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                  <div className="author-details">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-header">
            <h5 className="pre-title">MEMBERSHIP OPTIONS</h5>
            <h2>Join Our Community Today</h2>
            <p className="section-description">
              Choose the plan that works best for you. All plans include full access to our training library, 
              community, and monthly coaching calls.
            </p>
          </div>
          
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div className={`pricing-plan ${plan.popular ? 'popular' : ''}`} key={index}>
                {plan.popular && <div className="popular-tag">Most Popular</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`plan-cta ${plan.popular ? 'cta-primary' : 'cta-secondary'}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          
          <div className="guarantee-notice">
            <div className="guarantee-icon">🛡️</div>
            <p><strong>14-Day Money-Back Guarantee:</strong> If you're not completely satisfied with the membership in your first 14 days, we'll refund your payment in full.</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="section-header">
            <h5 className="pre-title">COMMON QUESTIONS</h5>
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`} 
                key={index}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  {item.question}
                  <span className="faq-toggle">{activeFaq === index ? '−' : '+'}</span>
                </div>
                {activeFaq === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Take Your Content Creation to the Next Level?</h2>
            <p>Join 3,500+ creators who are growing their audience and business with our proven frameworks and supportive community.</p>
            <a href="#pricing" className="cta-button">Join the Membership Now</a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Creator Collective</h3>
              <p>Building better content creators since 2020</p>
            </div>
            <div className="footer-copyright">
              © {new Date().getFullYear()} Creator Collective. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MembershipSite;
