
import { useEffect } from 'react';

interface UseYouTubeMessageListenerProps {
  setIsLoading: (isLoading: boolean) => void;
  setLoadError: (hasError: boolean) => void;
  onClose: () => void;
}

/**
 * Hook for handling YouTube iframe postMessage communication
 */
export const useYouTubeMessageListener = ({ 
  setIsLoading, 
  setLoadError, 
  onClose 
}: UseYouTubeMessageListenerProps) => {
  
  useEffect(() => {
    // Set up message listener for communication from iframe
    const handleMessage = (event: MessageEvent) => {
      // Only process messages from YouTube
      if (event.origin.includes('youtube.com')) {
        try {
          // Parse message data
          const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
          
          // Handle errors
          if (data.event === 'onError' || data.info === 'onError') {
            console.error('YouTube player error from postMessage:', data);
            setLoadError(true);
            setIsLoading(false);
          }
          
          // Handle ready state
          if (data.event === 'onReady' || data.info === 'onReady') {
            console.log('YouTube player ready from postMessage');
            setIsLoading(false);
          }
          
          // Handle state changes
          if (data.event === 'onStateChange' || data.info === 'onStateChange') {
            const playerState = data.info === 'onStateChange' ? data.data : data.data;
            
            if (playerState === 1) { // Playing
              console.log("Video playing from postMessage");
              setIsLoading(false);
            } else if (playerState === 0) { // Ended
              console.log("Video ended from postMessage");
              onClose();
            }
          }
        } catch (e) {
          // Not a JSON message, ignore
          console.log("Received non-JSON message from YouTube");
        }
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [setIsLoading, setLoadError, onClose]);
};
