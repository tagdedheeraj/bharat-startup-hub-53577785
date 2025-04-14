
import { useState, useRef } from 'react';

export const useYouTubePlayerCore = (videoId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerInitAttempted = useRef(false);
  const youtubePlayer = useRef<YTPlayer | null>(null);
  
  // Function to toggle mute state
  const toggleMute = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        // Send postMessage to the YouTube player
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: isMuted ? 'unMute' : 'mute'
          }), 
          '*'
        );
        setIsMuted(!isMuted);
      }
    } catch (error) {
      console.error("Error toggling mute:", error);
    }
  };

  return {
    // State
    isLoading,
    setIsLoading,
    loadError,
    setLoadError,
    playerReady,
    setPlayerReady,
    isMuted,
    setIsMuted,
    
    // Refs
    iframeRef,
    playerInitAttempted,
    youtubePlayer,
    
    // Functions
    toggleMute
  };
};
