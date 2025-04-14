
import { useState, useEffect, useRef, ReactNode } from 'react';
import { toast } from "sonner";
import { Play, Pause, AlertCircle } from 'lucide-react';
import { YouTubeShort } from './types';
import { getYoutubeShorts } from './data';
import { isLowPerformanceDevice } from '@/utils/mobilePerformance';

export const useYouTubeCarousel = (initialShorts: YouTubeShort[]) => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>(initialShorts);
  const [loadError, setLoadError] = useState<string | null>(null);
  
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
        setIsLoading(true);
        setLoadError(null);
        
        // On low performance devices, use initial data but still mark as loaded
        if (lowPerformanceDevice.current) {
          console.log("Low performance device detected, using initial shorts data");
          if (isMounted) {
            setIsLoading(false);
          }
          return;
        }
        
        // Use a timeout to ensure this doesn't block initial page rendering
        setTimeout(async () => {
          try {
            if (!isMounted) return;
            
            console.log("Fetching YouTube shorts data...");
            const shorts = await getYoutubeShorts();
            console.log("Fetched shorts:", shorts);
            
            if (isMounted) {
              if (shorts.length > 0) {
                setYoutubeShorts(shorts);
                console.log("Set YouTube shorts data successfully");
              } else {
                console.warn("No YouTube shorts returned from API, using initial data");
                // If no shorts returned but no error thrown, use initial data
                setYoutubeShorts(initialShorts);
              }
              setIsLoading(false);
            }
          } catch (error) {
            console.error("Error loading YouTube shorts:", error);
            if (isMounted) {
              setLoadError("Failed to load videos. Please try again later.");
              setIsLoading(false);
              
              // Show error toast
              toast.error("Failed to load YouTube shorts", {
                description: "Using backup videos instead",
                icon: <AlertCircle className="h-5 w-5 text-red-500" />
              });
            }
          }
        }, 1000);
      } catch (error) {
        console.error("Error scheduling YouTube shorts load:", error);
        if (isMounted) {
          setLoadError("Failed to initialize video loader");
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
  }, [initialShorts]);

  const playVideo = (videoId: string) => {
    console.log("Playing video:", videoId);
    setCurrentVideoId(videoId);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // Only show toast on non-low-performance devices
    if (!lowPerformanceDevice.current && !isMobileDevice.current) {
      const shortTitle = youtubeShorts.find(short => short.id === videoId)?.title || "YouTube Short";
      toast("Playing video", {
        description: shortTitle,
        icon: <Play className="h-5 w-5 text-green-500" />
      });
    }
  };

  const closeVideo = () => {
    console.log("Closing video player");
    setCurrentVideoId(null);
    if (!isPausedRef.current && isCarouselMounted.current && !lowPerformanceDevice.current && !isMobileDevice.current) {
      startAutoSlide();
    }
  };

  const togglePause = () => {
    const newPausedState = !isPaused;
    console.log("Toggle pause state to:", newPausedState);
    setIsPaused(newPausedState);
    
    // Only show toast on non-low-performance devices
    if (!lowPerformanceDevice.current && !isMobileDevice.current) {
      toast(isPaused ? "Auto-sliding resumed" : "Auto-sliding paused", {
        icon: isPaused ? <Play className="h-5 w-5 text-green-500" /> : <Pause className="h-5 w-5 text-orange-500" />
      });
    }
    
    if (!newPausedState) {
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
    
    console.log("Starting auto-slide interval");
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

  // Reset error state and retry loading
  const retryLoading = () => {
    setLoadError(null);
    setIsLoading(true);
    
    // Try loading again
    const loadShorts = async () => {
      try {
        console.log("Retrying to load YouTube shorts...");
        const shorts = await getYoutubeShorts();
        if (shorts.length > 0) {
          setYoutubeShorts(shorts);
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
    
    loadShorts();
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
    loadError,
    setHoveredVideo,
    playVideo,
    closeVideo,
    togglePause,
    retryLoading,
    isLowPerformanceDevice: lowPerformanceDevice.current || isMobileDevice.current
  };
};
