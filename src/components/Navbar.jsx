import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full  shadow z-50 text-white bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-gray-600">NS</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#education" className="hover:text-blue-600">Education</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#coding" className="hover:text-blue-600">Coding</a></li>
          <li><a href="#hire" className="hover:text-blue-600">HireMe</a></li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-3 text-gray-700 font-medium">
            <li><a href="#home" className="block hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="block hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="block hover:text-blue-600">Skills</a></li>
            <li><a href="#projects" className="block hover:text-blue-600">Projects</a></li>
            <li><a href="#education" className="block hover:text-blue-600">Education</a></li>
            <li><a href="#experience" className="block hover:text-blue-600">Experience</a></li>
            <li><a href="#coding" className="block hover:text-blue-600">Coding</a></li>
            <li><a href="#hire" className="block hover:text-blue-600">HireMe</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
