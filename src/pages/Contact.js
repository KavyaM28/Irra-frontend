import React, { useState, useEffect } from 'react';
import useScriptBehavior from '../hooks/useScriptBehavior';
import '../App.css';

const Contact = () => {
  useScriptBehavior();

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      alert('Please fill in all fields.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(form.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      const res = await fetch("https://irra-backend-pvec.onrender.com/api/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setForm({ name: '', email: '', phone: '', message: '' });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error("❌ Frontend Error:", err);
      alert('Error connecting to server.');
    }
  };

  return (
    <>
      <section className="Contact">
        <div className="hero-text">
          <h1>Contact Us</h1>
        </div><br />
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
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      

        <div className="contact-map">
          <h2>Reach out anytime</h2>
          <iframe src="https://googlemap.com" 
            width="600" 
            height="400"
            title="Irraspaces location map">
          </iframe> 
          
          <p><strong>Email:</strong> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@irraspaces.com" target="_blank" rel="noreferrer">
            hello@irraspaces.com</a>
          </p>
          <p><strong>Phone:</strong> 
            <a href="tel:+918050295130">+91 8050295130</a> &nbsp;|&nbsp;
            <a href="tel:+919539000907">+91 9539000907</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
