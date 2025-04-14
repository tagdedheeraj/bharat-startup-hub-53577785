
import { useEffect, useRef } from 'react';

interface UseYouTubePlayerSetupProps {
  videoId: string;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setLoadError: (hasError: boolean) => void;
  onClose: () => void;
  playerInitAttempted: React.MutableRefObject<boolean>;
}

/**
 * Hook for setting up the YouTube player instance
 */
export const useYouTubePlayerSetup = ({
  videoId,
  iframeRef,
  isLoading,
  setIsLoading,
  setLoadError,
  onClose,
  playerInitAttempted
}: UseYouTubePlayerSetupProps) => {
  // Player reference
  const youtubePlayer = useRef<YTPlayer | null>(null);
  
  useEffect(() => {
    // Don't attempt setup if iframe ref is not available or we've already tried
    if (!iframeRef.current || playerInitAttempted.current) return;
    
    // Mark that we've attempted initialization
    playerInitAttempted.current = true;
    console.log("Setting up YouTube player for video:", videoId);
    
    try {
      // Create player using YouTube API
      if (window.YT && window.YT.Player) {
        youtubePlayer.current = new window.YT.Player(iframeRef.current, {
          events: {
            'onReady': (event) => {
              console.log("YouTube player ready");
              setIsLoading(false);
              event.target.playVideo();
            },
            'onStateChange': (event) => {
              // Handle player state changes
              switch(event.data) {
                case window.YT?.PlayerState.PLAYING:
                  console.log("Video is playing");
                  setIsLoading(false);
                  break;
                case window.YT?.PlayerState.ENDED:
                  console.log("Video ended");
                  onClose();
                  break;
                case window.YT?.PlayerState.PAUSED:
                  console.log("Video paused");
                  break;
                case window.YT?.PlayerState.BUFFERING:
                  console.log("Video buffering");
                  break;
                case window.YT?.PlayerState.CUED:
                  console.log("Video cued");
                  break;
              }
            },
            'onError': (event) => {
              console.error("YouTube player error:", event);
              setLoadError(true);
              setIsLoading(false);
            }
          }
        });
      }
    } catch (e) {
      console.error('Error initializing YouTube player:', e);
      setIsLoading(false);
      setLoadError(true);
    }
    
    // Cleanup function
    return () => {
      // Clean up YouTube player
      if (youtubePlayer.current && youtubePlayer.current.destroy) {
        try {
          youtubePlayer.current.destroy();
          youtubePlayer.current = null;
        } catch (e) {
          console.error('Error destroying YouTube player:', e);
        }
      }
    };
  }, [videoId, iframeRef, setIsLoading, setLoadError, onClose, playerInitAttempted]);
  
  return {
    youtubePlayer
  };
};
