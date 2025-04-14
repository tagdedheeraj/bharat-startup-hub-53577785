
import { useState, useCallback, useEffect } from 'react';

export const useYouTubePlayerState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Reset loading state after a shorter timeout to prevent infinite loading
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        console.log("Force setting isLoading to false after timeout");
        setIsLoading(false);
      }, 1500); // Reduced from 3000 to 1500
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
