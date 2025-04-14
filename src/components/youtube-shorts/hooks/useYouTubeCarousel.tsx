
import { useState, useEffect, useRef } from 'react';
import { toast } from "sonner";
import { Play, Pause, AlertCircle } from 'lucide-react';
import { YouTubeShort } from '../types';
import { getYoutubeShorts } from '../data';
import { isLowPerformanceDevice } from '@/utils/mobilePerformance';

/**
 * Main hook for YouTube carousel functionality
 */
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
  
  // Device capability detection - only compute once
  const lowPerformanceDevice = useRef(isLowPerformanceDevice());
  const isMobileDevice = useRef(
    typeof navigator !== 'undefined' && 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
  
  // Update ref when state changes
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Load shorts data and set up auto-slide on mount
  useEffect(() => {
    // Auto-pause on low performance or mobile devices to improve performance
    if (lowPerformanceDevice.current || isMobileDevice.current) {
      if (!isPausedRef.current) {
        setIsPaused(true);
      }
    }
    
    let isMounted = true;
    
    // Function to load shorts data
    const loadShorts = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);
        
        // Use initial data for low performance devices
        if (lowPerformanceDevice.current) {
          console.log("Low performance device detected, using initial shorts data");
          setIsLoading(false);
          return;
        }
        
        // Fetch data with a slight delay to not block initial rendering
        setTimeout(async () => {
          if (!isMounted) return;
          
          try {
            console.log("Fetching YouTube shorts data...");
            const shorts = await getYoutubeShorts();
            
            if (isMounted) {
              if (shorts && shorts.length > 0) {
                setYoutubeShorts(shorts);
                console.log(`Successfully loaded ${shorts.length} YouTube shorts`);
              } else {
                console.warn("No YouTube shorts returned, using initial data");
                setYoutubeShorts(initialShorts);
              }
              setIsLoading(false);
            }
          } catch (error) {
            console.error("Error loading YouTube shorts:", error);
            if (isMounted) {
              setLoadError("Failed to load videos. Please try again later.");
              setIsLoading(false);
              
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
      
      // Clean up interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [initialShorts]);

  // Play a video
  const playVideo = (videoId: string) => {
    console.log("Playing video:", videoId);
    setCurrentVideoId(videoId);
    
    // Stop auto-sliding when a video is playing
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // Only show toast on capable devices
    if (!lowPerformanceDevice.current && !isMobileDevice.current) {
      const shortTitle = youtubeShorts.find(short => short.id === videoId)?.title || "YouTube Short";
      toast("Playing video", {
        description: shortTitle,
        icon: <Play className="h-5 w-5 text-green-500" />
      });
    }
  };

  // Close video player
  const closeVideo = () => {
    console.log("Closing video player");
    setCurrentVideoId(null);
    
    // Resume auto-slide if not paused
    if (!isPausedRef.current && isCarouselMounted.current && 
        !lowPerformanceDevice.current && !isMobileDevice.current) {
      startAutoSlide();
    }
  };

  // Toggle pause state
  const togglePause = () => {
    const newPausedState = !isPaused;
    console.log("Toggle pause state to:", newPausedState);
    setIsPaused(newPausedState);
    
    // Show toast on capable devices
    if (!lowPerformanceDevice.current && !isMobileDevice.current) {
      toast(newPausedState ? "Auto-sliding paused" : "Auto-sliding resumed", {
        icon: newPausedState ? <Pause className="h-5 w-5 text-orange-500" /> : 
                             <Play className="h-5 w-5 text-green-500" />
      });
    }
    
    // Start or stop auto-slide based on new state
    if (newPausedState) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else if (!lowPerformanceDevice.current && !isMobileDevice.current) {
      startAutoSlide();
    }
  };

  // Start auto-slide
  const startAutoSlide = () => {
    if (!isCarouselMounted.current || 
        lowPerformanceDevice.current || 
        isMobileDevice.current) return;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    console.log("Starting auto-slide interval");
    
    // Use setInterval for auto-sliding
    intervalRef.current = window.setInterval(() => {
      if (!isCarouselMounted.current || isPausedRef.current) return;
      
      // Click the next button to advance carousel
      const carouselEl = document.querySelector('[data-embla-carousel]');
      if (carouselEl) {
        const nextButton = carouselEl.querySelector('[data-carousel-next]') as HTMLButtonElement;
        if (nextButton) {
          nextButton.click();
        }
      }
    }, 5000) as unknown as number;
  };

  // Retry loading shorts
  const retryLoading = () => {
    setLoadError(null);
    setIsLoading(true);
    
    const loadShorts = async () => {
      try {
        console.log("Retrying to load YouTube shorts...");
        const shorts = await getYoutubeShorts();
        
        if (shorts && shorts.length > 0) {
          setYoutubeShorts(shorts);
          console.log("Successfully loaded shorts on retry");
        } else {
          // If no shorts returned but no error thrown, use initial data
          console.warn("No shorts returned on retry, using initial data");
          setYoutubeShorts(initialShorts);
        }
      } catch (error) {
        console.error("Retry failed:", error);
        setLoadError("Failed to load videos after retry");
        
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

  // Setup initial loading state and auto-slide
  useEffect(() => {
    // Set loading state with timeout
    const timer = setTimeout(() => {
      if (isCarouselMounted.current) {
        setIsLoading(false);
      }
    }, 1000);

    // Start auto-slide if conditions are met
    if (!isPausedRef.current && 
        !lowPerformanceDevice.current && 
        !isMobileDevice.current) {
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
