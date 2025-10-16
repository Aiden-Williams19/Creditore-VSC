import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

function Navbar() {
  const [open, setOpen] = useState(false);

  const servicesRef = useRef(null);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close services dropdown on outside click
  useEffect(() => {
    function onDoc(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
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

      <ul className={`nav-links ${open ? 'open' : ''}`} onClick={(e) => {
        // only close mobile nav when an actual link was clicked
        const anchor = e.target.closest && e.target.closest('a');
        if (anchor) setOpen(false);
      }}>
        <li><Link to="/">Home</Link></li>
        <li>
          <div className="dropdown" ref={servicesRef}>
            <button
              className="dropdown-toggle"
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              onClick={(e) => { e.stopPropagation(); setServicesOpen(s => !s); }}
            >Services</button>
            <ul className={`dropdown-menu ${servicesOpen ? 'open' : ''}`} role="menu">
              <li role="none"><Link role="menuitem" to="/debt-review">Debt Review</Link></li>
              <li role="none"><Link role="menuitem" to="/debt-mediation">Debt Mediation</Link></li>
            </ul>
          </div>
        </li>
        <li><Link to="/about">About</Link></li>
        <li className="nav-cta"><Link to="/contact" className="btn primary">Contact</Link></li>
        <li className="nav-icons">
          <a href="tel:0215696571" aria-label="Call"><FaPhoneAlt color="#fff" /></a>
          <a href="https://wa.me/0027681120951" aria-label="WhatsApp" target="_blank" rel="noreferrer"><FaWhatsapp color="#fff" /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
