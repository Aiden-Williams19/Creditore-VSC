import React from 'react';

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

      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Your Name" />
        <label>Email</label>
        <input type="email" placeholder="Your Email" />
        <label>Message</label>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
