
import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  title: string;
  subtitle?: string;
  details?: string;
  imageUrl?: string;
  tags?: string[];
  reversed?: boolean;
  children?: React.ReactNode;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  title, 
  subtitle, 
  details, 
  imageUrl, 
  tags, 
  reversed = false,
  children
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-16`}
    >
      {imageUrl && (
        <div className="w-full md:w-2/5">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 shadow-xl">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
        </div>
      )}
      
      <div className={`w-full ${imageUrl ? 'md:w-3/5' : 'md:w-full'}`}>
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{title}</h3>
        {subtitle && <p className="text-lg text-netflix-red mb-4">{subtitle}</p>}
        
        {details && (
          <div className="text-white/80 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: details }} />
        )}
        
        {children}
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-netflix-dark/80 text-white/70 text-sm rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProfileCard;
