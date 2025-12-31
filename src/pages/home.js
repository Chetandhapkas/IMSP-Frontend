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

function Home() { 
  const [formData, setFormData] = useState({
    name: "",
    studentClass: "",
    parentEmail: "",
    parentMobile: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not OK");

      console.log(await response.json());
      setShowThankYou(true);
      setFormData({
        name: "",
        studentClass: "",
        parentEmail: "",
        parentMobile: "",
      });
    } catch (error) {
      alert("Error submitting form. Please try again.");
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
      <h5>Mr. Ravikiran Bhijane Sir</h5>
      <p>Responsible for academic excellence and maintaining discipline.</p>
    </div>

    <div className="box">
      <img src={vicePrincipal} alt="Vice Principal" />
      <h3>Vice Principal</h3>
      <h5>Mr. [Name]</h5>
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
                  />
                  <button type="submit">Submit</button>
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