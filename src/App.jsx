import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import WhatssapContact from "./components/whatssapContact";

const App = () => {
  return (
    <>
      <Navbar />
      <WhatssapContact />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default App;
