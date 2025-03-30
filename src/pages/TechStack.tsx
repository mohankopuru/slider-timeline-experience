
import React from 'react';
import NavBar from '@/components/NavBar';
import { PROFILE_CONTENT } from '@/lib/constants';

const TechStack = () => {
  // Combine all tech stacks from different career stages
  const allTechStacks = Object.values(PROFILE_CONTENT)
    .flat()
    .filter(section => section.id === 'tech-stack')
    .map(section => section.details || {});

  // Combine all unique technologies by category
  const combinedTechStack: Record<string, string[]> = {};
  
  allTechStacks.forEach(techStack => {
    Object.entries(techStack).forEach(([category, technologies]) => {
      if (!combinedTechStack[category]) {
        combinedTechStack[category] = [];
      }
      
      if (Array.isArray(technologies)) {
        technologies.forEach(tech => {
          if (!combinedTechStack[category].includes(tech)) {
            combinedTechStack[category].push(tech);
          }
        });
      }
    });
  });

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NavBar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-netflix-red mb-4">Tech Stack</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A comprehensive collection of technologies I've worked with throughout my career
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(combinedTechStack).map(([category, technologies]) => (
              <div key={category} className="glass-card p-6">
                <div className="mb-4 flex items-center">
                  <div className="h-1 w-6 bg-netflix-red mr-3 rounded-full"></div>
                  <h2 className="text-xl font-semibold">{category}</h2>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechStack;
