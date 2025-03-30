
import React, { useState, useRef, useEffect } from 'react';
import TimelineItem from './TimelineItem';

// Define timeline data
const timelineData = [
  {
    id: 1,
    year: 2018,
    title: 'Started Journey',
    description: 'Our amazing journey began with a simple idea and a passion for innovation.',
  },
  {
    id: 2,
    year: 2019,
    title: 'First Milestone',
    description: 'Reached our first significant milestone with the launch of our product.',
  },
  {
    id: 3,
    year: 2020,
    title: 'Expansion',
    description: 'Expanded to new markets and doubled our team size.',
  },
  {
    id: 4, 
    year: 2021,
    title: 'Global Recognition',
    description: 'Received global recognition for our contributions to the industry.',
  },
  {
    id: 5,
    year: 2022,
    title: 'Innovation Award',
    description: 'Won the prestigious innovation award for our cutting-edge solution.',
  },
  {
    id: 6,
    year: 2023,
    title: 'Current Day',
    description: 'Continuing to grow and innovate while staying true to our mission.',
  }
];

const TimelineSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const index = Math.round(sliderValue * (timelineData.length - 1));
    setActiveIndex(index);
  }, [sliderValue]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setSliderValue(value);
  };

  const handleSliderClick = (index: number) => {
    const newValue = index / (timelineData.length - 1);
    setSliderValue(newValue);
    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      {/* Active Timeline Item */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="text-3xl font-bold text-indigo-600 mb-2">
          {timelineData[activeIndex].year}
        </div>
        <h3 className="text-xl font-semibold mb-2">
          {timelineData[activeIndex].title}
        </h3>
        <p className="text-gray-600">
          {timelineData[activeIndex].description}
        </p>
      </div>

      {/* Timeline Slider */}
      <div 
        className="relative w-full"
        ref={sliderRef}
      >
        <div className="w-full h-1 bg-gray-300 rounded-full relative">
          <div 
            className="absolute top-0 left-0 h-1 bg-indigo-600 rounded-full"
            style={{ width: `${sliderValue * 100}%` }}
          ></div>
        </div>

        {/* Timeline markers */}
        <div className="relative w-full mt-4 flex justify-between">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={item.id}
              year={item.year}
              isActive={index === activeIndex}
              onClick={() => handleSliderClick(index)}
            />
          ))}
        </div>

        {/* Hidden range input for accessibility */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={sliderValue}
          onChange={handleSliderChange}
          className="absolute top-[-5px] w-full h-4 opacity-0 cursor-pointer"
          aria-label="Timeline slider"
        />
      </div>
    </div>
  );
};

export default TimelineSlider;
