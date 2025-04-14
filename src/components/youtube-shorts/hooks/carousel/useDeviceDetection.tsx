
import { useRef } from 'react';
import { isLowPerformanceDevice as checkLowPerformance } from '@/utils/mobilePerformance';

/**
 * Hook for device detection and performance optimization
 */
export const useDeviceDetection = () => {
  const lowPerformanceDevice = useRef(checkLowPerformance());
  const isMobileDevice = useRef(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  
  return {
    isLowPerformanceDevice: lowPerformanceDevice.current,
    isMobileDevice: isMobileDevice.current
  };
};
