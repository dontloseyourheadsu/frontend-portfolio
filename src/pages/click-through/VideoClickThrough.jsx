import React, { useState, useRef, useEffect } from 'react';
import './VideoClickThrough.css';

const VideoClickThrough = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
  const totalSteps = 4;

  // Video control functions
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Handle video play/pause state
  useEffect(() => {
    const handleStateChange = () => {
      setIsPlaying(!videoRef.current.paused);
    };
    
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('play', handleStateChange);
      videoElement.addEventListener('pause', handleStateChange);
      
      return () => {
        videoElement.removeEventListener('play', handleStateChange);
        videoElement.removeEventListener('pause', handleStateChange);
      };
    }
  }, []);

  // Navigation functions
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="video-click-through">
      <div className="background-gradient"></div>
      <div className="content-container">
        <div className="video-side">
          <div className="video-wrapper">
            <div className="video-container">
              <video
                ref={videoRef}
                poster="https://via.placeholder.com/800x450?text=Video+Thumbnail"
                controls
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={`play-overlay ${isPlaying ? 'hidden' : ''}`} onClick={togglePlay}>
                <div className="play-button">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="video-info">
              <h2>Master Class: Digital Marketing Mastery</h2>
              <div className="video-meta">
                <span>45:18 min</span>
                <span>•</span>
                <span>142,568 views</span>
              </div>
              <div className="presenter">
                <div className="presenter-avatar">JS</div>
                <div className="presenter-info">
                  <div className="presenter-name">Jessica Schmidt</div>
                  <div className="presenter-title">Head of Digital Marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="form-side">
          <div className="progress-indicator">
            <div className="progress-line">
              <div 
                className="progress-filled" 
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <div className="step-numbers">
              {[...Array(totalSteps)].map((_, idx) => (
                <div 
                  key={idx} 
                  className={`step-number ${currentStep > idx ? 'completed' : currentStep === idx + 1 ? 'active' : ''}`}
                >
                  {idx + 1}
                </div>
              ))}
            </div>
          </div>
          
          <div className="form-content">
            {currentStep === 1 && (
              <div className="step-content">
                <h2>Get the complete workshop</h2>
                <p className="step-description">
                  Enter your details to access the full masterclass on Digital Marketing Strategies 
                  and receive a personalized action plan for your business.
                </p>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name</label>
                  <input 
                    type="text" 
                    id="fullname" 
                    placeholder="Enter your full name" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    required
                  />
                </div>
                <button className="form-button" onClick={nextStep}>
                  Continue
                </button>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="step-content">
                <h2>Tell us about your business</h2>
                <p className="step-description">
                  This helps us customize the content specifically for your needs.
                </p>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Enter your company name" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <select id="industry">
                    <option value="">Select your industry</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="saas">SaaS / Technology</option>
                    <option value="health">Health & Wellness</option>
                    <option value="education">Education</option>
                    <option value="finance">Finance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="size">Company Size</label>
                  <div className="radio-group">
                    <div className="radio-option">
                      <input type="radio" id="size-1" name="size" value="1-10" />
                      <label htmlFor="size-1">1-10 employees</label>
                    </div>
                    <div className="radio-option">
                      <input type="radio" id="size-2" name="size" value="11-50" />
                      <label htmlFor="size-2">11-50 employees</label>
                    </div>
                    <div className="radio-option">
                      <input type="radio" id="size-3" name="size" value="51+" />
                      <label htmlFor="size-3">51+ employees</label>
                    </div>
                  </div>
                </div>
                <div className="button-group">
                  <button className="back-button" onClick={prevStep}>
                    Back
                  </button>
                  <button className="form-button" onClick={nextStep}>
                    Continue
                  </button>
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="step-content">
                <h2>Your marketing goals</h2>
                <p className="step-description">
                  Select the primary areas you'd like to improve:
                </p>
                <div className="form-group">
                  <div className="checkbox-group">
                    <div className="checkbox-option">
                      <input type="checkbox" id="goal-1" name="goal" value="seo" />
                      <label htmlFor="goal-1">Search Engine Optimization</label>
                    </div>
                    <div className="checkbox-option">
                      <input type="checkbox" id="goal-2" name="goal" value="ppc" />
                      <label htmlFor="goal-2">Pay-Per-Click Advertising</label>
                    </div>
                    <div className="checkbox-option">
                      <input type="checkbox" id="goal-3" name="goal" value="social" />
                      <label htmlFor="goal-3">Social Media Marketing</label>
                    </div>
                    <div className="checkbox-option">
                      <input type="checkbox" id="goal-4" name="goal" value="content" />
                      <label htmlFor="goal-4">Content Marketing</label>
                    </div>
                    <div className="checkbox-option">
                      <input type="checkbox" id="goal-5" name="goal" value="email" />
                      <label htmlFor="goal-5">Email Marketing</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="challenge">Biggest Marketing Challenge</label>
                  <textarea
                    id="challenge"
                    rows="3"
                    placeholder="What's your biggest marketing challenge right now?"
                  ></textarea>
                </div>
                <div className="button-group">
                  <button className="back-button" onClick={prevStep}>
                    Back
                  </button>
                  <button className="form-button" onClick={nextStep}>
                    Continue
                  </button>
                </div>
              </div>
            )}
            
            {currentStep === 4 && (
              <div className="step-content final-step">
                <div className="success-icon">✓</div>
                <h2>You're all set!</h2>
                <p className="step-description">
                  Thank you for your interest in our Digital Marketing Masterclass. 
                  We've sent the complete workshop and your personalized action plan to your email.
                </p>
                <div className="workshop-details">
                  <h3>What's included:</h3>
                  <ul className="workshop-items">
                    <li>
                      <span className="item-icon">🎬</span>
                      <span className="item-text">Full 3-hour workshop video</span>
                    </li>
                    <li>
                      <span className="item-icon">📊</span>
                      <span className="item-text">Personalized marketing strategy</span>
                    </li>
                    <li>
                      <span className="item-icon">📝</span>
                      <span className="item-text">Actionable templates & checklists</span>
                    </li>
                    <li>
                      <span className="item-icon">🔍</span>
                      <span className="item-text">SEO & content strategy guide</span>
                    </li>
                  </ul>
                </div>
                <button className="cta-button">
                  Access Your Dashboard
                </button>
                <div className="social-share">
                  <p>Share with your network:</p>
                  <div className="social-icons">
                    <button className="social-icon twitter">Twitter</button>
                    <button className="social-icon linkedin">LinkedIn</button>
                    <button className="social-icon facebook">Facebook</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="testimonials">
            <div className="testimonial">
              <div className="testimonial-text">
                "This workshop transformed our marketing strategy completely. We've seen a 40% increase in conversions since implementing these techniques."
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">Michael K.</div>
                  <div className="author-position">Marketing Director, TechFlow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoClickThrough;
