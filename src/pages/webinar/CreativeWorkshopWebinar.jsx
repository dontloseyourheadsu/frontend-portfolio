import React, { useState, useEffect } from 'react';
import './CreativeWorkshopWebinar.css';

const CreativeWorkshopWebinar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    creativeBg: '',
    goals: ''
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creative workshop registration:', formData);
  };

  return (
    <div className="creative-workshop-webinar">
      <div className="creative-workshop-webinar__bg-shapes">
        <div className="creative-workshop-webinar__shape creative-workshop-webinar__shape--1"></div>
        <div className="creative-workshop-webinar__shape creative-workshop-webinar__shape--2"></div>
        <div className="creative-workshop-webinar__shape creative-workshop-webinar__shape--3"></div>
        <div className="creative-workshop-webinar__shape creative-workshop-webinar__shape--4"></div>
      </div>

      <div 
        className="creative-workshop-webinar__cursor-gradient"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 107, 107, 0.1), transparent 40%)`
        }}
      ></div>

      <div className="creative-workshop-webinar__container">
        {/* Hero Section */}
        <section className="creative-workshop-webinar__hero">
          <div className="creative-workshop-webinar__hero-content">
            <div className="creative-workshop-webinar__badge">
              <span className="creative-workshop-webinar__badge-emoji">🎨</span>
              <span>CREATIVE MASTERCLASS</span>
            </div>
            
            <h1 className="creative-workshop-webinar__title">
              <span className="creative-workshop-webinar__title-line">Unleash Your</span>
              <span className="creative-workshop-webinar__title-line creative-workshop-webinar__title-line--gradient">Creative</span>
              <span className="creative-workshop-webinar__title-line">Superpowers</span>
            </h1>
            
            <p className="creative-workshop-webinar__subtitle">
              Join 500+ creative professionals in an interactive workshop that will transform 
              your artistic vision into powerful, marketable skills
            </p>
            
            <div className="creative-workshop-webinar__stats">
              <div className="creative-workshop-webinar__stat">
                <span className="creative-workshop-webinar__stat-number">3.5hrs</span>
                <span className="creative-workshop-webinar__stat-label">Live Workshop</span>
              </div>
              <div className="creative-workshop-webinar__stat">
                <span className="creative-workshop-webinar__stat-number">15+</span>
                <span className="creative-workshop-webinar__stat-label">Creative Exercises</span>
              </div>
              <div className="creative-workshop-webinar__stat">
                <span className="creative-workshop-webinar__stat-number">100%</span>
                <span className="creative-workshop-webinar__stat-label">Interactive</span>
              </div>
            </div>
          </div>
          
          <div className="creative-workshop-webinar__hero-visual">
            <div className="creative-workshop-webinar__floating-elements">
              <div className="creative-workshop-webinar__floating-element creative-workshop-webinar__floating-element--1">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="#ff6b6b"/>
                </svg>
              </div>
              <div className="creative-workshop-webinar__floating-element creative-workshop-webinar__floating-element--2">
                <svg viewBox="0 0 100 100">
                  <polygon points="50,5 95,50 50,95 5,50" fill="#4ecdc4"/>
                </svg>
              </div>
              <div className="creative-workshop-webinar__floating-element creative-workshop-webinar__floating-element--3">
                <svg viewBox="0 0 100 100">
                  <polygon points="50,10 90,90 10,90" fill="#45b7d1"/>
                </svg>
              </div>
              <div className="creative-workshop-webinar__floating-element creative-workshop-webinar__floating-element--4">
                <svg viewBox="0 0 100 100">
                  <rect x="10" y="10" width="80" height="80" fill="#96ceb4"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Content */}
        <section className="creative-workshop-webinar__content">
          <div className="creative-workshop-webinar__content-grid">
            {/* Left Column */}
            <div className="creative-workshop-webinar__left-column">
              {/* What You'll Create */}
              <div className="creative-workshop-webinar__section">
                <h2 className="creative-workshop-webinar__section-title">
                  <span className="creative-workshop-webinar__title-emoji">🚀</span>
                  What You'll Create
                </h2>
                <div className="creative-workshop-webinar__creation-grid">
                  <div className="creative-workshop-webinar__creation-item">
                    <div className="creative-workshop-webinar__creation-icon">🎭</div>
                    <h4>Personal Brand Identity</h4>
                    <p>Design your unique creative signature</p>
                  </div>
                  <div className="creative-workshop-webinar__creation-item">
                    <div className="creative-workshop-webinar__creation-icon">🎨</div>
                    <h4>Portfolio Showcase</h4>
                    <p>3 stunning portfolio pieces</p>
                  </div>
                  <div className="creative-workshop-webinar__creation-item">
                    <div className="creative-workshop-webinar__creation-icon">💡</div>
                    <h4>Creative Process Map</h4>
                    <p>Your personal ideation framework</p>
                  </div>
                  <div className="creative-workshop-webinar__creation-item">
                    <div className="creative-workshop-webinar__creation-icon">🌟</div>
                    <h4>Vision Board</h4>
                    <p>90-day creative action plan</p>
                  </div>
                </div>
              </div>

              {/* Workshop Flow */}
              <div className="creative-workshop-webinar__section">
                <h2 className="creative-workshop-webinar__section-title">
                  <span className="creative-workshop-webinar__title-emoji">⚡</span>
                  Workshop Flow
                </h2>
                <div className="creative-workshop-webinar__timeline">
                  <div className="creative-workshop-webinar__timeline-item">
                    <div className="creative-workshop-webinar__timeline-dot"></div>
                    <div className="creative-workshop-webinar__timeline-content">
                      <span className="creative-workshop-webinar__timeline-time">10:00 AM</span>
                      <h4>Creative Awakening</h4>
                      <p>Mind-mapping your creative potential</p>
                    </div>
                  </div>
                  <div className="creative-workshop-webinar__timeline-item">
                    <div className="creative-workshop-webinar__timeline-dot"></div>
                    <div className="creative-workshop-webinar__timeline-content">
                      <span className="creative-workshop-webinar__timeline-time">11:00 AM</span>
                      <h4>Ideation Laboratory</h4>
                      <p>Generate 50+ creative concepts</p>
                    </div>
                  </div>
                  <div className="creative-workshop-webinar__timeline-item">
                    <div className="creative-workshop-webinar__timeline-dot"></div>
                    <div className="creative-workshop-webinar__timeline-content">
                      <span className="creative-workshop-webinar__timeline-time">12:30 PM</span>
                      <h4>Design Sprint</h4>
                      <p>Rapid prototyping session</p>
                    </div>
                  </div>
                  <div className="creative-workshop-webinar__timeline-item">
                    <div className="creative-workshop-webinar__timeline-dot"></div>
                    <div className="creative-workshop-webinar__timeline-content">
                      <span className="creative-workshop-webinar__timeline-time">1:30 PM</span>
                      <h4>Creative Showcase</h4>
                      <p>Present your masterpiece</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creative Instructor */}
              <div className="creative-workshop-webinar__section">
                <h2 className="creative-workshop-webinar__section-title">
                  <span className="creative-workshop-webinar__title-emoji">👨‍🎨</span>
                  Your Creative Guide
                </h2>
                <div className="creative-workshop-webinar__instructor">
                  <div className="creative-workshop-webinar__instructor-avatar">
                    <div className="creative-workshop-webinar__avatar-bg"></div>
                    <span className="creative-workshop-webinar__avatar-emoji">🎨</span>
                  </div>
                  <div className="creative-workshop-webinar__instructor-info">
                    <h3>Alex Rivera</h3>
                    <p className="creative-workshop-webinar__instructor-title">Creative Director & Innovation Catalyst</p>
                    <div className="creative-workshop-webinar__instructor-tags">
                      <span>Adobe Creative Director</span>
                      <span>TEDx Speaker</span>
                      <span>500K+ Students</span>
                    </div>
                    <p className="creative-workshop-webinar__instructor-bio">
                      "I believe every person has a unique creative superpower waiting to be unleashed. 
                      Let's discover yours together!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="creative-workshop-webinar__right-column">
              <div className="creative-workshop-webinar__registration">
                <div className="creative-workshop-webinar__form-header">
                  <div className="creative-workshop-webinar__form-badge">
                    <span>🎯 EARLY BIRD SPECIAL</span>
                  </div>
                  <h3>Join the Creative Revolution</h3>
                  <div className="creative-workshop-webinar__price">
                    <span className="creative-workshop-webinar__price-old">$197</span>
                    <span className="creative-workshop-webinar__price-new">FREE</span>
                  </div>
                  <p className="creative-workshop-webinar__price-note">Limited spots available!</p>
                </div>

                <form className="creative-workshop-webinar__form" onSubmit={handleSubmit}>
                  <div className="creative-workshop-webinar__form-group">
                    <label>Your Creative Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="What should we call you?"
                      required
                    />
                  </div>

                  <div className="creative-workshop-webinar__form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.creative@email.com"
                      required
                    />
                  </div>

                  <div className="creative-workshop-webinar__form-group">
                    <label>Creative Background</label>
                    <select
                      name="creativeBg"
                      value={formData.creativeBg}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Choose your creative journey</option>
                      <option value="beginner">🌱 Creative Beginner</option>
                      <option value="hobbyist">🎨 Creative Hobbyist</option>
                      <option value="freelancer">💼 Freelance Creative</option>
                      <option value="professional">🚀 Creative Professional</option>
                      <option value="entrepreneur">💡 Creative Entrepreneur</option>
                    </select>
                  </div>

                  <div className="creative-workshop-webinar__form-group">
                    <label>What's Your Creative Goal?</label>
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      placeholder="Tell us about your creative dreams and aspirations..."
                      rows="3"
                    ></textarea>
                  </div>

                  <button type="submit" className="creative-workshop-webinar__submit">
                    <span className="creative-workshop-webinar__submit-text">Claim My Creative Spot</span>
                    <span className="creative-workshop-webinar__submit-emoji">🎨</span>
                  </button>

                  <div className="creative-workshop-webinar__form-features">
                    <div className="creative-workshop-webinar__feature">
                      <span className="creative-workshop-webinar__feature-icon">✨</span>
                      <span>Instant access to pre-workshop materials</span>
                    </div>
                    <div className="creative-workshop-webinar__feature">
                      <span className="creative-workshop-webinar__feature-icon">🎁</span>
                      <span>Bonus: Creative toolkit worth $97</span>
                    </div>
                    <div className="creative-workshop-webinar__feature">
                      <span className="creative-workshop-webinar__feature-icon">🤝</span>
                      <span>Lifetime access to creative community</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreativeWorkshopWebinar;
