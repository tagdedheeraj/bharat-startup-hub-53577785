
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
  
  // Get the video title based on its ID
  const videoTitle = getVideoTitle(videoId);
  
  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9000] flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
      data-youtube-player-container="true"
    >
      <div 
        className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 animate-scaleIn z-[9001]"
      >
        {loadError ? (
          <ErrorDisplay 
            videoId={videoId} 
            onRetry={retryLoading} 
            onClose={onClose} 
          />
        ) : (
          <div className="w-full h-full relative">
            {/* Video container with higher z-index */}
            <div className="absolute inset-0 z-[9004]">
              <YouTubeIframe 
                ref={iframeRef}
                videoId={videoId}
                isLoading={isLoading}
              />
            </div>
            
            {/* Video overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-[9003]"></div>
            
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
