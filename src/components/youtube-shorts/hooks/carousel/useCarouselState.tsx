
import { useState, useEffect } from 'react';
import { YouTubeShort } from '../../types';
import { getYoutubeShorts } from '../../data';
import { toast } from "sonner";
import { AlertCircle } from 'lucide-react';

/**
 * Hook responsible for managing the carousel's state
 */
export const useCarouselState = (initialShorts: YouTubeShort[]) => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>(initialShorts);

  // Load shorts data on mount
  useEffect(() => {
    let isMounted = true;
    
    const loadShorts = async () => {
      try {
        console.log("Fetching YouTube shorts data from useCarouselState...");
        const shorts = await getYoutubeShorts();
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
          toast.error("Failed to load YouTube shorts", {
            description: "Using backup videos instead",
            icon: <AlertCircle className="h-5 w-5 text-red-500" />
          });
        }
      }
    };
    
    loadShorts();
    
    return () => {
      isMounted = false;
    };
  }, [initialShorts]);

  return {
    currentVideoId,
    setCurrentVideoId,
    hoveredVideo,
    setHoveredVideo,
    youtubeShorts,
    setYoutubeShorts
  };
};
