
import { useEffect, useRef, useCallback } from 'react';

export const useYouTubeAPILoader = (setupYouTubePlayer: () => void) => {
  // Track API load attempts to prevent multiple loads
  const apiLoadAttempted = useRef(false);
  const apiLoadTimeout = useRef<number | null>(null);

  // Create a more robust API loading function
  const loadYouTubeAPI = useCallback(() => {
    if (apiLoadAttempted.current) return;
    
    apiLoadAttempted.current = true;
    console.log('Attempting to load YouTube IFrame API script');
    
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      console.log('YouTube API already loaded, setting up player immediately');
      setupYouTubePlayer();
      return;
    }
    
    // Set up the global callback for when API loads
    window.onYouTubeIframeAPIReady = () => {
      console.log('YouTube IFrame API ready - API callback triggered');
      setupYouTubePlayer();
    };
    
    // Create script element
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.id = 'youtube-iframe-api';
    tag.async = true;
    tag.onload = () => console.log('YouTube API script loaded successfully');
    tag.onerror = (e) => console.error('Failed to load YouTube API script:', e);
    
    // Add to DOM
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    
    // Set a backup timeout in case the API callback doesn't fire
    apiLoadTimeout.current = window.setTimeout(() => {
      console.log('YouTube API load timeout - checking status');
      if (window.YT && window.YT.Player) {
        console.log('YouTube API detected despite callback not firing');
        setupYouTubePlayer();
      } else {
        console.warn('YouTube API failed to load properly after timeout');
      }
    }, 5000);
  }, [setupYouTubePlayer]);

  useEffect(() => {
    // Load the API when component mounts
    loadYouTubeAPI();
    
    // Cleanup timeout on unmount
    return () => {
      if (apiLoadTimeout.current) {
        clearTimeout(apiLoadTimeout.current);
      }
    };
  }, [loadYouTubeAPI]);
};
