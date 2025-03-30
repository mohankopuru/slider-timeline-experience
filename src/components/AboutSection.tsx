
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-netflix-black/95">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-netflix-red">DEVFLIX</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            A developer's journey through time - explore the evolution of my career, skills, and projects in this Netflix-inspired portfolio experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-netflix-gray/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="text-netflix-red text-4xl font-bold mb-3">10+</div>
              <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
              <p className="text-white/70">Building web applications and user interfaces</p>
            </div>
            
            <div className="bg-netflix-gray/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="text-netflix-red text-4xl font-bold mb-3">50+</div>
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <p className="text-white/70">From small websites to enterprise applications</p>
            </div>
            
            <div className="bg-netflix-gray/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="text-netflix-red text-4xl font-bold mb-3">20+</div>
              <h3 className="text-xl font-semibold mb-2">Technologies</h3>
              <p className="text-white/70">Expertise across modern tech stacks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
