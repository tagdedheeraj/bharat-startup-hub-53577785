
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
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;
  
  return function(this: any, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
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
  
  // Check for frame rate issues
  const hasFrameRateIssues = checkForFrameRateIssues();
  
  // Low performance conditions
  return lowCPUCores || lowMemory || hasFrameRateIssues;
};

// Check for frame rate issues
const checkForFrameRateIssues = (): boolean => {
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
    
    // Add passive touch listeners to improve scroll performance
    improveScrollPerformance();
    
    // Reduce animation complexity for all mobile devices
    document.documentElement.classList.add('reduce-motion');
    
    // More aggressive optimizations for low-performance devices
    if (isLowPerformanceDevice()) {
      document.documentElement.classList.add('minimal-animations');
      window.sessionStorage.setItem('reduced-features', 'true');
      
      // Disable some animations completely for very low-end devices
      document.documentElement.style.setProperty('--animation-duration', '0s');
      
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

// Improve scroll performance specifically
const improveScrollPerformance = () => {
  if (typeof window === 'undefined') return;
  
  // Add CSS for better scroll performance
  const style = document.createElement('style');
  style.textContent = `
    .mobile-device * {
      -webkit-overflow-scrolling: touch;
    }
    .mobile-device {
      overscroll-behavior: none;
    }
  `;
  document.head.appendChild(style);
  
  // Use passive listeners for touchstart/touchmove to improve scroll performance
  // (This tells the browser that the listener will not call preventDefault())
  const supportsPassive = checkPassiveSupport();
  
  if (supportsPassive) {
    document.addEventListener('touchstart', function() {}, { passive: true });
    document.addEventListener('touchmove', function() {}, { passive: true });
    document.addEventListener('wheel', function() {}, { passive: true });
  }
  
  // Fix Chrome pull-to-refresh behavior which can interfere with scrolling
  if ('ontouchstart' in document.documentElement) {
    document.body.style.overscrollBehavior = 'none';
  }
};

// Check if the browser supports passive event listeners
const checkPassiveSupport = (): boolean => {
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
    
    // Remove any "ghost" touch elements that can cause scrolling issues
    removeTouchGhosts();
  } catch (error) {
    console.warn('Error during DOM cleanup:', error);
  }
};

// Remove touch "ghosts" that can cause scrolling issues
const removeTouchGhosts = (): void => {
  if (typeof document === 'undefined') return;
  
  // Find and remove any elements that might be causing touch input issues
  const ghostSelectors = [
    'div[style*="position: fixed"][style*="z-index: 999"]',
    'div[style*="position: fixed"][style*="opacity: 0"]',
    'div[style*="touch-action: none"][style*="opacity: 0"]'
  ];
  
  ghostSelectors.forEach(selector => {
    try {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        if (el.parentNode && !el.hasAttribute('data-keep')) {
          el.parentNode.removeChild(el);
        }
      });
    } catch (e) {
      // Silent fail
    }
  });
};
