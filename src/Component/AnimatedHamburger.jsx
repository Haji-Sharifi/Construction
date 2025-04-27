import React, { useState } from "react";

const AnimatedHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="relative text-yellow-300 z-50 flex flex-col items-center justify-center space-y-2 w-10 h-10 bg-transparent focus:outline-none"
      >
        {/* Top Bar */}
        <div
          className={`h-1 w-8 bg-current transition-all duration-200 ease-in-out transform  ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>

        {/* Middle Bar */}
        <div
          className={`h-1 w-8 bg-current transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>

        {/* Bottom Bar */}
        <div
          className={`h-1 w-8 bg-current transition-all duration-300 ease-in-out transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>
    </div>
  );
};

export default AnimatedHamburger;
