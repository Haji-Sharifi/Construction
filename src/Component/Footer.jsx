import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-20">
        {/* Brand and Description */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">BuildCo</h3>
            <p className="text-lg text-gray-400">Building Dreams, One Project at a Time</p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M22 12.5C22 6.701 17.299 2 12 2S2 6.701 2 12.5C2 18.3 6.699 22 12 22c2.9 0 5.6-1.034 7.7-2.8l3.5 3.5c.5.5 1.3.5 1.8 0s.5-1.3 0-1.8l-3.5-3.5c1.1-1.8 1.7-3.9 1.7-6.2zm-10.7 5.3c.5-.6.7-1.4.7-2.1v-3.9h1.9c.1 0 .2-.1.2-.2V11c0-.1-.1-.2-.2-.2h-1.9v-2.7c0-.4.1-.8.3-1.1.2-.3.5-.5.9-.5h1.6V3.2c-.3-.1-.7-.2-1.1-.2-.8 0-1.5.3-2.1.9-.5.5-.8 1.2-.9 2-.1.8-.1 1.7 0 2.6v1.5h-2.1c-.1 0-.2.1-.2.2v1.3c0 .1.1.2.2.2h2.1v4c0 1.1.4 2.1 1.1 2.9z" />
              </svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M23 3c-1 .4-2.1.7-3.2.8C19.8 3.6 18.5 3 17 3c-3.2 0-5.9 2.6-5.9 5.8 0 .5.1.9.2 1.3-4.9-.2-9.2-2.6-12.1-6.1-.5.9-.8 1.9-.8 3 0 2.1 1.1 3.9 2.7 5-.9 0-1.8-.3-2.5-.8v.1c0 2.9 2.1 5.3 4.8 5.9-.5.1-.9.2-1.4.2-.3 0-.6 0-.9-.1 1.1 3.3 4.2 5.7 7.8 5.7 9.4 0 14.5-7.8 14.5-14.5 0-.2 0-.4-.1-.6 1-.8 1.8-1.7 2.4-2.8z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7 17H5v-6h2v6zm-1-7.1c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3zm12 7.1h-2v-3.3c0-1.6-.9-2.4-2.1-2.4-1.1 0-1.6.8-1.9 1.6v4.1h-2v-6h2v.8c.3-.5.9-.8 1.6-.8 1.1 0 2.2.7 2.2 2.5v3.6z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3">Company</h4>
            <ul>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-yellow-400">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3">Contact</h4>
            <ul>
              <li><a href="tel:+1234567890" className="text-gray-400 hover:text-yellow-400">+93 796231400</a></li>
              <li><a href="mailto:info@buildco.com" className="text-gray-400 hover:text-yellow-400">masihwaizi@gmail.com</a></li>
              <li><a href="https://goo.gl/maps/xyz" className="text-gray-400 hover:text-yellow-400">Khair Khana - Haji Chaman Main rood, Kabul, Afghanistan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3">Legal</h4>
            <ul>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-yellow-400">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3">Subscribe</h4>
            <p className="text-gray-400 mb-3">Get the latest updates and offers from our company.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-gray-800 text-white rounded-md w-full mb-3"
            />
            <button className="w-full bg-yellow-400 text-gray-800 font-semibold py-2 rounded-md hover:bg-yellow-500 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-12">
          <p>&copy; 2025 BuildCo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
