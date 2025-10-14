import React from 'react';

// Contact page: simple contact details and a basic contact form.
// Note: form is currently static — if you want submissions, wire this to an API endpoint
// or use a service like Formspree / Netlify Forms. Validate inputs before sending.
function Contact() {
  return (
    <div className="contact">
      {/* Main heading for screen readers and SEO */}
      <h1>Contact Us</h1>

      {/* Contact details — keep consistent formatting and update centrally if changed */}
      <p>Call us: <strong>021 569 6571</strong></p>
      <p>WhatsApp: <strong>068 112 0951</strong></p>
      <p>Email: <strong>info@creditore.co.za</strong></p>

      <p>
        Send us your details and our qualified agents will give you a call. You can also use the contact form below and we'll respond as soon as possible.
      </p>

      {/* Basic contact form with accessible labels. Add client-side validation when enabling submission. */}
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your Name" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Your Email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
