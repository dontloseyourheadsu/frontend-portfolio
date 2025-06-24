import React from 'react';
import './Advertisement.css';

const Advertisement = () => {
  return (
    <div className="ad-container">
      <div className="magazine-ad">
        {/* Brand Logo in the top corner */}
        <div className="x-logo">
          <img 
            src="../../public/images/tiempo-de-code-logo.svg" 
            alt="Tiempo de Code Logo"
            aria-hidden="true"
          />
        </div>
        
        <div className="ad-content">
          <h1 className="ad-headline">
            <span className="gradient-text">MODERN</span> LANDING PAGES
            <span className="delivery-tag">DELIVERED IN 48HRS</span>
          </h1>
          
          <div className="ad-features">
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <div className="feature-text">Fast Turnaround</div>
            </div>
            <div className="feature">
              <div className="feature-icon">💻</div>
              <div className="feature-text">Responsive Design</div>
            </div>
            <div className="feature">
              <div className="feature-icon">📈</div>
              <div className="feature-text">Conversion Optimized</div>
            </div>
          </div>
          
          <div className="price-tag">
            <span className="starting-at">STARTING AT</span>
            <span className="price">$80</span>
          </div>
          
          <div className="testimonial">
            <p>"My landing page conversion rate increased by 24% - exactly what I needed!"</p>
            <span className="testimonial-author">— Emma R., E-commerce Owner</span>
          </div>
          
          <a href="https://fiverr.com" className="cta-button" target="_blank" rel="noopener noreferrer">
            ORDER NOW ON FIVERR
          </a>
        </div>
        
        <div className="ad-footer">
          <p>High-converting, custom-designed landing pages that drive results</p>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
