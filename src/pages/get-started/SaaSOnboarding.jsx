import React, { useState } from 'react';
import './SaaSOnboarding.css';

const SaaSOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    teamSize: '',
    useCase: '',
    role: ''
  });
  const [isCompleted, setIsCompleted] = useState(false);
  
  const totalSteps = 4;
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Onboarding completed:', formData);
    setIsCompleted(true);
  };
  
  if (isCompleted) {
    return (
      <div className="saas-onboarding">
        <div className="saas-onboarding-container">
          <div className="saas-completion-screen">
            <div className="saas-completion-icon">🎉</div>
            <h1>Welcome to CloudFlow!</h1>
            <p>Your account has been successfully created and configured. You're ready to start streamlining your workflow.</p>
            
            <div className="saas-next-steps">
              <h2>Here's what you can do next:</h2>
              <div className="saas-action-cards">
                <div className="saas-action-card">
                  <div className="saas-action-icon">📊</div>
                  <h3>Create Your First Project</h3>
                  <p>Set up your first project and invite team members to collaborate.</p>
                  <button className="saas-action-button">Create Project</button>
                </div>
                
                <div className="saas-action-card">
                  <div className="saas-action-icon">👥</div>
                  <h3>Invite Your Team</h3>
                  <p>Add team members and start collaborating on projects together.</p>
                  <button className="saas-action-button">Invite Team</button>
                </div>
                
                <div className="saas-action-card">
                  <div className="saas-action-icon">🚀</div>
                  <h3>Take a Quick Tour</h3>
                  <p>Learn the essential features in just 5 minutes with our guided tour.</p>
                  <button className="saas-action-button">Start Tour</button>
                </div>
              </div>
            </div>
            
            <div className="saas-help-section">
              <h3>Need Help Getting Started?</h3>
              <div className="saas-help-links">
                <a href="#" className="saas-help-link">📚 Documentation</a>
                <a href="#" className="saas-help-link">💬 Live Chat Support</a>
                <a href="#" className="saas-help-link">🎥 Video Tutorials</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="saas-onboarding">
      <div className="saas-onboarding-container">
        <div className="saas-onboarding-header">
          <div className="saas-logo">
            <span className="saas-logo-text">Cloud<span className="saas-logo-accent">Flow</span></span>
          </div>
          
          <div className="saas-progress-indicator">
            <div className="saas-progress-bar">
              <div 
                className="saas-progress-fill" 
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <span className="saas-progress-text">Step {currentStep} of {totalSteps}</span>
          </div>
        </div>
        
        <div className="saas-onboarding-content">
          <form className="saas-onboarding-form" onSubmit={handleSubmit}>
            {/* Step 1: Account Creation */}
            {currentStep === 1 && (
              <div className="saas-step-content">
                <div className="saas-step-header">
                  <h1>Create Your Account</h1>
                  <p>Let's start by setting up your personal account information.</p>
                </div>
                
                <div className="saas-form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="saas-form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div className="saas-form-row">
                  <div className="saas-form-group">
                    <label htmlFor="password">Password *</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a strong password"
                      required
                    />
                  </div>
                  
                  <div className="saas-form-group">
                    <label htmlFor="confirmPassword">Confirm Password *</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>
                
                <div className="saas-password-requirements">
                  <h4>Password Requirements:</h4>
                  <ul>
                    <li className={formData.password.length >= 8 ? 'valid' : ''}>At least 8 characters</li>
                    <li className={/[A-Z]/.test(formData.password) ? 'valid' : ''}>One uppercase letter</li>
                    <li className={/[0-9]/.test(formData.password) ? 'valid' : ''}>One number</li>
                  </ul>
                </div>
              </div>
            )}
            
            {/* Step 2: Company Information */}
            {currentStep === 2 && (
              <div className="saas-step-content">
                <div className="saas-step-header">
                  <h1>Tell Us About Your Company</h1>
                  <p>Help us customize your experience based on your organization.</p>
                </div>
                
                <div className="saas-form-group">
                  <label htmlFor="companyName">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    required
                  />
                </div>
                
                <div className="saas-form-row">
                  <div className="saas-form-group">
                    <label htmlFor="teamSize">Team Size *</label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select team size</option>
                      <option value="1">Just me</option>
                      <option value="2-10">2-10 people</option>
                      <option value="11-50">11-50 people</option>
                      <option value="51-200">51-200 people</option>
                      <option value="200+">200+ people</option>
                    </select>
                  </div>
                  
                  <div className="saas-form-group">
                    <label htmlFor="role">Your Role *</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select your role</option>
                      <option value="ceo">CEO/Founder</option>
                      <option value="manager">Manager</option>
                      <option value="developer">Developer</option>
                      <option value="designer">Designer</option>
                      <option value="marketer">Marketer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 3: Use Case */}
            {currentStep === 3 && (
              <div className="saas-step-content">
                <div className="saas-step-header">
                  <h1>How Will You Use CloudFlow?</h1>
                  <p>Select your primary use case so we can personalize your experience.</p>
                </div>
                
                <div className="saas-use-case-options">
                  <div className={`saas-use-case-option ${formData.useCase === 'project-management' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      id="project-management"
                      name="useCase"
                      value="project-management"
                      checked={formData.useCase === 'project-management'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="project-management">
                      <div className="saas-use-case-icon">📊</div>
                      <div className="saas-use-case-content">
                        <h3>Project Management</h3>
                        <p>Track projects, assign tasks, and monitor progress across teams.</p>
                      </div>
                    </label>
                  </div>
                  
                  <div className={`saas-use-case-option ${formData.useCase === 'team-collaboration' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      id="team-collaboration"
                      name="useCase"
                      value="team-collaboration"
                      checked={formData.useCase === 'team-collaboration'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="team-collaboration">
                      <div className="saas-use-case-icon">👥</div>
                      <div className="saas-use-case-content">
                        <h3>Team Collaboration</h3>
                        <p>Share files, communicate, and work together in real-time.</p>
                      </div>
                    </label>
                  </div>
                  
                  <div className={`saas-use-case-option ${formData.useCase === 'workflow-automation' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      id="workflow-automation"
                      name="useCase"
                      value="workflow-automation"
                      checked={formData.useCase === 'workflow-automation'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="workflow-automation">
                      <div className="saas-use-case-icon">⚡</div>
                      <div className="saas-use-case-content">
                        <h3>Workflow Automation</h3>
                        <p>Automate repetitive tasks and streamline business processes.</p>
                      </div>
                    </label>
                  </div>
                  
                  <div className={`saas-use-case-option ${formData.useCase === 'client-management' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      id="client-management"
                      name="useCase"
                      value="client-management"
                      checked={formData.useCase === 'client-management'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="client-management">
                      <div className="saas-use-case-icon">🤝</div>
                      <div className="saas-use-case-content">
                        <h3>Client Management</h3>
                        <p>Manage client relationships, proposals, and deliverables.</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="saas-step-content">
                <div className="saas-step-header">
                  <h1>Almost Done!</h1>
                  <p>Review your information and complete your account setup.</p>
                </div>
                
                <div className="saas-summary-card">
                  <h3>Account Summary</h3>
                  <div className="saas-summary-item">
                    <span className="saas-summary-label">Name:</span>
                    <span className="saas-summary-value">{formData.fullName}</span>
                  </div>
                  <div className="saas-summary-item">
                    <span className="saas-summary-label">Email:</span>
                    <span className="saas-summary-value">{formData.email}</span>
                  </div>
                  <div className="saas-summary-item">
                    <span className="saas-summary-label">Company:</span>
                    <span className="saas-summary-value">{formData.companyName}</span>
                  </div>
                  <div className="saas-summary-item">
                    <span className="saas-summary-label">Team Size:</span>
                    <span className="saas-summary-value">{formData.teamSize}</span>
                  </div>
                  <div className="saas-summary-item">
                    <span className="saas-summary-label">Primary Use Case:</span>
                    <span className="saas-summary-value">
                      {formData.useCase.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                </div>
                
                <div className="saas-terms-section">
                  <label className="saas-checkbox-label">
                    <input type="checkbox" required />
                    <span>I agree to the <a href="#" target="_blank">Terms of Service</a> and <a href="#" target="_blank">Privacy Policy</a></span>
                  </label>
                </div>
              </div>
            )}
            
            <div className="saas-form-actions">
              {currentStep > 1 && (
                <button type="button" className="saas-back-button" onClick={prevStep}>
                  Back
                </button>
              )}
              
              <button 
                type={currentStep === totalSteps ? "submit" : "button"} 
                className="saas-next-button"
                onClick={currentStep === totalSteps ? undefined : nextStep}
              >
                {currentStep === totalSteps ? "Complete Setup" : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SaaSOnboarding;
