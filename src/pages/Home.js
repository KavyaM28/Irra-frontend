import React from 'react';
import { Link } from 'react-router-dom';
import useScriptBehavior from '../hooks/useScriptBehavior';
import '../App.css'; // or a separate CSS if you've split it

function Home() {
  useScriptBehavior();
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`
        }}
      >
        <div className="hero-content">
          <div className="welcome-flash">Welcome to Irra Spaces</div>
          <h1>Live Where You Love - Design Your Space With Us.</h1>
          <h3>Elegance tailored to your life: a space that is uniquely yours.</h3>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/interior-icon.png`} alt="Interior Design" />
            <h3>Interior Design</h3>
            <p>Stylish interiors crafted for comfort and beauty.</p>
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/modular-icon.png`} alt="Modular Solutions" />
            <h3>Modular Solutions</h3>
            <p>Space-saving modular kitchens, wardrobes and more.</p>
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/turnkey-icon.png`} alt="Project Execution" />
            <h3>Turnkey Projects</h3>
            <p>From concept to completion—everything managed.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <div className="text">
            <h2>About IRRA SPACES</h2>
            <p>Your dream home, thoughtfully designed and flawlessly executed.</p>
            <p>We transform spaces with smart, aesthetic interiors that reflect your lifestyle</p>
            <Link to="/about" className="btn-light">Learn More</Link>
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/about.jpg`} alt="About Irra Spaces" />
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee-section">
        <div className="marquee-track">
          {['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'].map((img, i) => (
            <img
              key={i}
              src={`${process.env.PUBLIC_URL}/images/${img}.jpg`}
              alt={`Slide ${i + 1}`}
            />
          ))}
          {['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'].map((img, i) => (
            <img
              key={i + 100}
              src={`${process.env.PUBLIC_URL}/images/${img}.jpg`}
              alt={`Slide ${i + 9}`}
            />
          ))}
        </div>
        <div>
          <Link to="/projects" className="btn">View All Projects</Link>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <h2>Why Choose IRRA SPACES</h2>
        <ul>
          <li>✔ End-to-end execution</li>
          <li>✔ Experienced design experts</li>
          <li>✔ Transparent pricing</li>
          <li>✔ 3D visualizations</li>
          <li>✔ On-time delivery</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Have a project in mind? Let’s talk and turn your ideas into beautifully designed spaces.</h2>
        <Link to="/contact" className="btn">Schedule a Free Consultation</Link>
      </section>
    </>
  );
}

export default Home;
