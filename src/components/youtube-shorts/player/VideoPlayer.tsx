
import { useState } from 'react';
import LoadingIndicator from './LoadingIndicator';
import ErrorDisplay from './ErrorDisplay';
import VideoControls from './VideoControls';
import YouTubeIframe from './YouTubeIframe';
import { useYouTubePlayer } from './useYouTubePlayer';
import { getVideoTitle } from './getVideoTitle';
import { useToast } from '@/hooks/use-toast';

interface VideoPlayerProps {
  videoId: string;
  onClose: () => void;
}

const VideoPlayer = ({ videoId, onClose }: VideoPlayerProps) => {
  const toast = useToast();
  
  // Use the refactored YouTube player hook
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
  
  // Handle retry with toast feedback
  const handleRetry = () => {
    toast.toast({
      title: "Retrying video playback",
      description: "Please wait while we try to load the video again",
      duration: 3000
    });
    
    retryLoading();
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 animate-fadeIn"
      data-youtube-player-container="true"
    >
      <div 
        className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 animate-scaleIn z-[1001]"
      >
        {loadError ? (
          <ErrorDisplay 
            videoId={videoId} 
            onRetry={handleRetry} 
            onClose={onClose} 
          />
        ) : (
          <div className="w-full h-full relative">
            {/* Video container */}
            <div className="absolute inset-0 z-[1004]">
              <YouTubeIframe 
                ref={iframeRef}
                videoId={videoId}
                isLoading={isLoading}
              />
            </div>
            
            {/* Video overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-[1003]"></div>
            
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
