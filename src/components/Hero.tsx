
import React from 'react';
import { TIMELINE_STAGES } from '@/lib/constants';

interface HeroProps {
  currentStage: string;
  onStageChange: (stageId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ currentStage, onStageChange }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-netflix-black/70 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black to-transparent z-20"></div>
      
      <div className="relative z-30 container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="text-netflix-red">DEV</span>FLIX
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
          A developer's journey through time - explore my career timeline and highlights
        </p>
        
        {/* Timeline Slider */}
        <div className="mt-16">
          <div className="flex justify-center items-center mb-8">
            <div className="relative w-full max-w-3xl mx-auto">
              {/* Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-netflix-gray transform -translate-y-1/2 rounded-full"></div>
              
              {/* Stages */}
              <div className="relative flex justify-between">
                {TIMELINE_STAGES.map((stage, index) => (
                  <button
                    key={stage.id}
                    onClick={() => onStageChange(stage.id)}
                    className={`relative z-10 flex flex-col items-center transition-all duration-300 ${
                      currentStage === stage.id ? 'scale-110' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div 
                      className={`w-6 h-6 rounded-full ${
                        currentStage === stage.id ? 'bg-netflix-red' : 'bg-white'
                      } flex items-center justify-center transform transition-all duration-300`}
                    >
                      {currentStage === stage.id && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-netflix-red opacity-50"></span>
                      )}
                    </div>
                    <div className={`mt-4 text-sm md:text-base font-medium ${
                      currentStage === stage.id ? 'text-netflix-red' : 'text-white'
                    }`}>
                      {stage.year}
                    </div>
                    <div className={`mt-1 text-xs md:text-sm ${
                      currentStage === stage.id ? 'text-white' : 'text-white/60'
                    }`}>
                      {stage.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-white/80 text-sm">
              Select a timeline stage to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
