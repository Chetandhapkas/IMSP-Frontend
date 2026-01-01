import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/sliderimage/logo.jpg";


function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="IMS Logo" className="logo-img" />
        <span className="logo-text">Indian Military School</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* About Dropdown */}
        <li className="dropdown">
          <span className="dropbtn">About ▾</span>
          <div className="dropdown-content">
            <Link to="/about#about-school">About School</Link>
            <Link to="/about#mission-training">Mission & Training</Link>
            <Link to="/about#academic-excellence">Academic Excellence</Link>
            <Link to="/about#salient-features">Salient Features</Link>
            <Link to="/about#campus-environment">Campus & Environment</Link>
            <Link to="/about#leadership">Leadership</Link>
          </div>
        </li>

        {/* Academics Dropdown */}
        <li className="dropdown">
          <span className="dropbtn">Academics ▾</span>
          <div className="dropdown-content">
            <Link to="/academics#curriculum">Curriculum</Link>
            <Link to="/academics#facilities">Facilities & Labs</Link>
            <Link to="/academics#methodology">Teaching Methodology</Link>
            <Link to="/academics#exams">Examinations & Assessments</Link>
            <Link to="/academics#activities">Academic Activities</Link>
          </div>
        </li>

        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/results">Results</Link>
        </li>
        <li>
          <Link to="/contactus">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
