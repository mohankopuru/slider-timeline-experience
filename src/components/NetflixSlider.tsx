
import React, { useState, useRef, useEffect } from 'react';
import { TIMELINE_STAGES, TimelineStage } from '@/lib/constants';

interface NetflixSliderProps {
  onStageChange: (stageId: string) => void;
  currentStage: string;
}

const NetflixSlider: React.FC<NetflixSliderProps> = ({ onStageChange, currentStage }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Calculate positions for each stage marker
  const stagePositions = TIMELINE_STAGES.map((_, index) => 
    (index / (TIMELINE_STAGES.length - 1)) * 100
  );

  // Get the current stage index
  const currentStageIndex = TIMELINE_STAGES.findIndex(
    stage => stage.id === currentStage
  );

  // Initialize slider position based on current stage
  useEffect(() => {
    if (currentStageIndex >= 0) {
      setSliderValue(stagePositions[currentStageIndex]);
    }
  }, [currentStage]);

  // Find closest stage based on slider value
  const findClosestStage = (value: number): number => {
    return stagePositions.reduce((prev, curr, idx) => 
      Math.abs(curr - value) < Math.abs(stagePositions[prev] - value) ? idx : prev
    , 0);
  };

  // Handle slider position changes
  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    
    const rect = trackRef.current.getBoundingClientRect();
    const newPos = ((e.clientX - rect.left) / rect.width) * 100;
    const clampedPos = Math.min(Math.max(0, newPos), 100);
    
    setSliderValue(clampedPos);
    
    // Find the closest stage and notify parent
    const closestStageIdx = findClosestStage(clampedPos);
    onStageChange(TIMELINE_STAGES[closestStageIdx].id);
  };

  // Handle thumb click to select a specific stage
  const handleThumbClick = (stageId: string, index: number) => {
    setSliderValue(stagePositions[index]);
    onStageChange(stageId);
  };

  return (
    <div className="w-full px-6 md:px-10 py-12 mx-auto max-w-5xl">
      {/* The growing person icon series */}
      <div className="flex justify-between mb-12 px-4">
        {TIMELINE_STAGES.map((stage, index) => (
          <div 
            key={stage.id} 
            className={`flex flex-col items-center transition-all duration-300 ${
              stage.id === currentStage 
                ? 'scale-110 text-netflix-red' 
                : 'text-white opacity-70 hover:opacity-100'
            }`}
            onClick={() => handleThumbClick(stage.id, index)}
          >
            <div className="text-3xl md:text-4xl mb-2 transform transition-transform duration-300 hover:scale-110 cursor-pointer profile-icon">
              {stage.icon}
            </div>
            <span className="text-xs md:text-sm font-medium tracking-wide">
              {stage.age}
            </span>
          </div>
        ))}
      </div>

      {/* Timeline slider */}
      <div className="relative w-full h-10 mb-10">
        <div 
          ref={trackRef}
          className="timeline-track w-full cursor-pointer"
          onClick={handleSliderChange}
        >
          <div 
            className="timeline-progress"
            style={{ width: `${sliderValue}%` }}
          />
          
          {/* Timeline stage markers */}
          {TIMELINE_STAGES.map((stage, index) => {
            const left = `${stagePositions[index]}%`;
            const isActive = index === currentStageIndex;
            
            return (
              <React.Fragment key={stage.id}>
                <div
                  ref={el => (thumbRefs.current[index] = el)}
                  className={`timeline-thumb ${isActive ? 'active scale-110' : ''}`}
                  style={{ left }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleThumbClick(stage.id, index);
                  }}
                />
                <div 
                  className="timeline-label"
                  style={{ left }}
                >
                  {stage.year}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Current stage title */}
      <div className="text-center mb-6">
        <div className="inline-block px-3 py-1 bg-netflix-red/80 rounded-sm text-xs font-medium tracking-wider text-white mb-2">
          {TIMELINE_STAGES[currentStageIndex]?.year || ''}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {TIMELINE_STAGES[currentStageIndex]?.title || ''}
        </h2>
        <p className="text-white/70 mt-2 max-w-xl mx-auto">
          {TIMELINE_STAGES[currentStageIndex]?.description || ''}
        </p>
      </div>
    </div>
  );
};

export default NetflixSlider;
