
import React from 'react';
import { X, Volume2, VolumeX } from 'lucide-react';

interface VideoControlsProps {
  isMuted: boolean;
  toggleMute: () => void;
  onClose: () => void;
  videoTitle?: string;
}

const VideoControls = ({ isMuted, toggleMute, onClose, videoTitle }: VideoControlsProps) => {
  return (
    <>
      {/* Close button with improved visibility and interaction */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-all transform hover:scale-110 z-50"
        aria-label="Close video"
      >
        <X className="w-6 h-6" />
      </button>
      
      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-all transform hover:scale-110 z-50"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>
      
      {/* Video title indicator */}
      {videoTitle && (
        <div className="absolute top-4 left-4 z-50 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          <p className="text-white text-sm font-medium max-w-[300px] truncate">
            {videoTitle}
          </p>
        </div>
      )}
    </>
  );
};

export default VideoControls;
