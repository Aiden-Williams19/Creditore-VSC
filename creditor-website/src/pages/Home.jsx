import React from 'react';
import ServiceCard from '../components/ServiceCard';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Creditor</h1>
        <p>Your trusted partner in debt solutions</p>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <ServiceCard
            title="Debt Review"
            description="Structured solutions to manage your debt safely."
            link="/debt-review"
          />
          <ServiceCard
            title="Debt Mediation"
            description="Expert mediation between creditors and clients."
            link="/debt-mediation"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
