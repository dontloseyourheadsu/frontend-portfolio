import React, { useState, useEffect } from 'react';
import './PromoEbook.css';

const PromoEbook = () => {
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({
          ...timeLeft,
          seconds: timeLeft.seconds - 1
        });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({
          ...timeLeft,
          minutes: timeLeft.minutes - 1,
          seconds: 59
        });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({
          ...timeLeft,
          hours: timeLeft.hours - 1,
          minutes: 59,
          seconds: 59
        });
      } else if (timeLeft.days > 0) {
        setTimeLeft({
          ...timeLeft,
          days: timeLeft.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setEmail('');
      setFormSubmitted(false);
    }, 3000);
  };

  // Book benefits
  const benefits = [
    {
      icon: '🎯',
      title: 'Proven Framework',
      description: 'Follow the exact 6-step framework used by 6-figure online entrepreneurs.'
    },
    {
      icon: '💰',
      title: 'Monetization Strategies',
      description: 'Learn 12 different ways to turn your passion into a profitable online business.'
    },
    {
      icon: '📊',
      title: 'Marketing Templates',
      description: 'Get access to 20+ ready-to-use marketing templates that convert followers to customers.'
    },
    {
      icon: '🚀',
      title: 'Launch Blueprint',
      description: 'Step-by-step plan for launching your product with maximum impact and sales.'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: 'Is this e-book suitable for beginners?',
      answer: 'Absolutely! The Digital Entrepreneur\'s Blueprint is designed with beginners in mind, but also contains advanced strategies for those who already have an established online presence.'
    },
    {
      question: 'How will I receive the e-book?',
      answer: 'After purchase, you will receive an email with download links for all formats (PDF, EPUB, and MOBI) so you can read on any device.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you are not satisfied with the e-book, simply email us and we will issue a full refund, no questions asked.'
    },
    {
      question: 'Do you offer support after purchase?',
      answer: 'Yes! All e-book buyers get access to our private community where you can ask questions and get feedback from both the author and fellow entrepreneurs.'
    },
    {
      question: 'Will this work for my specific niche?',
      answer: 'The principles in this e-book are universally applicable across niches. We include case studies from various industries including health, finance, education, creativity, and technology.'
    }
  ];

  return (
    <div className="promo-ebook">
      <header className="promo-header">
        <div className="container">
          <div className="header-content">
            <div className="author-tag">ALEX MORGAN</div>
            <div className="offer-tag">Limited Time Offer</div>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="mega-title">
                <div className="subtitle">THE ULTIMATE GUIDE TO</div>
                <h1>Building a Profitable Online Business</h1>
              </div>

              <div className="book-description">
                <p>
                  Discover the proven system used by successful entrepreneurs to create,
                  launch, and scale their online businesses from scratch — without technical skills,
                  a big budget, or a large audience.
                </p>

                <div className="offer-statement">
                  <div className="value-offer">
                    <div className="value-amount">$247</div>
                    <div className="value-label">TOTAL VALUE</div>
                  </div>

                  <div className="price-offer">
                    <div className="now-only">NOW ONLY</div>
                    <div className="promo-price">$37</div>
                    <div className="discount-badge">85% OFF</div>
                  </div>
                </div>

                <div className="timer-container">
                  <div className="timer-label">OFFER EXPIRES IN:</div>
                  <div className="countdown-timer">
                    <div className="time-block">
                      <span className="time-value">{timeLeft.days}</span>
                      <span className="time-unit">Days</span>
                    </div>
                    <div className="time-separator">:</div>
                    <div className="time-block">
                      <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
                      <span className="time-unit">Hours</span>
                    </div>
                    <div className="time-separator">:</div>
                    <div className="time-block">
                      <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                      <span className="time-unit">Mins</span>
                    </div>
                    <div className="time-separator">:</div>
                    <div className="time-block">
                      <span className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                      <span className="time-unit">Secs</span>
                    </div>
                  </div>
                </div>

                <a href="#get-access" className="cta-button">
                  <span className="cta-text">GET INSTANT ACCESS</span>
                  <span className="cta-arrow">→</span>
                </a>
              </div>
            </div>

            <div className="hero-image">
              <div className="book-cover">
                <div className="book-title">
                  <h2>DIGITAL ENTREPRENEUR&apos;S BLUEPRINT</h2>
                </div>
                <div className="book-subtitle">
                  Building a Profitable Online Business
                </div>
                <div className="book-author">
                  ALEX MORGAN
                </div>
                <div className="edition-label">2nd EDITION</div>
              </div>

              <div className="includes-badge">
                <div className="badge-label">INCLUDES</div>
                <div className="badge-items">
                  <div className="badge-item">PDF</div>
                  <div className="badge-item">EPUB</div>
                  <div className="badge-item">MOBI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <div className="container">
          <div className="readers-counter">
            <span className="counter">10,000+</span> entrepreneurs have used this guide to build their businesses
          </div>

          <div className="testimonial-preview">
            <div className="stars">★★★★★</div>
            <div className="quote">"I made over $5,800 in my first month after implementing just one strategy from the book."</div>
            <div className="author">— Sarah J., E-commerce Entrepreneur</div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>What You'll Learn</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bonus-section">
        <div className="container">
          <h2>Special Bonuses <span className="value-tag">($210 Value)</span></h2>

          <div className="bonuses">
            <div className="bonus-card">
              <div className="bonus-number">BONUS #1</div>
              <h3>The Viral Content Formula</h3>
              <div className="bonus-value">$67 Value</div>
              <p>
                Learn exactly how to create content that gets shared and drives traffic to your offers.
                Includes 15 content templates you can use immediately.
              </p>
            </div>

            <div className="bonus-card">
              <div className="bonus-number">BONUS #2</div>
              <h3>Sales Page Blueprint</h3>
              <div className="bonus-value">$97 Value</div>
              <p>
                Copy-and-paste sales page template that converts visitors into customers.
                Just fill in the blanks with your offer details.
              </p>
            </div>

            <div className="bonus-card">
              <div className="bonus-number">BONUS #3</div>
              <h3>30-Day Email Sequence</h3>
              <div className="bonus-value">$47 Value</div>
              <p>
                Pre-written email sequence to nurture new subscribers and turn them into buyers.
                Customize with your own voice and offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="get-access" className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Get Instant Access Today</h2>
            <div className="pricing-info">
              <div className="pricing-column">
                <div className="price-comparison">
                  <div className="original-price">$247</div>
                  <div className="price-arrow">→</div>
                  <div className="final-price">$37</div>
                </div>

                <ul className="whats-included">
                  <li>Digital Entrepreneur's Blueprint E-book</li>
                  <li>Bonus #1: The Viral Content Formula</li>
                  <li>Bonus #2: Sales Page Blueprint</li>
                  <li>Bonus #3: 30-Day Email Sequence</li>
                  <li>Access to Private Community</li>
                  <li>Lifetime Updates</li>
                </ul>
              </div>

              <div className="order-column">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="order-form">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="cta-button">
                      <span className="cta-text">GET INSTANT ACCESS</span>
                      <span className="cta-arrow">→</span>
                    </button>
                  </form>
                ) : (
                  <div className="success-message">
                    Thank you! Check your email for your purchase details.
                  </div>
                )}

                <div className="secure-badge">
                  <div className="secure-icon">🔒</div>
                  <div className="secure-text">Secure Checkout - 30 Day Money Back Guarantee</div>
                </div>

                <div className="payment-methods">
                  <div className="method">Visa</div>
                  <div className="method">MC</div>
                  <div className="method">Amex</div>
                  <div className="method">PayPal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">                <h2>Do not Miss This Limited-Time Offer!</h2>
          <p>
            Get the complete Digital Entrepreneur's Blueprint package today for just $37
            and start building your profitable online business now.
          </p>

          <div className="timer-container centered">
            <div className="timer-label">OFFER EXPIRES IN:</div>
            <div className="countdown-timer">
              <div className="time-block">
                <span className="time-value">{timeLeft.days}</span>
                <span className="time-unit">Days</span>
              </div>
              <div className="time-separator">:</div>
              <div className="time-block">
                <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="time-unit">Hours</span>
              </div>
              <div className="time-separator">:</div>
              <div className="time-block">
                <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="time-unit">Mins</span>
              </div>
              <div className="time-separator">:</div>
              <div className="time-block">
                <span className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="time-unit">Secs</span>
              </div>
            </div>
          </div>

          <a href="#get-access" className="cta-button">
            <span className="cta-text">YES, I WANT ACCESS NOW</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="copyright">
              © {new Date().getFullYear()} Digital Entrepreneur's Blueprint. All Rights Reserved.
            </div>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact</a>
              <a href="#">Refund Policy</a>
            </div>
          </div>

          <div className="disclaimer">
            Results may vary. The testimonials shown are real experiences from paying users of the Digital Entrepreneur's Blueprint.
            This is not a "get rich quick scheme." Your success depends on your effort, background, and motivation.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PromoEbook;
