import React from 'react';
import NavbarComponent from './Component/NavbarComponent';
import Hero from './Component/Hero';
import AboutUs from './Component/AboutUs';
import Services from './Component/Services';
import Projects from './Component/Projects';
import Contact from './Component/Contact';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <Contact />
     </div>
  );
}

export default App;
