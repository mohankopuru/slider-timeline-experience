
import React, { useEffect, useState } from 'react';
import { PROFILE_CONTENT, ProfileSection as ProfileSectionType } from '@/lib/constants';
import ProfileCard from './ProfileCard';

interface ProfileSectionProps {
  stageId: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ stageId }) => {
  const [sections, setSections] = useState<ProfileSectionType[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset visibility state
    setIsVisible(false);
    
    // Small delay before showing the new content for transition effect
    const timer = setTimeout(() => {
      setSections(PROFILE_CONTENT[stageId] || []);
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [stageId]);

  if (!sections.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-netflix-pulse">
          <div className="w-10 h-10 border-4 border-netflix-red border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <ProfileCard key={section.id} section={section} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
