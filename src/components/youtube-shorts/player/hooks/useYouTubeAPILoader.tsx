import { useEffect } from 'react';

export const useYouTubeAPILoader = (setupYouTubePlayer: () => void) => {
  useEffect(() => {
    // Load the YouTube IFrame API script if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      
      console.log('YouTube IFrame API script loaded');
    }
    
    // Add event listener for YouTube API loaded
    const onYouTubeIframeAPIReady = () => {
      console.log('YouTube IFrame API ready');
      setupYouTubePlayer();
    };
    
    // If API is already loaded, set up player immediately
    if (window.YT && window.YT.Player) {
      console.log('YouTube API already loaded');
      setupYouTubePlayer();
    } else {
      // Otherwise wait for API to load
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
  }, [setupYouTubePlayer]);
};
