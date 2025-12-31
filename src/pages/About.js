import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Indian Military School, Pulgaon</h1>

      {/* ABOUT SCHOOL SECTION */}
      <section id="about-school" style={styles.section}>
  <h2 style={styles.subtitle}>About School</h2>
  <p style={styles.text}>
    Indian Military School, Pulgaon is one of Maharashtra’s most trusted residential
    military boarding institutions, established in 2003 with a vision to shape young
    students into disciplined, confident, and nation-ready cadets. Spread across a
    secure and serene 33-acre campus in Hiwara (Hadake), Arvi Road, the school offers
    a perfect blend of academics, military discipline, physical fitness, and overall
    character building.
  </p>
  <p style={styles.text}>
    The school provides an environment that resembles a mini military academy, with
    parade grounds, obstacle courses, dedicated training zones, and 24×7 residential
    supervision. IMS Pulgaon focuses on building strong values such as respect,
    determination, leadership, and patriotism.
  </p>
  <p style={styles.text}>
    The institution aims to create future leaders who are mentally sharp, physically
    fit, emotionally strong, and ready to serve the country in defence forces as well
    as civil sectors. Through expert guidance and structured development programs,
    IMS ensures holistic grooming of every cadet.
  </p>
</section>


      {/* MISSION & TRAINING */}
      <section id="mission" style={styles.section}>
  <h2 style={styles.subtitle}>Mission & Training</h2>
  <p style={styles.text}>
    The mission of Indian Military School, Pulgaon is to nurture cadets who embody
    discipline, integrity, courage, confidence, and patriotism. The school focuses on
    balanced development by incorporating academics, physical education, military-style
    training, personality development, and leadership skills.
  </p>
  <p style={styles.text}>
    Students follow a structured daily routine beginning with morning Physical Training
    (PT), drills, parade practice, meditation for mental focus, supervised study hours,
    sports sessions, and value-education classes. Retired Army personnel guide cadets
    in military etiquette, discipline, communication skills, and team-building.
  </p>
  <p style={styles.text}>
    IMS Pulgaon encourages punctuality, responsibility, respectful behavior, and
    time management—traits essential for NDA aspirants and future officers. Every
    cadet learns to manage time, follow orders, and work as a unified team.
  </p>
</section>


      {/* ACADEMICS */}
      <section id="academics" style={styles.section}>
  <h2 style={styles.subtitle}>Academic Excellence</h2>
  <p style={styles.text}>
    IMS Pulgaon ensures high academic standards through qualified faculty, smart
    classrooms, structured study schedules, and regular assessments. Cadets are
    groomed to excel in both board examinations and competitive entrance tests.
  </p>
  <p style={styles.text}>
    The school features digital learning modules, well-equipped science laboratories,
    advanced computer labs, and a fully functional Atal Tinkering Lab (ATL) to foster
    innovation, robotics, technology, and hands-on scientific learning.
  </p>
  <p style={styles.text}>
    Special preparation is offered for:
    <br />• NDA Written Exam
    <br />• Sainik School Entrance Exam
    <br />• RMS & RIMC Exams
    <br />• Science & Math Olympiads
    <br />• National Scholarship Exams
    <br />• General Competitive Readiness
  </p>
</section>


      {/* SALIENT FEATURES */}
      <section id="features" style={styles.section}>
  <h2 style={styles.subtitle}>Salient Features</h2>
  <ul style={styles.list}>
    <li>Fully residential military school with 24×7 disciplined supervision.</li>
    <li>House system inspired by national heroes: Shivaji, Ashoka, Rana Pratap & Bose.</li>
    <li>Daily parade, drills, obstacle training, and physical fitness sessions.</li>
    <li>Advanced labs: Science, Computer, Robotics, Language, and ATL.</li>
    <li>Dedicated NDA-oriented coaching with SSB interview guidance.</li>
    <li>Yearly inter-house competitions in academics, sports, arts, and leadership.</li>
    <li>Large playgrounds for football, volleyball, basketball, athletics, etc.</li>
    <li>Indoor sports, library, reading hall, meditation room, and fitness gym.</li>
    <li>Safe campus with hostel wardens, CCTV surveillance, and medical facilities.</li>
  </ul>
</section>


      {/* CAMPUS */}
      <section id="campus" style={styles.section}>
  <h2 style={styles.subtitle}>Campus & Environment</h2>
  <p style={styles.text}>
    The peaceful 33-acre campus of IMS Pulgaon is designed to support disciplined
    living, academic growth, and physical excellence. It includes dedicated military
    training areas, obstacle courses, running tracks, sports grounds, and drill
    spaces for parade and formations.
  </p>
  <p style={styles.text}>
    Academic blocks are equipped with modern classrooms, science labs, language labs,
    computer labs, ATL robotics lab, library, seminar hall, and digital learning
    resources. Hostels are spacious, secure, and supervised round-the-clock by trained
    wardens and staff.
  </p>
  <p style={styles.text}>
    Natural greenery, clean surroundings, and a disciplined atmosphere ensure that
    students stay focused, energized, and mentally strong throughout their training.
  </p>
</section>

      {/* LEADERSHIP */}
      <section id="leadership" style={styles.section}>
  <h2 style={styles.subtitle}>Principal & Leadership</h2>
  <p style={styles.text}>
    Indian Military School, Pulgaon is led by a highly experienced Retired Defence
    Officer serving as the Commandant, supported by an academically strong Principal,
    trained faculty members, and dedicated administrative staff. Together they ensure
    discipline, academic integrity, and uninterrupted student development.
  </p>
  <p style={styles.text}>
    The leadership team organizes regular motivational sessions by Army, Navy, and
    Air Force officers, SSB experts, psychologists, and career counsellors to guide
    cadets towards careers in the defence forces and other national services.
  </p>
</section>

      {/* BACK BUTTON */}
      <div style={styles.buttonContainer}>
        <Link to="/" style={styles.button}>⬅ Back to Home</Link>
      </div>
    </div>
  );
}

export default About;

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f7f9fc",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: "1.7",
  },
  title: {
    fontSize: "34px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "25px",
    color: "#0b214a",
  },
  section: {
    marginBottom: "30px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
  },
  subtitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#314e24",
  },
  text: {
    fontSize: "17px",
    color: "#444",
    marginBottom: "8px",
  },
  list: {
    fontSize: "17px",
    paddingLeft: "25px",
    color: "#444",
    lineHeight: "1.8",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#0b214a",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
  },
};
