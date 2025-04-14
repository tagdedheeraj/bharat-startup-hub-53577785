
import { useState, useRef } from 'react';

/**
 * Hook to manage YouTube player state
 */
export const usePlayerState = (onClose: () => void) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const playerInitAttempted = useRef(false);
  const youtubePlayer = useRef<YTPlayer | null>(null);

  // Function to toggle mute state
  const toggleMute = () => {
    try {
      if (youtubePlayer.current) {
        if (isMuted) {
          youtubePlayer.current.unMute?.();
        } else {
          youtubePlayer.current.mute?.();
        }
        setIsMuted(!isMuted);
      }
    } catch (error) {
      console.error("Error toggling mute:", error);
    }
  };

  // Handle player state changes
  const handlePlayerStateChange = (state: number) => {
    if (state === window.YT?.PlayerState.PLAYING) {
      console.log('Video is now playing');
      setIsLoading(false);
    } else if (state === window.YT?.PlayerState.ENDED) {
      console.log('Video ended');
      onClose();
    } else if (state === window.YT?.PlayerState.PAUSED) {
      console.log('Video paused');
    }
  };

  // Handle player ready event
  const handlePlayerReady = () => {
    console.log('YouTube player ready');
    setIsLoading(false);
    setPlayerReady(true);
  };

  // Handle player error event
  const handlePlayerError = (error: any) => {
    console.error('YouTube player error:', error);
    setLoadError(true);
    setIsLoading(false);
  };

  return {
    isLoading,
    setIsLoading,
    loadError,
    setLoadError,
    playerReady,
    setPlayerReady,
    isMuted,
    setIsMuted,
    playerInitAttempted,
    youtubePlayer,
    toggleMute,
    handlePlayerStateChange,
    handlePlayerReady,
    handlePlayerError
  };
};
