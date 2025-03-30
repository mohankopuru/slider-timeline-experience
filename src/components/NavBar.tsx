import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';
import Logo from './Logo';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
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
  
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          const navHeight = 80;
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition = sectionPosition + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    
    setMobileMenuOpen(false);
  };
  
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-netflix-black/95 shadow-md' : 'bg-gradient-to-b from-netflix-black/80 to-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Logo />
          
          {!isHomePage && (
            <Link 
              to="/" 
              className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-300"
            >
              <Home size={16} />
              <span className="text-sm font-medium tracking-wide">Home</span>
            </Link>
          )}
        </div>
        
        <button 
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-5">
          <NavLink to="/about" label="About" />
          <NavLink to="/tech-stack" label="Tech Stack" />
          {isHomePage ? (
            <>
              <NavLink 
                href="#experience" 
                label="Experience" 
                onClick={(e) => scrollToSection(e, 'experience')} 
              />
              <NavLink 
                href="#interests" 
                label="Interests" 
                onClick={(e) => scrollToSection(e, 'interests')} 
              />
            </>
          ) : null}
          <NavLink 
            href="#contact" 
            label="Contact" 
            onClick={(e) => scrollToSection(e, 'contact')} 
          />
        </nav>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-netflix-black/95 px-4 py-3">
          <nav className="flex flex-col space-y-3">
            <NavLink to="/about" label="About" onClick={() => setMobileMenuOpen(false)} />
            <NavLink to="/tech-stack" label="Tech Stack" onClick={() => setMobileMenuOpen(false)} />
            {isHomePage ? (
              <>
                <NavLink 
                  href="#experience" 
                  label="Experience" 
                  onClick={(e) => scrollToSection(e, 'experience')} 
                />
                <NavLink 
                  href="#interests" 
                  label="Interests" 
                  onClick={(e) => scrollToSection(e, 'interests')} 
                />
              </>
            ) : null}
            <NavLink 
              href="#contact" 
              label="Contact" 
              onClick={(e) => scrollToSection(e, 'contact')} 
            />
          </nav>
        </div>
      )}
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
        onClick={onClick}
      >
        {label}
      </Link>
    );
  }
  
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide"
    >
      {label}
    </a>
  );
};

export default NavBar;
