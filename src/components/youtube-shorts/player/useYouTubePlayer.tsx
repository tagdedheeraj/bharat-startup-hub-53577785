
import { useRef, useCallback } from 'react';
import { useYouTubePlayerState } from './hooks/useYouTubePlayerState';
import { useYouTubeApiLoader } from './hooks/useYouTubeApiLoader';
import { useYouTubeMessageListener } from './hooks/useYouTubeMessageListener';
import { useYouTubePlayerSetup } from './hooks/useYouTubePlayerSetup';
import { useLoadingTimeout } from './hooks/useLoadingTimeout';
import { useRetryLoading } from './hooks/useRetryLoading';
import { useMuteControl } from './hooks/useMuteControl';

/**
 * Main hook for managing YouTube player functionality
 * This hook composes smaller hooks to provide a complete API
 */
export const useYouTubePlayer = (videoId: string, onClose: () => void) => {
  // Create refs
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerInitAttempted = useRef(false);
  
  // Get state management
  const {
    isLoading,
    setIsLoading,
    loadError,
    setLoadError,
    isMuted,
    toggleMute
  } = useYouTubePlayerState();
  
  // Setup API ready callback
  const onApiReady = useCallback(() => {
    if (iframeRef.current && !playerInitAttempted.current) {
      playerInitAttempted.current = true;
      console.log("YouTube API ready, initializing player");
    }
  }, []);
  
  // Load YouTube API
  useYouTubeApiLoader(onApiReady);
  
  // Setup message listener
  useYouTubeMessageListener({
    setIsLoading,
    setLoadError,
    onClose
  });
  
  // Setup retry functionality
  const { retryLoading } = useRetryLoading({
    videoId,
    iframeRef,
    setIsLoading,
    setLoadError,
    playerInitAttempted
  });
  
  // Setup loading timeout
  useLoadingTimeout({
    isLoading,
    loadError,
    retryFunction: retryLoading
  });
  
  // Setup player
  useYouTubePlayerSetup({
    videoId,
    iframeRef,
    isLoading,
    setIsLoading,
    setLoadError,
    onClose,
    playerInitAttempted
  });
  
  // Handle mute controls
  useMuteControl({
    iframeRef,
    isMuted
  });
  
  // Return consolidated API
  return {
    iframeRef,
    isLoading,
    loadError,
    isMuted,
    toggleMute,
    retryLoading
  };
};
