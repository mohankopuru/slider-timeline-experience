
import React from 'react';
import NavBar from '@/components/NavBar';
import { PROFILE_CONTENT } from '@/lib/constants';

const About = () => {
  // Combine all about sections from different career stages
  const aboutSections = Object.entries(PROFILE_CONTENT)
    .map(([stageId, sections]) => {
      const aboutSection = sections.find(section => section.id === 'about');
      if (aboutSection) {
        return { stageId, ...aboutSection };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NavBar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-netflix-red mb-4">About Me</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              My journey through life and career as a developer
            </p>
          </div>
          
          <div className="space-y-8">
            {aboutSections.map((section) => (
              <div key={section.stageId} className="glass-card p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-netflix-red">
                    {section.stageId.charAt(0).toUpperCase() + section.stageId.slice(1)} Stage
                  </h2>
                </div>
                
                <div className="text-white/80 leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
