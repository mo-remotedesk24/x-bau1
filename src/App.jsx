import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
