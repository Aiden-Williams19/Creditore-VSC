import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// App composition: Navbar and Footer are shared across routes. Keep routes declared here for clarity.
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeatureUnavailable from './components/FeatureUnavailable';

import Home from './pages/Home';
import About from './pages/About';
import DebtReview from './pages/DebtReview';
import DebtMediation from './pages/DebtMediation';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    function onDocClick(e) {
      const anchor = e.target.closest && e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      const cls = anchor.className || '';
      if (href.includes('wa.me') || cls.toString().toLowerCase().includes('whatsapp') || cls.toString().toLowerCase().includes('whats')) {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('showFeatureUnavailable', { detail: { message: 'WhatsApp contact is not available yet.' } }));
      }
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);
  return (
    <Router>
      {/* Global navigation */}
      <Navbar />
      {/* Route definitions — each page should provide its own metadata (Helmet) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/debt-review" element={<DebtReview />} />
        <Route path="/debt-mediation" element={<DebtMediation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Footer displayed on all pages */}
      <Footer />
      <FeatureUnavailable />
    </Router>
  );
}

export default App;
