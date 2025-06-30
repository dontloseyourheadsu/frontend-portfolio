import React, { useState } from 'react';
import './FitnessProductSales.css';

const FitnessProductSales = () => {
  const [selectedPackage, setSelectedPackage] = useState('complete');
  const [videoPlaying, setVideoPlaying] = useState(false);

  const packages = [
    {
      id: 'starter',
      name: 'Starter Kit',
      price: 149,
      originalPrice: 199,
      includes: [
        'Resistance Bands Set',
        'Workout Guide (PDF)',
        'Nutrition Basics',
        '30-day Email Support'
      ],
      bestFor: 'Beginners'
    },
    {
      id: 'complete',
      name: 'Complete System',
      price: 299,
      originalPrice: 399,
      popular: true,
      includes: [
        'Everything in Starter Kit',
        'Adjustable Dumbbells (20lbs)',
        'Exercise Mat Premium',
        '90-day Workout Program',
        'Meal Planning Guide',
        'Video Training Library',
        'Private Community Access',
        'Weekly Check-ins'
      ],
      bestFor: 'Serious Results'
    },
    {
      id: 'elite',
      name: 'Elite Transformation',
      price: 599,
      originalPrice: 799,
      includes: [
        'Everything in Complete System',
        'Premium Equipment Bundle',
        'Personal Training Sessions (4x)',
        '1-on-1 Nutrition Consultation',
        'Custom Workout Plan',
        'Progress Tracking App',
        '24/7 Support Access',
        '180-day Program'
      ],
      bestFor: 'Maximum Results'
    }
  ];

  const features = [
    {
      icon: '🏋️',
      title: 'Professional Equipment',
      description: 'Commercial-grade equipment designed for home use and lasting performance.'
    },
    {
      icon: '📱',
      title: 'Mobile App Integration',
      description: 'Track workouts, monitor progress, and stay motivated with our exclusive app.'
    },
    {
      icon: '🎯',
      title: 'Personalized Plans',
      description: 'Customized workout and nutrition plans tailored to your specific goals.'
    },
    {
      icon: '👥',
      title: 'Community Support',
      description: 'Join thousands of members in our private community for motivation and tips.'
    }
  ];

  const testimonials = [
    {
      name: 'Mike Thompson',
      result: 'Lost 35 lbs in 12 weeks',
      quote: 'This system completely transformed my approach to fitness. The equipment is top-notch and the program is incredibly effective.',
      image: 'Before/After 1'
    },
    {
      name: 'Sarah Davis',
      result: 'Gained 8 lbs muscle',
      quote: 'I finally found a program that fits my busy schedule. The results speak for themselves!',
      image: 'Before/After 2'
    },
    {
      name: 'Carlos Martinez',
      result: 'Improved strength 200%',
      quote: 'The personal training sessions and community support made all the difference. Highly recommend!',
      image: 'Before/After 3'
    }
  ];

  return (
    <div className="fitness-product-sales">
      {/* Hero Section */}
      <section className="fitness-hero">
        <div className="fitness-hero-bg">
          <div className="fitness-hero-overlay"></div>
        </div>
        
        <div className="fitness-container">
          <div className="fitness-hero-content">
            <div className="fitness-hero-text">
              <span className="fitness-badge">🔥 LIMITED TIME OFFER</span>
              <h1 className="fitness-hero-title">
                Transform Your Body in
                <span className="fitness-accent"> 90 Days</span>
                <br />or Your Money Back
              </h1>
              <p className="fitness-hero-subtitle">
                Join over 50,000 people who have transformed their lives with our proven 
                home fitness system. Professional equipment + expert guidance = guaranteed results.
              </p>
              
              <div className="fitness-hero-stats">
                <div className="fitness-stat">
                  <span className="fitness-stat-number">50K+</span>
                  <span className="fitness-stat-label">Success Stories</span>
                </div>
                <div className="fitness-stat">
                  <span className="fitness-stat-number">90 Days</span>
                  <span className="fitness-stat-label">Guarantee</span>
                </div>
                <div className="fitness-stat">
                  <span className="fitness-stat-number">4.9★</span>
                  <span className="fitness-stat-label">Customer Rating</span>
                </div>
              </div>

              <div className="fitness-hero-actions">
                <button className="fitness-btn fitness-btn-primary">
                  Get Started Now - $299
                </button>
                <button 
                  className="fitness-btn fitness-btn-play"
                  onClick={() => setVideoPlaying(!videoPlaying)}
                >
                  <span className="fitness-play-icon">▶</span>
                  Watch Success Stories
                </button>
              </div>

              <div className="fitness-urgency">
                ⏰ <strong>Flash Sale Ends in:</strong> 23h 45m 12s
              </div>
            </div>

            <div className="fitness-hero-visual">
              <div className={`fitness-video-container ${videoPlaying ? 'playing' : ''}`}>
                <div className="fitness-video-placeholder">
                  {videoPlaying ? 'Playing Success Video...' : 'Transformation Results'}
                </div>
                {!videoPlaying && (
                  <button 
                    className="fitness-video-play"
                    onClick={() => setVideoPlaying(true)}
                  >
                    <span className="fitness-video-play-icon">▶</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="fitness-problem-solution">
        <div className="fitness-container">
          <div className="fitness-problem-solution-grid">
            <div className="fitness-problem-side">
              <h2 className="fitness-problem-title">Tired of Failed Fitness Attempts?</h2>
              <ul className="fitness-problem-list">
                <li>❌ Expensive gym memberships you rarely use</li>
                <li>❌ Complicated workout routines that don't work</li>
                <li>❌ No guidance or accountability</li>
                <li>❌ Equipment that breaks after a few months</li>
                <li>❌ Programs that don't fit your schedule</li>
              </ul>
            </div>
            
            <div className="fitness-solution-side">
              <h2 className="fitness-solution-title">Here's Your Complete Solution</h2>
              <ul className="fitness-solution-list">
                <li>✅ Professional equipment for home use</li>
                <li>✅ Proven 90-day transformation system</li>
                <li>✅ Personal trainers and nutrition experts</li>
                <li>✅ Commercial-grade equipment with lifetime warranty</li>
                <li>✅ Flexible programs that fit any schedule</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Package Selection */}
      <section className="fitness-packages">
        <div className="fitness-container">
          <div className="fitness-packages-header">
            <h2 className="fitness-section-title">Choose Your Transformation Package</h2>
            <p className="fitness-section-subtitle">
              All packages include our 90-day money-back guarantee and lifetime equipment warranty
            </p>
          </div>

          <div className="fitness-packages-grid">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`fitness-package-card ${pkg.popular ? 'popular' : ''} ${selectedPackage === pkg.id ? 'selected' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="fitness-popular-banner">
                    🏆 MOST POPULAR
                  </div>
                )}
                
                <div className="fitness-package-header">
                  <h3 className="fitness-package-name">{pkg.name}</h3>
                  <div className="fitness-package-best-for">Best for: {pkg.bestFor}</div>
                  
                  <div className="fitness-package-pricing">
                    <span className="fitness-package-price">${pkg.price}</span>
                    <span className="fitness-package-original">${pkg.originalPrice}</span>
                    <div className="fitness-package-savings">
                      Save ${pkg.originalPrice - pkg.price}!
                    </div>
                  </div>
                </div>

                <div className="fitness-package-includes">
                  <h4>What's Included:</h4>
                  <ul className="fitness-includes-list">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="fitness-include-item">
                        <span className="fitness-check-mark">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`fitness-package-btn ${pkg.popular ? 'primary' : 'secondary'}`}>
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>

          <div className="fitness-package-guarantee">
            <div className="fitness-guarantee-badge">
              <span className="fitness-guarantee-icon">🛡️</span>
              <div className="fitness-guarantee-text">
                <strong>90-Day Money-Back Guarantee</strong>
                <p>If you don't see results in 90 days, get a full refund. No questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="fitness-features">
        <div className="fitness-container">
          <h2 className="fitness-section-title">Why Choose Our System?</h2>
          
          <div className="fitness-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="fitness-feature-card">
                <div className="fitness-feature-icon">{feature.icon}</div>
                <h3 className="fitness-feature-title">{feature.title}</h3>
                <p className="fitness-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="fitness-results">
        <div className="fitness-container">
          <h2 className="fitness-section-title">Real Results from Real People</h2>
          
          <div className="fitness-results-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="fitness-result-card">
                <div className="fitness-result-image">
                  <div className="fitness-result-placeholder">
                    {testimonial.image}
                  </div>
                  <div className="fitness-result-badge">
                    {testimonial.result}
                  </div>
                </div>
                
                <div className="fitness-result-content">
                  <h3 className="fitness-result-name">{testimonial.name}</h3>
                  <p className="fitness-result-quote">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency/CTA Section */}
      <section className="fitness-urgency-cta">
        <div className="fitness-container">
          <div className="fitness-urgency-content">
            <h2 className="fitness-urgency-title">
              Don't Wait - Your Transformation Starts Today!
            </h2>
            <p className="fitness-urgency-subtitle">
              This special pricing won't last forever. Join the thousands who have already 
              transformed their lives with our proven system.
            </p>
            
            <div className="fitness-urgency-offers">
              <div className="fitness-offer-item">
                <span className="fitness-offer-icon">🎁</span>
                <span>Free shipping worldwide</span>
              </div>
              <div className="fitness-offer-item">
                <span className="fitness-offer-icon">⚡</span>
                <span>Instant digital access</span>
              </div>
              <div className="fitness-offer-item">
                <span className="fitness-offer-icon">💰</span>
                <span>90-day money-back guarantee</span>
              </div>
            </div>

            <div className="fitness-final-cta">
              <button className="fitness-btn fitness-btn-massive">
                Get Your Complete System - $299
                <span className="fitness-btn-subtext">was $399 - Save $100 Today!</span>
              </button>
              
              <div className="fitness-payment-options">
                <span>💳 Secure payment</span>
                <span>📱 PayPal accepted</span>
                <span>🔒 SSL encrypted</span>
              </div>
            </div>

            <div className="fitness-countdown">
              <div className="fitness-countdown-title">Flash Sale Ends In:</div>
              <div className="fitness-countdown-timer">
                <div className="fitness-time-unit">
                  <span className="fitness-time-number">23</span>
                  <span className="fitness-time-label">Hours</span>
                </div>
                <div className="fitness-time-unit">
                  <span className="fitness-time-number">45</span>
                  <span className="fitness-time-label">Minutes</span>
                </div>
                <div className="fitness-time-unit">
                  <span className="fitness-time-number">12</span>
                  <span className="fitness-time-label">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FitnessProductSales;
