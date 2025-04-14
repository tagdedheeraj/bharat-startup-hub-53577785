
import { useCallback } from 'react';
import { toast } from 'sonner';

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
  // Function to retry loading the video with more robust error handling
  const retryLoading = useCallback(() => {
    setIsLoading(true);
    setLoadError(false);
    playerInitAttempted.current = false;
    
    // Try to clean up previous player instance if it exists
    if (youtubePlayer.current && typeof youtubePlayer.current.destroy === 'function') {
      try {
        youtubePlayer.current.destroy();
        youtubePlayer.current = null;
      } catch (e) {
        console.error('Error destroying previous player:', e);
      }
    }
    
    console.log('Retrying video load for:', videoId);
    toast.info('Retrying video playback...');
    
    // Recreate the iframe with a new URL to force reload
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const currentSrc = iframe.src;
      
      // Remove src first to ensure complete reset
      iframe.src = '';
      
      // Short delay to ensure DOM updates
      setTimeout(() => {
        // Ensure origin parameter is always correctly set
        const origin = encodeURIComponent(window.location.origin);
        
        // Ensure we have a clean URL with all necessary parameters
        const baseUrl = currentSrc.includes('?') 
          ? currentSrc.split('?')[0] 
          : currentSrc;
          
        const newSrc = `${baseUrl}?autoplay=1&enablejsapi=1&playsinline=1&origin=${origin}&controls=1&fs=1&rel=0&modestbranding=1&iv_load_policy=3&mute=0`;
        
        console.log('Setting new iframe src:', newSrc);
        iframe.src = newSrc;
      }, 300);
    }
    
    // Set a timeout to handle if loading still fails
    setTimeout(() => {
      if (isLoading && !playerReady) {
        console.log('Video still not loaded after retry, offering fallback');
        setIsLoading(false);
        setLoadError(true);
      }
    }, 10000);
  }, [videoId, setIsLoading, setLoadError, setPlayerReady, isLoading, playerReady, youtubePlayer]);

  return {
    retryLoading
  };
};
