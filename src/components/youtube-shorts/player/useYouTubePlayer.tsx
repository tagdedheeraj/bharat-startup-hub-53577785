
import { useState, useEffect, useRef, useCallback } from 'react';
import { useYouTubePlayerCore } from './hooks/useYouTubePlayerCore';
import { useYouTubePlayerLoading } from './hooks/useYouTubePlayerLoading';
import { useYouTubePlayerSetup } from './hooks/useYouTubePlayerSetup';
import { useYouTubePlayerEvents } from './hooks/useYouTubePlayerEvents';
import { useYouTubeAPILoader } from './hooks/useYouTubeAPILoader';

export const useYouTubePlayer = (videoId: string, onClose: () => void) => {
  // Use core state and refs
  const core = useYouTubePlayerCore(videoId);
  
  // Get loading functions
  const { retryLoading } = useYouTubePlayerLoading(
    videoId, 
    core,
    onClose
  );
  
  // Get setup functions
  const { setupYouTubePlayer } = useYouTubePlayerSetup(
    videoId,
    { ...core, retryLoading },
    onClose
  );
  
  // Get event handlers
  const { handleMessage } = useYouTubePlayerEvents(
    videoId,
    { ...core, retryLoading },
    onClose
  );
  
  // Load YouTube API
  useYouTubeAPILoader(setupYouTubePlayer);
  
  useEffect(() => {
    // Reset states when videoId changes
    core.setIsLoading(true);
    core.setLoadError(false);
    core.setPlayerReady(false);
    core.playerInitAttempted.current = false;
    
    // Debug log that we're starting to load the video
    console.log(`Loading YouTube video: ${videoId} - ${new Date().toISOString()}`);
    
    // Add event listener for message from the iframe
    window.addEventListener('message', handleMessage);
    
    // Set a timeout to consider it failed if taking too long
    const timeoutId = setTimeout(() => {
      if (core.isLoading && !core.playerReady && !core.loadError) {
        console.log('YouTube video load timeout exceeded, trying alternative method');
        retryLoading();
      }
    }, 8000);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeoutId);
      
      // Clean up any YouTube player instance
      if (core.youtubePlayer.current && core.youtubePlayer.current.destroy) {
        try {
          core.youtubePlayer.current.destroy();
        } catch (e) {
          console.error('Error destroying YouTube player:', e);
        }
      }
    };
  }, [videoId, core.isLoading, core.playerReady, onClose, handleMessage, retryLoading]);

  return {
    iframeRef: core.iframeRef,
    isLoading: core.isLoading,
    loadError: core.loadError,
    isMuted: core.isMuted,
    toggleMute: core.toggleMute,
    retryLoading
  };
};
