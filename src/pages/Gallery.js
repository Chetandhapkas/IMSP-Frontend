import React, { useState } from "react";
import { Link } from "react-router-dom";
import slider1 from "../assets/sliderimage/slider1.jpg";
import slider2 from "../assets/sliderimage/slider2.jpg";
import slider3 from "../assets/sliderimage/slider3.jpg";
import slider4 from "../assets/sliderimage/slider4.jpg";
import slider5 from "../assets/sliderimage/slider5.jpg";

export default function GalleryPage() {
  const images = [slider1, slider2, slider3, slider4, slider5];
  const [currentImg, setCurrentImg] = useState(null);

  return (
    <div style={{ padding: "50px", backgroundColor: "#eef3f8", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontSize: "42px", fontWeight: "700", marginBottom: "40px", color: "#0e1b4d" }}>
        School Gallery
      </h1>

      {/* Grid Gallery */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {images.map((img, index) => (
          <div key={index} 
               style={{
                 position: "relative",
                 overflow: "hidden",
                 borderRadius: "12px",
                 cursor: "pointer",
                 boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                 transition: "transform 0.3s, box-shadow 0.3s"
               }}
               onClick={() => setCurrentImg(index)}
               onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
               onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={img} alt={`Gallery ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              padding: "10px",
              background: "rgba(186, 239, 151, 0.7)",
              color: "#000000ff",
              textAlign: "center",
              fontWeight: "bold",
              opacity: 0,
              transition: "opacity 0.3s"
            }} className="overlay">
              Image {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Fullscreen */}
      {currentImg !== null && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          cursor: "pointer"
        }} onClick={() => setCurrentImg(null)}>
          <img src={images[currentImg]} alt={`Gallery ${currentImg + 1}`} style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }} />
        </div>
      )}

      {/* Back to Home Button */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/" style={{
          display: "inline-block",
          padding: "12px 30px",
          backgroundColor: "#47553bff",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transition: "all 0.3s"
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          ← Back to Home
        </Link>
      </div>

      {/* Inline CSS for overlay hover */}
      <style>{`
        .overlay:hover {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
