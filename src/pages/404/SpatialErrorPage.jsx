import React, { useEffect, useRef } from 'react';
import './SpatialErrorPage.css';

const SpatialErrorPage = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 1000;
        this.size = 1;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
      }
      
      move() {
        this.z -= 5;
        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }
      }
      
      draw() {
        const scale = 1000 / this.z;
        const x = (this.x - width / 2) * scale + width / 2;
        const y = (this.y - height / 2) * scale + height / 2;
        const s = Math.max(0.1, this.size * scale);
        
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(x, y, s, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
    
    // Create particles
    let particles = [];
    for (let i = 0; i < 200; i++) {
      particles.push(new Particle());
    }
    
    // Handle window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(8, 8, 34, 0.2)';
      ctx.fillRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.move();
        p.draw();
      });
      
      requestAnimationFrame(animate);
    };
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="spatial-404">
      <canvas ref={canvasRef} className="starfield"></canvas>
      <div className="content">
        <h1>
          <span className="four">4</span>
          <div className="planet"></div>
          <span className="four">4</span>
        </h1>
        <p className="subtitle">Lost in Space</p>
        <p className="message">The page you're looking for is floating somewhere in the universe.</p>
        <div className="button-container">
          <a href="#" className="btn">Return to Earth</a>
          <a href="#" className="btn outline">Explore Space</a>
        </div>
      </div>
    </div>
  );
};

export default SpatialErrorPage;
