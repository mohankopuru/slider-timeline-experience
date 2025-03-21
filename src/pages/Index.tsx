
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ProfileSection from '@/components/ProfileSection';
import { TIMELINE_STAGES } from '@/lib/constants';

const Index: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(TIMELINE_STAGES[TIMELINE_STAGES.length - 1].id);
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleStageChange = (stageId: string) => {
    setCurrentStage(stageId);
    
    // Smooth scroll to content section when stage changes
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      setTimeout(() => {
        contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-netflix-black flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="text-netflix-red text-4xl font-bold mb-4 animate-netflix-pulse">
            DEVFLIX
          </div>
          <div className="w-12 h-12 border-4 border-netflix-red border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black text-white overflow-x-hidden">
      <NavBar />
      
      <main>
        {/* Hero Section with Timeline Slider */}
        <section className="relative">
          <Hero currentStage={currentStage} onStageChange={handleStageChange} />
        </section>
        
        {/* Content Section */}
        <section 
          id="content-section"
          className="relative min-h-screen py-16 bg-gradient-to-b from-netflix-black/80 to-netflix-dark"
        >
          {/* Content divider with Netflix style */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-netflix-black/80 pointer-events-none"></div>
          
          {/* Stage Content */}
          <ProfileSection stageId={currentStage} />
          
          {/* Footer */}
          <div className="mt-24 pt-10 pb-6 border-t border-white/10 text-center text-white/50 text-sm">
            <div className="max-w-xl mx-auto px-6">
              <p>
                © {new Date().getFullYear()} DEVFLIX • Inspired by Netflix
              </p>
              <p className="mt-2">
                Created with React, Tailwind CSS, and a passion for great UI/UX
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
