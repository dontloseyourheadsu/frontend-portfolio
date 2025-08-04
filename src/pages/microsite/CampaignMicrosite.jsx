import React, { useState, useEffect } from 'react';
import './CampaignMicrosite.css';

const CampaignMicrosite = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [progress] = useState(75); // Campaign progress percentage

  const testimonials = [
    {
      text: "This campaign has changed my life! The results are incredible and the community support is amazing.",
      author: "Sarah M.",
      title: "Marketing Director",
      rating: 5
    },
    {
      text: "I was skeptical at first, but after seeing the results myself, I'm a true believer. Highly recommended!",
      author: "Michael K.",
      title: "Entrepreneur",
      rating: 5
    },
    {
      text: "The best investment I've made this year. The team delivers on their promises and more.",
      author: "Jessica L.",
      title: "Business Owner",
      rating: 5
    },
    {
      text: "Outstanding results in just 30 days. The strategies are proven and the support is top-notch.",
      author: "David R.",
      title: "Consultant",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: '🚀',
      title: 'Rapid Results',
      description: 'See measurable improvements in just 7 days'
    },
    {
      icon: '💰',
      title: 'Money-Back Guarantee',
      description: '100% satisfaction guaranteed or full refund'
    },
    {
      icon: '👥',
      title: 'Expert Support',
      description: '24/7 support from industry professionals'
    },
    {
      icon: '🎯',
      title: 'Proven System',
      description: 'Time-tested methods with 98% success rate'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Access everything on any device, anywhere'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise security'
    }
  ];

  const features = [
    { name: 'Weekly Live Sessions', included: true },
    { name: 'Exclusive Resource Library', included: true },
    { name: 'Private Community Access', included: true },
    { name: 'Personal Success Coach', included: true },
    { name: 'Mobile App Access', included: true },
    { name: 'Certificate of Completion', included: true },
    { name: 'Lifetime Updates', included: true },
    { name: '1-on-1 Strategy Call', included: false, premium: true },
    { name: 'Done-for-You Templates', included: false, premium: true },
    { name: 'VIP Support Channel', included: false, premium: true }
  ];

  // Rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      console.log('Campaign signup:', email);
    }
  };

  const handleJoinNow = () => {
    console.log('Join now clicked');
    alert('Redirecting to secure checkout...');
  };

  return (
    <div className="campaign-microsite">
      {/* Header/Hero */}
      <section className="campaign-hero">
        <div className="campaign-hero-background"></div>
        <div className="campaign-container">
          <div className="campaign-hero-content">
            <div className="campaign-announcement">
              🔥 Limited Time: 50% OFF - Only 48 Hours Left!
            </div>
            
            <h1 className="campaign-hero-title">
              Transform Your Business in
              <span className="campaign-highlight"> 30 Days</span>
            </h1>
            
            <p className="campaign-hero-subtitle">
              Join 10,000+ entrepreneurs who have scaled their businesses using our proven system. 
              Get the exact blueprint that generated $50M+ in revenue.
            </p>
            
            <div className="campaign-progress-bar">
              <div className="campaign-progress-label">
                Campaign Progress: {progress}% Complete
              </div>
              <div className="campaign-progress-track">
                <div 
                  className="campaign-progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="campaign-progress-note">
                Only {100 - progress} spots remaining!
              </div>
            </div>
            
            {!isSubscribed ? (
              <form className="campaign-hero-form" onSubmit={handleSubscribe}>
                <div className="campaign-form-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to get instant access"
                    className="campaign-email-input"
                    required
                  />
                  <button type="submit" className="campaign-submit-button">
                    Get Instant Access
                  </button>
                </div>
                <p className="campaign-form-note">
                  Join 25,000+ subscribers • No spam, unsubscribe anytime
                </p>
              </form>
            ) : (
              <div className="campaign-success-message">
                <div className="campaign-success-icon">✅</div>
                <h3>Welcome to the family!</h3>
                <p>Check your email for your free starter guide and exclusive bonuses.</p>
              </div>
            )}
            
            <div className="campaign-social-proof">
              <div className="campaign-rating">
                <div className="campaign-stars">⭐⭐⭐⭐⭐</div>
                <span>4.9/5 from 2,847 reviews</span>
              </div>
              <div className="campaign-badges">
                <span className="campaign-badge">Money-Back Guarantee</span>
                <span className="campaign-badge">Instant Access</span>
                <span className="campaign-badge">Mobile Friendly</span>
              </div>
            </div>
          </div>
          
          <div className="campaign-hero-visual">
            <div className="campaign-video-placeholder">
              <div className="campaign-play-button">▶</div>
              <div className="campaign-video-overlay">
                <h4>Watch the 3-Minute Demo</h4>
                <p>See how Sarah went from $0 to $100K in 90 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="campaign-problem">
        <div className="campaign-container">
          <div className="campaign-problem-content">
            <h2>Are You Struggling With These Common Challenges?</h2>
            <div className="campaign-problems-grid">
              <div className="campaign-problem-item">
                <div className="campaign-problem-icon">😰</div>
                <h3>Overwhelmed by Information</h3>
                <p>Too many courses, strategies, and "gurus" but no clear path forward</p>
              </div>
              <div className="campaign-problem-item">
                <div className="campaign-problem-icon">⏰</div>
                <h3>Running Out of Time</h3>
                <p>Feeling like you're falling behind while competitors get ahead</p>
              </div>
              <div className="campaign-problem-item">
                <div className="campaign-problem-icon">💸</div>
                <h3>Wasting Money</h3>
                <p>Investing in tools and courses that don't deliver real results</p>
              </div>
              <div className="campaign-problem-item">
                <div className="campaign-problem-icon">🤔</div>
                <h3>Lack of Direction</h3>
                <p>Not sure what steps to take next to scale your business</p>
              </div>
            </div>
            
            <div className="campaign-solution">
              <h3>There's a Better Way...</h3>
              <p>
                What if you had a proven, step-by-step system that eliminates the guesswork and 
                gives you exactly what you need to succeed? That's exactly what we've created.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="campaign-benefits">
        <div className="campaign-container">
          <h2 className="campaign-section-title">Why 10,000+ Entrepreneurs Choose Us</h2>
          <div className="campaign-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="campaign-benefit-card">
                <div className="campaign-benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/What's Included */}
      <section className="campaign-features">
        <div className="campaign-container">
          <h2 className="campaign-section-title">What's Included in Your Package</h2>
          <div className="campaign-features-content">
            <div className="campaign-features-list">
              <h3>🎁 Everything You Get Today:</h3>
              <ul>
                {features.filter(f => f.included).map((feature, index) => (
                  <li key={index} className="campaign-feature-included">
                    <span className="campaign-check">✓</span>
                    {feature.name}
                  </li>
                ))}
              </ul>
              
              <h3>🔥 Upgrade to Premium for:</h3>
              <ul>
                {features.filter(f => f.premium).map((feature, index) => (
                  <li key={index} className="campaign-feature-premium">
                    <span className="campaign-star">⭐</span>
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="campaign-pricing-card">
              <div className="campaign-pricing-header">
                <h3>Special Launch Price</h3>
                <div className="campaign-price-strike">
                  <span className="campaign-original-price">$497</span>
                  <span className="campaign-current-price">$97</span>
                </div>
                <p className="campaign-savings">Save $400 Today Only!</p>
              </div>
              
              <div className="campaign-pricing-features">
                <div className="campaign-value-item">
                  <span>✓ Complete Business Blueprint</span>
                  <span>($197 value)</span>
                </div>
                <div className="campaign-value-item">
                  <span>✓ 30-Day Implementation Guide</span>
                  <span>($97 value)</span>
                </div>
                <div className="campaign-value-item">
                  <span>✓ Private Community Access</span>
                  <span>($47/month value)</span>
                </div>
                <div className="campaign-value-item">
                  <span>✓ Live Weekly Sessions</span>
                  <span>($97/month value)</span>
                </div>
                <div className="campaign-value-item">
                  <span>✓ Bonus: Success Templates</span>
                  <span>($197 value)</span>
                </div>
              </div>
              
              <div className="campaign-total-value">
                <strong>Total Value: $635</strong>
              </div>
              
              <button className="campaign-join-button" onClick={handleJoinNow}>
                Join Now - Only $97
              </button>
              
              <div className="campaign-guarantee">
                <div className="campaign-guarantee-badge">30-Day Money-Back Guarantee</div>
                <p>Try it risk-free. If you're not completely satisfied, get a full refund.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="campaign-testimonials">
        <div className="campaign-container">
          <h2 className="campaign-section-title">Success Stories from Our Community</h2>
          <div className="campaign-testimonial-slider">
            <div className="campaign-testimonial-card">
              <div className="campaign-testimonial-content">
                <div className="campaign-testimonial-stars">
                  {'⭐'.repeat(testimonials[currentTestimonial].rating)}
                </div>
                <blockquote>
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="campaign-testimonial-author">
                  <strong>{testimonials[currentTestimonial].author}</strong>
                  <span>{testimonials[currentTestimonial].title}</span>
                </div>
              </div>
            </div>
            
            <div className="campaign-testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`campaign-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="campaign-stats">
            <div className="campaign-stat">
              <span className="campaign-stat-number">10,000+</span>
              <span className="campaign-stat-label">Happy Customers</span>
            </div>
            <div className="campaign-stat">
              <span className="campaign-stat-number">$50M+</span>
              <span className="campaign-stat-label">Revenue Generated</span>
            </div>
            <div className="campaign-stat">
              <span className="campaign-stat-number">98%</span>
              <span className="campaign-stat-label">Success Rate</span>
            </div>
            <div className="campaign-stat">
              <span className="campaign-stat-number">4.9/5</span>
              <span className="campaign-stat-label">Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="campaign-final-cta">
        <div className="campaign-container">
          <div className="campaign-cta-content">
            <h2>Don't Let This Opportunity Slip Away</h2>
            <p>
              Join the thousands of entrepreneurs who have transformed their businesses. 
              The price goes back to $497 in 48 hours.
            </p>
            
            <div className="campaign-urgency">
              <div className="campaign-urgency-item">
                <span className="campaign-urgency-icon">⏰</span>
                <span>Limited Time Offer</span>
              </div>
              <div className="campaign-urgency-item">
                <span className="campaign-urgency-icon">🔥</span>
                <span>Only 25 Spots Left</span>
              </div>
              <div className="campaign-urgency-item">
                <span className="campaign-urgency-icon">💰</span>
                <span>Save $400 Today</span>
              </div>
            </div>
            
            <button className="campaign-final-button" onClick={handleJoinNow}>
              Claim Your Spot Now - $97
            </button>
            
            <div className="campaign-final-guarantee">
              <p>🛡️ Protected by our 30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="campaign-footer">
        <div className="campaign-container">
          <div className="campaign-footer-content">
            <div className="campaign-footer-section">
              <h4>Contact</h4>
              <p>📧 support@businessblueprint.com</p>
              <p>📞 1-800-SUCCESS</p>
            </div>
            <div className="campaign-footer-section">
              <h4>Legal</h4>
              <p><a href="#" target="_blank">Terms of Service</a></p>
              <p><a href="#" target="_blank">Privacy Policy</a></p>
              <p><a href="#" target="_blank">Refund Policy</a></p>
            </div>
            <div className="campaign-footer-section">
              <h4>Follow Us</h4>
              <p>🐦 @BusinessBlueprint</p>
              <p>📘 /BusinessBlueprint</p>
              <p>📸 @business_blueprint</p>
            </div>
          </div>
          <div className="campaign-footer-bottom">
            <p>&copy; 2025 Business Blueprint. All rights reserved.</p>
            <p>Results may vary. Success depends on individual effort and market conditions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CampaignMicrosite;
