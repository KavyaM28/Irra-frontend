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
          {[
            "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg",
            "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"
          ].flatMap((img) => [img, img]).map((img, i) => (
            <img key={i} src={`/images/${img}`} alt={`Slide ${i + 1}`} />
          ))}
        </div>
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
