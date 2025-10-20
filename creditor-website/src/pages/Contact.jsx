import React, { useState } from 'react';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Call us: <strong>021 569 6571</strong></p>
      <p>WhatsApp: <strong>068 112 0951</strong></p>
      <p>Email: <strong>info@creditore.co.za</strong></p>

      <p>
        Send us your details and our qualified agents will give you a call. You can also use the contact form below and we'll respond as soon as possible.
      </p>

      <ContactForm />
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);

  function onChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('https://formspree.io/f/mqayoebq', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setSucceeded(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError(data.error || data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Network error. Please try again.');
    }

    setSubmitting(false);
  }

  if (succeeded) {
    return <p className="muted">Thanks — we received your message and will be in touch shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      {error && <div role="alert" style={{ marginBottom: 12, color: '#b91c1c' }}>{error}</div>}

      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={onChange} required />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={onChange} required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="How can we help?" value={form.message} onChange={onChange} required />

      <button type="submit" className="btn primary" disabled={submitting}>{submitting ? 'Sending…' : 'Send'}</button>
    </form>
  );
}

export default Contact;
