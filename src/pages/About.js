import React, { useEffect } from "react";
import useScriptBehavior from '../hooks/useScriptBehavior';
import '../App.css';

function About() {
  useScriptBehavior(); // Hook with scroll, form, and nav logic

  useEffect(() => {
    const detailsElements = document.querySelectorAll(".about-different details");

    detailsElements.forEach((detail) => {
      const summary = detail.querySelector("summary");
      summary.addEventListener("click", function () {
        detailsElements.forEach((otherDetail) => {
          if (otherDetail !== detail) {
            otherDetail.removeAttribute("open");
          }
        });
      });
    });

    return () => {
      detailsElements.forEach((detail) => {
        const summary = detail.querySelector("summary");
        summary.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="marquee-section">
        <div className="hero-text">
          <h1>About IRRA SPACES</h1>
        </div>
        <br /> 
        <p className="about-heropara">
    Welcome to <strong>IRRASPACES</strong>, where design meets purpose. Based in the
    heart of Hyderabad,<br></br> we are not just an interior design studio — we are space
    storytellers, curators of lifestyle, and champions of thoughtful aesthetics.
  </p>
  <p className="about-heropara">
    At Irraspaces, we believe that every square foot tells a story. Whether it's
    a home that breathes <br></br> warmth or a workspace that fuels innovation, our design
    philosophy blends functionality, emotion, and timeless appeal.
  </p>
  <p className="about-heropara">What sets us apart is not just how we design.</p>
          <br />
        <div className="marquee-track">
          {['image1', 'image2', 'image3', 'image4', 'image5', 'image6'].map((img, i) => (
            <img
              key={i}
              src={`${process.env.PUBLIC_URL}/images/${img}.jpg`}
              alt={`Slide ${i + 1}`}
            />
          ))}
          {['image1', 'image2', 'image3', 'image4', 'image5', 'image6'].map((img, i) => (
            <img
              key={i + 100}
              src={`${process.env.PUBLIC_URL}/images/${img}.jpg`}
              alt={`Slide ${i + 9}`}
            />
          ))}
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-wrapper">
          <h2 className="subheading">Our Studio Ethos</h2>
          <p style={{ fontSize: 'larger' }}>
            At Irraspaces, we don’t just fill rooms — we shape experiences. Each project is a dialogue between
            the client’s personality and our design expertise.
          </p>
          <p style={{ fontSize: 'larger' }}>
            Whether it’s a high-rise apartment, a chic villa, a retail space, or an office that needs a soul, our
            multidisciplinary team of designers, architects, and project managers bring imagination and precision into perfect balance.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="about-different">
        <div className="container">
          <h2 className="subheading">What Makes Us Different</h2>
          <div className="about-different">
            {[
              {
                title: 'Design That Begins with You',
                content:
                  'We dive deep into understanding your lifestyle, habits, and aspirations before sketching a single line. Every design decision stems from your story — not just a trend board.',
              },
              {
                title: 'Local Soul, Global Aesthetics',
                content:
                  'Our roots are proudly local, but our perspective is global. From minimalist European palettes to rich Indian textures, we fuse international trends with a deep understanding of today’s evolving urban character.',
              },
              {
                title: 'Curated Over Cookie-Cutter',
                content:
                  'We don’t believe in one-size-fits-all. Each project is an original — meticulously curated with exclusive materials, bespoke furniture, and handpicked décor that’s crafted for your space.',
              },
              {
                title: 'Tech-Enabled Design Process',
                content:
                  'With cutting-edge 3D visualisation, virtual walk-throughs, and detailed project tracking tools, our clients are involved at every step — no surprises, only delight.',
              },
              {
                title: 'End-to-End Project Management',
                content:
                  'From the first sketch to the final reveal, we take complete ownership — design, procurement, execution, and handover — with obsessive attention to detail and timelines.',
              },
              {
                title: 'Sustainability With Style',
                content:
                  'We’re committed to eco-conscious design. Where possible, we incorporate sustainable practices — from energy-efficient lighting to ethically sourced materials — without compromising aesthetics.',
              },
            ].map((item, i) => (
              <details key={i} style={{ borderBottom: '1px solid #ccc', padding: '1em 0' }}>
                <summary>{item.title}</summary>
                <p style={{ marginTop: '0.5em', textAlign: 'left' }}>{item.content}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
