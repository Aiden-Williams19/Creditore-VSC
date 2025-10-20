import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

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
  const [state, handleSubmit] = useForm('mqayoebq');
  if (state.succeeded) {
    return <p className="muted">Thanks — we received your message and will be in touch shortly.</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" placeholder="Your name" required />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" placeholder="you@example.com" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="How can we help?" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" className="btn primary" disabled={state.submitting}>Send</button>
    </form>
  );
}

export default Contact;
