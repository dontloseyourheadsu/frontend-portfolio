import React, { useState, useEffect } from 'react';
import './CreativeSplash.css';

const CreativeSplash = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "UNLEASH",
      subtitle: "Your Creative Potential",
      description: "Breaking boundaries with bold design and innovative thinking."
    },
    {
      title: "CREATE",
      subtitle: "Without Limits",
      description: "Where imagination meets reality in stunning visual experiences."
    },
    {
      title: "INSPIRE",
      subtitle: "The World Around You",
      description: "Transforming visions into powerful, impactful creative solutions."
    }
  ];

  useEffect(() => {
    // Track mouse movement for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger entrance animation
    setTimeout(() => setIsLoaded(true), 300);

    // Auto-rotate slides
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(slideInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="creative-splash">
      {/* Dynamic Background */}
      <div className="creative-background">
        <div 
          className="mouse-follower"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
          }}
        ></div>
        
        {/* Animated Shapes */}
        <div className="creative-shapes">
          <div className="shape-blob blob-1"></div>
          <div className="shape-blob blob-2"></div>
          <div className="shape-blob blob-3"></div>
          <div className="geometric-pattern">
            <div className="pattern-line line-1"></div>
            <div className="pattern-line line-2"></div>
            <div className="pattern-line line-3"></div>
            <div className="pattern-circle circle-1"></div>
            <div className="pattern-circle circle-2"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`creative-content ${isLoaded ? 'loaded' : ''}`}>
        {/* Header */}
        <header className="creative-header">
          <div className="logo-creative">
            <span className="logo-text">VIVID</span>
            <div className="logo-accent"></div>
          </div>
          <nav className="header-nav">
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="hero-section">
          <div className="hero-content">
            {/* Slide Content */}
            <div className="slides-container">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <h1 className="hero-title">
                    <span className="title-main">{slide.title}</span>
                    <span className="title-sub">{slide.subtitle}</span>
                  </h1>
                  <p className="hero-description">{slide.description}</p>
                </div>
              ))}
            </div>

            {/* Slide Navigation */}
            <div className="slide-navigation">
              <button onClick={prevSlide} className="nav-arrow nav-prev">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
              
              <div className="slide-indicators">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))}
              </div>
              
              <button onClick={nextSlide} className="nav-arrow nav-next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
              <button className="cta-button primary">
                <span className="btn-text">Get Started</span>
                <div className="btn-bg"></div>
              </button>
              <button className="cta-button secondary">
                <span className="btn-text">View Portfolio</span>
                <div className="btn-bg"></div>
              </button>
            </div>
          </div>

          {/* Side Content */}
          <div className="side-content">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Years</span>
              </div>
            </div>

            <div className="social-creative">
              <h3 className="social-title">Follow the Journey</h3>
              <div className="social-grid">
                <a href="#" className="social-item">
                  <span className="social-name">Instagram</span>
                  <span className="social-handle">@vivid.studio</span>
                </a>
                <a href="#" className="social-item">
                  <span className="social-name">Behance</span>
                  <span className="social-handle">vivid-creative</span>
                </a>
                <a href="#" className="social-item">
                  <span className="social-name">Dribbble</span>
                  <span className="social-handle">vivid-designs</span>
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Section */}
        <section className="bottom-section">
          <div className="newsletter-signup">
            <h3 className="newsletter-title">Stay Creative</h3>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your creative email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit">
                <span>Join</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                </svg>
              </button>
            </form>
          </div>

          <div className="creative-features">
            <div className="feature-creative">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <span>Custom Design</span>
            </div>
            <div className="feature-creative">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                </svg>
              </div>
              <span>Brand Strategy</span>
            </div>
            <div className="feature-creative">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <span>Digital Innovation</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreativeSplash;
