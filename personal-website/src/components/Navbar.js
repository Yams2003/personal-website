import React from 'react';

function Navbar() {
    return (
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;
