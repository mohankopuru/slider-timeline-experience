
import React from 'react';
import TimelineSlider from './components/TimelineSlider';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Timeline Experience
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Interactive timeline slider to visualize a journey.
        </p>
        <TimelineSlider />
      </div>
    </div>
  );
}

export default App;
