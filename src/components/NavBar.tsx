
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll event listener to update navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-netflix-black/95 shadow-md' : 'bg-gradient-to-b from-netflix-black/80 to-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-netflix-red font-bold text-2xl md:text-3xl tracking-tighter">
            DEVFLIX
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#tech" label="Tech Stack" />
          <NavLink href="#interests" label="Interests" />
        </nav>
        
        <Link to="/contact" className="netflix-btn text-sm md:text-base">
          Contact Me
        </Link>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide"
    >
      {label}
    </a>
  );
};

export default NavBar;
