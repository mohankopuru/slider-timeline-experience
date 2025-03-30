
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-netflix-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-netflix-red text-3xl font-bold">DEVFLIX</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-netflix-red transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-netflix-red transition-colors">About</Link>
            <Link to="/tech-stack" className="text-white hover:text-netflix-red transition-colors">Tech Stack</Link>
            <Link to="/contact" className="text-white hover:text-netflix-red transition-colors">Contact</Link>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
