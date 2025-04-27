import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center font-montserrat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          Building Excellence <br />
          <span className="text-yellow-400">With Every Project</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-md">
          High-quality construction services you can trust — Residential, Commercial, and Industrial.
        </p>
        <a href="#contact">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 uppercase tracking-wide shadow-lg">
            Get a Free Quote
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
