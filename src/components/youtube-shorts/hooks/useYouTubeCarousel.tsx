
import { useState, useEffect } from 'react';
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
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  // Get device capabilities
  const { isLowPerformanceDevice, isMobileDevice } = useDeviceDetection();
  
  // State management hook with refresh trigger to force updates
  const {
    currentVideoId,
    setCurrentVideoId,
    youtubeShorts
  } = useCarouselState(initialShorts, refreshTrigger);
  
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

  // Function to trigger a refresh of the YouTube shorts
  const refreshShorts = () => {
    console.log("Refreshing YouTube shorts data...");
    setRefreshTrigger(prev => prev + 1);
  };
  
  // Set up event listener for refresh events from admin panel
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'youtube-shorts-updated') {
        console.log("YouTube shorts update detected via localStorage");
        refreshShorts();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Check for refresh flag on mount
    const needsRefresh = localStorage.getItem('youtube-shorts-updated');
    if (needsRefresh) {
      console.log("Found refresh flag on mount, refreshing shorts");
      localStorage.removeItem('youtube-shorts-updated');
      refreshShorts();
    }
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
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
    refreshShorts,
    
    // Device info
    isLowPerformanceDevice: isLowPerformanceDevice || isMobileDevice
  };
};
