
import { useEffect, useRef } from 'react';

/**
 * Hook to load the YouTube IFrame API script
 * @returns Object with API loading status
 */
export const useYouTubeAPI = () => {
  const apiLoaded = useRef(false);

  useEffect(() => {
    // Load the YouTube IFrame API script if not already loaded
    if (!window.YT && !apiLoaded.current) {
      apiLoaded.current = true;
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      
      console.log('YouTube IFrame API script loaded');
    }
  }, []);

  return {
    isAPIAvailable: () => Boolean(window.YT && window.YT.Player)
  };
};
