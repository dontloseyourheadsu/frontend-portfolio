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

// Import coming soon examples
import CountdownComingSoon from './pages/coming-soon/CountdownComingSoon';
import AnimatedComingSoon from './pages/coming-soon/AnimatedComingSoon';
import MinimalComingSoon from './pages/coming-soon/MinimalComingSoon';

// Import course examples
import OnlineCourse from './pages/course/OnlineCourse';
import MembershipSite from './pages/course/MembershipSite';
import CodeBootcamp from './pages/course/CodeBootcamp';

// Import e-book examples
import ModernEbook from './pages/e-book/ModernEbook';
import MinimalEbook from './pages/e-book/MinimalEbook';
import PromoEbook from './pages/e-book/PromoEbook';

// Import event registration examples
import CorporateEventRegistration from './pages/event-registration/CorporateEventRegistration';
import ConferenceRegistration from './pages/event-registration/ConferenceRegistration';
import WebinarRegistration from './pages/event-registration/WebinarRegistration';

// Import get started examples
import SaaSOnboarding from './pages/get-started/SaaSOnboarding';
import AppOnboarding from './pages/get-started/AppOnboarding';
import ServiceSetup from './pages/get-started/ServiceSetup';

// Import lead capture examples
import NewsletterSignup from './pages/lead-capture/NewsletterSignup';
import FreeGuideCapture from './pages/lead-capture/FreeGuideCapture';
import ConsultationBooking from './pages/lead-capture/ConsultationBooking';

// Import membership examples
import PremiumMembership from './pages/membership/PremiumMembership';
import CommunityMembership from './pages/membership/CommunityMembership';
import ExclusiveMembership from './pages/membership/ExclusiveMembership';

// Import microsite examples
import ProductLaunchMicrosite from './pages/microsite/ProductLaunchMicrosite';
import EventMicrosite from './pages/microsite/EventMicrosite';
import CampaignMicrosite from './pages/microsite/CampaignMicrosite';

// Import advertisement
import Advertisement from './pages/Advertisement';

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
    // Coming soon examples
    { path: '/coming-soon/countdown', name: 'Countdown Coming Soon Page', component: <CountdownComingSoon /> },
    { path: '/coming-soon/animated', name: 'Animated Coming Soon Page', component: <AnimatedComingSoon /> },
    { path: '/coming-soon/minimal', name: 'Minimal Coming Soon Page', component: <MinimalComingSoon /> },
    // Course examples
    { path: '/course/online', name: 'Online Course Landing Page', component: <OnlineCourse /> },
    { path: '/course/membership', name: 'Membership Site', component: <MembershipSite /> },
    { path: '/course/bootcamp', name: 'Code Bootcamp', component: <CodeBootcamp /> },
    // E-book examples
    { path: '/e-book/modern', name: 'Modern Ebook Landing Page', component: <ModernEbook /> },
    { path: '/e-book/minimal', name: 'Minimal Ebook Landing Page', component: <MinimalEbook /> },
    { path: '/e-book/promo', name: 'Promotional Ebook Landing Page', component: <PromoEbook /> },
    // Event registration examples
    { path: '/event-registration/corporate', name: 'Corporate Event Registration', component: <CorporateEventRegistration /> },
    { path: '/event-registration/conference', name: 'Conference Registration', component: <ConferenceRegistration /> },
    { path: '/event-registration/webinar', name: 'Webinar Registration', component: <WebinarRegistration /> },
    // Get started examples
    { path: '/get-started/saas', name: 'SaaS Onboarding', component: <SaaSOnboarding /> },
    { path: '/get-started/app', name: 'App Onboarding', component: <AppOnboarding /> },
    { path: '/get-started/service', name: 'Service Setup', component: <ServiceSetup /> },
    // Lead capture examples
    { path: '/lead-capture/newsletter', name: 'Newsletter Signup', component: <NewsletterSignup /> },
    { path: '/lead-capture/free-guide', name: 'Free Guide Capture', component: <FreeGuideCapture /> },
    { path: '/lead-capture/consultation', name: 'Consultation Booking', component: <ConsultationBooking /> },
    // Membership examples
    { path: '/membership/premium', name: 'Premium Membership', component: <PremiumMembership /> },
    { path: '/membership/community', name: 'Community Membership', component: <CommunityMembership /> },
    { path: '/membership/exclusive', name: 'Exclusive Membership', component: <ExclusiveMembership /> },
    // Microsite examples
    { path: '/microsite/product-launch', name: 'Product Launch Microsite', component: <ProductLaunchMicrosite /> },
    { path: '/microsite/event', name: 'Event Microsite', component: <EventMicrosite /> },
    { path: '/microsite/campaign', name: 'Campaign Microsite', component: <CampaignMicrosite /> },
    // Advertisement
    { path: '/advertisement', name: 'Fiverr Service Advertisement', component: <Advertisement /> },
    // Add more examples as they get implemented
  ];

  // Define categories
  const categories = [
    { path: '/lead-capture', name: 'Lead Capture' },
    { path: '/click-through', name: 'Click-Through' },
    { path: '/product-sales-page', name: 'Product / Sales' },
    { path: '/e-book', name: 'E-Book' },
    { path: '/webinar', name: 'Webinar Registration' },
    { path: '/event-registration', name: 'Event Registration' },
    { path: '/get-started', name: 'Get Started / Onboarding' },
    { path: '/course', name: 'Course / Membership' },
    { path: '/membership', name: 'Membership' },
    { path: '/microsite', name: 'Microsite' },
    { path: '/splash', name: 'Splash / Coming Soon' },
    { path: '/404', name: '404 / Utility' },
    { path: '/pricing', name: 'Pricing' },
    { path: '/advertisement', name: 'Advertisement' },
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
                  <p>Check out our lead capture page examples:</p>
                  <div className="example-links">
                    <Link to="/lead-capture/newsletter" className="example-link">Newsletter Signup</Link>
                    <Link to="/lead-capture/free-guide" className="example-link">Free Guide Capture</Link>
                    <Link to="/lead-capture/consultation" className="example-link">Consultation Booking</Link>
                  </div>
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
            <Route path="/e-book" element={
              <div className="placeholder-page">
                <div>
                  <h2>E-Book Landing Pages</h2>
                  <p>Check out our e-book landing page examples:</p>
                  <div className="example-links">
                    <Link to="/e-book/modern" className="example-link">Modern Design</Link>
                    <Link to="/e-book/minimal" className="example-link">Minimal Design</Link>
                    <Link to="/e-book/promo" className="example-link">Promotional Design</Link>
                  </div>
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
            <Route path="/event-registration" element={
              <div className="placeholder-page">
                <div>
                  <h2>Event Registration Pages</h2>
                  <p>Check out our event registration page examples:</p>
                  <div className="example-links">
                    <Link to="/event-registration/corporate" className="example-link">Corporate Event</Link>
                    <Link to="/event-registration/conference" className="example-link">Conference</Link>
                    <Link to="/event-registration/webinar" className="example-link">Webinar</Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/get-started" element={
              <div className="placeholder-page">
                <div>
                  <h2>Get Started & Onboarding Pages</h2>
                  <p>Check out our onboarding and get started page examples:</p>
                  <div className="example-links">
                    <Link to="/get-started/saas" className="example-link">SaaS Onboarding</Link>
                    <Link to="/get-started/app" className="example-link">App Onboarding</Link>
                    <Link to="/get-started/service" className="example-link">Service Setup</Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/course" element={
              <div className="placeholder-page">
                <div>
                  <h2>Course & Membership Pages</h2>
                  <p>Check out our course and membership page examples:</p>
                  <div className="example-links">
                    <Link to="/course/online" className="example-link">Online Course</Link>
                    <Link to="/course/membership" className="example-link">Membership Site</Link>
                    <Link to="/course/bootcamp" className="example-link">Code Bootcamp</Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/membership" element={
              <div className="placeholder-page">
                <div>
                  <h2>Membership Pages</h2>
                  <p>Check out our membership page examples:</p>
                  <div className="example-links">
                    <Link to="/membership/premium" className="example-link">Premium Membership</Link>
                    <Link to="/membership/community" className="example-link">Community Membership</Link>
                    <Link to="/membership/exclusive" className="example-link">Exclusive Membership</Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/microsite" element={
              <div className="placeholder-page">
                <div>
                  <h2>Microsite Examples</h2>
                  <p>Check out our microsite examples:</p>
                  <div className="example-links">
                    <Link to="/microsite/product-launch" className="example-link">Product Launch</Link>
                    <Link to="/microsite/event" className="example-link">Event Microsite</Link>
                    <Link to="/microsite/campaign" className="example-link">Campaign Microsite</Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/splash" element={
              <div className="placeholder-page">
                <div>
                  <h2>Splash & Coming Soon Pages</h2>
                  <p>Check out our coming soon page examples:</p>
                  <div className="example-links">
                    <Link to="/coming-soon/countdown" className="example-link">Countdown Timer</Link>
                    <Link to="/coming-soon/animated" className="example-link">Animated Background</Link>
                    <Link to="/coming-soon/minimal" className="example-link">Minimal Design</Link>
                  </div>
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
            <Route path="/advertisement" element={
              <div className="placeholder-page">
                <div>
                  <h2>Service Advertisement</h2>
                  <p>Check out this promotional page for web design services:</p>
                  <div className="example-links">
                    <Link to="/advertisement" className="example-link">Landing Page Service</Link>
                  </div>
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
                  <li><Link to="/e-book" onClick={() => setIsNavOpen(false)}>E-Book</Link></li>
                  <li><Link to="/webinar" onClick={() => setIsNavOpen(false)}>Webinar Registration</Link></li>
                  <li><Link to="/event-registration" onClick={() => setIsNavOpen(false)}>Event Registration</Link></li>
                  <li><Link to="/get-started" onClick={() => setIsNavOpen(false)}>Get Started / Onboarding</Link></li>
                  <li><Link to="/course" onClick={() => setIsNavOpen(false)}>Course / Membership</Link></li>
                  <li><Link to="/membership" onClick={() => setIsNavOpen(false)}>Membership</Link></li>
                  <li><Link to="/microsite" onClick={() => setIsNavOpen(false)}>Microsite</Link></li>
                  <li><Link to="/splash" onClick={() => setIsNavOpen(false)}>Splash / Coming Soon</Link></li>
                  <li><Link to="/404" onClick={() => setIsNavOpen(false)}>404 / Utility</Link></li>
                  <li><Link to="/pricing" onClick={() => setIsNavOpen(false)}>Pricing</Link></li>
                  <li><Link to="/advertisement" onClick={() => setIsNavOpen(false)}>Advertisement</Link></li>
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
