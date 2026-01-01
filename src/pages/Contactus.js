import React from "react";
import { Link } from "react-router-dom";
import locationImg from "../assets/sliderimage/location.jpg";
import { FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";




export default function ContactUs() {
  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>

        {/* LEFT SECTION */}
        <div style={styles.left}>
          <h1 style={styles.title}>Contact Us</h1>

          <div style={styles.infoBox}>
            <p><strong>📞 Phone:</strong> +91 9890444836 </p>
            <p><strong>📱 Mobile:</strong> +91 8087423247</p>
            <p><strong>✉️ Email:</strong> info@imspulgaon.in</p>
            <p><strong>🏫 Address:</strong> At- Hiwara (Hadke), Arvi Road, Pulgoan.</p>
            <p>Post-Sorta, Tah-Deoli, Dist-Wardha. Maharashtra.</p> 
            <p>Pin Code-442302.</p>
          </div>

          {/* Image */}
          <div style={styles.imageFrame}>
            <img
                  src={locationImg}
                  alt="School"
                  style={styles.image}
            />

          </div>
        </div>

        {/* RIGHT SECTION - MAP */}
        <div style={styles.right}>
          <h2 style={styles.subtitle}>Find Us on Map</h2>
<iframe
  title="Indian Military School Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.2918558650967!2d78.33569897470716!3d20.753876297164165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd474f803eaed89%3A0x4b01c07f5b704baf!2sindian%20military%20school!5e1!3m2!1sen!2sus!4v1766059390472!5m2!1sen!2sus"
  width="100%"
  height="350"
  style={{ border: 0, borderRadius: "15px", boxShadow: "0 3px 12px rgba(0,0,0,0.15)" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>




     <h1 style={{ textAlign: "center", marginTop: "130px" }}>Connect With Us</h1>
 <div style={styles.socialBox}>
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
        <div style={{ marginTop: "20px", textAlign: "center" }}>
  <Link to="/" style={styles.backButton}>
    ← Back to Home
  </Link>
</div>

      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <h3 style={styles.footerTitle}>Indian Military School, Pulgaon</h3>
        <p>Hiwara (Hadake), Arvi Road, Maharashtra</p>
        <p>📞 07158-123456 | ✉️ info@imspulgaon.in</p>
        <p style={{ marginTop: "8px", opacity: 0.7 }}>© 2025 Indian Military School. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#eef2f7",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    background: "white",
    borderRadius: "18px",
    padding: "30px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
  },
  left: {},
  right: {},
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "26px",
    marginBottom: "15px",
    fontWeight: "600",
  },
  infoBox: {
    background: "#f8fbff",
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid #d6e2f5",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    lineHeight: "1.8",
    fontSize: "18px",
  },
  imageFrame: {
    width: "100%",
    height: "300px",
    marginTop: "20px",
    borderRadius: "15px",
    border: "4px solid #cfd8e3",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain", // ✅ FULL IMAGE VISIBLE
  },

   /* SOCIAL */
 socialBox: {
  marginTop: "30px",
  display: "flex",
  gap: "60px",
  marginLeft: "150px",
},

socialItem: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
  color: "#222",
},

socialIcon: {
  fontSize: "36px",
  marginBottom: "6px",
  transition: "transform 0.3s ease",
},


  map: {
    borderRadius: "15px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
  },

  backButton: {
  display: "inline-block",
  padding: "10px 25px",
  backgroundColor: "#132a0fff",
  color: "white",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
  transition: "all 0.3s ease",
  cursor: "pointer",
},
backButtonHover: {
  backgroundColor: "#35ae59ff",
}
,
  footer: {
    marginTop: "40px",
    textAlign: "center",
    padding: "20px 10px",
    background: "#2d4528ff",
    color: "white",
    borderRadius: "15px",
  },
  footerTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
};
