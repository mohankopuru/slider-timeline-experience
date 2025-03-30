
import React from 'react';
import { TIMELINE_STAGES } from '@/lib/constants';

interface ProfileSectionProps {
  stageId: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ stageId }) => {
  const currentStage = TIMELINE_STAGES.find(stage => stage.id === stageId);
  
  if (!currentStage) return null;
  
  return (
    <section className="py-16 container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-netflix-gray/20 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden shadow-xl">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">
              {currentStage.title} <span className="text-netflix-red">({currentStage.year})</span>
            </h2>
            <p className="text-white/80 text-lg mb-6">
              {currentStage.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-netflix-red">Key Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-netflix-red rounded-full mr-3"></span>
                    <span>JavaScript/TypeScript</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-netflix-red rounded-full mr-3"></span>
                    <span>React & Modern Frontend</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-netflix-red rounded-full mr-3"></span>
                    <span>Full Stack Development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-netflix-red rounded-full mr-3"></span>
                    <span>UI/UX Design</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-netflix-red">Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-netflix-red rounded-full mr-3"></span>
                    <span>Led development of enterprise applications</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-netflix-red rounded-full mr-3"></span>
                    <span>Implemented CI/CD pipelines</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-netflix-red rounded-full mr-3"></span>
                    <span>Mentored junior developers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-netflix-red rounded-full mr-3"></span>
                    <span>Contributed to open source projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
