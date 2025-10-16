import React from 'react';

// Resolve local asset so Vite can fingerprint it in production
const calculatorImg = new URL('../assets/creditore-calculator.jpg', import.meta.url).href;

function DebtReview() {
  return (
    <div className="service-page debt-review">
      {/* HERO: brief intro for the service page */}
      <section className="service-hero">
        <div className="container">
          <h1>Debt Review</h1>
          <p className="lead">Debt Review helps consumers who are over-indebted find an affordable, court-approved repayment plan that restores financial stability.</p>
        </div>
      </section>

      {/* SERVICE CONTENT: two-column layout. Left = main content, Right = contact/CTA */}
      <section className="service-content container">
        <main className="service-main">
          <article>
            <h2>What is Debt Review?</h2>
            <p>
              Debt Review is a formal process designed to help customers who are struggling to meet their debt obligations. A debt counsellor will assess
              your finances and negotiate with creditors on your behalf to reduce monthly payments to a manageable amount. This process provides breathing
              room while you repay your debts under a structured plan.
            </p>

            <h3>Key considerations</h3>
            <ul className="feature-list">
              <li>You may be restricted from applying for new credit while under review.</li>
              <li>Your status will be recorded with credit bureaus until the review is complete.</li>
              <li>Debt counselling fees apply, but we provide transparent pricing and support.</li>
              <li>Payments must continue as agreed under the new plan to remain protected.</li>
            </ul>

            <figure className="service-image">
              <img src={calculatorImg} alt="Debt calculator" />
              <figcaption className="sr-only">Debt assessment illustration</figcaption>
            </figure>
          </article>

          <article>
            <h2>How the process works</h2>
            <ol className="process-steps">
              <li>Complete a free debt assessment to determine eligibility.</li>
              <li>If eligible, submit your application and required documents.</li>
              <li>We prepare a repayment proposal and negotiate with creditors.</li>
              <li>If required, the payment plan is submitted to the magistrate’s court for approval.</li>
              <li>Begin payments according to the new, affordable schedule and receive monthly aftercare.</li>
            </ol>
          </article>

          <article>
            <h2>Benefits</h2>
            <ul className="feature-list">
              <li>Lower monthly instalments and improved affordability.</li>
              <li>Protection from harassment by creditors while under review.</li>
              <li>Structured path to becoming debt-free with ongoing support.</li>
              <li>Access to recommended attorneys and regulated counsellors where required.</li>
            </ul>
          </article>
        </main>

        <aside className="service-aside" aria-label="Contact box">
          <div className="contact-box">
            <h3>Get a free assessment</h3>
            <p className="muted">Simple, confidential and obligation-free.</p>
            <p className="large">Call: <strong>021 569 6571</strong></p>
            <p className="large">WhatsApp: <strong>068 112 0951</strong></p>
            <a className="btn primary" href="/contact">Start Application</a>
          </div>

          <div className="quick-facts">
            <h4>Who we help</h4>
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

export default DebtReview;
