
import { useState, useEffect, useRef } from 'react';
import { useYouTubeAPI } from './hooks/useYouTubeAPI';
import { usePlayerState } from './hooks/usePlayerState';
import { usePlayerMessages } from './hooks/usePlayerMessages';
import { usePlayerInitialization } from './hooks/usePlayerInitialization';
import { useLoadingTimeout } from './hooks/useLoadingTimeout';

export const useYouTubePlayer = (videoId: string, onClose: () => void) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { isAPIAvailable } = useYouTubeAPI();

  const {
    isLoading, 
    setIsLoading,
    loadError, 
    setLoadError,
    playerReady, 
    setPlayerReady,
    isMuted,
    playerInitAttempted,
    youtubePlayer,
    toggleMute,
    handlePlayerStateChange,
    handlePlayerReady,
    handlePlayerError
  } = usePlayerState(onClose);

  // Function to retry loading the video
  const retryLoading = () => {
    setIsLoading(true);
    setLoadError(false);
    playerInitAttempted.current = false;
    
    // Recreate the iframe with a new URL to force reload
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const currentSrc = iframe.src;
      iframe.src = '';
      
      // Short delay to ensure DOM updates
      setTimeout(() => {
        iframe.src = currentSrc.includes('?') 
          ? `${currentSrc.split('?')[0]}?autoplay=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1&fs=1&rel=0`
          : `${currentSrc}?autoplay=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1&fs=1&rel=0`;
      }, 100);
    }
  };

  // Initialize YouTube player API
  usePlayerInitialization({
    videoId,
    iframeRef,
    youtubePlayer,
    playerInitAttempted,
    handlePlayerReady,
    handlePlayerStateChange,
    handlePlayerError,
    isAPIAvailable
  });

  // Handle messages from YouTube iframe
  usePlayerMessages({
    setIsLoading,
    setLoadError,
    setPlayerReady,
    onClose
  });

  // Handle loading timeout
  useLoadingTimeout({
    isLoading,
    playerReady,
    loadError,
    retryLoading
  });
  
  // Reset states when videoId changes
  useEffect(() => {
    setIsLoading(true);
    setLoadError(false);
    setPlayerReady(false);
    playerInitAttempted.current = false;
    
    // Debug log that we're starting to load the video
    console.log(`Loading YouTube video: ${videoId} - ${new Date().toISOString()}`);
  }, [videoId, setIsLoading, setLoadError, setPlayerReady]);

  return {
    iframeRef,
    isLoading,
    loadError,
    isMuted,
    toggleMute,
    retryLoading
  };
};
