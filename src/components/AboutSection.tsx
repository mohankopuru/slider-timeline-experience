
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AboutSection: React.FC = () => {
  return (
    <section 
      id="about"
      className="relative pt-32 pb-16 bg-gradient-to-b from-netflix-dark to-netflix-black"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="relative">
              <Avatar className="w-48 h-48 border-4 border-netflix-red shadow-lg">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=400" 
                  alt="Developer Profile" 
                />
                <AvatarFallback className="text-4xl bg-netflix-red text-white">JD</AvatarFallback>
              </Avatar>
              
              <div className="absolute -bottom-3 -right-3 bg-netflix-red text-white px-3 py-1 rounded-sm text-sm font-medium">
                Senior Developer
              </div>
            </div>
            
            {/* Profile Description */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">John </span>
                <span className="text-netflix-red">Developer</span>
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">AWS</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">UI/UX</span>
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed">
                A passionate full-stack developer with over 8 years of experience building scalable web applications 
                and intuitive user interfaces. Specialized in React, TypeScript, and Node.js with a strong 
                focus on performance optimization and clean architecture. I enjoy solving complex problems 
                and continuously learning new technologies.
              </p>
              
              <div className="mt-6 flex gap-4 justify-center md:justify-start">
                <a 
                  href="#contact" 
                  className="netflix-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Me
                </a>
                <a 
                  href="#" 
                  className="px-6 py-2 border border-white/20 rounded hover:bg-white/10 transition-colors"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-netflix-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AboutSection;
