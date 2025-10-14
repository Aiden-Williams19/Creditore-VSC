import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// App composition: Navbar and Footer are shared across routes. Keep routes declared here for clarity.
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import DebtReview from './pages/DebtReview';
import DebtMediation from './pages/DebtMediation';
import Contact from './pages/Contact';

function App() {
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
    </Router>
  );
}

export default App;
