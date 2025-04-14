
/**
 * Utilities for detecting device capabilities and performance
 */

// Check if the device is a low-performance device
export const isLowPerformanceDevice = (): boolean => {
  // Check if it's a mobile device first
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  
  if (!isMobile) return false;
  
  // Check for hardware concurrency as a proxy for device power
  const lowCPUCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  
  // Low memory check (if supported)
  const lowMemory = 'deviceMemory' in navigator && (navigator as any).deviceMemory <= 4;
  
  // Check for frame rate issues
  const hasFrameRateIssues = checkForFrameRateIssues();
  
  // Low performance conditions
  return lowCPUCores || lowMemory || hasFrameRateIssues;
};

// Check for frame rate issues
export const checkForFrameRateIssues = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // If we've already measured performance and stored it, use that value
  const storedPerformanceValue = window.sessionStorage.getItem('hasPerformanceIssues');
  if (storedPerformanceValue) {
    return storedPerformanceValue === 'true';
  }
  
  // We'll set a default based on device type initially
  const isOlderDevice = /Android 5|Android 6|iPhone OS 10|iPhone OS 11/i.test(navigator.userAgent);
  window.sessionStorage.setItem('hasPerformanceIssues', isOlderDevice.toString());
  
  return isOlderDevice;
};

// Check if the browser supports passive event listeners
export const checkPassiveSupport = (): boolean => {
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
        return true;
      }
    });
    
    window.addEventListener('testPassive', null as any, opts);
    window.removeEventListener('testPassive', null as any, opts);
  } catch (e) {
    // Silent fail
  }
  
  return supportsPassive;
};
