import React, { useState, useEffect } from 'react';

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to control the menu on small screens

  // Handle scroll event to change navbar styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${isOpen ? 'bg-gray-800' : ''}`} // Apply dark background when menu is open on mobile
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 font-montserrat">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-500">
          BuildCo
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <a href="#home" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Home</a>
          <a href="#about" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>About</a>
          <a href="#services" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Services</a>
          <a href="#projects" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Projects</a>
          <a href="#contact" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Contact</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 bg-opacity-90 text-white`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#home" className="hover:text-yellow-500">Home</a>
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#services" className="hover:text-yellow-500">Services</a>
          <a href="#projects" className="hover:text-yellow-500">Projects</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
