import React, { useState } from 'react';
import './FreeGuideCapture.css';

const FreeGuideCapture = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    company: '',
    role: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Guide download:', formData);
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="guide-page">
        <div className="guide-container">
          <div className="guide-success">
            <div className="guide-success-icon">🎉</div>
            <h1>Your Guide is Ready!</h1>
            <p>Thanks {formData.firstName}! We've sent the "Ultimate Digital Marketing Strategy Guide" to {formData.email}.</p>
            
            <div className="guide-download-card">
              <div className="guide-preview">
                <div className="guide-cover">
                  <div className="guide-cover-content">
                    <h3>Digital Marketing Strategy Guide</h3>
                    <p>2024 Edition</p>
                    <div className="guide-pages">52 Pages</div>
                  </div>
                </div>
                <div className="guide-details">
                  <h4>What's Inside:</h4>
                  <ul>
                    <li>✅ Complete strategy framework</li>
                    <li>✅ 15+ proven tactics</li>
                    <li>✅ Real case studies</li>
                    <li>✅ Templates & checklists</li>
                    <li>✅ ROI tracking methods</li>
                  </ul>
                </div>
              </div>
              
              <div className="guide-download-actions">
                <button className="guide-download-button">
                  📥 Download PDF Now
                </button>
                <button className="guide-secondary-button">
                  📧 Resend Email
                </button>
              </div>
            </div>
            
            <div className="guide-bonus">
              <h3>🎁 Bonus: Free 30-Minute Strategy Call</h3>
              <p>Since you downloaded our guide, you're eligible for a complimentary strategy session with our marketing experts.</p>
              <button className="guide-bonus-button">
                Schedule My Free Call
              </button>
            </div>
            
            <div className="guide-next-steps">
              <h4>What happens next?</h4>
              <div className="guide-timeline">
                <div className="guide-timeline-item">
                  <span className="guide-timeline-number">1</span>
                  <div>
                    <strong>Check your email</strong>
                    <p>Your guide should arrive within 5 minutes</p>
                  </div>
                </div>
                <div className="guide-timeline-item">
                  <span className="guide-timeline-number">2</span>
                  <div>
                    <strong>Join our community</strong>
                    <p>Connect with 10,000+ marketers in our Facebook group</p>
                  </div>
                </div>
                <div className="guide-timeline-item">
                  <span className="guide-timeline-number">3</span>
                  <div>
                    <strong>Get weekly tips</strong>
                    <p>Receive exclusive insights every Tuesday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="guide-page">
      <div className="guide-container">
        <div className="guide-hero">
          <div className="guide-content">
            <div className="guide-header">
              <div className="guide-badge">🆓 FREE DOWNLOAD</div>
              <h1>The Ultimate Digital Marketing Strategy Guide</h1>
              <p className="guide-subtitle">
                A comprehensive 52-page blueprint used by 500+ companies to increase their revenue by 300% in 12 months.
              </p>
            </div>
            
            <div className="guide-preview-section">
              <div className="guide-book-mockup">
                <div className="guide-book-cover">
                  <div className="guide-book-content">
                    <h3>Digital Marketing Strategy Guide</h3>
                    <p>The Complete Playbook</p>
                    <div className="guide-book-badge">2024 Edition</div>
                  </div>
                </div>
                <div className="guide-book-pages"></div>
              </div>
              
              <div className="guide-highlights">
                <h3>What You'll Learn:</h3>
                <div className="guide-highlight-list">
                  <div className="guide-highlight-item">
                    <span className="guide-highlight-icon">🎯</span>
                    <div>
                      <strong>Strategy Framework</strong>
                      <p>Step-by-step process to build winning campaigns</p>
                    </div>
                  </div>
                  
                  <div className="guide-highlight-item">
                    <span className="guide-highlight-icon">📊</span>
                    <div>
                      <strong>Analytics & Metrics</strong>
                      <p>Track ROI and optimize for maximum results</p>
                    </div>
                  </div>
                  
                  <div className="guide-highlight-item">
                    <span className="guide-highlight-icon">💡</span>
                    <div>
                      <strong>Advanced Tactics</strong>
                      <p>Growth hacks used by Fortune 500 companies</p>
                    </div>
                  </div>
                  
                  <div className="guide-highlight-item">
                    <span className="guide-highlight-icon">📋</span>
                    <div>
                      <strong>Templates & Tools</strong>
                      <p>Ready-to-use resources worth $500+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="guide-form-section">
            <form className="guide-form" onSubmit={handleSubmit}>
              <div className="guide-form-header">
                <h2>Download Your Free Guide</h2>
                <p>Join 50,000+ marketers who've downloaded this guide</p>
                
                <div className="guide-social-proof">
                  <div className="guide-testimonial-mini">
                    <div className="guide-stars">⭐⭐⭐⭐⭐</div>
                    <p>"This guide is pure gold! Implemented the strategies and saw 40% growth in 3 months."</p>
                    <cite>- Marcus Johnson, CMO at TechStart</cite>
                  </div>
                </div>
              </div>
              
              <div className="guide-form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              
              <div className="guide-form-group">
                <label htmlFor="email">Work Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your work email"
                  required
                />
              </div>
              
              <div className="guide-form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                />
              </div>
              
              <div className="guide-form-group">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="">Select your role</option>
                  <option value="marketing-manager">Marketing Manager</option>
                  <option value="marketing-director">Marketing Director</option>
                  <option value="cmo">CMO</option>
                  <option value="founder">Founder/CEO</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="consultant">Consultant</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="guide-submit-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="guide-loading-spinner"></span>
                    Preparing Your Guide...
                  </>
                ) : (
                  '📥 Get My Free Guide (Worth $97)'
                )}
              </button>
              
              <div className="guide-trust-signals">
                <div className="guide-trust-item">
                  <span>🔒</span>
                  <p>100% Privacy Protected</p>
                </div>
                <div className="guide-trust-item">
                  <span>📧</span>
                  <p>No Spam Ever</p>
                </div>
                <div className="guide-trust-item">
                  <span>⚡</span>
                  <p>Instant Download</p>
                </div>
              </div>
            </form>
            
            <div className="guide-guarantee">
              <h4>🎯 30-Day Money-Back Guarantee</h4>
              <p>If this guide doesn't help you improve your marketing results within 30 days, we'll refund every penny. No questions asked.</p>
            </div>
          </div>
        </div>
        
        <div className="guide-features">
          <h2>Why This Guide is Different</h2>
          <div className="guide-feature-grid">
            <div className="guide-feature-card">
              <div className="guide-feature-icon">🚀</div>
              <h3>Battle-Tested Strategies</h3>
              <p>Every tactic has been tested with real companies and delivered proven results.</p>
            </div>
            
            <div className="guide-feature-card">
              <div className="guide-feature-icon">📈</div>
              <h3>Real Case Studies</h3>
              <p>See exactly how companies achieved 300%+ growth using these exact methods.</p>
            </div>
            
            <div className="guide-feature-card">
              <div className="guide-feature-icon">🎯</div>
              <h3>Actionable Framework</h3>
              <p>No theory - just step-by-step instructions you can implement immediately.</p>
            </div>
            
            <div className="guide-feature-card">
              <div className="guide-feature-icon">💰</div>
              <h3>ROI Focused</h3>
              <p>Every strategy includes clear metrics and ROI tracking methods.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeGuideCapture;
