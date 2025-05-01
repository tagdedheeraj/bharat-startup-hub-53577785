
import { useRef } from 'react';
import { isLowPerformanceDevice } from '@/utils/mobile';

/**
 * Hook for detecting device capabilities
 * Enhanced for better device type detection and optimizations
 */
export const useDeviceDetection = () => {
  // Device capability detection - only compute once
  const lowPerformanceDevice = useRef(isLowPerformanceDevice());
  
  // Comprehensive mobile device detection
  const isMobileDevice = useRef(() => {
    if (typeof navigator === 'undefined') return false;
    
    // Check user agent for mobile devices
    const mobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    // Additional check for screen size
    const smallScreen = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // Check for touch capability
    const hasTouch = typeof window !== 'undefined' && 
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    return mobileUserAgent || (smallScreen && hasTouch);
  })(); // Fixed the syntax error here - proper way to invoke the IIFE
  
  return {
    isLowPerformanceDevice: lowPerformanceDevice.current,
    isMobileDevice: isMobileDevice.current
  };
};
