import React from 'react';
import { Link } from 'react-router-dom';

function DebtMediation() {
  return (
    <div className="service-page debt-mediation">
      <section className="service-hero">
        <div className="container">
          <h1>Debt Mediation</h1>
          <p className="lead">Debt Mediation helps you negotiate affordable repayments before you become over-indebted and gives you a clear payment track to manage creditors.</p>
        </div>
      </section>

      <section className="service-content container">
        <main className="service-main">
          <article>
            <h2>What is Debt Mediation?</h2>
            <p>
              Debt Mediation (sometimes called Debt Management) is a non-court solution where we negotiate with creditors to agree a manageable repayment plan.
              Payments are consolidated and distributed by a Payment Facilitation Agency where applicable.
            </p>

            <h3>Typical process</h3>
            <ol className="process-steps">
              <li>Complete a quick assessment to check suitability.</li>
              <li>Submit documents and allow us to negotiate with creditors.</li>
              <li>Agree a consolidated monthly payment that works for you.</li>
              <li>Start your new payment schedule and receive ongoing support.</li>
            </ol>
          </article>

          <article>
            <h2>What you get</h2>
            <ul className="feature-list">
              <li>A free assessment and transparent fees.</li>
              <li>Assistance to negotiate with multiple creditors.</li>
              <li>Monthly statements and aftercare support.</li>
              <li>Referral to legal support when needed.</li>
            </ul>
          </article>
        </main>

        <aside className="service-aside" aria-label="Contact box">
          <div className="contact-box">
            <h3>Need help now?</h3>
            <p className="muted">Call or WhatsApp our team for a free chat.</p>
            <p className="large">Call: <strong>021 569 6571</strong></p>
            <p className="large">WhatsApp: <strong>068 112 0951</strong></p>
            <Link className="btn primary" to="/contact">Start Application</Link>
          </div>

          <div className="quick-facts">
            <h4>Eligible debts</h4>
            <ul>
              <li>Home loans</li>
              <li>Vehicle finance</li>
              <li>Credit cards</li>
              <li>Micro loans</li>
              <li>Personal loans</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default DebtMediation;
