import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for orders, questions, or feedback</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-section">
            <h2>Location & Hours</h2>
            <div className="info-item">
              <h3>Address</h3>
              <p>123 Pizza Street<br />Little Italy, NY 10013</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>(555) 123-PIZZA</p>
            </div>
            <div className="info-item">
              <h3>Hours</h3>
              <p>
                Monday - Thursday: 11:00 AM - 10:00 PM<br />
                Friday - Saturday: 11:00 AM - 11:00 PM<br />
                Sunday: 12:00 PM - 9:00 PM
              </p>
            </div>
          </div>

          <div className="info-section">
            <h2>Order Online</h2>
            <p>
              For the fastest service, place your order online or call us directly. 
              We offer pickup and delivery within a 5-mile radius.
            </p>
            <div className="order-buttons">
              <button className="order-btn delivery">Order Delivery</button>
              <button className="order-btn pickup">Order Pickup</button>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;