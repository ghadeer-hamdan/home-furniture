import React from "react";
import "./CSS/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We’re here to assist you! Contact us through the form or the details below.</p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-card contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-card contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li><strong>Email:</strong> support@homefurniture.com</li>
            <li><strong>Phone:</strong> +123-456-7890</li>
            <li><strong>Address:</strong> 123 Home Furniture St, Cityville, Country</li>
            <li><strong>Working Hours:</strong> Mon-Fri, 9 AM - 6 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
