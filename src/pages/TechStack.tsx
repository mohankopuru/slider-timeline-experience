
import React from 'react';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import { PROFILE_CONTENT } from '../lib/constants';

const TechStack = () => {
  const profile = PROFILE_CONTENT["senior-level"];
  
  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NavBar />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-netflix-red">My Tech Stack</h1>
        
        <div className="max-w-4xl">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Frontend Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "GraphQL"].map((tech) => (
                <div key={tech} className="bg-netflix-dark p-4 rounded-lg border border-white/10 shadow-lg">
                  <h3 className="font-bold text-xl mb-2">{tech}</h3>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="bg-netflix-red h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Backend Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "AWS"].map((tech) => (
                <div key={tech} className="bg-netflix-dark p-4 rounded-lg border border-white/10 shadow-lg">
                  <h3 className="font-bold text-xl mb-2">{tech}</h3>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="bg-netflix-red h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Tools & Practices</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Git", "Docker", "Jest", "CI/CD", "Agile", "TDD"].map((tech) => (
                <div key={tech} className="bg-netflix-dark p-4 rounded-lg border border-white/10 shadow-lg">
                  <h3 className="font-bold text-xl mb-2">{tech}</h3>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="bg-netflix-red h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
