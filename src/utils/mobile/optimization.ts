
/**
 * Utilities for optimizing mobile performance
 */
import { cleanupDOM } from './cleanup';
import { isLowPerformanceDevice, checkPassiveSupport } from './detection';

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
export const improveScrollPerformance = () => {
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
