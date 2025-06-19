import React from 'react';

const LoadingScreen = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#2B3D36] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center">
        <h1 className="text-[#EFF5E1] text-4xl font-bold mb-4 tracking-wider animate-fade-in">
          LUMOSKIN
        </h1>
        <p className="text-[#EFF5E1] text-sm tracking-widest animate-slide-up">
          NATURAL BEAUTY UNLEASHED
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-[#EFF5E1]/20 rounded-full overflow-hidden">
            <div className="h-full bg-[#EFF5E1] animate-loading-bar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
