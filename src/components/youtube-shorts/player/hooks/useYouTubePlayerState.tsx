
import { useState } from 'react';

/**
 * Hook for managing YouTube player state
 */
export const useYouTubePlayerState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  // Function to toggle mute state
  const toggleMute = () => {
    try {
      // We don't directly modify the player here, just track state
      // The parent hook will use this state to send commands
      setIsMuted(!isMuted);
    } catch (error) {
      console.error("Error toggling mute state:", error);
    }
  };
  
  return {
    isLoading,
    setIsLoading,
    loadError,
    setLoadError,
    isMuted,
    setIsMuted,
    toggleMute
  };
};
