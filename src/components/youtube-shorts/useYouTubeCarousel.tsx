
import { useState, useEffect, useRef, ReactNode } from 'react';
import { toast } from "sonner";
import { Play, Pause } from 'lucide-react';
import { YouTubeShort } from './types';
import { getYoutubeShorts } from './data';

export const useYouTubeCarousel = (initialShorts: YouTubeShort[]) => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>(initialShorts);
  const intervalRef = useRef<number | null>(null);
  
  // Use ref to prevent unnecessary effect dependencies
  const isPausedRef = useRef(isPaused);
  
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    // Load the latest shorts data when the component mounts
    let isMounted = true;
    const loadShorts = async () => {
      try {
        const shorts = await getYoutubeShorts();
        if (isMounted) {
          setYoutubeShorts(shorts);
        }
      } catch (error) {
        console.error("Error loading YouTube shorts:", error);
      }
    };
    
    loadShorts();
    
    return () => {
      isMounted = false;
    };
  }, []);

  const playVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    toast("Playing video", {
      description: youtubeShorts.find(short => short.id === videoId)?.title,
      icon: <Play className="h-5 w-5 text-green-500" />
    });
  };

  const closeVideo = () => {
    setCurrentVideoId(null);
    if (!isPausedRef.current) {
      startAutoSlide();
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    toast(isPaused ? "Auto-sliding resumed" : "Auto-sliding paused", {
      icon: isPaused ? <Play className="h-5 w-5 text-green-500" /> : <Pause className="h-5 w-5 text-orange-500" />
    });
    if (!isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      startAutoSlide();
    }
  };

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      const carouselEl = document.querySelector('[data-embla-carousel]');
      if (carouselEl) {
        const nextButton = carouselEl.querySelector('[data-carousel-next]') as HTMLButtonElement;
        if (nextButton) {
          nextButton.click();
        }
      }
    }, 5000);
  };

  useEffect(() => {
    // Use setTimeout for loading state to avoid jank
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (!isPausedRef.current) {
      startAutoSlide();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      clearTimeout(timer);
    };
  }, []);

  return {
    currentVideoId,
    isPaused,
    isLoading,
    hoveredVideo,
    youtubeShorts,
    setHoveredVideo,
    playVideo,
    closeVideo,
    togglePause
  };
};
