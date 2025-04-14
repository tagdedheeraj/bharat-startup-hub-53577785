
import { useEffect } from 'react';

export const useYouTubePlayerLoading = (
  videoId: string, 
  {
    iframeRef,
    playerInitAttempted,
    youtubePlayer,
    setIsLoading,
    setPlayerReady,
    setLoadError,
    isLoading,
    playerReady,
    loadError
  }: any,
  onClose: () => void
) => {
  // Function to retry loading the video
  const retryLoading = () => {
    setIsLoading(true);
    setLoadError(false);
    playerInitAttempted.current = false;
    
    // Recreate the iframe with a new URL to force reload
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const currentSrc = iframe.src;
      iframe.src = '';
      
      // Short delay to ensure DOM updates
      setTimeout(() => {
        iframe.src = currentSrc.includes('?') 
          ? `${currentSrc.split('?')[0]}?autoplay=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1&fs=1&rel=0`
          : `${currentSrc}?autoplay=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1&fs=1&rel=0`;
      }, 100);
    }
  };

  return {
    retryLoading
  };
};
