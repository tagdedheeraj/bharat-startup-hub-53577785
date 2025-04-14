
import { useEffect, useRef } from 'react';

/**
 * Hook for loading the YouTube IFrame API
 */
export const useYouTubeApiLoader = (callback: () => void) => {
  // Track loading attempts
  const apiLoadAttempted = useRef(false);
  
  useEffect(() => {
    // Function to load YouTube API
    const loadYouTubeAPI = () => {
      if (window.YT) {
        console.log("YouTube API already loaded");
        callback();
        return;
      }
      
      if (apiLoadAttempted.current) {
        console.log("YouTube API load already attempted");
        return;
      }
      
      apiLoadAttempted.current = true;
      console.log("Loading YouTube IFrame API script");
      
      // Create script element
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      
      // Add callback
      window.onYouTubeIframeAPIReady = () => {
        console.log("YouTube API ready");
        callback();
      };
      
      // Insert script into DOM
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };
    
    loadYouTubeAPI();
    
    // Cleanup
    return () => {
      // Reset global callback
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, [callback]);
  
  return {
    apiLoadAttempted
  };
};
