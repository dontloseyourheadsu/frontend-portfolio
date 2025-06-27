import React, { useState } from 'react';
import './AppOnboarding.css';

const AppOnboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  
  const slides = [
    {
      title: "Welcome to FitTracker Pro",
      subtitle: "Your personal fitness companion",
      description: "Track workouts, monitor progress, and achieve your fitness goals with our comprehensive health and fitness app.",
      image: "🏃‍♂️",
      color: "#6366f1"
    },
    {
      title: "Track Your Workouts",
      subtitle: "Log every rep, set, and mile",
      description: "Record your exercises with our extensive database of workouts. Track weights, reps, duration, and calories burned.",
      image: "💪",
      color: "#8b5cf6"
    },
    {
      title: "Monitor Your Progress",
      subtitle: "See how far you've come",
      description: "Visualize your fitness journey with detailed charts and statistics. Watch your strength and endurance improve over time.",
      image: "📊",
      color: "#06b6d4"
    },
    {
      title: "Stay Motivated",
      subtitle: "Achieve your goals together",
      description: "Set personal goals, earn achievements, and connect with friends. Get the motivation you need to stay consistent.",
      image: "🎯",
      color: "#10b981"
    }
  ];
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setIsStarted(true);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const skipOnboarding = () => {
    setIsStarted(true);
  };
  
  if (isStarted) {
    return (
      <div className="app-onboarding">
        <div className="app-welcome-screen">
          <div className="app-welcome-content">
            <div className="app-welcome-header">
              <div className="app-logo">
                <span className="app-logo-icon">🏃‍♂️</span>
                <span className="app-logo-text">FitTracker Pro</span>
              </div>
            </div>
            
            <div className="app-welcome-main">
              <h1>You're All Set!</h1>
              <p>Ready to start your fitness journey? Let's begin with setting up your profile and first workout.</p>
              
              <div className="app-quick-actions">
                <div className="app-quick-action">
                  <div className="app-action-icon">👤</div>
                  <div className="app-action-content">
                    <h3>Complete Your Profile</h3>
                    <p>Add your fitness goals and personal information</p>
                    <button className="app-action-btn primary">Set Up Profile</button>
                  </div>
                </div>
                
                <div className="app-quick-action">
                  <div className="app-action-icon">🏋️‍♀️</div>
                  <div className="app-action-content">
                    <h3>Start Your First Workout</h3>
                    <p>Choose from our pre-built workout routines</p>
                    <button className="app-action-btn secondary">Browse Workouts</button>
                  </div>
                </div>
                
                <div className="app-quick-action">
                  <div className="app-action-icon">📱</div>
                  <div className="app-action-content">
                    <h3>Take a Quick Tour</h3>
                    <p>Learn about all the features in 2 minutes</p>
                    <button className="app-action-btn tertiary">Start Tour</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="app-welcome-footer">
              <button className="app-skip-btn">Skip for Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="app-onboarding">
      <div className="app-onboarding-container">
        <div className="app-onboarding-header">
          <button className="app-skip-button" onClick={skipOnboarding}>Skip</button>
        </div>
        
        <div className="app-slides-container">
          <div 
            className="app-slides-wrapper" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="app-slide">
                <div className="app-slide-content">
                  <div 
                    className="app-slide-image"
                    style={{ background: `linear-gradient(135deg, ${slide.color}, ${slide.color}aa)` }}
                  >
                    <span className="app-slide-emoji">{slide.image}</span>
                  </div>
                  
                  <div className="app-slide-text">
                    <h1>{slide.title}</h1>
                    <h2>{slide.subtitle}</h2>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="app-onboarding-footer">
          <div className="app-pagination">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`app-pagination-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          
          <div className="app-navigation">
            {currentSlide > 0 && (
              <button className="app-nav-button secondary" onClick={prevSlide}>
                Back
              </button>
            )}
            
            <button className="app-nav-button primary" onClick={nextSlide}>
              {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppOnboarding;
