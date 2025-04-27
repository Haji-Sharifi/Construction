import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-18">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-yellow-600">
          BuildCo
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-yellow-600">Home</a>
          <a href="#about" className="text-gray-700 hover:text-yellow-600">About</a>
          <a href="#services" className="text-gray-700 hover:text-yellow-600">Services</a>
          <a href="#projects" className="text-gray-700 hover:text-yellow-600">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-yellow-600">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a href="#home" className="block text-gray-700 hover:text-yellow-600">Home</a>
          <a href="#about" className="block text-gray-700 hover:text-yellow-600">About</a>
          <a href="#services" className="block text-gray-700 hover:text-yellow-600">Services</a>
          <a href="#projects" className="block text-gray-700 hover:text-yellow-600">Projects</a>
          <a href="#contact" className="block text-gray-700 hover:text-yellow-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
