
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
    volume,
    playbackSpeed,
    videoQuality,
    playerReady,
    toggleMute,
    updateVolume,
    updatePlaybackSpeed,
    updateVideoQuality,
    retryLoading
  } = useYouTubePlayer(videoId, onClose);
  
  // Get the video title based on its ID
  const videoTitle = getVideoTitle(videoId);
  
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 animate-scaleIn z-[1001]"
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
        
        {/* Enhanced Video controls */}
        <VideoControls 
          isMuted={isMuted}
          toggleMute={toggleMute}
          onClose={onClose}
          videoTitle={videoTitle}
          volume={volume}
          updateVolume={updateVolume}
          playbackSpeed={playbackSpeed}
          updatePlaybackSpeed={updatePlaybackSpeed}
          videoQuality={videoQuality}
          updateVideoQuality={updateVideoQuality}
          playerReady={playerReady}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
