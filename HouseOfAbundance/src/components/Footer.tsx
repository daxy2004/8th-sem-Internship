import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="The House of Abundance Foundation" className="footer-logo-image" />
          <div className="footer-logo-text">
            <span className="footer-logo-title">The House of Abundance</span>
            <div className="footer-logo-subtitle-container">
              <span className="footer-logo-subtitle">Foundation</span>
            </div>
          </div>
        </div>
        <div className="footer-info-nav">
          <div className="footer-info">
            <p>WeWork, 43, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025</p>
            <p>Phone Number: +91 – 8660939587</p>
            <p>Email: info@thehouseofabundance.org</p>
          </div>
          <div className="footer-right">
            <Link to="/who-we-are" onClick={scrollToTop}>About Us</Link>
            <Link to="/contact-us" onClick={scrollToTop}>Contact Us</Link>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/the-house-of-abundance" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/the_houseofabundance/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCuSVclqbvOHV9VY4qijmygw" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 The House of Abundance Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;