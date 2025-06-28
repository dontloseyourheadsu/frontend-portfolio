import React, { useState, useEffect } from 'react';
import './ProductLaunchMicrosite.css';

const ProductLaunchMicrosite = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to launch date (30 days from now for demo)
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      console.log('Email subscription:', email);
    }
  };

  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Process data 10x faster than traditional solutions'
    },
    {
      icon: '🔒',
      title: 'Ultra Secure',
      description: 'Military-grade encryption keeps your data safe'
    },
    {
      icon: '🎯',
      title: 'Precision Targeting',
      description: 'AI-powered algorithms for maximum accuracy'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Optimized for all devices and platforms'
    }
  ];

  const testimonials = [
    {
      quote: "This product has revolutionized our workflow. Can't wait for the official launch!",
      author: "Alex Rivera",
      title: "CTO, TechStart Inc."
    },
    {
      quote: "The beta version exceeded all our expectations. This is going to be huge.",
      author: "Sam Chen",
      title: "Product Manager, InnovateCorp"
    }
  ];

  return (
    <div className="product-launch-microsite">
      {/* Hero Section */}
      <section className="product-launch-hero">
        <div className="product-launch-hero-content">
          <div className="product-launch-hero-badge">
            Coming Soon
          </div>
          <h1 className="product-launch-hero-title">
            Revolutionize Your
            <span className="product-launch-highlight"> Workflow</span>
          </h1>
          <p className="product-launch-hero-subtitle">
            The next-generation productivity tool that will transform how teams collaborate and achieve results.
          </p>
          
          {/* Countdown Timer */}
          <div className="product-launch-countdown">
            <h3>Launch Countdown</h3>
            <div className="product-launch-countdown-grid">
              <div className="product-launch-countdown-item">
                <span className="product-launch-countdown-number">{countdown.days}</span>
                <span className="product-launch-countdown-label">Days</span>
              </div>
              <div className="product-launch-countdown-item">
                <span className="product-launch-countdown-number">{countdown.hours}</span>
                <span className="product-launch-countdown-label">Hours</span>
              </div>
              <div className="product-launch-countdown-item">
                <span className="product-launch-countdown-number">{countdown.minutes}</span>
                <span className="product-launch-countdown-label">Minutes</span>
              </div>
              <div className="product-launch-countdown-item">
                <span className="product-launch-countdown-number">{countdown.seconds}</span>
                <span className="product-launch-countdown-label">Seconds</span>
              </div>
            </div>
          </div>

          {/* Email Signup */}
          {!isSubscribed ? (
            <form className="product-launch-signup-form" onSubmit={handleSubscribe}>
              <div className="product-launch-input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="product-launch-email-input"
                  required
                />
                <button type="submit" className="product-launch-signup-button">
                  Get Early Access
                </button>
              </div>
              <p className="product-launch-signup-note">
                Join 50,000+ people already on the waitlist
              </p>
            </form>
          ) : (
            <div className="product-launch-success-message">
              <div className="product-launch-success-icon">✓</div>
              <h3>You're on the list!</h3>
              <p>We'll notify you as soon as we launch. Get ready for something amazing!</p>
            </div>
          )}
        </div>
        
        <div className="product-launch-hero-visual">
          <div className="product-launch-mockup">
            <div className="product-launch-mockup-screen">
              <div className="product-launch-mockup-header">
                <div className="product-launch-mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="product-launch-mockup-content">
                <div className="product-launch-mockup-chart">
                  <div className="product-launch-chart-bar" style={{height: '60%'}}></div>
                  <div className="product-launch-chart-bar" style={{height: '85%'}}></div>
                  <div className="product-launch-chart-bar" style={{height: '45%'}}></div>
                  <div className="product-launch-chart-bar" style={{height: '90%'}}></div>
                  <div className="product-launch-chart-bar" style={{height: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="product-launch-features">
        <div className="product-launch-container">
          <h2 className="product-launch-section-title">Why Everyone's Talking About It</h2>
          <div className="product-launch-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="product-launch-feature-card">
                <div className="product-launch-feature-icon">{feature.icon}</div>
                <h3 className="product-launch-feature-title">{feature.title}</h3>
                <p className="product-launch-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="product-launch-preview">
        <div className="product-launch-container">
          <div className="product-launch-preview-content">
            <div className="product-launch-preview-text">
              <h2>Built for the Future</h2>
              <p>
                Our revolutionary platform combines cutting-edge AI with intuitive design to deliver 
                an experience that's both powerful and simple to use.
              </p>
              <ul className="product-launch-preview-list">
                <li>Real-time collaboration across teams</li>
                <li>Advanced analytics and reporting</li>
                <li>Seamless integrations with 500+ tools</li>
                <li>Enterprise-grade security and compliance</li>
              </ul>
            </div>
            <div className="product-launch-preview-video">
              <div className="product-launch-video-placeholder">
                <div className="product-launch-play-button">▶</div>
                <p>Watch Preview Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="product-launch-testimonials">
        <div className="product-launch-container">
          <h2 className="product-launch-section-title">Early Users Love It</h2>
          <div className="product-launch-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="product-launch-testimonial-card">
                <div className="product-launch-testimonial-stars">⭐⭐⭐⭐⭐</div>
                <blockquote className="product-launch-testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="product-launch-testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="product-launch-final-cta">
        <div className="product-launch-container">
          <h2>Don't Miss Out</h2>
          <p>Be among the first to experience the future of productivity</p>
          {!isSubscribed && (
            <form className="product-launch-final-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
              />
              <button type="submit">
                Reserve Your Spot
              </button>
            </form>
          )}
          <div className="product-launch-social-proof">
            <span>Trusted by teams at:</span>
            <div className="product-launch-company-logos">
              <span>Google</span>
              <span>Microsoft</span>
              <span>Apple</span>
              <span>Amazon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLaunchMicrosite;
