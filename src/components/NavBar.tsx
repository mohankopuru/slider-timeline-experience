
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If on homepage, scroll to the specified section
      const section = document.getElementById(sectionId);
      if (section) {
        // Add a slight delay to ensure all elements are properly rendered
        setTimeout(() => {
          const navHeight = 80; // Approximate navbar height
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition = sectionPosition + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      // If on other pages, navigate to homepage and then scroll to section
      window.location.href = `/#${sectionId}`;
    }
    
    // Close mobile menu if open
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
          <Link to="/" className="text-xl md:text-2xl tracking-tighter font-bold">
            <span className="text-white">M</span><span className="text-netflix-red">K</span>
          </Link>
          
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
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
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
      
      {/* Mobile navigation menu */}
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
