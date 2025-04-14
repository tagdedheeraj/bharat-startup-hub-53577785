
/**
 * Utility functions to improve mobile performance
 */

// Throttle function to limit how often a function can be called
export const throttle = <T extends (...args: any[]) => any>(
  func: T, 
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;
  
  return function(this: any, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

// Detect if the device is a low-performance device
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
  
  // Low performance conditions
  return lowCPUCores || lowMemory;
};

// Apply performance optimizations for mobile devices
export const applyMobileOptimizations = (): void => {
  if (isLowPerformanceDevice()) {
    // Reduce animation complexity
    document.documentElement.classList.add('reduce-motion');
    
    // Add listener to detect when the device might be struggling
    let lastFrameTime = performance.now();
    let lowFPSCount = 0;
    
    const checkFrameRate = () => {
      const now = performance.now();
      const delta = now - lastFrameTime;
      lastFrameTime = now;
      
      // If frame time is > 50ms (< 20fps), consider it low performance
      if (delta > 50) {
        lowFPSCount++;
        
        // If we detect consistently poor performance, apply more aggressive optimizations
        if (lowFPSCount > 5) {
          document.documentElement.classList.add('minimal-animations');
          // Disable some non-essential features
          window.sessionStorage.setItem('reduced-features', 'true');
        }
      } else {
        // Reset the counter if performance is good
        lowFPSCount = Math.max(0, lowFPSCount - 1);
      }
      
      requestAnimationFrame(checkFrameRate);
    };
    
    // Start monitoring frame rate
    requestAnimationFrame(checkFrameRate);
  }
};

// Utility function to cleanup DOM elements safely for better performance
export const cleanupDOM = (): void => {
  // Clean up unused portal elements
  const unusedPortals = document.querySelectorAll('[data-radix-portal][data-state="closed"]');
  unusedPortals.forEach(portal => {
    if (portal.parentNode) {
      portal.parentNode.removeChild(portal);
    }
  });
  
  // Clean up any unused toast notifications
  const closedToasts = document.querySelectorAll('[role="status"][data-state="closed"]');
  closedToasts.forEach(toast => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  });
};
