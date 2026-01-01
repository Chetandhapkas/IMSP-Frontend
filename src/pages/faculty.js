import React, { useState } from "react";
import { Link } from "react-router-dom";

// Background image (commented for now)
// import bg from "../assets/facultyimg/bg.jpg";

// Teaching staff images
// import teacher1 from "../assets/facultyimg/teacher1.jpg";
// import teacher2 from "../assets/facultyimg/teacher2.jpg";
// import teacher3 from "../assets/facultyimg/teacher3.jpg";
// import teacher4 from "../assets/facultyimg/teacher4.jpg";
// import teacher5 from "../assets/facultyimg/teacher5.jpg";
// import teacher6 from "../assets/facultyimg/teacher6.jpg";
// import teacher7 from "../assets/facultyimg/teacher7.jpg";
// import teacher8 from "../assets/facultyimg/teacher8.jpg";
// import teacher9 from "../assets/facultyimg/teacher9.jpg";
// import teacher10 from "../assets/facultyimg/teacher10.jpg";
// import teacher11 from "../assets/facultyimg/teacher11.jpg";
// import teacher12 from "../assets/facultyimg/teacher12.jpg";
// import teacher13 from "../assets/facultyimg/teacher13.jpg";
// import teacher14 from "../assets/facultyimg/teacher14.jpg";
// import teacher15 from "../assets/facultyimg/teacher15.jpg";
// import teacher16 from "../assets/facultyimg/teacher16.jpg";
// import teacher17 from "../assets/facultyimg/teacher17.jpg";
// import teacher18 from "../assets/facultyimg/teacher18.jpg";
// import teacher19 from "../assets/facultyimg/teacher19.jpg";
// import teacher20 from "../assets/facultyimg/teacher20.jpg";
// import teacher21 from "../assets/facultyimg/teacher21.jpg";
// import teacher22 from "../assets/facultyimg/teacher22.jpg";
// import teacher23 from "../assets/facultyimg/teacher23.jpg";
// import teacher24 from "../assets/facultyimg/teacher24.jpg";
// import teacher25 from "../assets/facultyimg/teacher25.jpg";
// import teacher26 from "../assets/facultyimg/teacher26.jpg";
// import teacher27 from "../assets/facultyimg/teacher27.jpg";


// Higher secondary staff images
// import hs1 from "../assets/facultyimg/hs1.jpg";
// import hs2 from "../assets/facultyimg/hs2.jpg";
// import hs3 from "../assets/facultyimg/hs3.jpg";
// import hs4 from "../assets/facultyimg/hs4.jpg";
// import hs5 from "../assets/facultyimg/hs5.jpg";
// import hs6 from "../assets/facultyimg/hs6.jpg";
// import hs7 from "../assets/facultyimg/hs7.jpg";
// import hs8 from "../assets/facultyimg/hs8.jpg";
// import hs9 from "../assets/facultyimg/hs9.jpg";
// import hs10 from "../assets/facultyimg/hs10.jpg";

const Faculty = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const profileImage = "https://via.placeholder.com/150";

  // ================= TEACHING & NON-TEACHING =================
  const teachingNonTeaching = [
    { name: "Col K H Patil (Retd)", designation: "Commandant", education: "MPM, B.Tech" },
    { name: "Mr Ravikiran Bhojane", designation: "Head Master", education: "B.Sc, B.Ed, DSM" },
    { name: "Mr Nitin Kothe", designation: "Asst Teacher", education: "BA, B.Ed, DSM" },
    { name: "Mr Manoj Lote", designation: "Asst Teacher", education: "M.Sc, B.Ed" },
    { name: "Ku Sumitra Marape", designation: "Asst Teacher", education: "BA, B.Ed" },
    { name: "Mr Nilesh Jagtap", designation: "Asst Teacher", education: "B.Sc, B.Ed" },
    { name: "Mr David Ratnam", designation: "Asst Teacher", education: "MA (Eng), B.Ed" },
    { name: "Mrs Rutuja Gharfalkar", designation: "Asst Teacher", education: "MA (Mar), B.Ed" },
    { name: "Mr Sujeet Rathod", designation: "Asst Teacher", education: "BA, B.Ed" },
    { name: "Mr Atul Wakde", designation: "Asst Teacher", education: "BA, B.Ed" },
    { name: "Mr Ashish Salve", designation: "Asst Teacher", education: "M.Sc, B.Ed" },
    { name: "Mr Pramod Gudadhe", designation: "Physical Teacher", education: "MP.Ed" },
    { name: "Mr Bapurao Tale", designation: "Asst Teacher", education: "MA (His), B.Ed" },
    { name: "Mr Umesh Khandar", designation: "Asst Teacher", education: "B.Sc, MA, B.Ed" },
    { name: "Mr Dilip Chaudhary", designation: "Asst Teacher", education: "MA (His), B.Ed" },
    { name: "Ku Rupali Ughade", designation: "Asst Teacher", education: "MA, B.Ed" },
    { name: "Mr Sandip Pachange", designation: "Asst Teacher", education: "BA, B.Ed" },
    { name: "Mr Ankush Uike", designation: "Asst Teacher", education: "BA, B.Ed" },
    { name: "Mrs Archana Jagtap", designation: "Asst Teacher", education: "M.Sc, B.Ed" },
    { name: "Mrs Vaishali Dudhe", designation: "Asst Teacher", education: "MA, B.Ed" },
    { name: "Mrs Priti Chaudhary", designation: "Asst Teacher", education: "MA, B.Ed" },
    { name: "Mr Hemant Jagtap", designation: "Computer Instructor", education: "B.Sc Computer" },
    { name: "Mr Sunil Mohad", designation: "Military Instructor", education: "Ex-N/Sub" },
    { name: "Mr Mahesh Alaspurkar", designation: "Military Instructor", education: "Ex-Hav" },
    { name: "Mr Pravin Dhobale", designation: "Clerk", education: "B.Sc" },
    { name: "Mr Pramod Nandagawli", designation: "Peon", education: "BA" },
    { name: "Mr Pankaj Kadu", designation: "Peon", education: "SSC" },
  ];

  //With image
  /*
  const teachingNonTeaching = [
  { name: "Col K H Patil (Retd)", designation: "Commandant", education: "MPM, B.Tech", image: teacher1 },
  { name: "Mr Ravikiran Bhojane", designation: "Head Master", education: "B.Sc, B.Ed, DSM", image: teacher2 },
  { name: "Mr Nitin Kothe", designation: "Asst Teacher", education: "BA, B.Ed, DSM", image: teacher3 },
  { name: "Mr Manoj Lote", designation: "Asst Teacher", education: "M.Sc, B.Ed", image: teacher4 },
  { name: "Ku Sumitra Marape", designation: "Asst Teacher", education: "BA, B.Ed", image: teacher5 },
  { name: "Mr Nilesh Jagtap", designation: "Asst Teacher", education: "B.Sc, B.Ed", image: teacher6 },
  { name: "Mr David Ratnam", designation: "Asst Teacher", education: "MA (Eng), B.Ed", image: teacher7 },
  { name: "Mrs Rutuja Gharfalkar", designation: "Asst Teacher", education: "MA (Mar), B.Ed", image: teacher8 },
  { name: "Mr Sujeet Rathod", designation: "Asst Teacher", education: "BA, B.Ed", image: teacher9 },
  { name: "Mr Atul Wakde", designation: "Asst Teacher", education: "BA, B.Ed", image: teacher10 },
  { name: "Mr Ashish Salve", designation: "Asst Teacher", education: "M.Sc, B.Ed", image: teacher11 },
  { name: "Mr Pramod Gudadhe", designation: "Physical Teacher", education: "MP.Ed", image: teacher12 },
  { name: "Mr Bapurao Tale", designation: "Asst Teacher", education: "MA (His), B.Ed", image: teacher13 },
  { name: "Mr Umesh Khandar", designation: "Asst Teacher", education: "B.Sc, MA, B.Ed", image: teacher14 },
  { name: "Mr Dilip Chaudhary", designation: "Asst Teacher", education: "MA (His), B.Ed", image: teacher15 },
  { name: "Ku Rupali Ughade", designation: "Asst Teacher", education: "MA, B.Ed", image: teacher16 },
  { name: "Mr Sandip Pachange", designation: "Asst Teacher", education: "BA, B.Ed", image: teacher17 },
  { name: "Mr Ankush Uike", designation: "Asst Teacher", education: "BA, B.Ed", image: teacher18 },
  { name: "Mrs Archana Jagtap", designation: "Asst Teacher", education: "M.Sc, B.Ed", image: teacher19 },
  { name: "Mrs Vaishali Dudhe", designation: "Asst Teacher", education: "MA, B.Ed", image: teacher20 },
  { name: "Mrs Priti Chaudhary", designation: "Asst Teacher", education: "MA, B.Ed", image: teacher21 },
  { name: "Mr Hemant Jagtap", designation: "Computer Instructor", education: "B.Sc Computer", image: teacher22 },
  { name: "Mr Sunil Mohad", designation: "Military Instructor", education: "Ex-N/Sub", image: teacher23 },
  { name: "Mr Mahesh Alaspurkar", designation: "Military Instructor", education: "Ex-Hav", image: teacher24 },
  { name: "Mr Pravin Dhobale", designation: "Clerk", education: "B.Sc", image: teacher25 },
  { name: "Mr Pramod Nandagawli", designation: "Peon", education: "BA", image: teacher26 },
  { name: "Mr Pankaj Kadu", designation: "Peon", education: "SSC", image: teacher27 },
];
*/

  // ================= HIGHER SECONDARY =================
  const higherSecondary = [
    { name: "Mr Rahul Wankhede", designation: "Asst Teacher", education: "M.Sc (Zoology), B.Ed" },
    { name: "Mr Pravin Shelke", designation: "Asst Teacher", education: "MA (Eng), B.Ed" },
    { name: "Mr Ankush Kemble", designation: "Asst Teacher", education: "M.Sc (Chem), B.Ed" },
    { name: "Mr Vijay Hage", designation: "Asst Teacher", education: "M.Sc (Phy), B.Ed" },
    { name: "Mr Swapnil Jagtap", designation: "Asst Teacher", education: "M.Sc (Math), B.Ed" },
    { name: "Mr Naresh Wanare", designation: "Lab Assistant", education: "Dip Engg" },
    { name: "Mr Pravin Lavange", designation: "Lab Assistant", education: "HSC" },
    { name: "Mr Jayendra Kumare", designation: "Peon", education: "SSC" },
    { name: "Mr Ravindra Kode", designation: "Peon", education: "BA" },
    { name: "Mr Vijay Gore", designation: "Part Time Librarian", education: "B.Lib" },
  ];

  //With image
  /*
  const higherSecondary = [
  { name: "Mr Rahul Wankhede", designation: "Asst Teacher", education: "M.Sc (Zoology), B.Ed", image: hs1 },
  { name: "Mr Pravin Shelke", designation: "Asst Teacher", education: "MA (Eng), B.Ed", image: hs2 },
  { name: "Mr Ankush Kemble", designation: "Asst Teacher", education: "M.Sc (Chem), B.Ed", image: hs3 },
  { name: "Mr Vijay Hage", designation: "Asst Teacher", education: "M.Sc (Phy), B.Ed", image: hs4 },
  { name: "Mr Swapnil Jagtap", designation: "Asst Teacher", education: "M.Sc (Math), B.Ed", image: hs5 },
  { name: "Mr Naresh Wanare", designation: "Lab Assistant", education: "Dip Engg", image: hs6 },
  { name: "Mr Pravin Lavange", designation: "Lab Assistant", education: "HSC", image: hs7 },
  { name: "Mr Jayendra Kumare", designation: "Peon", education: "SSC", image: hs8 },
  { name: "Mr Ravindra Kode", designation: "Peon", education: "BA", image: hs9 },
  { name: "Mr Vijay Gore", designation: "Part Time Librarian", education: "B.Lib", image: hs10 },
];
*/

  return (
    <>
      <style>{`
        body { margin: 0; font-family: Arial, sans-serif; }

        .hero {
          background: url("https://images.unsplash.com/photo-1509062522246-3755977927d7") center/cover;
          padding: 90px 20px;
          color: #fff;
          text-align: center;
          position: relative;
        }
        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.65);
        }
        .hero-content { position: relative; max-width: 900px; margin: auto; }

        .btn {
          background: #fff;
          color: #1d4123ff;
          padding: 12px 28px;
          margin: 10px;
          border-radius: 8px;
          font-weight: bold;
          border: none;
          cursor: pointer;
        }
        .btn:hover { background: #1e4524ff; color: #fff; }

        .faculty-section { padding: 60px 20px; background: #f5f7fa; }
        .faculty-heading { text-align: center; font-size: 28px; margin-bottom: 30px; }

        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: auto;
        }

        .faculty-card {
          background: #fff;
          padding: 20px;
          text-align: center;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .faculty-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        }
        .faculty-card img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        /* MODAL */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background: #fff;
          padding: 30px;
          border-radius: 14px;
          width: 320px;
          text-align: center;
          position: relative;
        }
        .close {
          position: absolute;
          top: 10px;
          right: 14px;
          font-size: 22px;
          cursor: pointer;
        }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="hero-content">
          <h1>Our Faculty</h1>
          <p>
            Our institution is proud of its disciplined, experienced and dedicated
            faculty members who shape students’ academic excellence and character.
          </p>
          <button className="btn" onClick={() => setActiveSection("teaching")}>
            Teaching & Non-Teaching Staff
          </button>
          <button className="btn" onClick={() => setActiveSection("higher")}>
            Higher Secondary Faculty
          </button>
        </div>   
      </div>

      {/* FACULTY LIST */}
      {activeSection && (
        <div className="faculty-section">
          <h2 className="faculty-heading">
            {activeSection === "teaching"
              ? "Teaching & Non-Teaching Staff"
              : "Higher Secondary Faculty"}
          </h2>

          <div className="faculty-grid">
            {(activeSection === "teaching"
              ? teachingNonTeaching
              : higherSecondary
            ).map((staff, i) => (
              <div
                key={i}
                className="faculty-card"
                onClick={() => setSelectedStaff(staff)}
              >
                <img src={profileImage} alt={staff.name} />
                <h3>{staff.name}</h3>
                <p>{staff.designation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* POPUP */}
      {selectedStaff && (
        <div className="modal-overlay" onClick={() => setSelectedStaff(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedStaff(null)}>×</span>
            <img src={profileImage} alt={selectedStaff.name} />
            <h3>{selectedStaff.name}</h3>
            <p><b>Designation:</b> {selectedStaff.designation}</p>
            <p><b>Education:</b> {selectedStaff.education}</p>
          </div>
        </div>
      )}
        <div style={{ marginTop: "20px", textAlign: "right" }}>
  <Link
    to="/"
    style={{
      backgroundColor: "#1f7a2e",
      color: "#fff",
      padding: "8px 16px",   // smaller size
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "14px",
      transition: "all 0.3s ease",
      display: "inline-block",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#071408ff"; // darker on hover
      e.target.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#101f0cff"; // original color
      e.target.style.transform = "scale(1)";
    }}
  >
    ← Back to Home
  </Link>
</div>

    </>
  );
};

export default Faculty;