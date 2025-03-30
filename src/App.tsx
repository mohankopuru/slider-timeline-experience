
import React from 'react';
import TimelineSlider from './components/TimelineSlider';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Interactive Timeline Experience
        </h1>
        <p className="text-gray-600 text-center mb-8">
          A visual journey through our company's milestones and achievements.
        </p>
        <TimelineSlider />
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mohan Kopuru. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
