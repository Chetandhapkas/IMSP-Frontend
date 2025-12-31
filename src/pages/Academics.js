import React from "react";
import { Link } from "react-router-dom";

export default function Academics() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#eef3f8",
      padding: "40px",
      lineHeight: "1.7",
      color: "#2c2c2c",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      background: "#ffffff",
      padding: "45px",
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
    },
    title: {
      textAlign: "center",
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "25px",
      color: "#0e1b4d",
    },
    sectionTitle: {
      fontSize: "26px",
      fontWeight: "600",
      marginTop: "35px",
      marginBottom: "12px",
      color: "#10254d",
      borderLeft: "5px solid #1a73e8",
      paddingLeft: "12px",
    },
    text: {
      fontSize: "17px",
      color: "#555",
      marginBottom: "12px",
    },
    list: {
      paddingLeft: "25px",
      marginBottom: "18px",
      fontSize: "16px",
      color: "#444",
    },
    subBox: {
      background: "#f6f9ff",
      padding: "20px",
      marginTop: "15px",
      borderRadius: "12px",
      border: "1px solid #e1e7f0",
    },
    backButton: {
      display: "block",
      width: "fit-content",
      margin: "40px auto 0",
      padding: "10px 25px",
      backgroundColor: "#1e3a8a",
      color: "white",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
      boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Academics</h1>

        {/* ------------------------ CURRICULUM ------------------------ */}
<h2 id="curriculum" style={styles.sectionTitle}>Academic Curriculum</h2>
<div style={styles.subBox}>
  <ul style={styles.list}>
    <li>Languages – English, Hindi, Marathi with strong focus on grammar, speaking, writing and personality development.</li>
    <li>Mathematics – Concept-based learning with logical reasoning, Vedic math basics, real-life problem solving and weekly practice tests.</li>
    <li>Science – Physics, Chemistry & Biology integrated with lab activities, models, experiments and STEM-based learning.</li>
    <li>Social Studies & Indian Military History – Understanding the nation’s defence heritage, geography, civics and world history.</li>
    <li>Computer Science – Robotics, Coding, AI basics, digital literacy, typing discipline and cybersecurity awareness.</li>
    <li>Environmental Studies & Life Skills – Value education, leadership skills, teamwork, critical thinking and survival discipline.</li>
  </ul>
</div>


{/* ------------------------ FACILITIES & LABS ------------------------ */}
<h2 id="facilities" style={styles.sectionTitle}>Facilities & Labs</h2>
<div style={styles.subBox}>
  <ul style={styles.list}>
    <li>Advanced Physics, Chemistry & Biology Laboratories with modern equipment for hands-on experiments.</li>
    <li>Computer Lab with Robotics Kits, AI Learning Modules, Coding Platforms and High-Speed Internet.</li>
    <li>Smart Classrooms with digital projectors, e-learning content, audio-video tutorials and interactive boards.</li>
    <li>Library with a wide range of reference books, NDA preparation books, defence magazines and competitive exam materials.</li>
    <li>Audio–Visual Room used for presentations, training lectures, military documentaries and leadership sessions.</li>
    <li>Dedicated NDA & Defence preparation room for special coaching and strategy classes.</li>
  </ul>
</div>


{/* ------------------------ TEACHING METHOD ------------------------ */}
<h2 id="methodology" style={styles.sectionTitle}>Teaching Methodology</h2>
<div style={styles.subBox}>
  <ul style={styles.list}>
    <li>Smart & Digital Learning Techniques including animations, interactive videos, and practical demonstrations.</li>
    <li>Activity-Based and Practical-Oriented Teaching with models, experiments, educational games, and real-life applications.</li>
    <li>Daily Revision & Weekly Progress Tracking to ensure consistent academic growth and concept clarity.</li>
    <li>Regular Doubt-Solving Sessions and student-specific mentoring for improved individual performance.</li>
    <li>Special Coaching for NDA, UPSC foundation, SSB basics, communication skills and defence exam strategy.</li>
  </ul>
</div>


{/* ------------------------ EXAMS & ASSESSMENT ------------------------ */}
<h2 id="exams" style={styles.sectionTitle}>Examinations & Assessments</h2>
<div style={styles.subBox}>
  <ul style={styles.list}>
    <li>Weekly Tests & Class Assessments to track chapter-wise understanding and discipline.</li>
    <li>Monthly Evaluation Tests covering multiple subjects and physical training performance.</li>
    <li>Quarterly Unit Exams measuring academic progress, leadership qualities and classroom behavior.</li>
    <li>Annual Exams conducted with strict discipline, military supervision and high academic standards.</li>
    <li>Physical + Academic performance grading including PT, drill, academics, attendance and discipline record.</li>
  </ul>
</div>


{/* ------------------------ ACADEMIC ACTIVITIES ------------------------ */}
<h2 id="activities" style={styles.sectionTitle}>Academic Activities</h2>
<div style={styles.subBox}>
  <ul style={styles.list}>
    <li>Science Exhibitions & Project Competitions encouraging innovation, creativity and research skills.</li>
    <li>Debates, Elocution & Essay Competitions to enhance confidence, leadership and communication skills.</li>
    <li>Robotics & Coding Workshops including basic programming, automation tasks and robotics challenges.</li>
    <li>Maths, Science & Quiz Competitions conducted regularly to sharpen logical and analytical abilities.</li>
    <li>Educational Visits & Field Tours to scientific centers, defence establishments, museums and training academies.</li>
  </ul>
</div>


      </div>

      <Link to="/" style={styles.backButton}>← Back to Home</Link>
    </div>
  );
}
