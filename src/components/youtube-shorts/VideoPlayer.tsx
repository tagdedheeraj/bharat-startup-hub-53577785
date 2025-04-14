
import { useState, useEffect } from 'react';
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
  
  // Get the video title based on its ID
  const videoTitle = getVideoTitle(videoId);
  
  console.log("VideoPlayer rendering with videoId:", videoId, "isLoading:", isLoading, "loadError:", loadError);
  
  // Prevent scrolling when video is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  
  // Handle escape key to close video
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);
  
  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9500] flex items-center justify-center p-4 animate-fadeIn"
      onClick={(e) => {
        // Only close if clicking outside the video container
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 animate-scaleIn z-[9600]"
      >
        {loadError ? (
          <ErrorDisplay 
            videoId={videoId} 
            onRetry={retryLoading} 
            onClose={onClose} 
          />
        ) : (
          <div className="w-full h-full relative">
            {/* Video container */}
            <div className="absolute inset-0 z-[9604]">
              <YouTubeIframe 
                ref={iframeRef}
                videoId={videoId}
                isLoading={isLoading}
              />
            </div>
            
            {/* Video overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-[9603]"></div>
            
            {isLoading && <LoadingIndicator />}
          </div>
        )}
        
        {/* Video controls */}
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
