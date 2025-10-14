import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Creditor Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/debt-review">Debt Review</Link></li>
        <li><Link to="/debt-mediation">Debt Mediation</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="tel:0215696571">Call Us</a></li>
        <li><a href="https://wa.me/0027681120951" target="_blank" rel="noreferrer">WhatsApp</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
