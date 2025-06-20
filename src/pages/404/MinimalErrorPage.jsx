import React, { useEffect } from 'react';
import './MinimalErrorPage.css';

const MinimalErrorPage = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const eye1 = document.querySelector('.minimal-404 .eye-1');
      const eye2 = document.querySelector('.minimal-404 .eye-2');
      
      if (!eye1 || !eye2) return;
      
      const eyeRadius = 3;
      const eyeRect1 = eye1.getBoundingClientRect();
      const eyeRect2 = eye2.getBoundingClientRect();
      
      const eyeCenterX1 = eyeRect1.left + eyeRect1.width / 2;
      const eyeCenterY1 = eyeRect1.top + eyeRect1.height / 2;
      const eyeCenterX2 = eyeRect2.left + eyeRect2.width / 2;
      const eyeCenterY2 = eyeRect2.top + eyeRect2.height / 2;
      
      const angle1 = Math.atan2(e.clientY - eyeCenterY1, e.clientX - eyeCenterX1);
      const angle2 = Math.atan2(e.clientY - eyeCenterY2, e.clientX - eyeCenterX2);
      
      const x1 = Math.cos(angle1) * eyeRadius;
      const y1 = Math.sin(angle1) * eyeRadius;
      const x2 = Math.cos(angle2) * eyeRadius;
      const y2 = Math.sin(angle2) * eyeRadius;
      
      eye1.style.transform = `translate(${x1}px, ${y1}px)`;
      eye2.style.transform = `translate(${x2}px, ${y2}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="minimal-404">
      <div className="content">
        <div className="error-face">
          <div className="eye-socket">
            <div className="eye-1"></div>
          </div>
          <div className="eye-socket">
            <div className="eye-2"></div>
          </div>
          <div className="sad-mouth"></div>
        </div>
        <h1>404</h1>
        <p className="message">Page not found</p>
        <p className="detail">The page you're looking for doesn't exist or has been moved.</p>
        <a href="#" className="go-back-btn">Go back home</a>
      </div>
    </div>
  );
};

export default MinimalErrorPage;
