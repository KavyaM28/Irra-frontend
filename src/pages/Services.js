import React, { useEffect } from 'react';
import useScriptBehavior from '../hooks/useScriptBehavior';
import '../App.css'; // or your CSS path

const Services = () => {
  useScriptBehavior();

  useEffect(() => {
    // Hamburger menu toggle
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        navLinks.classList.toggle('show');
      });

      const links = navLinks.querySelectorAll('a');
      links.forEach((link) => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            toggle.classList.remove('active');
            navLinks.classList.remove('show');
          }
        });
      });
    }

    // Scroll reveal
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

    revealOnScroll(); // Initial
    window.addEventListener('scroll', revealOnScroll);

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      {/* Hero Marquee */}
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
        <br /><br />
        <div className="hero-text">
          <h1>Our Services</h1>
        </div>
      </section>
      <br /><br />

      {/* Services */}
      <section className="service-detail">
        <div className="service-block">
          <video autoPlay muted loop playsInline className="service-item">
            <source src={`${process.env.PUBLIC_URL}/videos/commercial.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text">
            <h2>Commercial Interiors</h2>
            <p>
              We create fully styled, move-in ready spaces that bring your business to life - designed with elegance, functionality, and purpose.
            </p>
          </div>
        </div>
        <br />

        <div className="service-block reverse">
          <video autoPlay muted loop playsInline className="service-item">
            <source src={`${process.env.PUBLIC_URL}/videos/workspace.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text">
            <h2>Workspace Interiors</h2>
            <p>
              From quiet focus zones to collaborative hubs - we design workspaces that move your business forward.
            </p>
          </div>
        </div>
        <br />

        <div className="service-block">
          <video autoPlay muted loop playsInline className="service-item">
            <source src={`${process.env.PUBLIC_URL}/videos/residential.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text">
            <h2>Residential Interiors</h2>
            <p>
              We design homes that blend beauty with comfort - spaces that reflect your lifestyle, your taste, and your story.
            </p>
          </div>
        </div>
      </section>

      {/* Optional Reveal Section */}
      <section className="services reveal">
        {/* Add any additional content here */}
      </section>
    </>
  );
};

export default Services;
