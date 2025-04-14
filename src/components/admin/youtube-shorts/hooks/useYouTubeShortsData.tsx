
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { YouTubeShort } from '@/components/youtube-shorts/types';
import { youtubeShorts as initialYoutubeShorts, getYoutubeShorts } from '@/components/youtube-shorts/data';

export const useYouTubeShortsData = (isOffline: boolean) => {
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShorts = async () => {
      setIsLoading(true);
      try {
        const shorts = await getYoutubeShorts();
        setYoutubeShorts(shorts);
      } catch (error) {
        console.error("Error fetching YouTube shorts:", error);
        setYoutubeShorts(initialYoutubeShorts);
        toast.error("Failed to load YouTube shorts");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchShorts();
  }, [isOffline]);

  return { youtubeShorts, setYoutubeShorts, isLoading };
};
