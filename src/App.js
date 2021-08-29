import React from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="container">
      <Navbar/>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
