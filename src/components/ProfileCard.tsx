
import React from 'react';
import { ProfileSection } from '@/lib/constants';

interface ProfileCardProps {
  section: ProfileSection;
  index: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ section, index }) => {
  // Animation delay based on index
  const animationDelay = `${0.1 + index * 0.1}s`;
  
  return (
    <div 
      className="glass-card p-6 h-full content-reveal"
      style={{ 
        animationDelay,
        animationFillMode: 'both'
      }}
    >
      <div className="mb-3 flex items-center">
        <div className="h-1 w-6 bg-netflix-red mr-3 rounded-full"></div>
        <h3 className="text-xl font-semibold text-white tracking-wide">
          {section.title}
        </h3>
      </div>
      
      <div className="text-white/80 leading-relaxed">
        {section.content}
        
        {section.details && (
          <div className="mt-4">
            {Object.entries(section.details).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h4 className="text-sm font-semibold text-netflix-red mb-2">{category}</h4>
                {Array.isArray(items) ? (
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span 
                        key={item} 
                        className="px-3 py-1 bg-netflix-gray/50 rounded-full text-xs text-white/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-white/90">{items}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
