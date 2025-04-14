
import { useState, useEffect, useRef, useCallback } from 'react';
import { toast } from "sonner";
import { Play, Pause } from 'lucide-react';
import { useDeviceDetection } from './useDeviceDetection';

/**
 * Hook responsible for carousel controls (play, pause, navigation)
 */
export const useCarouselControls = (setCurrentVideoId: (id: string | null) => void) => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Use refs to avoid triggering effects unnecessarily
  const intervalRef = useRef<number | null>(null);
  const isPausedRef = useRef(isPaused);
  const isCarouselMounted = useRef(true);
  
  const { isLowPerformanceDevice, isMobileDevice } = useDeviceDetection();
  
  // Update ref when state changes
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Play a specific video
  const playVideo = useCallback((videoId: string) => {
    console.log("Playing video:", videoId);
    setCurrentVideoId(videoId);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // Only show toast on non-low-performance devices
    if (!isLowPerformanceDevice && !isMobileDevice) {
      toast("Playing video", {
        description: videoId, // We'll just use the ID since we don't have the title here
        icon: <Play className="h-5 w-5 text-green-500" />
      });
    }
  }, [setCurrentVideoId, isLowPerformanceDevice, isMobileDevice]);

  // Close the video player
  const closeVideo = useCallback(() => {
    console.log("Closing video player");
    setCurrentVideoId(null);
    if (!isPausedRef.current && isCarouselMounted.current && !isLowPerformanceDevice && !isMobileDevice) {
      startAutoSlide();
    }
  }, [isLowPerformanceDevice, isMobileDevice, setCurrentVideoId]);

  // Toggle the pause state
  const togglePause = useCallback(() => {
    const newPausedState = !isPaused;
    console.log("Toggle pause state to:", newPausedState);
    setIsPaused(newPausedState);
    
    // Only show toast on non-low-performance devices
    if (!isLowPerformanceDevice && !isMobileDevice) {
      toast(isPaused ? "Auto-sliding resumed" : "Auto-sliding paused", {
        icon: isPaused ? <Play className="h-5 w-5 text-green-500" /> : <Pause className="h-5 w-5 text-orange-500" />
      });
    }
    
    if (newPausedState) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else if (!isLowPerformanceDevice && !isMobileDevice) {
      startAutoSlide();
    }
  }, [isPaused, isLowPerformanceDevice, isMobileDevice]);

  // Start the auto slide interval
  const startAutoSlide = useCallback(() => {
    if (!isCarouselMounted.current || isLowPerformanceDevice || isMobileDevice) return;
    
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
  }, [isLowPerformanceDevice, isMobileDevice]);

  // Setup and cleanup of the auto-slide interval
  useEffect(() => {
    if (!isPausedRef.current && !isLowPerformanceDevice && !isMobileDevice) {
      startAutoSlide();
    }

    return () => {
      isCarouselMounted.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isLowPerformanceDevice, isMobileDevice, startAutoSlide]);

  return {
    isPaused,
    togglePause,
    playVideo,
    closeVideo
  };
};
