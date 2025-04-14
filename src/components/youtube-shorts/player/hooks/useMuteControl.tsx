
import { useEffect } from 'react';

interface UseMuteControlProps {
  iframeRef: React.RefObject<HTMLIFrameElement>;
  isMuted: boolean;
}

/**
 * Hook for handling mute/unmute functionality
 */
export const useMuteControl = ({
  iframeRef,
  isMuted
}: UseMuteControlProps) => {
  
  // React to mute state changes
  useEffect(() => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        // Command to be sent to the YouTube iframe
        const command = {
          event: 'command',
          func: isMuted ? 'mute' : 'unMute'
        };
        
        // Send command via postMessage
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify(command), 
          '*'
        );
      }
    } catch (error) {
      console.error("Error updating mute state:", error);
    }
  }, [isMuted, iframeRef]);
};
