import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo & Tagline */}
        <div>
          <Link
            to="/"
            className="logo"
            style={{
              fontFamily: "Poppins, Georgia",
              fontSize: 36,
              color: "rgb(1, 1, 116)",
            }}
          >
            IRRA SPACES
          </Link>
          <h4
            style={{
              fontFamily: "Poppins, Georgia",
              fontSize: 18,
              color: "rgb(44, 1, 123)",
            }}
          >
            Envision, Design, Create, Inspire
          </h4>
        </div>

        {/* Toggle Button (Mobile Only) */}
        <div
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
          <Link
            to="/process"
            className={location.pathname === "/process" ? "active" : ""}
          >
            Process
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
