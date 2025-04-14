
import { useState } from 'react';
import { YouTubeShort } from '../types';
import { useCarouselState } from './carousel/useCarouselState';
import { useCarouselControls } from './carousel/useCarouselControls';
import { useCarouselLoading } from './carousel/useCarouselLoading';
import { useDeviceDetection } from './carousel/useDeviceDetection';

/**
 * Main hook for YouTube carousel functionality.
 * This hook composes smaller hooks to provide a complete API for the carousel.
 */
export const useYouTubeCarousel = (initialShorts: YouTubeShort[]) => {
  // Track hovered video separately as it doesn't need to be in other hooks
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  
  // Get device capabilities
  const { isLowPerformanceDevice, isMobileDevice } = useDeviceDetection();
  
  // State management hook
  const {
    currentVideoId,
    setCurrentVideoId,
    youtubeShorts
  } = useCarouselState(initialShorts);
  
  // Controls management hook
  const {
    isPaused,
    togglePause,
    playVideo,
    closeVideo
  } = useCarouselControls(setCurrentVideoId);
  
  // Loading and error state management hook
  const {
    isLoading,
    loadError,
    retryLoading
  } = useCarouselLoading(youtubeShorts, setCurrentVideoId);
  
  // Combine all the hook results into a single API
  return {
    // State
    currentVideoId,
    hoveredVideo,
    youtubeShorts,
    isPaused,
    isLoading,
    loadError,
    
    // Actions
    setHoveredVideo,
    playVideo,
    closeVideo,
    togglePause,
    retryLoading,
    
    // Device info
    isLowPerformanceDevice: isLowPerformanceDevice || isMobileDevice
  };
};
