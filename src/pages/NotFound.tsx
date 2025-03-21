
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-netflix-black p-6 text-center">
      <div className="max-w-md animate-fade-in">
        <div className="text-netflix-red text-6xl font-bold mb-6">404</div>
        <h1 className="text-white text-3xl font-semibold mb-3">Lost your way?</h1>
        <p className="text-white/70 mb-8">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <Link 
          to="/" 
          className="netflix-btn inline-block"
        >
          DEVFLIX Home
        </Link>
        
        <div className="mt-12 pt-6 border-t border-netflix-gray/30">
          <p className="text-white/50 text-sm">
            Error Code: NSES-404
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
