import React from 'react';
import { Link } from 'react-router-dom';

// About page: static information about the company. Keep copy short and scannable.
function About() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>About Creditore Debt Counselling</h1>
          <p className="lead">Founded in 2020 — Compassionate, professional debt solutions for South Africans</p>
        </div>
      </section>

      <section className="service-content container">
        <main className="service-main">
          <article>
            <h2>Who We Are</h2>
            <p>Creditore Debt Counselling has proudly served South Africans for over five years, helping individuals and families take control of their finances and rebuild their lives through the Debt Review process. We guide clients with compassion, honesty, and professionalism.</p>
          </article>

          <article>
            <h2>Our Mission</h2>
            <p>To help over-indebted South Africans regain financial stability, protect their assets, and achieve lasting peace of mind—without judgment or shame.</p>
            <p>To see every South African family experience financial freedom, confidence, and hope—one successful case at a time.</p>

          </article>

          <article>
            <h2>Our Promise to You</h2>
            <ul>
              <li>Honest, transparent financial advice</li>
              <li>No hidden fees or false promises</li>
              <li>Respectful, confidential, and professional service</li>
              <li>A dedicated debt counsellor who supports you every step of the way</li>
            </ul>
          </article>

          <article>
            <h2>Benefits of Debt Review</h2>
            <ul>
              <li>Protection from creditors — no more threatening calls or letters.</li>
              <li>Lower monthly instalments — we negotiate affordable payments.</li>
              <li>Fixed interest rates — prevent your debt from growing.</li>
              <li>One easy payment — simplify your budget and reduce stress.</li>
              <li>Keep your assets — stay in your home and keep your car while repaying your debt.</li>
              <li>Become debt-free — clear your name and rebuild your credit record.</li>
            </ul>
          </article>

          <article>
            <h2>Fees & Process</h2>
            <p>Fees for Debt Review are regulated by the National Credit Regulator (NCR). You pay nothing upfront — fees are included in your restructured payment plan. We offer a free instalment calculation to show your new monthly payment before you commit.</p>
          </article>

          <article>
            <h2>FAQs</h2>
            <h4>Will my credit score improve after Debt Review?</h4>
            <p>Yes. After completion you receive a clearance certificate and your credit record is updated to show you are debt-free.</p>
            <h4>Can I still use credit during Debt Review?</h4>
            <p>No. You may not take on new credit while under review — this prevents deeper indebtedness.</p>
            <h4>What happens if I skip a payment?</h4>
            <p>Missing payments can lead to the review being terminated. Contact us immediately if you have difficulty paying so we can help.</p>
            <h4>Can I exit Debt Review early?</h4>
            <p>Yes, if your debts are fully settled or you no longer meet the over-indebted criteria.</p>
            <h4>How long does the process take?</h4>
            <p>Timing depends on total debt and repayment capacity, but most clients complete the process within 3–5 years.</p>
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
          <br />
          <div>
             <article className="contact-box"> 
            <h2>How We Work</h2>
            <ol>
              <li><strong>Free Assessment</strong> – We start with a quick, confidential chat to see if you qualify for Debt Review.</li>
              <li><strong>Proposal to Creditors</strong> – We contact your creditors and negotiate lower monthly payments.</li>
              <li><strong>Legal Protection</strong> – Your accounts are flagged as “under Debt Review” and creditor harassment must stop.</li>
              <li><strong>Single Affordable Payment</strong> – A Payment Distribution Agency (PDA) manages one monthly payment to distribute to creditors.</li>
              <li><strong>Debt-Free Certificate</strong> – Once debts are settled you receive a clearance certificate and your credit record is updated.</li>
            </ol>
          </article>
          </div>
        </aside>
      </section>
    </>
  );
}

export default About;
