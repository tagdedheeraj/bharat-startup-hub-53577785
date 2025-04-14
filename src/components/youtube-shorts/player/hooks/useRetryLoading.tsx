
import { useCallback } from 'react';

interface UseRetryLoadingProps {
  videoId: string;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  setIsLoading: (isLoading: boolean) => void;
  setLoadError: (hasError: boolean) => void;
  playerInitAttempted: React.MutableRefObject<boolean>;
}

/**
 * Hook for handling retry functionality
 */
export const useRetryLoading = ({
  videoId,
  iframeRef,
  setIsLoading,
  setLoadError,
  playerInitAttempted
}: UseRetryLoadingProps) => {
  
  const retryLoading = useCallback(() => {
    console.log("Retrying to load video:", videoId);
    setIsLoading(true);
    setLoadError(false);
    playerInitAttempted.current = false;
    
    // Recreate the iframe with a new URL 
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const currentSrc = iframe.src;
      
      // Clear src to force reload
      iframe.src = '';
      
      // Short delay to ensure DOM updates
      setTimeout(() => {
        // Add a cache-busting parameter to avoid browser caching
        const timestamp = new Date().getTime();
        const baseUrl = currentSrc.split('?')[0];
        iframe.src = `${baseUrl}?autoplay=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1&fs=1&rel=0&t=${timestamp}`;
      }, 100);
    }
  }, [videoId, iframeRef, setIsLoading, setLoadError, playerInitAttempted]);
  
  return {
    retryLoading
  };
};
