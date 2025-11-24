import React, { useState, useEffect } from 'react';
import AnimatedHamburger from './AnimatedHamburger'; 

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

  // Handle click on a mobile link to close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 lg:px-22 ${
        isScrolled ? 'bg-gray-900 shadow-md' : 'bg-transparent'
      } ${isOpen ? 'bg-gray-900' : ''}`} // Apply background color when menu is open on mobile
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 font-montserrat">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-500">
          WaiziCoLTD
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <a href="#home" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-500' : 'text-white'}`}>Home</a>
          <a href="#about" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-500' : 'text-white'}`}>About</a>
          <a href="#services" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-500' : 'text-white'}`}>Services</a>
          <a href="#projects" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-500' : 'text-white'}`}>Projects</a>
          <a href="#contact" className={`hover:text-yellow-500 ${isScrolled ? 'text-gray-500' : 'text-white'}`}>Contact</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatedHamburger />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900 bg-opacity-90 text-white`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#home" className="hover:text-yellow-500" onClick={handleLinkClick}>Home</a>
          <a href="#about" className="hover:text-yellow-500" onClick={handleLinkClick}>About</a>
          <a href="#services" className="hover:text-yellow-500" onClick={handleLinkClick}>Services</a>
          <a href="#projects" className="hover:text-yellow-500" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" className="hover:text-yellow-500" onClick={handleLinkClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
