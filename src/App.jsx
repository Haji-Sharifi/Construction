import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
     </div>
  );
}

export default App;
