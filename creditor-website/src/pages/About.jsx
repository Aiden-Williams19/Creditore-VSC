import React from 'react';

// About page: static information about the company. Keep copy short and scannable.
function About() {
  return (
    <div className="about">
      <h1>Who We Are</h1>
      <p>
        CREDITORE (Credit – Restore) is a Cape Town-based consultancy that specializes in debt restructuring products aimed at consumers who are over-indebted and struggling to meet their monthly debt commitments.
      </p>

      <h2>We can help:</h2>
      <ul>
        <li>Home loan</li>
        <li>Vehicle finance</li>
        <li>Credit cards</li>
        <li>Micro loans</li>
        <li>Personal loans</li>
      </ul>
    </div>
  );
}

export default About;
