import React from 'react';
import img from '../Images/watch.jpg'

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 font-montserrat px-6 md:px-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 gap-16">

        {/* Left: Image */}
        <div className="flex-1 relative mb-8 md:mb-0">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <img 
              src={img}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative border */}
          <div className="absolute top-4 left-4 w-full h-full border-4 border-yellow-400 rounded-lg -z-10"></div>
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <p className="text-yellow-400 uppercase tracking-widest font-bold mb-3">About Our Company</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Building Dreams, One Project At A Time
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At BuildCo, we don't just construct buildings — we create environments where families thrive and businesses grow. 
            With over 10 years of delivering high-quality residential, commercial, and industrial construction projects, 
            we pride ourselves on craftsmanship, transparency, and innovation.
          </p>
          <a href="#services">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg uppercase tracking-wide">
              Learn More
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
