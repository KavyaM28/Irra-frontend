import React, { useEffect } from 'react';
import useScriptBehavior from '../hooks/useScriptBehavior';
import '../App.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  useScriptBehavior();

  useEffect(() => {
    // Add scroll reveal or other effects here if needed
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="marquee-section">
        <div className="hero-text">
          <h1>Our Projects</h1>
        </div>
        <br /><br />

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
      <br />

      {/* Explore Our Work */}
      <section>
        <div style={{ textAlign: 'center' }}>
          <h2>Explore Our Work</h2>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="projects-gallery">
        <div className="grid">
          {[
            { src: 'project1.png', title: 'Modern Apartment' },
            { src: 'project2.png', title: 'Luxury Villa' },
            { src: 'project3.png', title: 'Urban Kitchen' },
            { src: 'project4.png', title: 'Classic Living Room' },
            { src: 'project5.png', title: 'Elegant Bedroom' },
            { src: 'project6.png', title: 'Contemporary Hall' },
          ].map((proj, index) => (
            <div className="project-card" key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/images/${proj.src}`}
                alt={proj.title}
              />
              <h3>{proj.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <br />

      {/* CTA */}
      <section>
        <div style={{ textAlign: 'center' }}>
          <h2>See the Spaces We’ve Transformed</h2>
          <br />
          <Link
            to="https://pdflink.to/recentinteriors/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light"
            style={{ fontSize: '20px' }}
          >
            Step Into Our World
          </Link>
        </div>
      </section>

      {/* Optional Reveal Section */}
      <section className="services reveal">
        {/* Add your animated services if needed */}
      </section>
    </>
  );
};

export default Projects;
