import React from 'react';
import { Link } from 'react-router-dom';

// About page: static information about the company. Keep copy short and scannable.
function About() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>About Creditore</h1>
          <p className="lead">Restoring Financial Dignity, One Account at a Time</p>
        </div>
      </section>

      <section className="service-content container">
        <main className="service-main">
          <article>
            <h2>Who We Are</h2>
            <p>
              Creditore (Credit – Restore) is a Cape Town–based consultancy dedicated to helping individuals overwhelmed by debt regain control, stability, and peace of mind. With a focus on integrity, transparency, and personal attention, we partner with clients to navigate the maze of credit obligations and find sustainable solutions.
            </p>
          </article>

          <article>
            <h2>Our Mission</h2>
            <p>
              To empower South Africans struggling with debt to reclaim their financial footing. We believe that every person deserves fair treatment, breathing room, and a path toward financial wellness—not endless stress and uncertainty.
            </p>
          </article>

          <article>
            <h2>What We Do</h2>
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
          </article>

          <article>
            <h2>How We Work</h2>
            <ol>
              <li><strong>Initial Consultation</strong> – We assess your complete debt profile and listen to your challenges.</li>
              <li><strong>Financial Analysis</strong> – We map out income, expenses, liabilities, and determine your realistic capacity.</li>
              <li><strong>Negotiation</strong> – We approach credit providers, seeking lower interest, extended terms, or restructuring.</li>
              <li><strong>Implementation</strong> – We help set up revised repayment schedules, consolidate where possible, and ensure compliance.</li>
              <li><strong>Monitoring & Support</strong> – We stay involved, offering guidance and making adjustments as life circumstances change.</li>
            </ol>
          </article>

          <article>
            <h2>Why Choose Creditore</h2>
            <ul>
              <li><strong>Expertise & Experience:</strong> We specialise exclusively in debt restructuring.</li>
              <li><strong>Personalised Solutions:</strong> Each plan is tailored to your unique financial, personal, and lifestyle factors.</li>
              <li><strong>Transparent Fees:</strong> No hidden costs or surprise charges—everything is up front.</li>
              <li><strong>Client First:</strong> We act with empathy, confidentiality, and integrity.</li>
              <li><strong>Real Results:</strong> We measure success through client relief, improved cash flow, and restored credit health.</li>
            </ul>
          </article>

          <article>
            <h2>Who We Serve</h2>
            <p>
              Our clients are individuals or families under pressure from multiple credit obligations—those whose interest rates, monthly instalments, or credit demands have become unsustainable. We help you when you feel trapped by your debt, when multiple payments are overwhelming, or when creditor demands escalate.
            </p>
          </article>

          <article>
            <h2>Our Team</h2>
            <p>(Here include a short profile of your founder(s), lead consultants, their credentials, experience, and passion for helping clients.)</p>
          </article>

          <article>
            <h2>Ethics & Assurance</h2>
            <p>
              We are committed to operating with full compliance, confidentiality, and care. We treat all personal data with utmost respect and transparency. While we strive for the best outcomes, results vary based on individual circumstances—no guarantee can be made, though we commit to working diligently on your behalf.
            </p>
          </article>
        </main>

        <aside className="service-aside" aria-label="Contact box">
          <div className="contact-box">
            <h3>Get a free assessment</h3>
            <p className="muted">Simple, confidential and obligation-free.</p>
            <p className="large">Call: <strong>021 569 6571</strong></p>
            <p className="large">WhatsApp: <strong>068 112 0951</strong></p>
            <Link className="btn primary" to="/contact">Start Application</Link>
          </div>
        </aside>
      </section>
    </>
  );
}

export default About;
