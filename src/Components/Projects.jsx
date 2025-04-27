import React from 'react';

const projects = [
  {
    image: "https://via.placeholder.com/500x300?text=Project+1",
    title: "Skyline Towers",
    description: "A modern luxury residential complex in the heart of the city."
  },
  {
    image: "https://via.placeholder.com/500x300?text=Project+2",
    title: "Green Tech Office",
    description: "A sustainable office building designed with eco-friendly materials."
  },
  {
    image: "https://via.placeholder.com/500x300?text=Project+3",
    title: "Downtown Mall",
    description: "A state-of-the-art shopping center with 5 floors of retail space."
  },
  // Add more projects as necessary
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          Our Recent Projects
        </h2>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out rounded-lg"
              />
              {/* Gradient Overlay */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 flex justify-center items-center text-white text-center p-4 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-lg">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
