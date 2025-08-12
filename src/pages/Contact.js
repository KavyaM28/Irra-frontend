import React, { useState, useEffect } from 'react';
import useScriptBehavior from '../hooks/useScriptBehavior';
import '../App.css';

const Contact = () => {
  useScriptBehavior();

  const [form, setForm] = useState({ Name: '', Email: '', Message: '' });
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

    if (!form.Name || !form.Email || !form.Message) {
      alert('Please fill in all fields.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.Email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setForm({ Name: '', Email: '', Message: '' });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000); // hide after 3 sec
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
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

          {/* Centered Success Popup */}
          {showSuccess && (
            <div  id = "popup-success" className="popup-success show">
              Thank you! Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              value={form.Name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              value={form.Email}
              onChange={handleChange}
              required
            />
            <textarea
              name="Message"
              placeholder="Your Message"
              rows="6"
              value={form.Message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>

        <div className="contact-map">
          <h2>Visit Our Studio</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7615.673117007231!2d78.54321643710139!3d17.37159594482398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990c1ab8567b%3A0x6e718bc1364bee23!2sMetro%20Heights!5e0!3m2!1sen!2sin!4v1752332539958!5m2!1sen!2sin"
            width="300"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p><strong>Address:</strong> Metroheight, Snehapuri Colony, Kothapet, Hyderabad, Telangana-500035, India</p>
          <p><strong>Email:</strong> <a href="mailto:hello@irraspaces.com">hello@irraspaces.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+918050295130">+91 8050295130</a></p>
        </div>
      </section>
    </>
  );
};

export default Contact;
