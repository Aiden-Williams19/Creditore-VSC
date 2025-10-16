import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        {/* Consider making this logo a local asset similar to Navbar for reliability */}
        <img src="https://www.creditore.co.za/images/CreditoreLogo4-MadewithPosterMyWall2.png" alt="Creditore logo" style={{height: 48}} />
        <div className="footer-contact">
          <p>© 2025 Creditore. All Rights Reserved.</p>
          <p>Call: 021 569 6571 | WhatsApp: 068 112 0951</p>
          <p>Email: info@creditore.co.za</p>
          <p>We are regulated by the NCR.</p>
        </div>
        {/* services links removed per request */}
      </div>
    </footer>
  );
}

export default Footer;
