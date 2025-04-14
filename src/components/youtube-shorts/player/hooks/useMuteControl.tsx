
import { useEffect } from 'react';

interface UseMuteControlProps {
  iframeRef: React.RefObject<HTMLIFrameElement>;
  isMuted: boolean;
}

/**
 * Hook for handling mute/unmute functionality with improved reliability
 */
export const useMuteControl = ({
  iframeRef,
  isMuted
}: UseMuteControlProps) => {
  
  // React to mute state changes
  useEffect(() => {
    const sendMuteCommand = () => {
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
          
          // Log success
          console.log(`YouTube player ${isMuted ? 'muted' : 'unmuted'} successfully`);
        }
      } catch (error) {
        console.error("Error updating mute state:", error);
      }
    };
    
    // Slight delay to ensure iframe is fully loaded
    const timeoutId = setTimeout(sendMuteCommand, 500);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMuted, iframeRef]);
};
