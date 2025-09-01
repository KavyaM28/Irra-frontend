import React, { useState } from "react";
import useScriptBehavior from "../hooks/useScriptBehavior";
import "../App.css";

const Contact = ({ sendMessage }) => {
  useScriptBehavior();

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    const { name, email, phone, message } = form;
    if (!name || !email || !phone || !message) {
      alert("⚠️ Please fill all fields");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("⚠️ Invalid email format");
      return false;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("⚠️ Phone must be 10 digits");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const result = await sendMessage(form);

    if (result.success) {
      setForm({ name: "", email: "", phone: "", message: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    } else {
      alert(result.error || "Something went wrong. Try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <section className="Contact">
        <div className="hero-text">
          <h1>Contact Us</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>
            <strong>Let’s design your space — and your story.</strong>
          </h3>
          <p>Reach out to us for a collaborative, creative design journey.</p>
        </div>
      </section>

      <section className="contact grid">
        {/* --- Contact Form --- */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          {showSuccess && (
            <div className="popup-success show">✅ Thank you! Your message has been sent.</div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              aria-label="Your Name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              aria-label="Your Email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              aria-label="Your Phone Number"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              aria-label="Your Message"
              placeholder="Your Message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* --- Contact Info + Map --- */}
        <div className="contact-map">
          <h2>Reach out anytime</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487433.21341818175!2d78.03328666762042!3d17.360269079341553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1756625876517!5m2!1sen!2sin"
              title="Irra Spaces Location"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@irraspaces.com">hello@irraspaces.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+918050295130">+91 8050295130</a> |{" "}
            <a href="tel:+919539000907">+91 9539000907</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
