import React from 'react';
import { Link } from 'react-router-dom';

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
                Debt Review is a formal, NCR-regulated process designed to help people who are over-indebted. A debt counsellor assesses your income,
                expenses and liabilities, then negotiates with your creditors to arrange a more affordable repayment plan. The goal is to restore financial
                stability while protecting your assets and stopping creditor harassment.
              </p>

              <h3>Key considerations</h3>
              <ul className="feature-list">
                <li>You may be restricted from applying for new credit while under review.</li>
                <li>Your status will be recorded with credit bureaus until the review is complete.</li>
                <li>Debt counselling fees apply but are regulated and included in your restructured plan.</li>
                <li>Payments must be maintained according to the new proposal to keep protection.</li>
              </ul>

              <figure className="service-image">
                <img src={calculatorImg} alt="Debt calculator" />
                <figcaption className="sr-only">Debt assessment illustration</figcaption>
              </figure>
          </article>

          <article>
            <h2>How It Works</h2>
            <ol className="process-steps">
              <li><strong>Free Assessment</strong> — We start with a quick, confidential chat to see if you qualify for Debt Review.</li>
              <li><strong>Proposal to Creditors</strong> — We contact all your creditors and negotiate lower monthly payments on your behalf.</li>
              <li><strong>Legal Protection</strong> — Your accounts are flagged as "under Debt Review" and creditor harassment must stop.</li>
              <li><strong>Single Affordable Payment</strong> — You make one monthly payment to a PDA which distributes funds to creditors.</li>
              <li><strong>Debt-Free Certificate</strong> — Once debts are settled, you receive a clearance certificate and your credit record is updated.</li>
            </ol>
          </article>

          <article>
            <h2>Benefits of Debt Review</h2>
            <ul className="feature-list">
              <li>Protection from creditors — no more threatening calls or letters.</li>
              <li>Lower monthly instalments — improved affordability.</li>
              <li>Fixed interest rates — prevents debt from growing while you repay.</li>
              <li>One easy payment — simplifies budgeting and reduces stress.</li>
              <li>Keep your assets — stay in your home and keep your car while repaying debt.
              </li>
              <li>Become debt-free — clear your name and rebuild your credit record.</li>
            </ul>
          </article>

          <article>
            <h2>Fees & Process</h2>
            <p>Fees are regulated by the NCR and included in your restructured payment plan. You pay nothing upfront. We offer a free instalment calculation to show what your new monthly payment could be.</p>
          </article>

          <article>
            <h2>FAQs</h2>
            <h4>Will my credit score improve after Debt Review?</h4>
            <p>Yes — upon completion you receive a clearance certificate and your credit record is updated.</p>
            <h4>Can I still use credit during Debt Review?</h4>
            <p>No — you may not take on new credit while under review.</p>
            <h4>What happens if I skip a payment?</h4>
            <p>Missing payments can lead to termination of the review. Contact us immediately if you have difficulty paying.</p>
            <h4>Can I exit Debt Review early?</h4>
            <p>Yes, if debts are fully settled or you no longer meet the criteria.</p>
            <h4>How long does the process take?</h4>
            <p>Most clients complete the process within 3–5 years depending on their circumstances.</p>
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
