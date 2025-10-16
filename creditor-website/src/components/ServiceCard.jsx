import React from 'react';
import { Link } from 'react-router-dom';

// ServiceCard: small reusable card used on the Home page to highlight services.
// Props:
//  - title: string (card title)
//  - description: string (short description)
//  - link: optional path to a detailed page
function ServiceCard({ title, description, link, image }) {
  const style = image ? { backgroundImage: `url(${image})` } : undefined;

  return (
    <div className={`service-card ${image ? 'image' : ''}`} style={style}>
      {/* overlay for image cards */}
      {image && <div className="service-card__overlay" aria-hidden />}
      <div className="service-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (link.startsWith('http') ? (
          <a href={link} className="btn" target="_blank" rel="noreferrer">Learn More</a>
        ) : (
          <Link to={link} className="btn">Learn More</Link>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
