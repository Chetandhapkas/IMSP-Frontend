import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import locationImg from "../assets/sliderimage/location.jpg";
import { FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function ContactUs() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.page}>
      <div style={isMobile ? styles.wrapperMobile : styles.wrapperDesktop}>

        {/* LEFT */}
        <div>
          <h1 style={styles.title}>Contact Us</h1>

          <div style={styles.infoBox}>
            <p><strong>📞 Phone:</strong> +91 9890444836</p>
            <p><strong>📱 Mobile:</strong> +91 8087423247</p>
            <p><strong>✉️ Email:</strong> info@imspulgaon.in</p>
            <p><strong>🏫 Address:</strong> At- Hiwara (Hadke), Arvi Road, Pulgaon.</p>
            <p>Post-Sorta, Tah-Deoli, Dist-Wardha.</p>
            <p>Pin Code-442302.</p>
          </div>

          <div style={styles.imageFrame}>
            <img src={locationImg} alt="School" style={styles.image} />
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h2 style={styles.subtitle}>Find Us on Map</h2>

          <iframe
            title="Indian Military School Map"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.2918558650967!2d78.33569897470716!3d20.753876297164165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd474f803eaed89%3A0x4b01c07f5b704baf!2sindian%20military%20school!5e1!3m2!1sen!2sus!4v1766059390472!5m2!1sen!2sus"
            style={isMobile ? styles.mapMobile : styles.mapDesktop}
            loading="lazy"
          />

          <h2 style={styles.connectTitle}>Connect With Us</h2>

          <div style={isMobile ? styles.socialMobile : styles.socialDesktop}>

  <a
    href="https://youtu.be/o9V78VCA4Xk?si=ABb1EVm5nnWQP-Yy"
    target="_blank"
    rel="noreferrer"
    style={styles.socialItem}
  >
    <FaYoutube style={{ ...styles.socialIcon, color: "#FF0000" }} />
    <span>YouTube</span>
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=100067904228930"
    target="_blank"
    rel="noreferrer"
    style={styles.socialItem}
  >
    <FaFacebookF style={{ ...styles.socialIcon, color: "#1877F2" }} />
    <span>Facebook</span>
  </a>

  <a
    href="https://twitter.com/IndianMilitarySch"
    target="_blank"
    rel="noreferrer"
    style={styles.socialItem}
  >
    <FaTwitter style={{ ...styles.socialIcon, color: "#1DA1F2" }} />
    <span>Twitter</span>
  </a>

</div>

        </div>

        <div style={styles.backWrapper}>
          <Link to="/" style={styles.backButton}>← Back to Home</Link>
        </div>
      </div>

      <footer style={styles.footer}>
        <h3>Indian Military School, Pulgaon</h3>
        <p>© 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#eef2f7",
    padding: "20px",
    fontFamily: "Arial",
  },

  /* DESKTOP */
  wrapperDesktop: {
    maxWidth: "1200px",
    margin: "auto",
    background: "#fff",
    padding: "25px",
    borderRadius: "18px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
  },

  /* MOBILE */
  wrapperMobile: {
    maxWidth: "100%",
    margin: "auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },

  title: { fontSize: "30px", marginBottom: "15px" },
  subtitle: { fontSize: "24px", marginBottom: "10px" },

  infoBox: {
    background: "#f8fbff",
    padding: "16px",
    borderRadius: "10px",
    fontSize: "15px",
  },

  imageFrame: {
    marginTop: "15px",
    height: "230px",
    borderRadius: "12px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  mapDesktop: {
    width: "100%",
    height: "350px",
    borderRadius: "15px",
    border: 0,
  },

  mapMobile: {
    width: "100%",
    height: "250px",
    borderRadius: "12px",
    border: 0,
  },

  connectTitle: {
    textAlign: "center",
    margin: "25px 0 15px",
  },

  socialDesktop: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
  },

  socialMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },

  socialItem: {
    textDecoration: "none",
    color: "#222",
    fontWeight: "600",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  socialIcon: {
    fontSize: "34px",
  },

  backWrapper: {
    textAlign: "center",
    gridColumn: "1 / -1",
  },

  backButton: {
    padding: "10px 22px",
    background: "#132a0f",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
  },

  footer: {
    marginTop: "30px",
    background: "#2d4528",
    color: "#fff",
    textAlign: "center",
    padding: "15px",
    borderRadius: "12px",
  },
};
