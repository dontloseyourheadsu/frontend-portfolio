import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import portfolio examples
import GameDevPortfolio from './pages/portfolio/GameDevPortfolio';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [randomExample, setRandomExample] = useState(null);

  // Available examples
  const examples = [
    { path: '/portfolio/gamedev', name: 'Game Developer Portfolio', component: <GameDevPortfolio /> },
    // Add more examples as they get implemented
    // { path: '/lead-capture', name: 'Lead Capture Page', component: <LeadCapturePage /> },
    // { path: '/click-through', name: 'Click-Through Page', component: <ClickThroughPage /> },
    // ...
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
                  <p>Examples of effective click-through pages coming soon!</p>
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
                  <p>Examples of effective utility pages coming soon!</p>
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
        
        {/* Hover area at bottom of page */}
        <div className="bottom-hover-area"></div>
        
        {/* Bottom Navigation Bar */}
        <div className={`nav-bottom-bar ${isNavOpen ? 'show-nav' : ''}`}>
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
