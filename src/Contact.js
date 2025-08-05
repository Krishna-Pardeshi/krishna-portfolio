import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        
        {/* Left Side */}
        <div className="contact-info">
          <h2>Let’s Work Together 🤝</h2>
          <p>I’m excited to collaborate on creative projects or help solve challenging problems. Whether it’s freelance work, internships, or just tech conversations — I’m all ears!</p>
          
          <ul>
            <li><strong>Email:</strong> krishnapardeshi.official@gmail.com</li>
            <li><strong>Phone:</strong> +91 95119 29393</li>
            <li><strong>Location:</strong> Kopargaon, Maharashtra</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <form>
            <div className="input-group">
              <input type="text" required />
              <label>Name</label>
            </div>
            <div className="input-group">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-group">
              <textarea rows="5" required></textarea>
              <label>Message</label>
            </div>
            <button type="submit">Send 🚀</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
