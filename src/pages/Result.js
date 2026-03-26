import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import imsBg from "../assets/Gallery/GR.jpg";

const IMS_BG_IMAGE = imsBg;


const Results = () => {
  const location = useLocation();
  const [type, setType] = useState("SSC");

  useEffect(() => {
    if (location.state?.type) {
      setType(location.state.type);
    }
  }, [location]);

  return (
    <div
      style={{
        ...styles.page,
        backgroundImage: `url(${IMS_BG_IMAGE})`,
        //filter: "brightness(56%)",
      }}
    >
      {/* Overlay */}
      <div style={styles.overlay}>
        <h1 style={styles.title}>INDIAN MILITARY SCHOOL</h1>
        <p style={styles.subtitle}>Result Highlights & Academic Excellence</p>

        {/* Toggle */}
        <div style={styles.toggle}>
          <button
            style={type === "SSC" ? styles.activeBtn : styles.btn}
            onClick={() => setType("SSC")}
          >
            SSC RESULTS
          </button>
          <button
            style={type === "HSC" ? styles.activeBtn : styles.btn}
            onClick={() => setType("HSC")}
          >
            HSC RESULTS
          </button>
        </div>

        {/* Result Content */}
        {type === "SSC" && (
          <ResultCard title="SSC Result Board" data={sscData} />
        )}
        {type === "HSC" && (
          <ResultCard title="HSC Result Board" data={hscData} />
        )}
      </div>
    </div>
  );
};

/* ---------- Result Card ---------- */
const ResultCard = ({ title, data }) => (
  <div style={styles.card}>
    <h2 style={styles.cardTitle}>{title}</h2>

    <div style={styles.cardContent}>
      {data.map((item) => (
        <div key={item.sr} style={styles.row}>
          <div style={styles.sr}>{item.sr}</div>
          <div>
            <p><b>Academic Year:</b> {item.year}</p>
            <p><b>School Passing:</b> {item.passing}</p>
            <p><b>Highest Achiever:</b> {item.topper}</p>
            <p><b>Percentage:</b> {item.percent}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);


/* ---------- DATA ---------- */
const sscData = [
  {
    sr: 1,
    year: "2024–25",
    passing: "100%",
    topper: "Harshad L. Gulhane",
    percent: "92.60%",
  },
  {
    sr: 2,
    year: "2023–24",
    passing: "100%",
    topper: "Devanshu V. Parteki",
    percent: "87.60%",
  },
];

const hscData = [
  {
    sr: 1,
    year: "2024–25",
    passing: "100%",
    topper: "Vansh G. Harke",
    percent: "69.00%",
  },
];

/* ---------- STYLES ---------- */
/* ---------- STYLES ---------- */
const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    padding: "40px 20px",
    backgroundImage: `url(${IMS_BG_IMAGE})`, // your background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  // Dimmed background only
  pageDim: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "inherit",
    filter: "brightness(39%)",
    zIndex: 0,
  },

  overlay: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    textAlign: "center",
    color: "#202304ff", // Navy blue
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "6px",
    textTransform: "uppercase",
  },

  subtitle: {
    textAlign: "center",
    color: "#443407ff",
    fontSize: "25px",
    marginBottom: "30px",
  },

  toggle: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },

  btn: {
    padding: "10px 25px",
    border: "1px solid #46620062",
    background: "#ffffff",
    color: "#578102ff",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  activeBtn: {
    padding: "10px 25px",
    border: "1px solid #274509ff",
    background: "#2c300aff",
    color: "#ffffff",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  card: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "#e8de9aff",
    padding: "25px",
    border: "1px solid #afc06dff",
  },

  cardTitle: {
    textAlign: "center",
    color: "#7b241c", // Maroon (official)
    fontSize: "20px",
    marginBottom: "25px",
    textTransform: "uppercase",
  },

  cardContent: {
    maxHeight: "320px", // height for ~2 students
    overflowY: "auto",  // scroll if more students
    paddingRight: "30px",
  },

  row: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    padding: "15px 10px",
    borderBottom: "1px solid #ddd",
  },

  sr: {
    minWidth: "40px",
    height: "40px",
    border: "1px solid #040f16ff",
    color: "#0b3c5d",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
  },
};

export default Results;
