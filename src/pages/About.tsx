
import React from 'react';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import { PROFILE_CONTENT } from '../lib/constants';

const About = () => {
  const seniorProfile = PROFILE_CONTENT["senior-level"];
  
  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NavBar />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-netflix-red">About Me</h1>
        
        <div className="max-w-4xl">
          <ProfileCard
            title={seniorProfile.title}
            subtitle={seniorProfile.subtitle}
            details={seniorProfile.details}
            imageUrl={seniorProfile.imageUrl}
            tags={seniorProfile.tags}
          />
          
          <div className="space-y-8 mt-16">
            <h2 className="text-3xl font-bold">My Journey</h2>
            <p className="text-white/80 leading-relaxed">
              My path in the world of development has been driven by a passion for creating intuitive, 
              performant applications that solve real problems. I've had the opportunity to work with 
              diverse teams and industries, from startups to enterprise companies, each experience adding 
              valuable perspectives to my approach.
            </p>
            
            <h2 className="text-3xl font-bold mt-12">Philosophy</h2>
            <p className="text-white/80 leading-relaxed">
              I believe in writing clean, maintainable code that stands the test of time. My approach 
              combines technical excellence with a strong focus on user experience. I'm constantly learning 
              and adapting to new technologies while ensuring I'm building on solid principles.
            </p>
            
            <h2 className="text-3xl font-bold mt-12">Beyond Coding</h2>
            <p className="text-white/80 leading-relaxed">
              When I'm not writing code, I enjoy hiking, reading science fiction, and experimenting with 
              home automation projects. I'm also an active member of local developer communities and occasionally 
              speak at meetups and conferences about front-end development and UI/UX best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
