
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
      console.log('Attempting to load YouTube IFrame API script');
      
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      
      // Add event listeners to log success or failure
      tag.onload = () => console.log('YouTube IFrame API script loaded successfully');
      tag.onerror = (e) => console.error('Failed to load YouTube IFrame API script:', e);
      
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        console.log('YouTube IFrame API script tag inserted into DOM');
      } else {
        document.head.appendChild(tag);
        console.log('YouTube IFrame API script tag appended to head');
      }
    } else if (window.YT) {
      console.log('YouTube IFrame API already loaded');
    }
  }, []);

  return {
    isAPIAvailable: () => {
      const available = Boolean(window.YT && window.YT.Player);
      console.log('YouTube API available:', available);
      return available;
    }
  };
};
