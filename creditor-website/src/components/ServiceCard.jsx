import React from 'react';

function ServiceCard({ title, description, link }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} className="btn">Learn More</a>}
    </div>
  );
}

export default ServiceCard;
