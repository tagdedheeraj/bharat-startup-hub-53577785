
import { useState, useEffect } from 'react';
import { toast } from "sonner";
import { AlertCircle } from 'lucide-react';
import { YouTubeShort } from '../../types';
import { getYoutubeShorts } from '../../data';

/**
 * Hook responsible for loading states and error handling
 */
export const useCarouselLoading = (
  youtubeShorts: YouTubeShort[],
  setCurrentVideoId: (id: string | null) => void
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  
  // Setup initial loading state
  useEffect(() => {
    // Use setTimeout for loading state to avoid jank
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Reset error state and retry loading
  const retryLoading = async () => {
    setLoadError(null);
    setIsLoading(true);
    
    // Close any open video
    setCurrentVideoId(null);
    
    // Try loading again
    try {
      console.log("Retrying to load YouTube shorts...");
      const shorts = await getYoutubeShorts();
      if (shorts.length > 0) {
        console.log("Successfully loaded shorts on retry");
      }
    } catch (error) {
      console.error("Retry failed:", error);
      setLoadError("Failed to load videos after retry");
      
      // Show error toast
      toast.error("Failed to reload videos", {
        description: "Please check your internet connection",
        icon: <AlertCircle className="h-5 w-5 text-red-500" />
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    loadError,
    retryLoading
  };
};
