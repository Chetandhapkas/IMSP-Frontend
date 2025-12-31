import React from "react";
import "./Footer.css"; // create this later for footer styles

function Footer() {
  return (
    <footer className="school-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Indian Military School, Pulgaon</h2>
          <p>Empowering Students, Building Nation.</p>
          <p>&copy; 1995 Indian Military School. All rights reserved.</p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>📍 Arvi Road, Pulgaon</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ IMSP@gmail.com</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/Contactus">Contact</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
