
/**
 * Utilities for cleaning up DOM elements
 */
import { cleanupAllPortals } from '../portalCleanup';

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
export const removeTouchGhosts = (): void => {
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
