import React from "react";
import useScriptBehavior from '../hooks/useScriptBehavior';
import '../App.css';

const Process = () => {
  useScriptBehavior();

  return (
    <>
      {/* Hero Section */}
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
          <h1>Our Design Process</h1>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <h2>How We Work</h2>
        <div className="process-steps">
          {[
            {
              number: 1,
              title: "Consultation",
              text: "We understand your needs, lifestyle, and budget through an in-depth discussion.",
            },
            {
              number: 2,
              title: "Design & 3D Visualization",
              text: "Our experts present detailed layouts and realistic 3D renders for approval.",
            },
            {
              number: 3,
              title: "Material Selection",
              text: "You choose from curated finishes, materials, and furnishings — with our guidance.",
            },
            {
              number: 4,
              title: "Manufacturing",
              text: "We take pride in our state-of-the-art in-house manufacturing facility, where our skilled craftsmen work tirelessly to bring your interiors to life with precision and care.",
            },
            {
              number: 5,
              title: "Execution",
              text: "Our team gets to work — managing everything from carpentry to electrical to finishing.",
            },
            {
              number: 6,
              title: "Handover",
              text: "Final inspection, clean-up, and handover — all done on time with attention to detail.",
            },
          ].map(({ number, title, text }) => (
            <div key={number} className="step">
              <div className="step-number">{number}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Design Journey Today</h2>
      </section>

      {/* Placeholder for reveal section */}
      <section className="services reveal">
        {/* Add content or remove if not needed */}
      </section>
    </>
  );
};

export default Process;
