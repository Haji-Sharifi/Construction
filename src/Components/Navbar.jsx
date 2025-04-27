import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 px-20 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4 font-montserrat">
        <div className="text-2xl font-bold text-yellow-500">
          BuildCo
        </div>
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <a href="#home" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Home</a>
          <a href="#about" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>About</a>
          <a href="#services" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Services</a>
          <a href="#projects" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Projects</a>
          <a href="#contact" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
