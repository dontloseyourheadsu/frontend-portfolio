import React, { useState } from 'react';
import './ModernClickThrough.css';

const ModernClickThrough = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
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
    <div className="modern-click-through">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
        <div className="step-indicators">
          {[1, 2, 3].map(step => (
            <div 
              key={step} 
              className={`step-indicator ${step <= currentStep ? 'active' : ''}`}
              onClick={() => setCurrentStep(step)}
            >
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="content-container">
        <div className={`step-content ${currentStep === 1 ? 'active' : ''}`}>
          <div className="content-left">
            <h1>Discover Your Perfect Workflow</h1>
            <p className="subtitle">Boost productivity with our intuitive tools</p>
            <p className="description">
              Our platform helps teams collaborate seamlessly, manage tasks efficiently, 
              and deliver projects on time. Start your journey to better workflow management.
            </p>
            
            <div className="features">
              <div className="feature">
                <div className="icon">✓</div>
                <div className="text">Intuitive task management</div>
              </div>
              <div className="feature">
                <div className="icon">✓</div>
                <div className="text">Real-time collaboration</div>
              </div>
              <div className="feature">
                <div className="icon">✓</div>
                <div className="text">Advanced reporting tools</div>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="image-placeholder">
              <img src="https://via.placeholder.com/500x400?text=Workflow+Visualization" alt="Workflow Visualization" />
            </div>
          </div>
        </div>

        <div className={`step-content ${currentStep === 2 ? 'active' : ''}`}>
          <div className="content-left">
            <h1>Choose Your Plan</h1>
            <p className="subtitle">Flexible options for teams of all sizes</p>
            <p className="description">
              Whether you're a small team or a large enterprise, we have plans 
              designed to fit your needs and scale with your business.
            </p>
            
            <div className="plans">
              <div className="plan">
                <h3>Starter</h3>
                <p className="price">$9<span>/month</span></p>
                <ul>
                  <li>Up to 5 users</li>
                  <li>Basic features</li>
                  <li>Email support</li>
                </ul>
              </div>
              <div className="plan featured">
                <div className="popular-tag">MOST POPULAR</div>
                <h3>Professional</h3>
                <p className="price">$29<span>/month</span></p>
                <ul>
                  <li>Up to 20 users</li>
                  <li>All features</li>
                  <li>Priority support</li>
                </ul>
              </div>
              <div className="plan">
                <h3>Enterprise</h3>
                <p className="price">$99<span>/month</span></p>
                <ul>
                  <li>Unlimited users</li>
                  <li>Advanced features</li>
                  <li>24/7 support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={`step-content ${currentStep === 3 ? 'active' : ''}`}>
          <div className="content-left">
            <h1>Get Started Today</h1>
            <p className="subtitle">Start your 14-day free trial</p>
            <p className="description">
              No credit card required. See for yourself how our platform can transform your workflow.
            </p>
            
            <form className="signup-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Size</label>
                <select id="company">
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201+">201+ employees</option>
                </select>
              </div>
              <button type="submit" className="submit-btn">Start Free Trial</button>
              <p className="form-footnote">By signing up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>
            </form>
          </div>
          <div className="content-right">
            <div className="testimonials">
              <div className="testimonial">
                <div className="quote">"This tool has transformed how our team collaborates. We've seen a 30% increase in productivity since implementation."</div>
                <div className="author">
                  <div className="avatar">JS</div>
                  <div className="author-info">
                    <div className="name">Jane Smith</div>
                    <div className="role">Product Manager, Acme Inc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="navigation-buttons">
        {currentStep > 1 && (
          <button className="prev-btn" onClick={prevStep}>
            <span className="arrow-left"></span> Previous
          </button>
        )}
        {currentStep < totalSteps ? (
          <button className="next-btn" onClick={nextStep}>
            Next <span className="arrow-right"></span>
          </button>
        ) : (
          <button className="cta-btn">Get Started Now</button>
        )}
      </div>
    </div>
  );
};

export default ModernClickThrough;
