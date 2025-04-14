import { useEffect } from 'react';

/**
 * Hook to initialize the YouTube player
 */
export const usePlayerInitialization = ({
  videoId,
  iframeRef,
  youtubePlayer,
  playerInitAttempted,
  handlePlayerReady,
  handlePlayerStateChange,
  handlePlayerError,
  isAPIAvailable
}: {
  videoId: string;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  youtubePlayer: React.MutableRefObject<YTPlayer | null>;
  playerInitAttempted: React.MutableRefObject<boolean>;
  handlePlayerReady: () => void;
  handlePlayerStateChange: (state: number) => void;
  handlePlayerError: (error: any) => void;
  isAPIAvailable: () => boolean;
}) => {
  useEffect(() => {
    // Setup the YouTube player
    const setupYouTubePlayer = () => {
      if (!iframeRef.current || playerInitAttempted.current) return;
      
      playerInitAttempted.current = true;
      console.log('Setting up YouTube player for video:', videoId);
      
      try {
        // Try to use the YouTube IFrame API directly
        if (isAPIAvailable()) {
          youtubePlayer.current = new window.YT.Player(iframeRef.current, {
            events: {
              'onReady': (event: any) => {
                handlePlayerReady();
                event.target.playVideo();
              },
              'onStateChange': (event: any) => {
                handlePlayerStateChange(event.data);
              },
              'onError': (event: any) => {
                handlePlayerError(event);
              }
            }
          });
        }
      } catch (e) {
        console.error('Error initializing YouTube player:', e);
        // Fall back functionality is handled in the messages hook
      }
    };
    
    // Add event listener for YouTube API loaded
    const onYouTubeIframeAPIReady = () => {
      console.log('YouTube IFrame API ready');
      setupYouTubePlayer();
    };
    
    // If API is already loaded, set up player immediately
    if (isAPIAvailable()) {
      console.log('YouTube API already loaded');
      setupYouTubePlayer();
    } else {
      // Otherwise wait for API to load
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
    
    return () => {
      // Clean up any YouTube player instance
      if (youtubePlayer.current && youtubePlayer.current.destroy) {
        try {
          youtubePlayer.current.destroy();
        } catch (e) {
          console.error('Error destroying YouTube player:', e);
        }
      }
    };
  }, [videoId, iframeRef, youtubePlayer, playerInitAttempted, handlePlayerReady, handlePlayerStateChange, handlePlayerError, isAPIAvailable]);
};
