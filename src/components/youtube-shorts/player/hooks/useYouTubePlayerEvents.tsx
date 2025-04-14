
import { useCallback } from 'react';

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
  // Enhanced event listener for YouTube messages
  const handleMessage = useCallback((event: MessageEvent) => {
    // Check if message is from YouTube (more robust check)
    if (event.origin.indexOf('youtube.com') === -1 && 
        event.origin.indexOf('youtube-nocookie.com') === -1) {
      return; // Not from YouTube, ignore
    }
    
    try {
      // Parse the message data safely
      let data;
      
      if (typeof event.data === 'string') {
        try {
          data = JSON.parse(event.data);
        } catch (e) {
          // Not JSON, could be other YouTube message
          return;
        }
      } else {
        data = event.data;
      }
      
      // Log detailed message for debugging
      console.log('YouTube message received:', data);
      
      // Handle errors - check both formats for error reporting
      if (data.event === 'onError' || data.info === 'onError') {
        const errorCode = data.info === 'onError' ? data.data : data.data;
        console.error(`YouTube player error ${errorCode}:`, data);
        
        // Handle specific error codes with more detailed logging
        let errorMessage = 'Unknown error occurred';
        switch (errorCode) {
          case 2:
            errorMessage = 'Invalid video ID';
            break;
          case 5:
            errorMessage = 'HTML5 player error';
            break;
          case 100:
            errorMessage = 'Video not found or removed';
            break;
          case 101:
          case 150:
            errorMessage = 'Video embedding disabled by owner';
            break;
        }
        
        console.error(`Error details: ${errorMessage}`);
        setLoadError(true);
        setIsLoading(false);
      }
      
      // Handle ready state
      if (data.event === 'onReady' || data.info === 'onReady') {
        console.log('YouTube video is ready to play');
        setIsLoading(false);
        setPlayerReady(true);
      }
      
      // Handle play state change
      if (data.event === 'onStateChange' || data.info === 'onStateChange') {
        const playerState = data.info === 'onStateChange' ? data.data : data.data;
        
        // YouTube player states: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
        if (playerState === 1) {
          console.log("Video is now playing via postMessage API");
          setIsLoading(false);
        } else if (playerState === 0) {
          console.log("Video ended via postMessage API");
          onClose();
        } else if (playerState === 3) {
          console.log("Video buffering");
        }
      }
    } catch (e) {
      // General error in message processing
      console.error("Error processing YouTube message:", e);
    }
  }, [onClose, setIsLoading, setLoadError, setPlayerReady]);

  return {
    handleMessage
  };
};
