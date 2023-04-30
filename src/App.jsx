// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useRef } from 'react';

const App = () => {
  const targetRef = useRef(null);

  
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero targetRef = {targetRef}/>
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme    targetRef = {targetRef} />
      <Contact targetRef = {targetRef}/>
      <footer className="p-3 text-center">
        <h6 className="mb-3">Tharun Peter</h6>
        <p>tharun © All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;
