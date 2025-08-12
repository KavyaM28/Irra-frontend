import React, { useEffect } from 'react';
import useScriptBehavior from '../hooks/useScriptBehavior';
import '../App.css'; // Assuming your styles are imported here
import { Link } from 'react-router-dom';


const Projects = () => {
  useScriptBehavior();
  useEffect(() => {
    // Scroll reveal or other JS can be handled here if needed
  }, []);

  
  return (
    <>

      {/* Hero */}
      <section className="marquee-section">
        <div className="hero-text">
          <h1>Our Projects</h1>
        </div><br /><br />

        <div className="marquee-track">
          {['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg'].flatMap((img, i) => (
            [1, 2].map((loop) => (
              <img key={`${img}-${loop}-${i}`} src={`/images/${img}`} alt={`Slide ${i + 1}`} />
            ))
          ))}
        </div>
      </section><br />

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
              <img src={`/images/${proj.src}`} alt={proj.title} />
              <h3>{proj.title}</h3>
            </div>
          ))}
        </div>
      </section><br />

      {/* CTA */}
      <section>
        <div style={{ textAlign: 'center' }}>
          <h2>See the Spaces We’ve Transformed</h2><br />
          <Link to="https://pdflink.to/recentinteriors/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light"
            style={{ fontSize: '20px' }}
          >
            Step Into Our World
          </Link>
        </div>
      </section>

      {/* Optional Reveal Section Placeholder */}
      <section className="services reveal">
        {/* Add your animated services if needed */}
      </section>
    </>
  );
};

export default Projects;


