import React, { useEffect } from 'react';
import './GlitchErrorPage.css';

const GlitchErrorPage = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const glitchText = document.querySelector('.glitch-404 .glitch-text');
      if (!glitchText) return;
      
      glitchText.classList.add('active');
      setTimeout(() => {
        glitchText.classList.remove('active');
      }, 200);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="glitch-404">
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">
        <h1 className="glitch-text" data-text="Error 404">Error 404</h1>
        <p className="glitch-subtitle" data-text="Page Not Found">Page Not Found</p>
        <p className="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        
        <p className="output">Please try to <span className="command">cd /home</span></p>
        
        <div className="prompt">
          <span className="user">user@system</span>:<span className="location">~</span>$ <span className="cursor"></span>
        </div>
        
        <div className="button-container">
          <a href="#" className="btn">Return Home</a>
          <a href="#" className="btn btn-secondary">Report Issue</a>
        </div>
      </div>
    </div>
  );
};

export default GlitchErrorPage;
