
import React, { useState, useRef, useEffect } from 'react';

interface SliderProps {
  items: {
    id: string;
    title: string;
    year: string;
    description: string;
    image: string;
  }[];
  activeSlide: string;
  onSlideChange: (id: string) => void;
}

const NetflixSlider: React.FC<SliderProps> = ({ items, activeSlide, onSlideChange }) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const activeElement = sliderRef.current.querySelector(`[data-id="${activeSlide}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeSlide]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleItemClick = (id: string) => {
    onSlideChange(id);
  };

  return (
    <div 
      className="relative overflow-hidden"
      style={{ marginBottom: '20px' }}
    >
      <div 
        ref={sliderRef}
        className="flex space-x-4 p-4 overflow-x-auto cursor-grab scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {items.map((item) => (
          <div 
            key={item.id}
            data-id={item.id}
            className={`relative flex-shrink-0 w-64 transition-all duration-300 ${
              activeSlide === item.id 
                ? 'transform scale-110 z-10' 
                : 'scale-100 opacity-70'
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <div className="relative overflow-hidden rounded-md shadow-lg h-36 bg-gray-800">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-3 w-full">
                <h3 className="text-white font-bold mb-1">{item.title}</h3>
                <div className="flex items-center text-xs text-white/70">
                  <span className="mr-2">{item.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetflixSlider;
