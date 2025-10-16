import React from 'react';

// About page: static information about the company. Keep copy short and scannable.
function About() {
  return (
    <main className="about container">
      <header className="about-hero">
        <h1>About Creditore</h1>
        <p className="tagline">Restoring Financial Dignity, One Account at a Time</p>
      </header>

      <section aria-labelledby="who-we-are">
        <h2 id="who-we-are">Who We Are</h2>
        <p>
          Creditore (Credit – Restore) is a Cape Town–based consultancy dedicated to helping individuals overwhelmed by debt regain control, stability, and peace of mind. With a focus on integrity, transparency, and personal attention, we partner with clients to navigate the maze of credit obligations and find sustainable solutions.
        </p>
      </section>

      <section aria-labelledby="mission">
        <h2 id="mission">Our Mission</h2>
        <p>
          To empower South Africans struggling with debt to reclaim their financial footing. We believe that every person deserves fair treatment, breathing room, and a path toward financial wellness—not endless stress and uncertainty.
        </p>
      </section>

      <section aria-labelledby="what-we-do">
        <h2 id="what-we-do">What We Do</h2>
        <p>
          We offer holistic debt restructuring and counselling services to those burdened by multiple debt commitments. Our specialty is negotiating favourable terms with creditors, consolidating liabilities, and building repayment strategies that work for your budget.
        </p>
        <p>We assist clients with debts arising from:</p>
        <ul>
          <li>Home loans</li>
          <li>Vehicle finance</li>
          <li>Credit cards</li>
          <li>Microloans</li>
          <li>Personal loans</li>
        </ul>
      </section>

      <section aria-labelledby="how-we-work">
        <h2 id="how-we-work">How We Work</h2>
        <ol>
          <li><strong>Initial Consultation</strong> – We assess your complete debt profile and listen to your challenges.</li>
          <li><strong>Financial Analysis</strong> – We map out income, expenses, liabilities, and determine your realistic capacity.</li>
          <li><strong>Negotiation</strong> – We approach credit providers, seeking lower interest, extended terms, or restructuring.</li>
          <li><strong>Implementation</strong> – We help set up revised repayment schedules, consolidate where possible, and ensure compliance.</li>
          <li><strong>Monitoring & Support</strong> – We stay involved, offering guidance and making adjustments as life circumstances change.</li>
        </ol>
      </section>

      <section aria-labelledby="why-choose">
        <h2 id="why-choose">Why Choose Creditore</h2>
        <ul>
          <li><strong>Expertise & Experience:</strong> We specialise exclusively in debt restructuring.</li>
          <li><strong>Personalised Solutions:</strong> Each plan is tailored to your unique financial, personal, and lifestyle factors.</li>
          <li><strong>Transparent Fees:</strong> No hidden costs or surprise charges—everything is up front.</li>
          <li><strong>Client First:</strong> We act with empathy, confidentiality, and integrity.</li>
          <li><strong>Real Results:</strong> We measure success through client relief, improved cash flow, and restored credit health.</li>
        </ul>
      </section>

      <section aria-labelledby="who-we-serve">
        <h2 id="who-we-serve">Who We Serve</h2>
        <p>
          Our clients are individuals or families under pressure from multiple credit obligations—those whose interest rates, monthly instalments, or credit demands have become unsustainable. We help you when you feel trapped by your debt, when multiple payments are overwhelming, or when creditor demands escalate.
        </p>
      </section>

      <section aria-labelledby="team">
        <h2 id="team">Our Team</h2>
        <p>(Here include a short profile of your founder(s), lead consultants, their credentials, experience, and passion for helping clients.)</p>
      </section>

      <section aria-labelledby="ethics">
        <h2 id="ethics">Ethics & Assurance</h2>
        <p>
          We are committed to operating with full compliance, confidentiality, and care. We treat all personal data with utmost respect and transparency. While we strive for the best outcomes, results vary based on individual circumstances—no guarantee can be made, though we commit to working diligently on your behalf.
        </p>
      </section>

      <section aria-labelledby="contact-cta">
        <h2 id="contact-cta">Let’s Talk</h2>
        <p>
          If you’re feeling overwhelmed by debt, you’re not alone—and you don’t have to navigate it alone. Reach out today for a free consultation. Let’s put together a plan to restore your credit and peace of mind.
        </p>
        <a className="btn primary" href="/contact">Get a Free Consultation</a>
      </section>
    </main>
  );
}

export default About;
