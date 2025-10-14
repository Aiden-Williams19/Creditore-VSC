import React from 'react';
import ServiceCard from '../components/ServiceCard';

// Top-level Home page component. Contains hero, services, who, steps, team and regulatory sections.
// Keep this component simple and semantic for accessibility and SEO.
function Home() {
  return (
    <div className="home">
      {/* HERO: Main page introduction and primary CTAs. Keep text concise for SEO and screen readers. */}
      <header className="hero">
        <h1>Restore Your Credit</h1>
        <p className="hero-sub">Professional, reliable and tailor-made debt restructuring solutions that help you restore your credit and your life.</p>
        <div className="hero-ctas">
          {/* Phone link uses tel: so mobile devices can dial directly. WhatsApp opens in a new tab. */}
          <a className="btn primary" href="tel:0215696571">Call Us: 021 569 6571</a>
          <a className="btn" href="https://wa.me/0027681120951" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="btn" href="/contact">Contact Form</a>
        </div>
      </header>

      <section className="services">
        {/* SERVICES: Brief intro and list of service cards. Keep descriptions short and linkable for internal navigation. */}
        <h2>Our Services</h2>
        <p>Professional, reliable and tailor made debt restructuring solutions that help you restore your credit.</p>
        <div className="service-list">
          <ServiceCard
            title="Debt Review"
            description="We are regulated and mandated by the NCR. We assist consumers by reducing their monthly debt commitments."
            link="/debt-review"
          />
          <ServiceCard
            title="Debt Mediation"
            description="We assist by approaching creditors and arranging affordable monthly payments."
            link="/debt-mediation"
          />
        </div>
      </section>

      {/* WHO: Company overview and services list. This section should be clear and easy to read on mobile. */}
      <section className="who">
        <h2>Who We Are</h2>
        <p>
          CREDITORE (Credit – Restore) is a Cape Town-based consultancy that specialises in debt restructuring products aimed at consumers who are over-indebted and struggling to meet their monthly debt commitments.
        </p>
        <p>We help with:</p>
        <ul className="loan-types">
          <li>Home loan</li>
          <li>Vehicle finance</li>
          <li>Credit cards</li>
          <li>Micro loans</li>
          <li>Personal loans</li>
        </ul>
        {/* Image should be stored locally in src/assets for reliability; see /scripts/fetch-images.js */}
        <img src="/src/assets/creditore6.jpg" alt="Creditore" style={{maxWidth: '100%', height: 'auto'}} />
      </section>

      {/* STEPS: Explain the process in short, scannable steps for users and search engines. */}
      <section className="steps">
        <h2>How it works</h2>
        <div className="steps-grid">
          <div className="step"><h3>Step 1</h3><p>Gather information — getting to know our clients to ensure the best service.</p></div>
          <div className="step"><h3>Step 2</h3><p>Put together a proposal based on your information provided.</p></div>
          <div className="step"><h3>Step 3</h3><p>Provide you with a solution.</p></div>
          <div className="step"><h3>Step 4</h3><p>Implement solutions.</p></div>
          <div className="step"><h3>Step 5</h3><p>Review your solutions to make sure the best options were put in place for your personal needs.</p></div>
        </div>
      </section>

      {/* TEAM: short CTA and contact info. Keep contact info up-to-date in one place (e.g., constants or environment) */}
      <section className="team">
        <h2>Our Team</h2>
        <p>Our team of accredited professionals are standing by to usher you into a brighter financial future.</p>
        <p className="team-cta">Are you looking for professional financial advice that works for you?</p>
        <a className="btn primary" href="/contact">CONTACT US</a>
        <p className="call-us">CALL US: <strong>021 569 6571</strong></p>
      </section>

      {/* REGULATORY: Compliance and social links. Keep regulatory text concise. */}
      <section className="regulatory">
        <p>We are regulated by the NCR.</p>
        <p className="social">
          <a href="https://wa.me/0027681120951" target="_blank" rel="noreferrer">WhatsApp</a> ·
          <a href="https://www.facebook.com/creditoredebt" target="_blank" rel="noreferrer">Facebook</a>
        </p>
      </section>
    </div>
  );
}

export default Home;
