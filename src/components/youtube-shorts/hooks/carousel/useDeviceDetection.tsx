
import { useRef } from 'react';
import { isLowPerformanceDevice as detectLowPerformance } from '@/utils/mobilePerformance';

/**
 * Hook for detecting device capabilities
 */
export const useDeviceDetection = () => {
  // Device capability detection - only compute once
  const lowPerformanceDevice = useRef(detectLowPerformance());
  const isMobileDevice = useRef(
    typeof navigator !== 'undefined' && 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
  
  return {
    isLowPerformanceDevice: lowPerformanceDevice.current,
    isMobileDevice: isMobileDevice.current
  };
};
