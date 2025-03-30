
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="relative flex items-center justify-center h-10 w-10 overflow-hidden">
        <div className="absolute inset-0 bg-netflix-black rounded-md border-2 border-netflix-red/30"></div>
        <div className="relative z-10 flex">
          <span className="text-white font-bold text-xl">M</span>
          <span className="text-netflix-red font-bold text-xl">K</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
