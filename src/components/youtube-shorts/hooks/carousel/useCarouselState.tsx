
import { useState, useEffect } from 'react';
import { YouTubeShort } from '../../types';
import { getYoutubeShorts } from '../../data';

/**
 * Hook responsible for managing the carousel's state
 */
export const useCarouselState = (initialShorts: YouTubeShort[], refreshTrigger: number = 0) => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>(initialShorts);

  // Load shorts data on mount or when refresh is triggered
  useEffect(() => {
    let isMounted = true;
    
    const loadShorts = async () => {
      try {
        console.log(`Fetching YouTube shorts data from useCarouselState... (refresh: ${refreshTrigger})`);
        // Pass timestamp to bypass cache
        const timestamp = new Date().getTime();
        const shorts = await getYoutubeShorts(timestamp);
        console.log("Fetched shorts:", shorts);
        
        if (isMounted) {
          if (shorts.length > 0) {
            setYoutubeShorts(shorts);
            console.log("Set YouTube shorts data successfully");
          } else {
            console.warn("No YouTube shorts returned from API, using initial data");
            setYoutubeShorts(initialShorts);
          }
        }
      } catch (error) {
        console.error("Error loading YouTube shorts:", error);
        if (isMounted) {
          // On error, use initial data
          setYoutubeShorts(initialShorts);
        }
      }
    };
    
    loadShorts();
    
    return () => {
      isMounted = false;
    };
  }, [initialShorts, refreshTrigger]);

  return {
    currentVideoId,
    setCurrentVideoId,
    youtubeShorts,
    setYoutubeShorts
  };
};
