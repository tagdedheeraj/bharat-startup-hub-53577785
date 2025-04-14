
import { useState, useCallback } from 'react';

/**
 * Hook for managing YouTube player state with improved error handling
 */
export const useYouTubePlayerState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Function to toggle mute state
  const toggleMute = useCallback(() => {
    setIsMuted(prevMuted => !prevMuted);
  }, []);
  
  // Reset state for clean retries
  const resetState = useCallback(() => {
    setIsLoading(true);
    setLoadError(false);
  }, []);
  
  return {
    isLoading,
    setIsLoading,
    loadError,
    setLoadError,
    isMuted,
    setIsMuted,
    isPlaying,
    setIsPlaying,
    toggleMute,
    resetState
  };
};
