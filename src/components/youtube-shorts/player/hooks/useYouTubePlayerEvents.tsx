
import { useEffect } from 'react';

export const useYouTubePlayerEvents = (
  videoId: string,
  {
    setIsLoading,
    setPlayerReady,
    setLoadError,
    isLoading,
    playerReady,
    retryLoading
  }: any,
  onClose: () => void
) => {
  // Add event listener for message from the iframe
  const handleMessage = (event: MessageEvent) => {
    // Check if message is from YouTube
    if (event.origin.includes('youtube')) {
      try {
        // Try to parse the message data
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        
        if (data.event === 'onError' || data.info === 'onError') {
          console.error('YouTube player error:', data);
          setLoadError(true);
          setIsLoading(false);
        }
        
        if (data.event === 'onReady' || data.info === 'onReady') {
          setIsLoading(false);
          setPlayerReady(true);
          console.log('YouTube video is ready to play');
        }
        
        // Handle play state change
        if (data.event === 'onStateChange' || data.info === 'onStateChange') {
          const playerState = data.info === 'onStateChange' ? data.data : data.data;
          
          // YouTube player states: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
          if (playerState === 1) {
            console.log("Video is now playing");
            setIsLoading(false);
          } else if (playerState === 0) {
            console.log("Video ended");
            onClose();
          }
        }
      } catch (e) {
        // Not a JSON message or other error, just log
        console.log("Non-JSON message or error from YouTube:", e);
      }
    }
  };

  return {
    handleMessage
  };
};
