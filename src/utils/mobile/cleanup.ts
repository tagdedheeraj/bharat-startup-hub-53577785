
/**
 * Utilities for cleaning up DOM elements - YouTube friendly version
 */
import { cleanupAllPortals } from '../portalCleanup';

// Utility function to cleanup DOM elements safely for better performance
export const cleanupDOM = (): void => {
  try {
    // IMPORTANT: Skip cleanup if a YouTube player or dialog is active
    if (document.querySelector('[data-youtube-iframe="true"]') || 
        document.querySelector('[data-youtube-player-container="true"]') ||
        document.querySelector('[role="dialog"][data-state="open"]') ||
        document.querySelector('[role="alertdialog"][data-state="open"]')) {
      console.log("Skipping DOM cleanup due to active YouTube player or dialog");
      return;
    }
    
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
  
  // Skip if a YouTube player or dialog is active
  if (document.querySelector('[data-youtube-iframe="true"]') || 
      document.querySelector('[data-youtube-player-container="true"]') ||
      document.querySelector('[role="dialog"][data-state="open"]') ||
      document.querySelector('[role="alertdialog"][data-state="open"]')) {
    return;
  }
  
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
        // Skip if element is needed for YouTube or dialogs
        if (el.closest('[data-youtube-player-container="true"]') ||
            el.closest('[role="dialog"]') ||
            el.closest('[role="alertdialog"]')) {
          return;
        }
        
        if (el.parentNode && !el.hasAttribute('data-keep')) {
          el.parentNode.removeChild(el);
        }
      });
    } catch (e) {
      // Silent fail
    }
  });
};
