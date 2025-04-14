
import React from 'react';
import { RefreshCw } from 'lucide-react';

interface ErrorDisplayProps {
  videoId: string;
  onRetry: () => void;
  onClose: () => void;
}

const ErrorDisplay = ({ videoId, onRetry, onClose }: ErrorDisplayProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
      <p className="text-xl font-semibold mb-4">Unable to load video</p>
      <p className="text-center mb-6">The YouTube video (ID: {videoId}) could not be loaded. Please check your internet connection and try again.</p>
      <div className="flex space-x-4">
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorDisplay;
