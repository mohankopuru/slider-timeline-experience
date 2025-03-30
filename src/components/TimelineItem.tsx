
import React from 'react';

interface TimelineItemProps {
  year: number;
  isActive: boolean;
  onClick: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, isActive, onClick }) => {
  return (
    <div 
      className="relative flex flex-col items-center cursor-pointer select-none"
      onClick={onClick}
    >
      <div 
        className={`w-4 h-4 rounded-full transition-all duration-300 ${
          isActive 
            ? 'bg-indigo-600 scale-125' 
            : 'bg-gray-400 hover:bg-indigo-400'
        }`}
      ></div>
      <div className="mt-2 text-sm font-medium">
        <span className={isActive ? 'text-indigo-600 font-bold' : 'text-gray-600'}>
          {year}
        </span>
      </div>
    </div>
  );
};

export default TimelineItem;
