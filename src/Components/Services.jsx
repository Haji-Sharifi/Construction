import React from 'react';

const services = [
  {
    icon: "🏠",
    title: "Residential Construction",
    description: "We build beautiful homes with attention to detail and quality craftsmanship."
  },
  {
    icon: "🏢",
    title: "Commercial Construction",
    description: "Expert construction services for businesses, offices, and commercial spaces."
  },
  {
    icon: "🏗️",
    title: "Industrial Construction",
    description: "Building large-scale industrial facilities with the latest technologies."
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          Our Services
        </h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out"
            >
              {/* Icon */}
              <div className="text-6xl text-yellow-500 mb-6">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
