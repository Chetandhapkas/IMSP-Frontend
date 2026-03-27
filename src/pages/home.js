import React, { useState } from "react";
import "./Home.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

// Assets
import headerVideo from "../assets/images/background/headerb.mp4";
import president from "../assets/images/president.png";
import secretary from "../assets/images/seceratory.png";
import colonel from "../assets/images/colonel.png";
import principal from "../assets/images/Princippal.png";
import vicePrincipal from "../assets/images/viceprincipal.jpg";

import slider1 from "../assets/sliderimage/slider1.jpg";
import slider2 from "../assets/sliderimage/slider2.jpg";
import slider3 from "../assets/sliderimage/slider3.jpg";
import slider4 from "../assets/sliderimage/slider4.jpg";
import slider5 from "../assets/sliderimage/slider5.jpg";
import slider6 from "../assets/sliderimage/slider6.jpg";
import slider7 from "../assets/sliderimage/slider7.jpg";
import slider8 from "../assets/sliderimage/slider8.jpg";
import slider9 from "../assets/sliderimage/slider9.jpg";
import slider10 from "../assets/sliderimage/slider10.jpg";

//facilites 
/*import hostel1 from "../assets/facilities/hostel1.jpg";
import hostel2 from "../assets/facilities/hostel2.jpg";
import hostel3 from "../assets/facilities/hostel3.jpg";

import mess1 from "../assets/facilities/mess1.jpg";
import mess2 from "../assets/facilities/mess2.jpg";
import mess3 from "../assets/facilities/mess3.jpg";
*/
import school1 from "../assets/facilities/school1.jpg";
import school2 from "../assets/facilities/school2.jpg";
import school3 from "../assets/facilities/school3.jpg";


function Home() { 
  const [formData, setFormData] = useState({
    name: "",
    studentClass: "",
    parentEmail: "",
    parentMobile: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  // ✅ NEW: loading state
  const [loading, setLoading] = useState(false);

  // ===============================
  // ✅ Handle Input Change
  // ===============================
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // allow only numbers for mobile
    if (name === "parentMobile" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // ===============================
  // ✅ Validation Function
  // ===============================
  const validateForm = () => {
    const { name, studentClass, parentEmail, parentMobile } = formData;

    // trim validation
    if (!name.trim() || !studentClass.trim() || !parentEmail.trim() || !parentMobile.trim()) {
      alert("All fields are required ❌");
      return false;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(parentEmail)) {
      alert("Enter valid email ❌");
      return false;
    }

    // mobile validation
    if (parentMobile.length !== 10 || isNaN(parentMobile)) {
      alert("Mobile must be 10 digits ❌");
      return false;
    }

    return true;
  };

  // ===============================
  // ✅ Handle Submit
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true); // start loading

      const response = await fetch("https://http://imsp-backend.onrender.com/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      setLoading(false); // stop loading

      if (!response.ok) {
        alert(result.message || "Something went wrong ❌");
        return;
      }

      console.log(result);

      setShowThankYou(true);

      // auto close popup after 3 sec
      setTimeout(() => {
        setShowPopup(false);
        setShowThankYou(false);
      }, 3000);

      // reset form
      setFormData({
        name: "",
        studentClass: "",
        parentEmail: "",
        parentMobile: "",
      });

    } catch (error) {
      setLoading(false);
      alert("Server is busy. Please try again ❌");
      console.error(error);
    }
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="main-header">
        <video autoPlay loop muted className="header-video">
          <source src={headerVideo} type="video/mp4" />
        </video>
        <h1>Indian Military School, Pulgaon</h1>
        <p className="motto">विश्व शांती ध्येय आमचे</p>
      </header>

      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Indian Military School</h1>
          <p className="hero-tagline">शिस्त, नेतृत्व आणि उत्कृष्टता</p>
          <button className="cta-button" onClick={() => setShowPopup(true)}>
            Apply Now
          </button>
        </div>
      </section>

      {/* About + Swiper Section */}
      <div className="main-box-wrapper">
        <div className="main-box">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              <strong>Indian Military School, Pulgaon Hiwra</strong> stands as a symbol of excellence, discipline, and dedication...
            </p>
            <p>
              Eklavya S.G.V.B.S. (Reg.No.F-11374)
              <br />
              Eklavya shikshan & Gramin Vikas Bahuddeshiya Sansta, Amravati’s
              <br />
              <strong>INDIAN MILITARY SCHOOL</strong>
              <br />
              (  Secondary & Higher Secondary Classes 6 to 12 Science )
              <br />
              Hiwara (Hadke), Arvi Road, Pulgoan. Post-Sorta, Tah-Deoli, Dist-Wardha (M.S.)
            </p>
            <p>
              Our Mission:

            To impart quality education alongside military training.

            To develop leadership, discipline, and a sense of responsibility among students.

            To foster moral values, integrity, and patriotism in young minds.

            IMS Pulgaon emphasizes military discipline, teamwork, and leadership qualities. Students are groomed to meet challenges with confidence and become responsible citizens of the nation.
            </p>
          </div>

          <div className="swiper-box">
            <Swiper
              spaceBetween={30}
              centeredSlides
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {[slider1, slider2, slider3, slider4, slider5, slider6].map(
                (img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt={`Slide ${i + 1}`} />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Founders Section */}
<h2 className="section-heading">Our Guiding Pillars of Indian Military School</h2>
<section className="founder-section">
  <div className="founder-row-2">
    <div className="box">
      <img src={president} alt="President" />
      <h3>President</h3>
      <h5>Mr. Manoj Bhende Sir</h5>
      <p>Providing visionary leadership and guiding the school’s direction.</p>
    </div>
    <div className="box">
      <img src={secretary} alt="Secretary" />
      <h3>Secretary</h3>
      <h5>Mr. Krishnabhau Kadu Sir</h5>
      <p>Overseeing administration and ensuring smooth school operations.</p>
    </div>
  </div>

  <div className="founder-row-3">
    <div className="box">
      <img src={colonel} alt="Commandant" />
      <h3>Commandant</h3>
      <h5>Col. K.H. Patil Sir</h5>
      <p>Head of military training and tactical leadership programs.</p>
    </div>

    <div className="box">
      <img src={principal} alt="Principal" />
      <h3>Principal</h3>
      <h5>Mr. Ravikiran Bhojane Sir</h5>
      <p>Responsible for academic excellence and maintaining discipline.</p>
    </div>

    <div className="box">
      <img src={vicePrincipal} alt="Vice Principal" />
      <h3>Vice Principal</h3>
      <h5>Mr.Nitin Kothe sir</h5>
      <p>Assisting in managing academic programs and student affairs.</p>
    </div>
  </div>

  {/* Show Faculty Button */}
  <div style={{ textAlign: "center", marginTop: "30px" }}>
    <Link
      to="/faculty"
      style={{
        display: "inline-block",
        padding: "12px 28px",
        backgroundColor: "#19301dff",
        color: "#fff",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#2e3b2d")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#2e3b2d")}
    >
      Show Faculty
    </Link>
  </div>
</section>


      {/* Gallery Section */}
<section className="gallery-section">
  <h2 className="section-heading">Our Gallery</h2>
  <Swiper
    spaceBetween={20}
    slidesPerView={4}
    loop
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    breakpoints={{
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 },
    }}
    modules={[Pagination, Autoplay]}
    className="gallery-swiper"
  >
    {[slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10].map(
      (img, i) => (
        <SwiperSlide key={i} className="gallery-slide">
          <img src={img} alt={`Gallery ${i + 1}`} />
        </SwiperSlide>
      )
    )}
  </Swiper>

  {/* Show More Button */}
  <div style={{ textAlign: "center", marginTop: "30px" }}>
    <Link
      to="/gallery"
      style={{
        display: "inline-block",
        padding: "12px 28px",
        backgroundColor: "#22310bff",
        color: "#fff",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#2e3b2d")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#2e3b2d")}
    >
      Show More
    </Link>
  </div>
</section>

{/* ================= FACILITIES SECTION ================= */}
<section className="facilities-section">
  <h2 className="facilities-heading">Our Facilities</h2>
  <p className="facilities-subheading">
    We provide disciplined, safe and well-equipped facilities to support academic excellence
    and holistic development.
  </p>

  <div className="facilities-grid">

    {/* HOSTEL */}
    <div className="facility-card">
      <div className="facility-slider">
        <div className="slides">
          <img src="/assets/facilities/hostel1.jpg" alt="Hostel" />
          <img src="/assets/facilities/hostel2.jpg" alt="Hostel" />
          <img src="/assets/facilities/hostel3.jpg" alt="Hostel" />
        </div>
      </div>
      <h3>Hostel Facility</h3>
      <ul>
        <li>Separate & secure boys hostel</li>
        <li>24×7 supervision & discipline</li>
        <li>Study halls & daily routine</li>
        <li>24×7 Water / Electricity  </li>
        <li>Clean & hygienic environment</li>
      </ul>
    </div>

    {/* MESS */}
    <div className="facility-card">
      <div className="facility-slider">
        <div className="slides">
          <img src="/assets/facilities/mess1.jpg" alt="Mess" />
          <img src="/assets/facilities/mess2.jpg" alt="Mess" />
          <img src="/assets/facilities/mess3.jpg" alt="Mess" />
        </div>
      </div>
      <h3>Mess Facility</h3>
      <ul>
        <li>Nutritious & balanced meals</li>
        <li>Fixed diet chart</li>
        <li>Hygienic kitchen</li>
        <li>RO purified drinking water</li>
        <li>Staff supervised mess</li>
      </ul>
    </div>

    {/* SCHOOL */}
    <div className="facility-card">
  <div className="facility-slider">
    <div className="slides">
      <img src={school1} alt="School" />
      <img src={school2} alt="School" />
      <img src={school3} alt="School" />

    </div>
  </div>

  <h3>School Infrastructure</h3>
  <ul>
    <li>Spacious & ventilated classrooms</li>
    <li>Science & computer laboratories</li>
    <li>Smart teaching facilities</li>
    <li>Large playground</li>
    <li>Clean & green campus</li>
  </ul>
</div>


  </div>
</section>




      <Footer />

      {/* Popup Form */}
      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              &times;
            </button>

            {!showThankYou ? (
              <div id="formSection">
                <h2>Apply for Admission</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    minLength="3"
                  />
                  <input
                    type="text"
                    name="studentClass"
                    placeholder="Class"
                    value={formData.studentClass}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="parentEmail"
                    placeholder="Parent's Email ID"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="tel"
                    name="parentMobile"
                    placeholder="Parent's Mobile Number"
                    value={formData.parentMobile}
                    onChange={handleInputChange}
                    required
                    maxLength="10"
                    pattern="[0-9]{10}"
                  />
                  <button type="submit" disabled={loading}>
                      {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            ) : (
              <div id="thankYouSection">
                <h2>🎉 Thank you for applying!</h2>
                <p>We have received your details successfully.</p>
                <button
                  onClick={() => {
                    setShowThankYou(false);
                    setShowPopup(false);
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;



//http://localhost:8080/api/allForms
//npm run build
//npm run deploy