
import { useState, useEffect, useRef, ReactNode } from 'react';
import { toast } from "sonner";
import { Play, Pause } from 'lucide-react';
import { YouTubeShort } from './types';
import { getYoutubeShorts } from './data';
import { isLowPerformanceDevice } from '@/utils/mobilePerformance';

export const useYouTubeCarousel = (initialShorts: YouTubeShort[]) => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>(initialShorts);
  
  // Use refs to avoid triggering effects unnecessarily
  const intervalRef = useRef<number | null>(null);
  const isPausedRef = useRef(isPaused);
  const isCarouselMounted = useRef(true);
  const lowPerformanceDevice = useRef(isLowPerformanceDevice());
  const isMobileDevice = useRef(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  
  // Update ref when state changes
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    // Auto-pause on low performance or mobile devices to avoid jank
    if (lowPerformanceDevice.current || isMobileDevice.current) {
      if (!isPausedRef.current) {
        setIsPaused(true);
      }
    }
    
    // Load the latest shorts data when the component mounts
    let isMounted = true;
    
    const loadShorts = async () => {
      try {
        // On low performance devices, skip loading and use initial data
        if (lowPerformanceDevice.current) {
          if (isMounted) {
            setIsLoading(false);
          }
          return;
        }
        
        // Use a timeout to ensure this doesn't block initial page rendering
        setTimeout(async () => {
          try {
            if (!isMounted) return;
            
            const shorts = await getYoutubeShorts();
            if (isMounted && shorts.length > 0) {
              setYoutubeShorts(shorts);
            }
          } catch (error) {
            console.error("Error loading YouTube shorts:", error);
          } finally {
            if (isMounted) {
              setIsLoading(false);
            }
          }
        }, 1000);
      } catch (error) {
        console.error("Error scheduling YouTube shorts load:", error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    
    loadShorts();
    
    return () => {
      isMounted = false;
      isCarouselMounted.current = false;
      // Clear any running intervals
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const playVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // Only show toast on non-low-performance devices
    if (!lowPerformanceDevice.current && !isMobileDevice.current) {
      toast("Playing video", {
        description: youtubeShorts.find(short => short.id === videoId)?.title,
        icon: <Play className="h-5 w-5 text-green-500" />
      });
    }
  };

  const closeVideo = () => {
    setCurrentVideoId(null);
    if (!isPausedRef.current && isCarouselMounted.current && !lowPerformanceDevice.current && !isMobileDevice.current) {
      startAutoSlide();
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    
    // Only show toast on non-low-performance devices
    if (!lowPerformanceDevice.current && !isMobileDevice.current) {
      toast(isPaused ? "Auto-sliding resumed" : "Auto-sliding paused", {
        icon: isPaused ? <Play className="h-5 w-5 text-green-500" /> : <Pause className="h-5 w-5 text-orange-500" />
      });
    }
    
    if (!isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else if (!lowPerformanceDevice.current && !isMobileDevice.current) {
      startAutoSlide();
    }
  };

  const startAutoSlide = () => {
    if (!isCarouselMounted.current || lowPerformanceDevice.current || isMobileDevice.current) return;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Use more efficient setInterval for non-mobile devices
    intervalRef.current = window.setInterval(() => {
      if (!isCarouselMounted.current || isPausedRef.current) return;
      
      // Click the next button if it exists
      const carouselEl = document.querySelector('[data-embla-carousel]');
      if (carouselEl) {
        const nextButton = carouselEl.querySelector('[data-carousel-next]') as HTMLButtonElement;
        if (nextButton) {
          nextButton.click();
        }
      }
    }, 5000) as unknown as number;
  };

  useEffect(() => {
    // Use setTimeout for loading state to avoid jank
    const timer = setTimeout(() => {
      if (isCarouselMounted.current) {
        setIsLoading(false);
      }
    }, 1000);

    if (!isPausedRef.current && !lowPerformanceDevice.current && !isMobileDevice.current) {
      startAutoSlide();
    }

    return () => {
      clearTimeout(timer);
      isCarouselMounted.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
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
    togglePause,
    isLowPerformanceDevice: lowPerformanceDevice.current || isMobileDevice.current
  };
};
