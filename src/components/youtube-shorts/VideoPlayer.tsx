
import { useState } from 'react';
import LoadingIndicator from './player/LoadingIndicator';
import ErrorDisplay from './player/ErrorDisplay';
import VideoControls from './player/VideoControls';
import YouTubeIframe from './player/YouTubeIframe';
import { useYouTubePlayer } from './player/useYouTubePlayer';
import { getVideoTitle } from './player/getVideoTitle';

interface VideoPlayerProps {
  videoId: string;
  onClose: () => void;
}

const VideoPlayer = ({ videoId, onClose }: VideoPlayerProps) => {
  const {
    iframeRef,
    isLoading,
    loadError,
    isMuted,
    toggleMute,
    retryLoading
  } = useYouTubePlayer(videoId, onClose);
  
  const videoTitle = getVideoTitle(videoId);
  
  // Handle keyboard events for closing
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="dialog"
      aria-modal="true"
      aria-label="YouTube video player"
    >
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 animate-scaleIn">
        {loadError ? (
          <ErrorDisplay 
            videoId={videoId} 
            onRetry={retryLoading} 
            onClose={onClose} 
          />
        ) : (
          <div className="w-full h-full relative">
            <div className="absolute inset-0">
              <YouTubeIframe 
                ref={iframeRef}
                videoId={videoId}
                isLoading={isLoading}
              />
            </div>
            
            {/* Video overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"></div>
            
            {isLoading && <LoadingIndicator />}
          </div>
        )}
        
        {/* Video controls with improved positioning */}
        <VideoControls 
          isMuted={isMuted}
          toggleMute={toggleMute}
          onClose={onClose}
          videoTitle={videoTitle}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
