import React, { useState } from 'react';
import './ModernEbook.css';

const ModernEbook = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  // Book features
  const features = [
    {
      icon: '📊',
      title: 'Data-Driven Insights',
      description: 'Learn how to analyze and interpret key metrics to make informed decisions.'
    },
    {
      icon: '🚀',
      title: 'Practical Strategies',
      description: 'Implement proven strategies that have worked for successful entrepreneurs.'
    },
    {
      icon: '💡',
      title: 'Innovative Thinking',
      description: 'Develop a mindset that allows you to see opportunities where others do not.'
    },
    {
      icon: '🛠️',
      title: 'Essential Tools',
      description: 'Access a curated list of tools and resources to accelerate your progress.'
    }
  ];

  // Book reviews
  const reviews = [
    {
      name: 'Jennifer R.',
      position: 'Digital Marketing Director',
      comment: 'This e-book transformed my approach to digital marketing. The strategies outlined are both innovative and practical.',
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
      rating: 5
    },
    {
      name: 'Michael T.',
      position: 'Startup Founder',
      comment: 'As someone who has launched multiple startups, I still found valuable insights in this guide that I have now implemented in my business.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5
    },
    {
      name: 'Sarah L.',
      position: 'Content Strategist',
      comment: 'The actionable steps and case studies make this e-book stand out from others in the field. Highly recommended!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4
    }
  ];

  return (
    <div className="modern-ebook">
      <header>
        <div className="container">
          <div className="logo">Growth<span>Mindset</span></div>
          <nav>
            <a href="#features">Features</a>
            <a href="#preview">Preview</a>
            <a href="#testimonials">Testimonials</a>
            <button className="cta-button nav-cta">Get the Book</button>
          </nav>
        </div>
      </header>
      
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="book-category">BUSINESS STRATEGY</span>
            <h1>Growth Tactics for the Digital Era</h1>
            <p>
              A practical guide to scaling your business in today's competitive landscape.
              Learn proven strategies from industry experts that you can implement immediately.
            </p>
            
            <div className="book-stats">
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Pages</span>
              </div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Chapters</span>
              </div>
              <div className="stat">
                <span className="stat-number">42</span>
                <span className="stat-label">Case Studies</span>
              </div>
            </div>
            
            <div className="pricing">
              <div className="price">
                <span className="old-price">$29.99</span>
                <span className="current-price">$19.99</span>
              </div>
              <button className="cta-button">Get Your Copy Now</button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="book-cover">
              <div className="book-spine"></div>
              <div className="book-front">
                <h2>Growth Tactics</h2>
                <h3>for the Digital Era</h3>
                <div className="book-author">ALEX MORGAN</div>
              </div>
            </div>
            <div className="book-shadow"></div>
          </div>
        </div>
      </section>
      
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">What You'll Learn</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="preview" className="preview">
        <div className="container">
          <h2 className="section-title">Book Preview</h2>
          <div className="book-preview">
            <div className="chapter-title">Chapter 1: The Growth Mindset</div>
            <div className="preview-content">
              <p>
                In today's rapidly evolving digital landscape, businesses must adapt quickly or risk becoming obsolete. 
                The first step in this journey is developing what I call the "Continuous Growth Mindset."
              </p>
              <p>
                Unlike traditional approaches that focus on stable, predictable growth patterns, 
                the Continuous Growth Mindset embraces uncertainty and views challenges as opportunities.
              </p>
              <p>
                In this chapter, we'll explore how successful companies have leveraged this mindset 
                to disrupt industries and create new markets where none existed before.
              </p>
              <p className="preview-fade">
                [Continued in the full e-book...]
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">Reader Testimonials</h2>
          <div className="testimonials-grid">
            {reviews.map((review, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={review.avatar} alt={review.name} className="avatar" />
                  <div>
                    <h4>{review.name}</h4>
                    <p className="position">{review.position}</p>
                    <div className="rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="comment">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Get immediate access to all strategies, case studies, and resources.</p>
          
          <div className="subscription-form">
            {!subscribed ? (
              <form onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="cta-button">Get Your Copy</button>
              </form>
            ) : (
              <div className="success-message">
                Thank you! Check your email for download instructions.
              </div>
            )}
          </div>
          
          <div className="guarantee">
            <div className="guarantee-badge">100% Satisfaction Guaranteed</div>
            <p>
              If you're not completely satisfied with the e-book within 30 days, 
              we'll refund your purchase. No questions asked.
            </p>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="container">
          <div className="copyright">
            © {new Date().getFullYear()} GrowthMindset Publications. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernEbook;
