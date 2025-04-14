
import { useEffect } from 'react';

export const useYouTubePlayerSetup = (
  videoId: string,
  {
    iframeRef,
    playerInitAttempted,
    youtubePlayer,
    setIsLoading,
    setPlayerReady,
    setLoadError
  }: any,
  onClose: () => void
) => {
  // Setup the YouTube player once the API is ready
  const setupYouTubePlayer = () => {
    if (!iframeRef.current || playerInitAttempted.current) return;
    
    playerInitAttempted.current = true;
    console.log('Setting up YouTube player for video:', videoId);
    
    try {
      // Try to use the YouTube IFrame API directly
      if (window.YT && window.YT.Player) {
        youtubePlayer.current = new window.YT.Player(iframeRef.current, {
          events: {
            'onReady': (event: any) => {
              console.log('YouTube player ready');
              setIsLoading(false);
              setPlayerReady(true);
              event.target.playVideo();
            },
            'onStateChange': (event: any) => {
              if (event.data === window.YT?.PlayerState.PLAYING) {
                console.log('Video is now playing');
                setIsLoading(false);
              } else if (event.data === window.YT?.PlayerState.ENDED) {
                console.log('Video ended');
                onClose();
              } else if (event.data === window.YT?.PlayerState.PAUSED) {
                console.log('Video paused');
              }
            },
            'onError': (event: any) => {
              console.error('YouTube player error:', event);
              setLoadError(true);
              setIsLoading(false);
            }
          }
        });
      }
    } catch (e) {
      console.error('Error initializing YouTube player:', e);
      // Fall back to regular iframe if API initialization fails
      setIsLoading(false);
    }
  };

  return {
    setupYouTubePlayer
  };
};
