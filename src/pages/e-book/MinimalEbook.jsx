import React, { useState } from 'react';
import './MinimalEbook.css';

const MinimalEbook = () => {
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setEmail('');
      setFormSubmitted(false);
    }, 3000);
  };
  
  // Table of contents
  const tableOfContents = [
    'Introduction: Why Minimalism Matters',
    'Chapter 1: Foundations of Minimalist Design',
    'Chapter 2: Color Theory in Minimalist Spaces',
    'Chapter 3: Texture and Material Selection',
    'Chapter 4: Creating Balance with Negative Space',
    'Chapter 5: Lighting for Minimalist Environments',
    'Chapter 6: Minimalist Storage Solutions',
    'Chapter 7: Sustainable Minimalism',
    'Chapter 8: Digital Minimalism for Designers',
    'Conclusion: Implementing Your Minimalist Vision'
  ];
  
  return (
    <div className="minimal-ebook">
      <div className="container">
        <header>
          <div className="brand">ESSENTIALIST</div>
          <div className="header-right">
            <span className="price">$24</span>
            <button className="buy-button">Buy Now</button>
          </div>
        </header>
        
        <main>
          <section className="book-intro">
            <div className="book-category">INTERIOR DESIGN</div>
            <h1>The Essentialist's Guide to Minimalist Design</h1>
            <p className="book-description">
              Discover the principles of minimalism that create powerful, functional, and beautiful spaces.
              A comprehensive guide for designers and enthusiasts alike.
            </p>
            
            <div className="book-meta">
              <div className="author">
                <div className="author-name">
                  <small>Written by</small>
                  <span>NATALIE REID</span>
                </div>
              </div>
              
              <div className="book-details">
                <div className="detail">
                  <div className="detail-value">248</div>
                  <div className="detail-label">Pages</div>
                </div>
                <div className="detail">
                  <div className="detail-value">10</div>
                  <div className="detail-label">Chapters</div>
                </div>
                <div className="detail">
                  <div className="detail-value">75+</div>
                  <div className="detail-label">Examples</div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="book-showcase">
            <div className="book-cover-container">
              <div className="book-cover">
                <div className="book-title">
                  <span>THE ESSENTIALIST'S GUIDE TO</span>
                  <h2>Minimalist Design</h2>
                </div>
                <div className="book-author">NATALIE REID</div>
              </div>
            </div>
            
            <div className="book-format">
              <div className="format-title">Available formats</div>
              <div className="format-options">
                <div className="format active">
                  <span className="format-name">PDF</span>
                  <span className="format-description">For all devices</span>
                </div>
                <div className="format">
                  <span className="format-name">EPUB</span>
                  <span className="format-description">For e-readers</span>
                </div>
                <div className="format">
                  <span className="format-name">MOBI</span>
                  <span className="format-description">For Kindle</span>
                </div>
              </div>
            </div>
          </section>
          
          <section className="quote-section">
            <div className="quote">
              "Perfection is achieved not when there is nothing more to add, 
              but when there is nothing left to take away."
            </div>
            <div className="quote-author">— Antoine de Saint-Exupéry</div>
          </section>
          
          <section className="contents-section">
            <h2>Table of Contents</h2>
            <div className="table-of-contents">
              {tableOfContents.map((chapter, index) => (
                <div key={index} className="chapter-item">
                  <span className="chapter-number">{index > 0 ? `${index}.` : ''}</span>
                  <span className="chapter-title">{chapter}</span>
                </div>
              ))}
            </div>
          </section>
          
          <section className="preview-section">
            <h2>Book Preview</h2>
            <div className="book-preview">
              <h3>Introduction: Why Minimalism Matters</h3>
              <p>
                In a world of overwhelming visual stimuli, minimalism offers clarity and purpose.
                It's not merely an aesthetic choice; it's a philosophy that guides how we 
                interact with our surroundings and how our environments impact our well-being.
              </p>
              <p>
                The principles of minimalist design extend beyond the removal of excess. 
                They involve careful attention to each element, ensuring that what remains 
                serves a specific purpose—whether functional, emotional, or both.
              </p>
              <p>
                This book explores minimalism not as a trend, but as an enduring approach to 
                design that prioritizes intention over abundance, quality over quantity, 
                and substance over style.
              </p>
            </div>
          </section>
          
          <section className="cta-section">
            <div className="cta-container">
              <h2>Get Your Copy Today</h2>
              <p>
                Receive the e-book directly in your inbox moments after purchase. 
                Begin your journey to creating more meaningful spaces.
              </p>
              <div className="purchase-options">
                <div className="regular-price">
                  <div className="price-category">Standard Edition</div>
                  <div className="price-amount">$24</div>
                  <ul className="features-list">
                    <li>Full e-book (248 pages)</li>
                    <li>All three digital formats included</li>
                    <li>Free updates for life</li>
                  </ul>
                  <button className="buy-button">Purchase Now</button>
                </div>
                
                <div className="premium-price">
                  <div className="price-category">Premium Edition</div>
                  <div className="price-amount">$38</div>
                  <ul className="features-list">
                    <li>Everything in Standard Edition</li>
                    <li>15 exclusive case studies</li>
                    <li>Resource library with templates</li>
                    <li>Video walkthrough of 3 projects</li>
                  </ul>
                  <button className="buy-button primary">Purchase Now</button>
                </div>
              </div>
            </div>
          </section>
          
          <section className="newsletter-section">
            <h2>Stay Updated</h2>
            <p>
              Join our mailing list to receive exclusive design insights, free resources, 
              and updates on future publications.
            </p>
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="subscribe-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            ) : (
              <div className="success-message">
                Thank you for subscribing! Check your inbox for a confirmation email.
              </div>
            )}
          </section>
        </main>
        
        <footer>
          <div className="footer-content">
            <div className="copyright">© {new Date().getFullYear()} Essentialist Publishing</div>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#">Terms</a>
              <span className="separator">•</span>
              <a href="#">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MinimalEbook;
