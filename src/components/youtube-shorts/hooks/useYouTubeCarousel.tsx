
import { YouTubeShort } from '../types';
import { useCarouselState } from './carousel/useCarouselState';
import { useCarouselControls } from './carousel/useCarouselControls';
import { useCarouselLoading } from './carousel/useCarouselLoading';
import { useDeviceDetection } from './carousel/useDeviceDetection';

/**
 * Main hook for YouTube carousel functionality, composed of smaller specialized hooks
 */
export const useYouTubeCarousel = (initialShorts: YouTubeShort[]) => {
  // Use specialized hooks for different pieces of functionality
  const { 
    currentVideoId, 
    setCurrentVideoId,
    hoveredVideo, 
    setHoveredVideo,
    youtubeShorts
  } = useCarouselState(initialShorts);

  const {
    isPaused,
    togglePause,
    playVideo,
    closeVideo
  } = useCarouselControls(setCurrentVideoId);

  const {
    isLoading,
    loadError,
    retryLoading
  } = useCarouselLoading(youtubeShorts, setCurrentVideoId);

  const { 
    isLowPerformanceDevice,
    isMobileDevice
  } = useDeviceDetection();

  // Return a consolidated API from all the specialized hooks
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
    isLowPerformanceDevice: isLowPerformanceDevice || isMobileDevice
  };
};
