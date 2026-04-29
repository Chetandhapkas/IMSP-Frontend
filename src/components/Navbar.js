import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/sliderimage/logo.jpg";

function Navbar() {

  // Mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="IMS Logo" className="logo-img" />
        <span className="logo-text">Indian Military School</span>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        {/* About Dropdown */}
        <li className="dropdown">
          <span className="dropbtn">
            About ▾
          </span>

          <div className="dropdown-content">
            <Link
              to="/about#about-school"
              onClick={() => setMenuOpen(false)}
            >
              About School
            </Link>

            <Link
              to="/about#mission-training"
              onClick={() => setMenuOpen(false)}
            >
              Mission & Training
            </Link>

            <Link
              to="/about#academic-excellence"
              onClick={() => setMenuOpen(false)}
            >
              Academic Excellence
            </Link>

            <Link
              to="/about#salient-features"
              onClick={() => setMenuOpen(false)}
            >
              Salient Features
            </Link>

            <Link
              to="/about#campus-environment"
              onClick={() => setMenuOpen(false)}
            >
              Campus & Environment
            </Link>

            <Link
              to="/about#leadership"
              onClick={() => setMenuOpen(false)}
            >
              Leadership
            </Link>
          </div>
        </li>

        {/* Academics Dropdown */}
        <li className="dropdown">
          <span className="dropbtn">
            Academics ▾
          </span>

          <div className="dropdown-content">
            <Link
              to="/academics#curriculum"
              onClick={() => setMenuOpen(false)}
            >
              Curriculum
            </Link>

            <Link
              to="/academics#facilities"
              onClick={() => setMenuOpen(false)}
            >
              Facilities & Labs
            </Link>

            <Link
              to="/academics#methodology"
              onClick={() => setMenuOpen(false)}
            >
              Teaching Methodology
            </Link>

            <Link
              to="/academics#exams"
              onClick={() => setMenuOpen(false)}
            >
              Examinations & Assessments
            </Link>

            <Link
              to="/academics#activities"
              onClick={() => setMenuOpen(false)}
            >
              Academic Activities
            </Link>
          </div>
        </li>

        {/* Gallery */}
        <li>
          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>
        </li>

        {/* Results Dropdown */}
        <li className="dropdown">
          <span className="dropbtn">
            Results ▾
          </span>

          <div className="dropdown-content">

            <Link
              to="/results"
              state={{ type: "SSC" }}
              onClick={() => setMenuOpen(false)}
            >
              SSC Results
            </Link>

            <Link
              to="/results"
              state={{ type: "HSC" }}
              onClick={() => setMenuOpen(false)}
            >
              HSC Results
            </Link>

          </div>
        </li>

        {/* Contact */}
        <li>
          <Link
            to="/contactus"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;