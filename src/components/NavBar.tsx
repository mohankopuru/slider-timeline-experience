
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
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
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If on homepage, scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to homepage and then scroll to contact
      window.location.href = '/#contact';
    }
  };
  
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
          <NavLink to="/about" label="About" />
          <NavLink to="/tech-stack" label="Tech Stack" />
          {isHomePage ? (
            <>
              <NavLink href="#experience" label="Experience" />
              <NavLink href="#interests" label="Interests" />
            </>
          ) : null}
          <NavLink href="#contact" label="Contact" onClick={scrollToContact} />
        </nav>
        
        <button onClick={scrollToContact} className="netflix-btn text-sm md:text-base">
          Contact Me
        </button>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href?: string;
  to?: string;
  label: string;
  onClick?: (e: React.MouseEvent) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, to, label, onClick }) => {
  const location = useLocation();
  
  if (to) {
    return (
      <Link
        to={to}
        className={`text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide ${
          location.pathname === to ? 'text-white' : ''
        }`}
      >
        {label}
      </Link>
    );
  }
  
  const scrollToSection = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
      return;
    }
    
    const section = document.getElementById(href?.substring(1) || '');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={scrollToSection}
      className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide"
    >
      {label}
    </a>
  );
};

export default NavBar;
