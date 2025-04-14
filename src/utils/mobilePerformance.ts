
/**
 * Utility functions to improve mobile performance
 */
import { cleanupAllPortals } from './portalCleanup';

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
  if (typeof window === 'undefined') return;
  
  // Apply optimizations for all mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  
  if (isMobile) {
    // Add mobile class to html element
    document.documentElement.classList.add('mobile-device');
    
    // Reduce animation complexity for all mobile devices
    document.documentElement.classList.add('reduce-motion');
    
    // More aggressive optimizations for low-performance devices
    if (isLowPerformanceDevice()) {
      document.documentElement.classList.add('minimal-animations');
      window.sessionStorage.setItem('reduced-features', 'true');
      
      // Set lower priority for non-critical resources
      const deferImages = () => {
        setTimeout(() => {
          document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            (img as HTMLImageElement).loading = 'lazy';
          });
        }, 1000);
      };
      
      window.addEventListener('load', deferImages);
    }
    
    // Setup periodic cleanup
    setupPeriodicCleanup();
  }
};

// Setup periodic cleanup for better performance
export const setupPeriodicCleanup = (): void => {
  // Clean DOM immediately on first load
  cleanupDOM();
  
  // Set up interval to periodically clean DOM
  setInterval(() => {
    cleanupDOM();
  }, 15000); // Every 15 seconds instead of 30
  
  // Clean up on route changes
  if (typeof window !== 'undefined') {
    let lastUrl = window.location.href;
    
    // Use more efficient mutation observer pattern
    const urlObserver = new MutationObserver(() => {
      if (lastUrl !== window.location.href) {
        lastUrl = window.location.href;
        cleanupDOM();
      }
    });
    
    // Observe the body for changes
    urlObserver.observe(document.body, { childList: true, subtree: true });
  }
};

// Utility function to cleanup DOM elements safely for better performance
export const cleanupDOM = (): void => {
  try {
    // Use the specialized portal cleanup utility
    const elementsRemoved = cleanupAllPortals();
    
    // Force garbage collection hint if elements were removed
    if (elementsRemoved > 0) {
      // Scroll to force repaints
      window.scrollBy(0, 0);
      
      // Use requestIdleCallback if available for non-critical cleanup
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          // Additional cleanup during idle time
          console.log('Performed idle cleanup');
        });
      }
    }
  } catch (error) {
    console.warn('Error during DOM cleanup:', error);
  }
};
