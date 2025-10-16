import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        {/* Logo is imported as an asset so the build pipeline can optimize and fingerprint it */}
        <img src={logo} alt="Creditor Logo" />
      </div>

      {/* Mobile hamburger button */}
      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        aria-expanded={open}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        onClick={() => setOpen(prev => !prev)}
      >
        <span className="bar" aria-hidden></span>
        <span className="bar" aria-hidden></span>
        <span className="bar" aria-hidden></span>
      </button>

      <ul className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        {/* Use react-router <Link> for internal navigation to prevent full page reloads */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/debt-review">Debt Review</Link></li>
        <li><Link to="/debt-mediation">Debt Mediation</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* External links (tel, WhatsApp) use normal anchors */}
        <li><a href="tel:0215696571">Call Us</a></li>
        <li><a href="https://wa.me/0027681120951" target="_blank" rel="noreferrer">WhatsApp</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
