import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import styles from './Home.module.css';

// Resolve assets at runtime so Vite can find them in dev and build
const whoImg = new URL('../assets/creditore6.jpg', import.meta.url).href;
const debtReviewImg = new URL('../assets/creditore6.jpg', import.meta.url).href;
const debtMediationImg = new URL('../assets/creditore6.jpg', import.meta.url).href;

export default function Home() {
  return (
    <div className="home">
      {/* Floating social bar (WhatsApp + Facebook) */}
      <div className={styles.floatingSocial} aria-hidden>
        <a className={styles.whatsapp} href="https://wa.me/0027681120951" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <FaWhatsapp size={20} color="#fff" />
        </a>
        <a className={styles.facebook} href="https://www.facebook.com/creditoredebt" target="_blank" rel="noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z"/></svg>
        </a>
      </div>

      {/* HERO */}
      <header className={styles.hero} style={{ backgroundImage: `url(${whoImg})` }}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Restore Your Credit</h1>
          <p className={styles.heroSub}>Professional, reliable and tailor-made debt restructuring solutions that help you restore your credit and your life.</p>
          <div className={styles.heroCtas}>
            <a className="btn primary" href="tel:0215696571">Call Us: 021 569 6571</a>
            <a className="btn primary" href="https://wa.me/0027681120951" target="_blank" rel="noreferrer">WhatsApp</a>
            <Link className="btn primary" to="/contact">Contact Form</Link>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>
        <p>Professional, reliable and tailor made debt restructuring solutions that help you restore your credit.</p>
        <div className="service-list">
          <ServiceCard
            title="Debt Review"
            description="We are regulated and mandated by the NCR. We assist consumers by reducing their monthly debt commitments."
            link="/debt-review"
            image={debtReviewImg}
          />
          <ServiceCard
            title="Debt Mediation"
            description="We assist by approaching creditors and arranging affordable monthly payments."
            link="/debt-mediation"
            image={debtMediationImg}
          />
        </div>
      </section>

      {/* WHO */}
      <section className={styles.whoSection}>
        <div className={styles.whoGrid}>
          <div className={styles.whoLeft}>
            <h2 className={styles.whoTitle}>WHO WE ARE</h2>
            <p className={styles.whoDesc}>
              <Link className="btn primary" to="/contact">Contact Form</Link>
            </p>

            <ul className={styles.whoList}>
              <li className={styles.whoListItem}><span className={styles.whoListIcon}>✓</span><span>Home loan</span></li>
              <li className={styles.whoListItem}><span className={styles.whoListIcon}>✓</span><span>Vehicle finance</span></li>
              <li className={styles.whoListItem}><span className={styles.whoListIcon}>✓</span><span>Credit cards</span></li>
              <li className={styles.whoListItem}><span className={styles.whoListIcon}>✓</span><span>Micro loans</span></li>
              <li className={styles.whoListItem}><span className={styles.whoListIcon}>✓</span><span>Personal loans</span></li>
            </ul>

            <div className={styles.whoActions}>
              <Link className="btn primary" to="/contact">Get a Free Consultation</Link>
              <Link className="btn" to="/debt-review">Learn More</Link>
            </div>
          </div>

          <div className={styles.whoRight}>
            <img src={whoImg} alt="Two clients in a consultation" className={styles.whoImg} />
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className={styles.stepsSection}>
        <h2 className={styles.sectionTitle}>How it works</h2>
        <div className={styles.stepsGrid}>
          {[1,2,3,4,5].map(n => (
            <div key={n} className={styles.step}>
              <div className={styles.stepIcon} aria-hidden>
                <svg viewBox="0 0 24 24" width="28" height="28"><circle cx="12" cy="12" r="11" fill="#1f9d55"/></svg>
              </div>
              <h3>Step {n}</h3>
              <p>Step {n} description — brief, clear and actionable.</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className={styles.teamSection}>
        <div className={styles.teamInner}>
          <div>
            <h2 className={styles.sectionTitle}>Our Team</h2>
            <p>Our accredited professionals provide compassionate, practical and compliant debt solutions. We combine industry experience with a focus on client outcomes.</p>
            <p className={styles.teamCta}>Looking for professional financial advice that actually works?</p>
            <a className="btn primary" href="/contact">CONTACT US</a>
          </div>
          <div className={styles.teamStats}>
            <div className={styles.stat}><strong>10+</strong><span>Years' experience</span></div>
            <div className={styles.stat}><strong>5k+</strong><span>Clients supported</span></div>
            <div className={styles.stat}><strong>100%</strong><span>Regulated & compliant</span></div>
          </div>
        </div>
      </section>

      {/* REGULATORY */}
      <section className={styles.regulatory}>
        <p className={styles.regText}>We are regulated by the <strong>NCR</strong>. We adhere to all statutory requirements and place client welfare first.</p>
        <div className={styles.socialLinks}>
          <a href="https://wa.me/0027681120951" target="_blank" rel="noreferrer" aria-label="WhatsApp" className={`${styles.socialLink} ${styles.whatsapp}`}>WhatsApp</a>
          <a href="https://www.facebook.com/creditoredebt" target="_blank" rel="noreferrer" aria-label="Facebook" className={`${styles.socialLink} ${styles.facebook}`}>Facebook</a>
        </div>
      </section>
    </div>
  );
}
