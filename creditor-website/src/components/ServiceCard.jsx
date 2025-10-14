import React from 'react';

// ServiceCard: small reusable card used on the Home page to highlight services.
// Props:
//  - title: string (card title)
//  - description: string (short description)
//  - link: optional path to a detailed page
function ServiceCard({ title, description, link }) {
  return (
    <div className="service-card">
      {/* H3 keeps semantic document outline while each page keeps a single H1 */}
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Link is optional; style the anchor with .btn for consistency */}
      {link && <a href={link} className="btn">Learn More</a>}
    </div>
  );
}

export default ServiceCard;
