
import React from 'react';
import NetflixSlider from './NetflixSlider';

interface HeroProps {
  currentStage: string;
  onStageChange: (stageId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ currentStage, onStageChange }) => {
  return (
    <div className="relative min-h-screen pt-24 pb-10 flex flex-col justify-center items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-netflix-black via-netflix-black/95 to-netflix-dark/90 z-0"></div>
      
      {/* Optional: Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{
          backgroundImage: `radial-gradient(rgba(229, 9, 20, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 pb-10 z-10 animate-netflix-intro">
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-block px-3 py-1 bg-netflix-red/80 rounded-sm text-xs md:text-sm font-medium tracking-wider text-white mb-4">
            SOFTWARE ENGINEER
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow mb-4">
            My Development <span className="text-netflix-red">Journey</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            From curious child to professional engineer. Slide through the timeline to explore my story.
          </p>
        </div>
      </div>
      
      {/* Slider component */}
      <div className="w-full z-10">
        <NetflixSlider 
          currentStage={currentStage}
          onStageChange={onStageChange}
        />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center">
          <span className="text-white/60 text-sm mb-2">Scroll for details</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-netflix-red"
          >
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              transform="rotate(90 12 12)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
