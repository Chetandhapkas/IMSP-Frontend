import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo and Text */}
      <div className="logo">
        <img
  src="/sliderimg/logo.jpg"  // notice the leading /
  alt="IMS Logo"
  className="logo-img"
/>

        <span>Indian Military School</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
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
    
  <li className="dropdown">
  <Link to="/academics" className="dropbtn">Academics ▾</Link>

  <div className="dropdown-content">
    <Link to="/academics#curriculum">Curriculum</Link>
    <Link to="/academics#facilities">Facilities & Labs</Link>
    <Link to="/academics#methodology">Teaching Methodology</Link>
    <Link to="/academics#exams">Examinations & Assessments</Link>
    <Link to="/academics#activities">Academic Activities</Link>
  </div>
</li>

        <li>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/Results">Results</Link>
        </li>
        <li>
          <Link to="/Contactus">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
