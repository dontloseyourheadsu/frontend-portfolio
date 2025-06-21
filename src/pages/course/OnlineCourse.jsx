import React, { useState } from 'react';
import './OnlineCourse.css';

const OnlineCourse = () => {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  // Curriculum sections with modules and lessons
  const curriculum = [
    {
      title: 'Getting Started',
      modules: [
        { title: 'Course Introduction', duration: '10:15', free: true },
        { title: 'Setting Up Your Environment', duration: '18:30', free: false },
        { title: 'Core Concepts Overview', duration: '15:45', free: false }
      ]
    },
    {
      title: 'Core Fundamentals',
      modules: [
        { title: 'Understanding the Basics', duration: '22:10', free: false },
        { title: 'Essential Techniques', duration: '31:45', free: false },
        { title: 'Practical Applications', duration: '25:20', free: false },
        { title: 'Advanced Implementation', duration: '28:15', free: false }
      ]
    },
    {
      title: 'Building Real Projects',
      modules: [
        { title: 'Project Planning and Setup', duration: '15:30', free: false },
        { title: 'Project 1: Portfolio Website', duration: '42:15', free: false },
        { title: 'Project 2: Interactive Dashboard', duration: '55:20', free: false },
        { title: 'Project 3: Mobile Application', duration: '63:10', free: false }
      ]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'UX Designer',
      comment: 'This course transformed my understanding of design systems. The practical projects were invaluable for my portfolio.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Frontend Developer',
      comment: 'The most comprehensive course I\'ve taken. It filled in all the knowledge gaps I had and improved my confidence as a developer.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Product Manager',
      comment: 'Even as a non-technical PM, this course helped me communicate better with my development team and understand their challenges.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  // Pricing options
  const pricingOptions = [
    {
      title: 'Basic',
      price: '49',
      features: [
        'Full course access',
        '6 months access',
        'Course certificate',
        'Email support'
      ],
      recommended: false
    },
    {
      title: 'Pro',
      price: '99',
      features: [
        'Everything in Basic',
        'Lifetime access',
        'Project files & resources',
        'Priority support',
        'Private community access'
      ],
      recommended: true
    },
    {
      title: 'Team',
      price: '199',
      features: [
        'Everything in Pro',
        '5 user licenses',
        'Team dashboard',
        'Dedicated success manager',
        'Custom training session'
      ],
      recommended: false
    }
  ];

  const playVideo = (e) => {
    e.preventDefault();
    setVideoPlaying(true);
    // In a real implementation, this would trigger playing the actual video
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="online-course">
      {/* Hero section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h4 className="course-category">UI/UX Design Mastery</h4>
              <h1>Modern Design Systems: From Theory to Production</h1>
              <p className="course-description">
                Learn to create beautiful, functional design systems that scale across products and platforms. 
                Master the entire workflow from research to production-ready components.
              </p>
              <div className="course-meta">
                <div className="meta-item">
                  <i className="icon-videos">📹</i>
                  <span>72 video lessons (25+ hours)</span>
                </div>
                <div className="meta-item">
                  <i className="icon-projects">🔨</i>
                  <span>12 real-world projects</span>
                </div>
                <div className="meta-item">
                  <i className="icon-level">📊</i>
                  <span>Intermediate to Advanced</span>
                </div>
              </div>
              <div className="cta-buttons">
                <a href="#pricing" className="button button-primary">Enroll Now</a>
                <a href="#curriculum" className="button button-secondary">View Curriculum</a>
              </div>
            </div>
            <div className="hero-video">
              <div className="video-preview" onClick={playVideo}>
                {videoPlaying ? (
                  <div className="video-container">
                    <div className="placeholder-video">
                      <p>Video would play here in a real implementation</p>
                      <button onClick={() => setVideoPlaying(false)}>Close Video</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="play-button">
                      <span className="play-icon">▶</span>
                    </div>
                    <p className="video-text">Watch preview (2:45)</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course details tabs */}
      <section className="course-details">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'curriculum' ? 'active' : ''}`}
              onClick={() => handleTabChange('curriculum')}
            >
              Curriculum
            </button>
            <button 
              className={`tab ${activeTab === 'instructor' ? 'active' : ''}`}
              onClick={() => handleTabChange('instructor')}
            >
              Instructor
            </button>
            <button 
              className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => handleTabChange('reviews')}
            >
              Reviews
            </button>
            <button 
              className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
              onClick={() => handleTabChange('faq')}
            >
              FAQ
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'curriculum' && (
              <div className="curriculum-content">
                <h2>Course Curriculum</h2>
                <p className="curriculum-description">
                  This comprehensive course is structured in a way that builds your skills progressively from fundamentals to advanced concepts.
                </p>
                
                <div className="curriculum-sections">
                  {curriculum.map((section, index) => (
                    <div className="curriculum-section" key={index}>
                      <div className="section-header">
                        <h3>{section.title}</h3>
                        <span className="module-count">{section.modules.length} modules</span>
                      </div>
                      <div className="section-modules">
                        {section.modules.map((module, mIdx) => (
                          <div className="module-item" key={mIdx}>
                            <div className="module-info">
                              <span className="module-icon">📝</span>
                              <h4>{module.title}</h4>
                              {module.free && <span className="free-label">Free</span>}
                            </div>
                            <span className="module-duration">{module.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div className="instructor-content">
                <div className="instructor-profile">
                  <div className="instructor-image">
                    <div className="placeholder-avatar">AK</div>
                  </div>
                  <div className="instructor-info">
                    <h2>Alex Kim</h2>
                    <h4>Senior UX Designer & Design Systems Specialist</h4>
                    <p className="instructor-bio">
                      Alex has over 10 years of experience creating design systems for enterprise and startup companies. 
                      Previously leading design teams at Google and Airbnb, he now focuses on teaching and consulting 
                      while maintaining several popular open-source design tools.
                    </p>
                    <div className="instructor-stats">
                      <div className="stat">
                        <h5>10+</h5>
                        <p>Years Experience</p>
                      </div>
                      <div className="stat">
                        <h5>15k+</h5>
                        <p>Students</p>
                      </div>
                      <div className="stat">
                        <h5>4.9</h5>
                        <p>Instructor Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-content">
                <h2>Student Reviews</h2>
                <div className="reviews-overview">
                  <div className="rating-summary">
                    <div className="average-rating">4.8</div>
                    <div className="stars">★★★★★</div>
                    <div className="total-reviews">based on 2,534 reviews</div>
                  </div>
                  <div className="rating-breakdown">
                    <div className="rating-bar">
                      <span className="stars">5 ★</span>
                      <div className="bar"><div className="fill" style={{width: '85%'}}></div></div>
                      <span className="percentage">85%</span>
                    </div>
                    <div className="rating-bar">
                      <span className="stars">4 ★</span>
                      <div className="bar"><div className="fill" style={{width: '10%'}}></div></div>
                      <span className="percentage">10%</span>
                    </div>
                    <div className="rating-bar">
                      <span className="stars">3 ★</span>
                      <div className="bar"><div className="fill" style={{width: '3%'}}></div></div>
                      <span className="percentage">3%</span>
                    </div>
                    <div className="rating-bar">
                      <span className="stars">2 ★</span>
                      <div className="bar"><div className="fill" style={{width: '1%'}}></div></div>
                      <span className="percentage">1%</span>
                    </div>
                    <div className="rating-bar">
                      <span className="stars">1 ★</span>
                      <div className="bar"><div className="fill" style={{width: '1%'}}></div></div>
                      <span className="percentage">1%</span>
                    </div>
                  </div>
                </div>
                
                <div className="testimonials-container">
                  {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                      <div className="testimonial-header">
                        <div className="testimonial-avatar">
                          <img src={testimonial.avatar} alt={testimonial.name} />
                        </div>
                        <div className="testimonial-name">
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.role}</p>
                        </div>
                        <div className="testimonial-stars">★★★★★</div>
                      </div>
                      <div className="testimonial-body">
                        <p>"{testimonial.comment}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="faq-content">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-items">
                  <div className="faq-item">
                    <h3>Do I need prior experience in design?</h3>
                    <p>While some familiarity with design concepts is helpful, this course is structured to accommodate learners with intermediate experience. Complete beginners may want to take an introductory course first.</p>
                  </div>
                  <div className="faq-item">
                    <h3>How long do I have access to the course?</h3>
                    <p>Basic plan gives you 6 months of access, while the Pro plan offers lifetime access to course content including all future updates.</p>
                  </div>
                  <div className="faq-item">
                    <h3>Is there a certificate upon completion?</h3>
                    <p>Yes, all plans include a completion certificate that you can add to your LinkedIn profile or portfolio.</p>
                  </div>
                  <div className="faq-item">
                    <h3>Can I download the course videos?</h3>
                    <p>Video downloads are available for Pro and Team plan subscribers, allowing you to learn offline.</p>
                  </div>
                  <div className="faq-item">
                    <h3>What if I'm not satisfied with the course?</h3>
                    <p>We offer a 30-day money-back guarantee. If you're not happy with the course, you can request a full refund within the first 30 days of purchase.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="pricing" id="pricing">
        <div className="container">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-description">
            Select the plan that best fits your learning needs and budget. All plans include access to the core course content.
          </p>
          
          <div className="pricing-cards">
            {pricingOptions.map((option, index) => (
              <div className={`pricing-card ${option.recommended ? 'recommended' : ''}`} key={index}>
                {option.recommended && <div className="recommended-badge">Most Popular</div>}
                <h3 className="plan-title">{option.title}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{option.price}</span>
                </div>
                <ul className="plan-features">
                  {option.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <span className="feature-icon">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className={`button ${option.recommended ? 'button-primary' : 'button-secondary'}`}>
                  Choose {option.title}
                </button>
              </div>
            ))}
          </div>
          
          <div className="guarantee">
            <div className="guarantee-icon">🔒</div>
            <p>30-Day Money-Back Guarantee. No questions asked.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Master Design Systems?</h2>
          <p>Join 15,000+ students already improving their design and development skills</p>
          <a href="#pricing" className="button button-large">Enroll in Course</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="course-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Design Systems Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OnlineCourse;
