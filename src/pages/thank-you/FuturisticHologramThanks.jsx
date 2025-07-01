import React, { useState, useEffect } from 'react';
import './FuturisticHologramThanks.css';

const FuturisticHologramThanks = () => {
  const [glitchText, setGlitchText] = useState('THANK YOU');
  const [scanlinePosition, setScanlinePosition] = useState(0);

  useEffect(() => {
    // Glitch effect for title
    const glitchInterval = setInterval(() => {
      const glitchChars = ['THANK YOU', 'TH4NK Y0U', 'THA|\|K YOU', 'THANK YOU'];
      const randomIndex = Math.floor(Math.random() * glitchChars.length);
      setGlitchText(glitchChars[randomIndex]);
      
      setTimeout(() => {
        setGlitchText('THANK YOU');
      }, 150);
    }, 3000);

    // Scanline animation
    const scanlineInterval = setInterval(() => {
      setScanlinePosition(prev => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(scanlineInterval);
    };
  }, []);

  return (
    <div className="futuristic-hologram-thanks">
      <div className="futuristic-hologram-thanks__scanlines">
        <div 
          className="futuristic-hologram-thanks__scanline"
          style={{ top: `${scanlinePosition}%` }}
        ></div>
      </div>
      
      <div className="futuristic-hologram-thanks__grid">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="futuristic-hologram-thanks__grid-dot"></div>
        ))}
      </div>
      
      <div className="futuristic-hologram-thanks__container">
        <div className="futuristic-hologram-thanks__hologram">
          <div className="futuristic-hologram-thanks__header">
            <div className="futuristic-hologram-thanks__status">
              <div className="futuristic-hologram-thanks__status-indicator"></div>
              <span>TRANSMISSION COMPLETE</span>
            </div>
            
            <div className="futuristic-hologram-thanks__timestamp">
              {new Date().toISOString().split('T')[0]} | {new Date().toLocaleTimeString()}
            </div>
          </div>
          
          <div className="futuristic-hologram-thanks__main">
            <h1 className="futuristic-hologram-thanks__title">
              {glitchText}
            </h1>
            
            <div className="futuristic-hologram-thanks__subtitle">
              ORDER SUCCESSFULLY PROCESSED
            </div>
            
            <div className="futuristic-hologram-thanks__data-panel">
              <div className="futuristic-hologram-thanks__data-row">
                <span className="futuristic-hologram-thanks__data-label">ORDER_ID:</span>
                <span className="futuristic-hologram-thanks__data-value">FH-2024-7A8B9C</span>
              </div>
              
              <div className="futuristic-hologram-thanks__data-row">
                <span className="futuristic-hologram-thanks__data-label">STATUS:</span>
                <span className="futuristic-hologram-thanks__data-value futuristic-hologram-thanks__status-active">CONFIRMED</span>
              </div>
              
              <div className="futuristic-hologram-thanks__data-row">
                <span className="futuristic-hologram-thanks__data-label">ETA:</span>
                <span className="futuristic-hologram-thanks__data-value">72:00:00</span>
              </div>
              
              <div className="futuristic-hologram-thanks__data-row">
                <span className="futuristic-hologram-thanks__data-label">SECURE_HASH:</span>
                <span className="futuristic-hologram-thanks__data-value">0x4A7F...8E2C</span>
              </div>
            </div>
            
            <div className="futuristic-hologram-thanks__progress">
              <div className="futuristic-hologram-thanks__progress-label">PROCESSING</div>
              <div className="futuristic-hologram-thanks__progress-bar">
                <div className="futuristic-hologram-thanks__progress-fill"></div>
              </div>
              <div className="futuristic-hologram-thanks__progress-percent">100%</div>
            </div>
            
            <div className="futuristic-hologram-thanks__actions">
              <button className="futuristic-hologram-thanks__btn futuristic-hologram-thanks__btn--primary">
                <span>TRACK ORDER</span>
                <div className="futuristic-hologram-thanks__btn-glow"></div>
              </button>
              
              <button className="futuristic-hologram-thanks__btn futuristic-hologram-thanks__btn--secondary">
                <span>CONTINUE</span>
                <div className="futuristic-hologram-thanks__btn-glow"></div>
              </button>
            </div>
          </div>
          
          <div className="futuristic-hologram-thanks__footer">
            <div className="futuristic-hologram-thanks__footer-text">
              NEURAL LINK ESTABLISHED | QUANTUM ENCRYPTED
            </div>
          </div>
        </div>
        
        <div className="futuristic-hologram-thanks__particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="futuristic-hologram-thanks__particle"
              style={{ 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FuturisticHologramThanks;
