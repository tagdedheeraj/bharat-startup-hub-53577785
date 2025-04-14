
import React from 'react';

interface LoadingIndicatorProps {
  message?: string;
}

const LoadingIndicator = ({ message = 'Loading video...' }: LoadingIndicatorProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black z-[1006]">
      <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
      <p className="absolute mt-24 text-white/70">{message}</p>
    </div>
  );
};

export default LoadingIndicator;
