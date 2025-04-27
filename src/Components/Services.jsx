const services = [
  {
    title: "Construction Planning",
    description: "We provide expert planning to ensure that each project is completed on time and within budget.",
    icon: "📅", // Placeholder icon
  },
  {
    title: "Building Design",
    description: "Our design team creates innovative and functional building designs tailored to your needs.",
    icon: "🏢", // Placeholder icon
  },
  {
    title: "Project Management",
    description: "We manage every step of the project from inception to completion, ensuring quality and efficiency.",
    icon: "🛠️", // Placeholder icon
  },
 
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
