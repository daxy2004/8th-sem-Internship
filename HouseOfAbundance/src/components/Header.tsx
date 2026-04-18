import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="The House of Abundance Foundation" className="logo-image" />
        </Link>
        <Link to="/" className="logo-text-link">
          <div className="logo-text">
            <span className="logo-title">The House of Abundance</span>
            <div className="logo-subtitle-container">
              <span className="logo-subtitle">Foundation</span>
            </div>
          </div>
        </Link>
      </div>

      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/who-we-are" onClick={closeMenu}>Who We Are</NavLink>
        <NavLink to="/our-programmes" onClick={closeMenu}>Our Programmes</NavLink>
        <NavLink to="/work-with-us" onClick={closeMenu}>Work With Us</NavLink>
        <NavLink to="/contact-us" onClick={closeMenu}>Contact Us</NavLink>
        <NavLink to="/donate" className={({ isActive }) => `highlighted-nav${isActive ? ' highlighted-nav-active' : ''}`} onClick={closeMenu}>Donate</NavLink>
      </nav>
    </header>
  );
};

export default Header;