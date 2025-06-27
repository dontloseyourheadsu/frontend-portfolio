import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter signup:', { email, firstName });
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="newsletter-page">
        <div className="newsletter-container">
          <div className="newsletter-success">
            <div className="newsletter-success-icon">✅</div>
            <h1>Welcome to Our Community!</h1>
            <p>Thanks for subscribing, {firstName}! You're now part of our exclusive community of digital marketing professionals.</p>
            
            <div className="newsletter-success-benefits">
              <h3>Here's what you can expect:</h3>
              <ul>
                <li>📧 Weekly insights delivered to your inbox</li>
                <li>🎯 Exclusive marketing strategies and tips</li>
                <li>📊 Free templates and resources</li>
                <li>🚀 Early access to new courses and tools</li>
              </ul>
            </div>
            
            <div className="newsletter-success-actions">
              <button className="newsletter-primary-button">
                Follow Us on Social Media
              </button>
              <button className="newsletter-secondary-button">
                Browse Our Blog
              </button>
            </div>
            
            <div className="newsletter-next-email">
              <p><strong>Your first newsletter will arrive within the next 24 hours!</strong></p>
              <p className="newsletter-small-text">
                Didn't receive our email? Check your spam folder or 
                <a href="#" className="newsletter-link"> contact our support team</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="newsletter-page">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-header">
            <div className="newsletter-badge">📧 FREE NEWSLETTER</div>
            <h1>Get Weekly Marketing Insights</h1>
            <p className="newsletter-subtitle">
              Join 50,000+ marketers who receive our exclusive tips, strategies, and case studies every Tuesday.
            </p>
          </div>
          
          <div className="newsletter-benefits">
            <div className="newsletter-benefit-item">
              <div className="newsletter-benefit-icon">🎯</div>
              <div className="newsletter-benefit-content">
                <h3>Proven Strategies</h3>
                <p>Real-world tactics that drive results</p>
              </div>
            </div>
            
            <div className="newsletter-benefit-item">
              <div className="newsletter-benefit-icon">📊</div>
              <div className="newsletter-benefit-content">
                <h3>Data-Driven Insights</h3>
                <p>Analytics and trends you can act on</p>
              </div>
            </div>
            
            <div className="newsletter-benefit-item">
              <div className="newsletter-benefit-icon">🚀</div>
              <div className="newsletter-benefit-content">
                <h3>Growth Hacks</h3>
                <p>Exclusive tips from industry leaders</p>
              </div>
            </div>
          </div>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-form-header">
              <h2>Start Getting Better Results Today</h2>
              <p>No spam, unsubscribe anytime. Trusted by professionals at:</p>
              <div className="newsletter-company-logos">
                <span>Google</span>
                <span>Microsoft</span>
                <span>Shopify</span>
                <span>Adobe</span>
              </div>
            </div>
            
            <div className="newsletter-form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                required
              />
            </div>
            
            <div className="newsletter-form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="newsletter-submit-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="newsletter-loading-spinner"></span>
                  Subscribing...
                </>
              ) : (
                'Get My Free Newsletter →'
              )}
            </button>
            
            <div className="newsletter-privacy">
              <p>
                🔒 Your email is safe with us. We respect your privacy and will never share your information.
              </p>
            </div>
          </form>
          
          <div className="newsletter-social-proof">
            <div className="newsletter-testimonial">
              <div className="newsletter-testimonial-content">
                <p>"This newsletter has completely transformed how I approach digital marketing. The insights are gold!"</p>
                <div className="newsletter-testimonial-author">
                  <strong>Sarah Chen</strong>
                  <span>Marketing Director at TechCorp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
