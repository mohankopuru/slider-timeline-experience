import React from 'react';
import { 
  Code, Book, Music, Plane, Camera, Coffee, Gamepad, Heart, 
  Mountain, Palette, Users, Dumbbell, Utensils, Smartphone
} from 'lucide-react';

interface Interest {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: 'tech' | 'creative' | 'lifestyle' | 'other';
}

const interests: Interest[] = [
  {
    id: 'int1',
    name: 'Open Source',
    description: 'Contributing to and maintaining open source projects in my spare time',
    icon: <Code size={24} />,
    category: 'tech'
  },
  {
    id: 'int2',
    name: 'Reading',
    description: 'Science fiction, technical books, and biographies',
    icon: <Book size={24} />,
    category: 'lifestyle'
  },
  {
    id: 'int3',
    name: 'Music',
    description: 'Playing guitar and exploring new genres',
    icon: <Music size={24} />,
    category: 'creative'
  },
  {
    id: 'int4',
    name: 'Travel',
    description: 'Exploring new cultures and places around the world',
    icon: <Plane size={24} />,
    category: 'lifestyle'
  },
  {
    id: 'int5',
    name: 'Photography',
    description: 'Landscape and street photography',
    icon: <Camera size={24} />,
    category: 'creative'
  },
  {
    id: 'int6',
    name: 'Coffee',
    description: 'Discovering specialty coffee shops and brewing methods',
    icon: <Coffee size={24} />,
    category: 'lifestyle'
  },
  {
    id: 'int7',
    name: 'Gaming',
    description: 'Strategy and RPG games',
    icon: <Gamepad size={24} />,
    category: 'other'
  },
  {
    id: 'int8',
    name: 'Hiking',
    description: 'Weekend hikes and nature exploration',
    icon: <Mountain size={24} />,
    category: 'lifestyle'
  },
  {
    id: 'int9',
    name: 'Design',
    description: 'UI/UX design and visual aesthetics',
    icon: <Palette size={24} />,
    category: 'creative'
  },
  {
    id: 'int10',
    name: 'Mentoring',
    description: 'Helping new developers grow in their careers',
    icon: <Users size={24} />,
    category: 'other'
  },
  {
    id: 'int11',
    name: 'Fitness',
    description: 'Weight training and running',
    icon: <Dumbbell size={24} />,
    category: 'lifestyle'
  },
  {
    id: 'int12',
    name: 'Cooking',
    description: 'Experimenting with recipes from around the world',
    icon: <Utensils size={24} />,
    category: 'creative'
  }
];

const InterestsSection: React.FC = () => {
  return (
    <section id="interests" className="py-20 bg-netflix-dark/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-netflix-red/80 rounded-sm text-xs font-medium tracking-wider text-white mb-4">
            BEYOND CODE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interests & Hobbies</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            When I'm not coding, here's what keeps me inspired and balanced.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {interests.map((interest) => (
            <div 
              key={interest.id} 
              className="glass-card p-6 hover:bg-white/5 transition-colors duration-300 group"
            >
              <div className="bg-netflix-red/20 p-3 rounded-lg inline-flex mb-4 group-hover:bg-netflix-red/30 transition-colors duration-300">
                <div className="text-netflix-red">
                  {interest.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{interest.name}</h3>
              <p className="text-white/70 text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
