import React, { useState, useEffect } from 'react';
import './EventMicrosite.css';

const EventMicrosite = () => {
  const [selectedTicket, setSelectedTicket] = useState('general');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    attendeeType: 'professional'
  });
  const [registrationStep, setRegistrationStep] = useState('tickets'); // tickets, form, confirmation

  // Event countdown
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    // Set event date to 45 days from now for demo
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 45);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const ticketTypes = {
    earlyBird: {
      name: 'Early Bird',
      price: 299,
      originalPrice: 399,
      description: 'Limited time offer - Save $100!',
      features: [
        'All conference sessions',
        'Welcome reception',
        'Lunch & refreshments',
        'Conference materials',
        'Networking opportunities'
      ],
      availability: 'Only 50 left!'
    },
    general: {
      name: 'General Admission',
      price: 399,
      description: 'Full access to the conference',
      features: [
        'All conference sessions',
        'Welcome reception',
        'Lunch & refreshments',
        'Conference materials',
        'Networking opportunities',
        'Certificate of attendance'
      ],
      availability: 'Available'
    },
    vip: {
      name: 'VIP Experience',
      price: 799,
      description: 'Premium conference experience',
      features: [
        'Everything in General Admission',
        'VIP seating',
        'Exclusive VIP lounge access',
        'Meet & greet with speakers',
        'Premium swag bag',
        'Private dinner event',
        'Priority Q&A access'
      ],
      availability: 'Limited spots'
    }
  };

  const speakers = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Chief Innovation Officer, TechForward',
      topic: 'The Future of AI in Business',
      image: '👩‍💼'
    },
    {
      name: 'Marcus Chen',
      title: 'Senior Product Designer, Google',
      topic: 'Design Systems at Scale',
      image: '👨‍💻'
    },
    {
      name: 'Elena Rodriguez',
      title: 'CEO, StartupLabs',
      topic: 'Building Sustainable Tech Companies',
      image: '👩‍💼'
    },
    {
      name: 'David Kim',
      title: 'VP Engineering, Microsoft',
      topic: 'Cloud Architecture Best Practices',
      image: '👨‍💼'
    }
  ];

  const schedule = [
    { time: '8:00 AM', activity: 'Registration & Coffee', speaker: null },
    { time: '9:00 AM', activity: 'Opening Keynote', speaker: 'Dr. Sarah Mitchell' },
    { time: '10:30 AM', activity: 'Coffee Break & Networking', speaker: null },
    { time: '11:00 AM', activity: 'Design Systems Workshop', speaker: 'Marcus Chen' },
    { time: '12:30 PM', activity: 'Lunch & Panel Discussion', speaker: null },
    { time: '2:00 PM', activity: 'Startup Success Stories', speaker: 'Elena Rodriguez' },
    { time: '3:30 PM', activity: 'Afternoon Break', speaker: null },
    { time: '4:00 PM', activity: 'Cloud Architecture Deep Dive', speaker: 'David Kim' },
    { time: '5:30 PM', activity: 'Closing & Networking Reception', speaker: null }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log('Event registration:', { ticket: selectedTicket, ...formData });
    setRegistrationStep('confirmation');
  };

  if (registrationStep === 'confirmation') {
    return (
      <div className="event-microsite">
        <div className="event-confirmation">
          <div className="event-confirmation-content">
            <div className="event-success-icon">🎉</div>
            <h1>Registration Confirmed!</h1>
            <p>Thank you for registering for TechSummit 2025</p>
            
            <div className="event-confirmation-details">
              <h3>Registration Details</h3>
              <div className="event-detail-item">
                <span>Name:</span>
                <strong>{formData.firstName} {formData.lastName}</strong>
              </div>
              <div className="event-detail-item">
                <span>Email:</span>
                <strong>{formData.email}</strong>
              </div>
              <div className="event-detail-item">
                <span>Ticket Type:</span>
                <strong>{ticketTypes[selectedTicket].name}</strong>
              </div>
              <div className="event-detail-item">
                <span>Total:</span>
                <strong>${ticketTypes[selectedTicket].price}</strong>
              </div>
            </div>
            
            <div className="event-next-steps">
              <h3>What's Next?</h3>
              <ul>
                <li>📧 Check your email for confirmation and tickets</li>
                <li>📅 Add the event to your calendar</li>
                <li>🎒 Prepare for an amazing learning experience</li>
                <li>📱 Download the event app (link in email)</li>
              </ul>
            </div>
            
            <button 
              className="event-back-button"
              onClick={() => setRegistrationStep('tickets')}
            >
              ← Back to Event Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="event-microsite">
      {/* Hero Section */}
      <section className="event-hero">
        <div className="event-hero-background"></div>
        <div className="event-hero-content">
          <div className="event-date-badge">
            March 15-16, 2025
          </div>
          <h1 className="event-title">TechSummit 2025</h1>
          <p className="event-subtitle">
            The Premier Technology Conference for Innovation Leaders
          </p>
          <div className="event-location">
            📍 San Francisco Convention Center | 🌐 Virtual Attendance Available
          </div>
          
          {/* Countdown */}
          <div className="event-countdown">
            <h3>Event Starts In:</h3>
            <div className="event-countdown-timers">
              <div className="event-timer">
                <span className="event-timer-number">{timeLeft.days || 0}</span>
                <span className="event-timer-label">Days</span>
              </div>
              <div className="event-timer">
                <span className="event-timer-number">{timeLeft.hours || 0}</span>
                <span className="event-timer-label">Hours</span>
              </div>
              <div className="event-timer">
                <span className="event-timer-number">{timeLeft.minutes || 0}</span>
                <span className="event-timer-label">Minutes</span>
              </div>
              <div className="event-timer">
                <span className="event-timer-number">{timeLeft.seconds || 0}</span>
                <span className="event-timer-label">Seconds</span>
              </div>
            </div>
          </div>
          
          <button 
            className="event-register-cta"
            onClick={() => setRegistrationStep('form')}
          >
            Register Now - Early Bird $299
          </button>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="event-highlights">
        <div className="event-container">
          <div className="event-highlight-grid">
            <div className="event-highlight-card">
              <div className="event-highlight-icon">🎤</div>
              <h3>World-Class Speakers</h3>
              <p>Learn from industry leaders and innovation pioneers</p>
            </div>
            <div className="event-highlight-card">
              <div className="event-highlight-icon">🤝</div>
              <h3>Networking Opportunities</h3>
              <p>Connect with 1000+ tech professionals and entrepreneurs</p>
            </div>
            <div className="event-highlight-card">
              <div className="event-highlight-icon">🚀</div>
              <h3>Latest Tech Trends</h3>
              <p>Discover cutting-edge technologies shaping the future</p>
            </div>
            <div className="event-highlight-card">
              <div className="event-highlight-icon">💡</div>
              <h3>Hands-on Workshops</h3>
              <p>Interactive sessions with practical takeaways</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="event-speakers">
        <div className="event-container">
          <h2 className="event-section-title">Featured Speakers</h2>
          <div className="event-speakers-grid">
            {speakers.map((speaker, index) => (
              <div key={index} className="event-speaker-card">
                <div className="event-speaker-image">{speaker.image}</div>
                <h3 className="event-speaker-name">{speaker.name}</h3>
                <p className="event-speaker-title">{speaker.title}</p>
                <p className="event-speaker-topic">"{speaker.topic}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="event-schedule">
        <div className="event-container">
          <h2 className="event-section-title">Event Schedule</h2>
          <div className="event-schedule-timeline">
            {schedule.map((item, index) => (
              <div key={index} className="event-schedule-item">
                <div className="event-schedule-time">{item.time}</div>
                <div className="event-schedule-content">
                  <h4>{item.activity}</h4>
                  {item.speaker && <p>with {item.speaker}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      {registrationStep === 'tickets' && (
        <section className="event-registration">
          <div className="event-container">
            <h2 className="event-section-title">Choose Your Experience</h2>
            <div className="event-tickets-grid">
              {Object.entries(ticketTypes).map(([key, ticket]) => (
                <div 
                  key={key}
                  className={`event-ticket-card ${key === 'earlyBird' ? 'featured' : ''} ${selectedTicket === key ? 'selected' : ''}`}
                  onClick={() => setSelectedTicket(key)}
                >
                  {key === 'earlyBird' && <div className="event-ticket-badge">Limited Time</div>}
                  <h3>{ticket.name}</h3>
                  <div className="event-ticket-price">
                    <span className="event-price-main">${ticket.price}</span>
                    {ticket.originalPrice && (
                      <span className="event-price-original">${ticket.originalPrice}</span>
                    )}
                  </div>
                  <p className="event-ticket-description">{ticket.description}</p>
                  <ul className="event-ticket-features">
                    {ticket.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="event-ticket-availability">{ticket.availability}</div>
                  <button 
                    className="event-select-ticket"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTicket(key);
                      setRegistrationStep('form');
                    }}
                  >
                    Select This Ticket
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Registration Form */}
      {registrationStep === 'form' && (
        <section className="event-registration-form">
          <div className="event-container">
            <div className="event-form-container">
              <h2>Complete Your Registration</h2>
              <div className="event-selected-ticket-info">
                <h3>Selected: {ticketTypes[selectedTicket].name}</h3>
                <p className="event-selected-price">${ticketTypes[selectedTicket].price}</p>
              </div>
              
              <form onSubmit={handleRegistration} className="event-form">
                <div className="event-form-row">
                  <div className="event-form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="event-form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="event-form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="event-form-group">
                  <label htmlFor="company">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="event-form-group">
                  <label htmlFor="attendeeType">Attendee Type *</label>
                  <select
                    id="attendeeType"
                    name="attendeeType"
                    value={formData.attendeeType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="professional">Working Professional</option>
                    <option value="student">Student</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="event-form-buttons">
                  <button 
                    type="button"
                    className="event-back-button"
                    onClick={() => setRegistrationStep('tickets')}
                  >
                    ← Back to Tickets
                  </button>
                  <button type="submit" className="event-submit-button">
                    Complete Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="event-footer">
        <div className="event-container">
          <div className="event-footer-content">
            <div className="event-footer-section">
              <h4>Contact</h4>
              <p>📧 info@techsummit2025.com</p>
              <p>📞 (555) 123-4567</p>
            </div>
            <div className="event-footer-section">
              <h4>Venue</h4>
              <p>San Francisco Convention Center</p>
              <p>747 Howard St, San Francisco, CA</p>
            </div>
            <div className="event-footer-section">
              <h4>Follow Us</h4>
              <p>🐦 @TechSummit2025</p>
              <p>📘 /TechSummitConference</p>
            </div>
          </div>
          <div className="event-footer-bottom">
            <p>&copy; 2025 TechSummit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventMicrosite;
