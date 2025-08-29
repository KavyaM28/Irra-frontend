import React, { useState, useEffect } from 'react';
import useScriptBehavior from '../hooks/useScriptBehavior';
import '../App.css';

const Contact = () => {
  useScriptBehavior();

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) el.classList.add('visible');
        else el.classList.remove('visible');
      });
    };
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone, message } = form;
    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields.');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch('https://irra-backend-pvec.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setForm({ name: '', email: '', phone: '', message: '' });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('❌ Frontend Error:', err);
      alert('Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="Contact">
        <div className="hero-text">
          <h1>Contact Us</h1>
        </div>
        <br />
        <div style={{ textAlign: 'center' }}>
          <h3><strong>Let’s design your space — and your story.</strong></h3>
          <p>Reach out to us for a design journey that’s collaborative, creative, and uniquely curated.</p>
        </div>
      </section>

      <section className="contact">
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          {showSuccess && (
            <div id="popup-success" className="popup-success show">
              Thank you! Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="contact-map">
          <h2>Reach out anytime</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.XXX!2d78.XXX!3d17.XXX!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbXXX!2sIrraSpaces!5e0!3m2!1sen!2sin!4vXXXX"
            width="600"
            height="400"
            title="Irraspaces location map"
          ></iframe>

          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@irraspaces.com">hello@irraspaces.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+918050295130">+91 8050295130</a> &nbsp;|&nbsp;
            <a href="tel:+919539000907">+91 9539000907</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
