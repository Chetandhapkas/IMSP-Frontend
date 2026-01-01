import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import ContactUs from "./pages/Contactus";
import GalleryPage from "./pages/Gallery";
import Faculty from "./pages/faculty";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/faculty" element={<Faculty />} />
    </Routes>
  );
}

export default App;
