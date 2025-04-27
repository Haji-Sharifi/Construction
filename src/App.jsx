import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <AboutUs />
      <Services />
     </div>
  );
}

export default App;
