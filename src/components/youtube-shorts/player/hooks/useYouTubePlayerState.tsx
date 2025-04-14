
import { useState, useCallback, useEffect } from 'react';

export const useYouTubePlayerState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Reset loading state after a timeout if it's stuck
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const toggleMute = useCallback(() => {
    setIsMuted(prevMuted => !prevMuted);
  }, []);
  
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
