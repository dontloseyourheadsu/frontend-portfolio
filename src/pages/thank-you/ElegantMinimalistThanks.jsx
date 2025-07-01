import React from 'react';
import './ElegantMinimalistThanks.css';

const ElegantMinimalistThanks = () => {
  return (
    <div className="elegant-minimalist-thanks">
      <div className="elegant-minimalist-thanks__container">
        <div className="elegant-minimalist-thanks__content">
          <div className="elegant-minimalist-thanks__icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="4"/>
              <path d="M25 40L35 50L55 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h1 className="elegant-minimalist-thanks__title">
            Thank You
          </h1>
          
          <p className="elegant-minimalist-thanks__subtitle">
            Your order has been confirmed
          </p>
          
          <div className="elegant-minimalist-thanks__details">
            <div className="elegant-minimalist-thanks__detail-item">
              <span className="elegant-minimalist-thanks__detail-label">Order Number</span>
              <span className="elegant-minimalist-thanks__detail-value">#EM2024001</span>
            </div>
            
            <div className="elegant-minimalist-thanks__detail-item">
              <span className="elegant-minimalist-thanks__detail-label">Delivery</span>
              <span className="elegant-minimalist-thanks__detail-value">3-5 Business Days</span>
            </div>
            
            <div className="elegant-minimalist-thanks__detail-item">
              <span className="elegant-minimalist-thanks__detail-label">Email Confirmation</span>
              <span className="elegant-minimalist-thanks__detail-value">Sent to your inbox</span>
            </div>
          </div>
          
          <div className="elegant-minimalist-thanks__actions">
            <button className="elegant-minimalist-thanks__primary-btn">
              Track Your Order
            </button>
            
            <button className="elegant-minimalist-thanks__secondary-btn">
              Continue Shopping
            </button>
          </div>
          
          <div className="elegant-minimalist-thanks__footer">
            <p>Questions? Contact our support team</p>
            <a href="mailto:support@example.com" className="elegant-minimalist-thanks__support-link">
              support@example.com
            </a>
          </div>
        </div>
        
        <div className="elegant-minimalist-thanks__decoration">
          <div className="elegant-minimalist-thanks__decoration-line"></div>
        </div>
      </div>
    </div>
  );
};

export default ElegantMinimalistThanks;
