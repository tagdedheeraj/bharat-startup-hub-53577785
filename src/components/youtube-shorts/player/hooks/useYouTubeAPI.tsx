
import { useEffect, useRef } from 'react';

/**
 * Hook to load the YouTube IFrame API script
 * @returns Object with API loading status
 */
export const useYouTubeAPI = () => {
  const apiLoaded = useRef(false);
  const apiLoadStarted = useRef(false);

  useEffect(() => {
    // Load the YouTube IFrame API script if not already loaded or loading
    if (!window.YT && !apiLoaded.current && !apiLoadStarted.current) {
      apiLoadStarted.current = true;
      console.log('Loading YouTube IFrame API script');
      
      // Define global callback for when API is ready
      window.onYouTubeIframeAPIReady = () => {
        console.log('YouTube IFrame API is ready');
        apiLoaded.current = true;
        
        // Dispatch custom event that other components can listen for
        const event = new CustomEvent('youtube-api-ready');
        window.dispatchEvent(event);
      };
      
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      
      tag.onload = () => console.log('YouTube IFrame API script loaded successfully');
      tag.onerror = (e) => console.error('Failed to load YouTube IFrame API script:', e);
      
      // Check if there's a script tag and insert before it, otherwise append to head
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }
  }, []);

  // Function to check if the API is available
  const isAPIAvailable = () => {
    const available = Boolean(window.YT && window.YT.Player);
    return available;
  };

  return {
    isAPIAvailable,
    isLoaded: apiLoaded.current
  };
};
