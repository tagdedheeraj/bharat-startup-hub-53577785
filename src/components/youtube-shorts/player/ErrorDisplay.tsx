
import React from 'react';
import { RefreshCw, ExternalLink } from 'lucide-react';

interface ErrorDisplayProps {
  videoId: string;
  onRetry: () => void;
  onClose: () => void;
}

const ErrorDisplay = ({ videoId, onRetry, onClose }: ErrorDisplayProps) => {
  // Direct YouTube link as fallback option
  const directYouTubeLink = `https://www.youtube.com/watch?v=${videoId}`;
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
      <p className="text-xl font-semibold mb-4">Unable to load video</p>
      <p className="text-center mb-6">
        The YouTube video (ID: {videoId}) could not be loaded. This may be due to:
        <ul className="list-disc mt-2 text-left ml-8">
          <li>Embedding restrictions set by the video owner</li>
          <li>Video not being publicly available</li>
          <li>Network connectivity issues</li>
        </ul>
      </p>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
        <a
          href={directYouTubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full transition-colors flex items-center justify-center"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Open in YouTube
        </a>
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
