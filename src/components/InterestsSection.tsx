
import React from 'react';

const InterestsSection: React.FC = () => {
  return (
    <section className="py-20 mt-12 bg-gradient-to-b from-transparent to-netflix-black/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Behind the <span className="text-netflix-red">Scenes</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-netflix-gray/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 transform transition-transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">When I'm Not Coding</h3>
                <ul className="space-y-3">
                  <li className="flex items-baseline">
                    <span className="text-netflix-red mr-2">▶</span>
                    <span>Hiking and exploring nature trails</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-netflix-red mr-2">▶</span>
                    <span>Reading science fiction and tech books</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-netflix-red mr-2">▶</span>
                    <span>Playing strategy board games</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-netflix-red mr-2">▶</span>
                    <span>Experimenting with new cooking recipes</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-netflix-gray/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 transform transition-transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">What I'm Learning Now</h3>
                <ul className="space-y-3">
                  <li className="flex items-baseline">
                    <span className="text-netflix-red mr-2">▶</span>
                    <span>Web3 and blockchain development</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-netflix-red mr-2">▶</span>
                    <span>Advanced AI and machine learning techniques</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-netflix-red mr-2">▶</span>
                    <span>Serverless architecture patterns</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-netflix-red mr-2">▶</span>
                    <span>UI animation and microinteractions</span>
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

export default InterestsSection;
