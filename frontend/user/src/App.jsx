import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/Pages/HomePage";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import CaseStudy from "./Pages/CaseStudies";
import ScrollToTop from "./Components/scrollTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
