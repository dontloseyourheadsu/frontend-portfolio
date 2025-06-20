import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import portfolio examples
import GameDevPortfolio from './pages/portfolio/GameDevPortfolio';
import WebDeveloperPortfolio from './pages/portfolio/WebDeveloperPortfolio';
import UXDesignerPortfolio from './pages/portfolio/UXDesignerPortfolio';

// Import 404 page examples
import MinimalErrorPage from './pages/404/MinimalErrorPage';
import GlitchErrorPage from './pages/404/GlitchErrorPage';
import SpatialErrorPage from './pages/404/SpatialErrorPage';

// Import click-through examples
import ModernClickThrough from './pages/click-through/ModernClickThrough';
import ProductClickThrough from './pages/click-through/ProductClickThrough';
import VideoClickThrough from './pages/click-through/VideoClickThrough';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [randomExample, setRandomExample] = useState(null);

  // Available examples
  const examples = [
    { path: '/portfolio/gamedev', name: 'Game Developer Portfolio', component: <GameDevPortfolio /> },
    { path: '/portfolio/webdev', name: 'Web Developer Portfolio', component: <WebDeveloperPortfolio /> },
    { path: '/portfolio/uxdesign', name: 'UX Designer Portfolio', component: <UXDesignerPortfolio /> },
    // 404 page examples
    { path: '/404/minimal', name: 'Minimal 404 Page', component: <MinimalErrorPage /> },
    { path: '/404/glitch', name: 'Glitch 404 Page', component: <GlitchErrorPage /> },
    { path: '/404/space', name: 'Spatial 404 Page', component: <SpatialErrorPage /> },
    // Click-through examples
    { path: '/click-through/modern', name: 'Modern Click-Through Page', component: <ModernClickThrough /> },
    { path: '/click-through/product', name: 'Product Click-Through Page', component: <ProductClickThrough /> },
    { path: '/click-through/video', name: 'Video Click-Through Page', component: <VideoClickThrough /> },
    // Add more examples as they get implemented
  ];

  // Define categories
  const categories = [
    { path: '/lead-capture', name: 'Lead Capture' },
    { path: '/click-through', name: 'Click-Through' },
    { path: '/product-sales-page', name: 'Product / Sales' },
    { path: '/webinar', name: 'Webinar Registration' },
    { path: '/course', name: 'Course / Membership' },
    { path: '/splash', name: 'Splash / Coming Soon' },
    { path: '/404', name: '404 / Utility' },
    { path: '/pricing', name: 'Pricing' },
  ];

  // Select a random example on first load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * examples.length);
    setRandomExample(examples[randomIndex]);
  }, []);

  // Select random example
  const loadRandomExample = () => {
    const randomIndex = Math.floor(Math.random() * examples.length);
    setRandomExample(examples[randomIndex]);
    // Close nav after selection
    setIsNavOpen(false);
  };

  // Toggle navigation visibility
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <div className="portfolio-app">
        {/* Content area (where examples are displayed) */}
        <div className="content-area">
          <Routes>
            {/* Routes for examples */}
            {examples.map((example, index) => (
              <Route 
                key={index} 
                path={example.path} 
                element={example.component} 
              />
            ))}
            
            {/* Routes for categories */}
            <Route path="/lead-capture" element={
              <div className="placeholder-page">
                <div>
                  <h2>Lead Capture Pages</h2>
                  <p>Examples of high-converting lead capture pages coming soon!</p>
                </div>
              </div>
            } />
            <Route path="/click-through" element={
              <div className="placeholder-page">
                <div>
                  <h2>Click-Through Pages</h2>
                  <p>Check out our click-through page examples:</p>
                  <div className="example-links">
                    <Link to="/click-through/modern" className="example-link">Modern Workflow</Link>
                    <Link to="/click-through/product" className="example-link">Product Tour</Link>
                    <Link to="/click-through/video" className="example-link">Video Registration</Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/product-sales-page" element={
              <div className="placeholder-page">
                <div>
                  <h2>Product Sales Pages</h2>
                  <p>Examples of persuasive product sales pages coming soon!</p>
                </div>
              </div>
            } />
            <Route path="/webinar" element={
              <div className="placeholder-page">
                <div>
                  <h2>Webinar Registration Pages</h2>
                  <p>Examples of engaging webinar registration pages coming soon!</p>
                </div>
              </div>
            } />
            <Route path="/course" element={
              <div className="placeholder-page">
                <div>
                  <h2>Course & Membership Pages</h2>
                  <p>Examples of effective course and membership pages coming soon!</p>
                </div>
              </div>
            } />
            <Route path="/splash" element={
              <div className="placeholder-page">
                <div>
                  <h2>Splash & Coming Soon Pages</h2>
                  <p>Examples of attention-grabbing splash pages coming soon!</p>
                </div>
              </div>
            } />
            <Route path="/404" element={
              <div className="placeholder-page">
                <div>
                  <h2>404 & Utility Pages</h2>
                  <p>Check out our 404 page examples:</p>
                  <div className="example-links">
                    <Link to="/404/minimal" className="example-link">Minimal Design</Link>
                    <Link to="/404/glitch" className="example-link">Glitch Effect</Link>
                    <Link to="/404/space" className="example-link">Space Theme</Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/pricing" element={
              <div className="placeholder-page">
                <div>
                  <h2>Pricing Pages</h2>
                  <p>Examples of converting pricing pages coming soon!</p>
                </div>
              </div>
            } />
            
            {/* Home route shows the random example */}
            <Route path="/" element={randomExample?.component || 
              <div className="placeholder-page">
                <div>
                  <h2>Loading Example...</h2>
                </div>
              </div>
            } />
          </Routes>
        </div>
        
        {/* Bottom Navigation Bar */}
        <div className={`nav-bottom-bar ${isNavOpen ? 'show-nav' : ''}`}>
          <button className="nav-toggle-button" onClick={toggleNav}>
            <span className={`arrow ${isNavOpen ? 'down' : 'up'}`}></span>
          </button>
          <div className="nav-inner">
            <div className="nav-top">
              <div className="logo-container">
                <img 
                  src="/images/tiempo-de-code-logo.png" 
                  alt="X Logo" 
                  className="logo-img"
                />
              </div>
              
              <div className="nav-categories">
                <ul>
                  <li><Link to="/lead-capture" onClick={() => setIsNavOpen(false)}>Lead Capture</Link></li>
                  <li><Link to="/click-through" onClick={() => setIsNavOpen(false)}>Click-Through</Link></li>
                  <li><Link to="/product-sales-page" onClick={() => setIsNavOpen(false)}>Product / Sales</Link></li>
                  <li><Link to="/webinar" onClick={() => setIsNavOpen(false)}>Webinar Registration</Link></li>
                  <li><Link to="/course" onClick={() => setIsNavOpen(false)}>Course / Membership</Link></li>
                  <li><Link to="/splash" onClick={() => setIsNavOpen(false)}>Splash / Coming Soon</Link></li>
                  <li><Link to="/404" onClick={() => setIsNavOpen(false)}>404 / Utility</Link></li>
                  <li><Link to="/pricing" onClick={() => setIsNavOpen(false)}>Pricing</Link></li>
                </ul>
              </div>
              
              <div className="nav-random">
                <button onClick={loadRandomExample}>
                  Random
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
