import React from 'react';
import img from '../Images/Construction-Management-Park-University-min.avif'

const projects = [
  {
    name: "Residential Complex",
    description: "A modern residential complex with state-of-the-art amenities.",
    image: img,
  },
  {
    name: "Office Building",
    description: "An innovative and eco-friendly office space designed for productivity.",
    image: img,
  },
  {
    name: "Luxury Villas",
    description: "Luxury villas built with the finest materials and craftsmanship.",
    image: img,
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Our Projects</h2>
        <p className="text-lg text-gray-600">Take a look at some of the stunning projects we've completed for our clients.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href="#" className="text-yellow-400 hover:text-yellow-500 font-semibold">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
