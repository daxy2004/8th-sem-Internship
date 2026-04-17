import { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Home.tsx';
import About from './About.tsx';
import Gallery from './Gallery.tsx';
import Contact from './Contact.tsx';
import Services from './Services.tsx';
import ServiceImmersion from './ServiceImmersion.tsx';
import ServiceAlliances from './ServiceAlliances.tsx';
import ServiceCareer from './ServiceCareer.tsx';
import ServiceLanguage from './ServiceLanguage.tsx';
import ServicePlacement from './ServicePlacement.tsx';
import ServiceAI from './ServiceAI.tsx';
import ServiceStudyAbroad from './ServiceStudyAbroad.tsx';
import UaeCohort from './UaeCohort.tsx';
import SingaporeCohort from './SingaporeCohort.tsx';
import TaiwanCohort from './TaiwanCohort.tsx';
import EnglandCohort from './EnglandCohort.tsx';
import ScotlandCohort from './ScotlandCohort.tsx';
import JapanCohort from './JapanCohort.tsx';
import AustraliaCohort from './AustraliaCohort.tsx';
import VietnamCohort from './VietnamCohort.tsx';
import MalaysiaCohort from './MalaysiaCohort.tsx';
import IndonesiaCohort from './IndonesiaCohort.tsx';
import SouthKoreaCohort from './SouthKoreaCohort.tsx';
import USACohort from './USACohort.tsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
              <img src="/logo1.png" alt="GlobalXcelerate" className="logo-img" />
              <div className="logo-text">
                <div className="logo">Global<span style={{ color: 'red' }}>X</span>celerate</div>
                <div className="logo-subtitle">UAE | Singapore | India</div>
              </div>
            </Link>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className={`ham-btn${menuOpen ? ' ham-btn--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

          <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Our Services</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact" className="btn-primary">Let's Connect</NavLink>
          </nav>
        </div>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/immersion" element={<ServiceImmersion />} />
        <Route path="/services/alliances" element={<ServiceAlliances />} />
        <Route path="/services/career" element={<ServiceCareer />} />
        <Route path="/services/language" element={<ServiceLanguage />} />
        <Route path="/services/placement" element={<ServicePlacement />} />
        <Route path="/services/ai" element={<ServiceAI />} />
        <Route path="/services/study-abroad" element={<ServiceStudyAbroad />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uae-cohort" element={<UaeCohort />} />
        <Route path="/singapore-cohort" element={<SingaporeCohort />} />
        <Route path="/taiwan-cohort" element={<TaiwanCohort />} />
        <Route path="/england-cohort" element={<EnglandCohort />} />
        <Route path="/scotland-cohort" element={<ScotlandCohort />} />
        <Route path="/japan-cohort" element={<JapanCohort />} />
        <Route path="/australia-cohort" element={<AustraliaCohort />} />
        <Route path="/vietnam-cohort" element={<VietnamCohort />} />
        <Route path="/malaysia-cohort" element={<MalaysiaCohort />} />
        <Route path="/indonesia-cohort" element={<IndonesiaCohort />} />
        <Route path="/south-korea-cohort" element={<SouthKoreaCohort />} />
        <Route path="/usa-cohort" element={<USACohort />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-left">
              <img src="/logo1.png" alt="GlobalXcelerate" className="footer-logo" />
              <div className="logo-text">
                <div className="logo">Global<span style={{ color: 'red' }}>X</span>celerate</div>
                <div className="logo-subtitle">UAE | Singapore | India</div>
              </div>
            </div>

            <div className="footer-center">
              <div className="footer-locations">
                <div className="location-block">
                  <h4 className="location-title">Dubai</h4>
                  <p className="location-address">Meydan Grandstand, 6th Floor,<br />Meydan Road, Nad Al Sheba,<br />Dubai, U.A.E.</p>
                  <p className="contact-info">Email: info@globalXcelerate.ae</p>
                </div>
                <div className="location-block">
                  <h4 className="location-title">India</h4>
                  <p className="location-address">Wework Galaxy43, Residency Rd,<br />Shanthala Nagar, Ashok Nagar,<br />Bengaluru, Karnataka 560025</p>
                  <p className="contact-info">Phone: +91 8660939587</p>
                  <p className="contact-info">Email: info@globalXcelerate.ae</p>
                </div>
              </div>
            </div>

            <div className="footer-right">
              <div className="social-links">
                <a href="https://www.linkedin.com/company/globalxcelerate" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/global_xcelerate/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 GlobalXcelerate. All Rights Reserved.</p>
          </div>
        </div>
      </footer >
    </div >
  );
}

export default App;
