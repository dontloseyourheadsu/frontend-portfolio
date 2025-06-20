import React, { useState, useEffect } from 'react';
import './CountdownComingSoon.css';

const CountdownComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate - now;
      
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const button = e.target.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'SUBSCRIBED!';
    button.classList.add('success');
    
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('success');
      e.target.reset();
    }, 3000);
  };

  return (
    <div className="countdown-coming-soon">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="container">
        <div className="logo">
          <div className="logo-text">NOVA</div>
          <div className="logo-tagline">DIGITAL AGENCY</div>
        </div>
        
        <h1>We're Launching Soon</h1>
        <p className="subheading">Our new website is on its way. Get notified when we launch.</p>
        
        <div className="countdown">
          <div className="countdown-unit">
            <div className="number">{timeLeft.days}</div>
            <div className="label">Days</div>
          </div>
          <div className="countdown-unit">
            <div className="number">{timeLeft.hours}</div>
            <div className="label">Hours</div>
          </div>
          <div className="countdown-unit">
            <div className="number">{timeLeft.minutes}</div>
            <div className="label">Minutes</div>
          </div>
          <div className="countdown-unit">
            <div className="number">{timeLeft.seconds}</div>
            <div className="label">Seconds</div>
          </div>
        </div>
        
        <form className="notify-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">NOTIFY ME</button>
        </form>
        
        <div className="social-links">
          <a href="#" className="social-icon">
            <i className="icon-facebook">FB</i>
          </a>
          <a href="#" className="social-icon">
            <i className="icon-twitter">TW</i>
          </a>
          <a href="#" className="social-icon">
            <i className="icon-instagram">IG</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownComingSoon;
