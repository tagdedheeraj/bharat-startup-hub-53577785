
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
      {/* Close button with pulsing effect */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-black/50 hover:bg-white/20 rounded-full p-2 text-white transition-all transform hover:scale-110 z-[9007] group"
        aria-label="Close video"
      >
        <X className="w-6 h-6 group-hover:text-red-400 transition-colors" />
        <span className="absolute inset-0 rounded-full bg-white/5 animate-ping opacity-75"></span>
      </button>
      
      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/50 hover:bg-white/20 rounded-full p-2 text-white transition-all transform hover:scale-110 z-[9007] group"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 group-hover:text-red-400 transition-colors" />
        ) : (
          <Volume2 className="w-6 h-6 group-hover:text-green-400 transition-colors" />
        )}
      </button>
      
      {/* Video title indicator */}
      {videoTitle && (
        <div className="absolute top-4 left-4 z-[9007] bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          <p className="text-white text-sm font-medium max-w-[200px] truncate">
            {videoTitle}
          </p>
        </div>
      )}
    </>
  );
};

export default VideoControls;
