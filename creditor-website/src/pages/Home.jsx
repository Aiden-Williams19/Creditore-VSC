import React from 'react';
import ServiceCard from '../components/ServiceCard';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Restore Your Credit</h1>
        <p>Professional, reliable and tailor made debt restructuring solutions that help you restore your credit and your life.</p>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <ServiceCard
            title="Debt Review"
            description="We are regulated and mandated by the NCR. We assist consumers by reducing their monthly debt commitments."
            link="/debt-review"
          />
          <ServiceCard
            title="Debt Mediation"
            description="We approach creditors and negotiate affordable monthly repayments on your behalf."
            link="/debt-mediation"
          />
        </div>
      </section>

      <section className="who">
        <h2>Who We Are</h2>
        <p>
          CREDITORE (Credit – Restore) is a Cape Town-based consultancy that specializes in debt restructuring products aimed at consumers who are over-indebted and struggling to meet their monthly commitments.
        </p>
        <img src="https://www.creditore.co.za/images/creditore6.jpg" alt="Creditore" style={{maxWidth: '100%', height: 'auto'}} />
      </section>

      <section className="steps">
        <h2>How it works</h2>
        <ol>
          <li>Gather information — getting to know our clients to ensure the best service.</li>
          <li>Put together a proposal based on your information provided.</li>
          <li>Provide you with a solution.</li>
          <li>Implement solutions.</li>
          <li>Review your solutions to make sure the best options are in place for your needs.</li>
        </ol>
      </section>
    </div>
  );
}

export default Home;
