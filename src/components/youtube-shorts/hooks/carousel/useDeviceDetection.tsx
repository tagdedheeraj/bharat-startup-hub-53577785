
import { useRef, useMemo } from 'react';
import { isLowPerformanceDevice } from '@/utils/mobile';

/**
 * Hook for detecting device capabilities
 * Enhanced for better device type detection and optimizations
 */
export const useDeviceDetection = () => {
  // Device capability detection - only compute once
  const lowPerformanceDevice = useRef(isLowPerformanceDevice());
  
  // Comprehensive mobile device detection - use useMemo instead of useRef for function execution
  const isMobileDevice = useMemo(() => {
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
  }, []); // Empty dependency array means this will only run once on mount
  
  return {
    isLowPerformanceDevice: lowPerformanceDevice.current,
    isMobileDevice: isMobileDevice
  };
};
