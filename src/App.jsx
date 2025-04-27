import React from 'react';
import Navbar from './Components/navbar';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      
    </div>
  );
}

export default App;
