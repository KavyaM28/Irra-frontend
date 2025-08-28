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

        {/* Toggle Button */}
        <div
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {["/", "/about", "/services", "/projects", "/process", "/contact"].map(
            (path, index) => (
              <Link
                key={path}
                to={path}
                className={`nav-item ${
                  location.pathname === path ? "active" : ""
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 0.1}s` : "0s" }}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
