import React, { useState, useEffect } from 'react';
import './ProductClickThrough.css';

const ProductClickThrough = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationType, setAnimationType] = useState('slide-in-right');

  // Product data
  const product = {
    name: "NoiseCancel Pro X",
    tagline: "Experience Pure Sound, Zero Distractions",
    price: 299.99,
    rating: 4.8,
    reviews: 1243,
    colors: [
      { name: "Midnight Black", code: "#222" },
      { name: "Arctic White", code: "#f5f5f5" },
      { name: "Navy Blue", code: "#0a3d62" }
    ],
    images: [
      "https://via.placeholder.com/600x600?text=NoiseCancel+Pro+X+Front",
      "https://via.placeholder.com/600x600?text=NoiseCancel+Pro+X+Side",
      "https://via.placeholder.com/600x600?text=NoiseCancel+Pro+X+Folded"
    ],
    features: [
      {
        title: "Active Noise Cancellation",
        description: "Our advanced ANC technology blocks out up to 99.8% of external noise, letting you focus on what matters most: your music."
      },
      {
        title: "Studio-Quality Sound",
        description: "Custom-designed 40mm dynamic drivers deliver rich, immersive sound with perfectly balanced bass, mids, and highs."
      },
      {
        title: "All-Day Comfort",
        description: "Plush memory foam ear cushions and adjustable headband ensure comfortable wear for extended listening sessions."
      }
    ],
    specs: [
      { name: "Battery Life", value: "Up to 50 hours" },
      { name: "Bluetooth", value: "5.2 with multipoint technology" },
      { name: "Weight", value: "250g" },
      { name: "Charging", value: "USB-C fast charging" },
      { name: "Water Resistance", value: "IPX4 rated" }
    ]
  };

  // Steps content
  const steps = [
    { title: "Product Overview" },
    { title: "Features & Benefits" },
    { title: "Technical Specifications" },
    { title: "Customer Reviews" },
    { title: "Purchase Options" }
  ];

  useEffect(() => {
    if (currentStep === 0) {
      setAnimationType('slide-in-right');
    }
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setAnimationType('slide-in-right');
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setAnimationType('slide-in-left');
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex) => {
    if (stepIndex > currentStep) {
      setAnimationType('slide-in-right');
    } else {
      setAnimationType('slide-in-left');
    }
    setCurrentStep(stepIndex);
  };

  // Dynamic content based on current step
  const renderStepContent = () => {
    switch(currentStep) {
      case 0:
        return (
          <div className={`step-content ${animationType}`}>
            <div className="product-showcase">
              <div className="product-images">
                <div className="main-image">
                  <img src={product.images[0]} alt={product.name} />
                </div>
                <div className="thumbnail-row">
                  {product.images.map((image, index) => (
                    <div key={index} className="thumbnail">
                      <img src={image} alt={`${product.name} view ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="product-info">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-tagline">{product.tagline}</p>
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : i < product.rating ? 'half-filled' : ''}`}>★</span>
                    ))}
                  </div>
                  <span className="rating-value">{product.rating}</span>
                  <span className="review-count">({product.reviews} reviews)</span>
                </div>
                <div className="price-container">
                  <span className="current-price">${product.price}</span>
                  <span className="original-price">${(product.price * 1.2).toFixed(2)}</span>
                  <span className="discount">-20%</span>
                </div>
                <div className="color-options">
                  <p className="option-label">Available Colors:</p>
                  <div className="color-selectors">
                    {product.colors.map((color, index) => (
                      <div 
                        key={index} 
                        className={`color-circle ${index === 0 ? 'selected' : ''}`}
                        style={{ backgroundColor: color.code }}
                        title={color.name}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="product-description">
                  <p>
                    Experience audio like never before with the NoiseCancel Pro X wireless headphones. 
                    Industry-leading noise cancellation and premium sound quality combine to deliver 
                    an unmatched listening experience for music lovers, travelers, and professionals alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 1:
        return (
          <div className={`step-content ${animationType}`}>
            <h2 className="section-title">Features & Benefits</h2>
            <div className="features-container">
              {product.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    {index === 0 && '🔇'}
                    {index === 1 && '🎵'}
                    {index === 2 && '😌'}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="additional-features">
              <div className="feature-row">
                <div className="feature-item">
                  <div className="feature-icon small">⚡</div>
                  <div className="feature-text">
                    <h4>Fast Charging</h4>
                    <p>5 minutes charge = 4 hours of playback</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon small">🎙️</div>
                  <div className="feature-text">
                    <h4>Crystal Clear Calls</h4>
                    <p>Beam-forming microphone array with AI noise reduction</p>
                  </div>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-item">
                  <div className="feature-icon small">📱</div>
                  <div className="feature-text">
                    <h4>Smart Controls</h4>
                    <p>Intuitive touch controls and voice assistant integration</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon small">🔄</div>
                  <div className="feature-text">
                    <h4>Multi-device Connection</h4>
                    <p>Seamlessly switch between two connected devices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className={`step-content ${animationType}`}>
            <h2 className="section-title">Technical Specifications</h2>
            <div className="specs-diagram">
              <img 
                src="https://via.placeholder.com/800x400?text=Product+Technical+Diagram" 
                alt="NoiseCancel Pro X Technical Diagram" 
                className="specs-image"
              />
            </div>
            <div className="specs-table">
              <div className="specs-group">
                <h3>Audio Specifications</h3>
                <div className="spec-item">
                  <div className="spec-name">Driver Size</div>
                  <div className="spec-value">40mm Dynamic Drivers</div>
                </div>
                <div className="spec-item">
                  <div className="spec-name">Frequency Response</div>
                  <div className="spec-value">4Hz - 40,000Hz</div>
                </div>
                <div className="spec-item">
                  <div className="spec-name">Impedance</div>
                  <div className="spec-value">32 Ohms</div>
                </div>
                <div className="spec-item">
                  <div className="spec-name">Sensitivity</div>
                  <div className="spec-value">105 dB/mW</div>
                </div>
              </div>
              <div className="specs-group">
                <h3>General Specifications</h3>
                {product.specs.map((spec, index) => (
                  <div className="spec-item" key={index}>
                    <div className="spec-name">{spec.name}</div>
                    <div className="spec-value">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className={`step-content ${animationType}`}>
            <h2 className="section-title">Customer Reviews</h2>
            <div className="review-summary">
              <div className="rating-overview">
                <div className="big-rating">{product.rating}</div>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : i < product.rating ? 'half-filled' : ''}`}>★</span>
                  ))}
                </div>
                <div className="total-reviews">{product.reviews} verified reviews</div>
              </div>
              <div className="rating-distribution">
                <div className="rating-bar">
                  <span className="rating-level">5 stars</span>
                  <div className="bar-container">
                    <div className="bar" style={{width: "75%"}}></div>
                  </div>
                  <span className="rating-percent">75%</span>
                </div>
                <div className="rating-bar">
                  <span className="rating-level">4 stars</span>
                  <div className="bar-container">
                    <div className="bar" style={{width: "18%"}}></div>
                  </div>
                  <span className="rating-percent">18%</span>
                </div>
                <div className="rating-bar">
                  <span className="rating-level">3 stars</span>
                  <div className="bar-container">
                    <div className="bar" style={{width: "5%"}}></div>
                  </div>
                  <span className="rating-percent">5%</span>
                </div>
                <div className="rating-bar">
                  <span className="rating-level">2 stars</span>
                  <div className="bar-container">
                    <div className="bar" style={{width: "1%"}}></div>
                  </div>
                  <span className="rating-percent">1%</span>
                </div>
                <div className="rating-bar">
                  <span className="rating-level">1 star</span>
                  <div className="bar-container">
                    <div className="bar" style={{width: "1%"}}></div>
                  </div>
                  <span className="rating-percent">1%</span>
                </div>
              </div>
            </div>
            <div className="reviews-container">
              <div className="review-card">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">MJ</div>
                  <div className="reviewer-details">
                    <div className="reviewer-name">Michael Johnson</div>
                    <div className="review-date">2 weeks ago</div>
                  </div>
                </div>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < 5 ? 'filled' : ''}`}>★</span>
                  ))}
                </div>
                <h4 className="review-title">Best headphones I've ever owned</h4>
                <p className="review-content">
                  I travel frequently for work, and these headphones have been a game-changer. 
                  The noise cancellation is incredible - I can barely hear the airplane engines now. 
                  Sound quality is top-notch and they're comfortable enough to wear for an entire 
                  cross-country flight. Battery life is as advertised. Highly recommended!
                </p>
              </div>
              <div className="review-card">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">SL</div>
                  <div className="reviewer-details">
                    <div className="reviewer-name">Sarah Lee</div>
                    <div className="review-date">1 month ago</div>
                  </div>
                </div>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < 4 ? 'filled' : ''}`}>★</span>
                  ))}
                </div>
                <h4 className="review-title">Great sound, minor comfort issues</h4>
                <p className="review-content">
                  The sound quality and noise cancellation are excellent. My music has never sounded better. 
                  The only reason I'm giving 4 stars is that after about 3 hours, I start to feel some 
                  pressure on my ears. Still, these are the best headphones I've had and would recommend them.
                </p>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className={`step-content ${animationType}`}>
            <h2 className="section-title">Purchase Options</h2>
            <div className="purchase-options">
              <div className="package-cards">
                <div className="package-card">
                  <div className="package-header">
                    <h3>Standard Package</h3>
                    <div className="package-price">${product.price}</div>
                  </div>
                  <div className="package-content">
                    <ul className="package-features">
                      <li>NoiseCancel Pro X Headphones</li>
                      <li>Carrying Case</li>
                      <li>USB-C Charging Cable</li>
                      <li>3.5mm Audio Cable</li>
                      <li>User Manual</li>
                      <li>1-Year Warranty</li>
                    </ul>
                    <button className="package-btn">Add to Cart</button>
                  </div>
                </div>
                <div className="package-card premium">
                  <div className="best-value-tag">BEST VALUE</div>
                  <div className="package-header">
                    <h3>Premium Bundle</h3>
                    <div className="package-price">$349.99</div>
                  </div>
                  <div className="package-content">
                    <ul className="package-features">
                      <li>Everything in Standard Package</li>
                      <li>Deluxe Carrying Case</li>
                      <li>Bluetooth Transmitter for TV</li>
                      <li>Extra Set of Ear Cushions</li>
                      <li>Headphone Stand</li>
                      <li>2-Year Extended Warranty</li>
                    </ul>
                    <button className="package-btn premium-btn">Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="final-cta">
                <div className="guarantee">
                  <div className="guarantee-icon">✓</div>
                  <div className="guarantee-text">
                    <h4>60-Day Money-Back Guarantee</h4>
                    <p>Try risk-free with our no-questions-asked return policy.</p>
                  </div>
                </div>
                <div className="shipping-info">
                  <div className="shipping-icon">🚚</div>
                  <div className="shipping-text">
                    <h4>Fast & Free Shipping</h4>
                    <p>Free 2-day shipping on all U.S. orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="product-click-through">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}></div>
      </div>
      
      <div className="steps-container">
        <div className="steps-navigation">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`step-item ${index === currentStep ? 'active' : index < currentStep ? 'completed' : ''}`}
              onClick={() => goToStep(index)}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-name">{step.title}</div>
            </div>
          ))}
        </div>
        
        <div className="step-content-container">
          {renderStepContent()}
        </div>

        <div className="navigation-buttons">
          <button 
            className={`prev-button ${currentStep === 0 ? 'hidden' : ''}`}
            onClick={prevStep}
          >
            ← Previous
          </button>
          
          <button 
            className={`next-button ${currentStep === steps.length - 1 ? 'purchase-btn' : ''}`}
            onClick={nextStep}
          >
            {currentStep === steps.length - 1 ? 'Buy Now' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductClickThrough;
