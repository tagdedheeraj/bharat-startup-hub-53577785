import { cleanupAllPortals } from '../portalCleanup';

export const cleanupDOM = (): void => {
  try {
    // Skip cleanup if any important elements are active
    if (document.querySelector('[data-youtube-iframe="true"]') || 
        document.querySelector('[data-youtube-player-container="true"]') ||
        document.querySelector('[role="dialog"]')) {
      console.log("Skipping DOM cleanup due to active elements");
      return;
    }
    
    const elementsRemoved = cleanupAllPortals();
    
    if (elementsRemoved > 0) {
      window.scrollBy(0, 0);
    }
  } catch (error) {
    console.warn('Error during DOM cleanup:', error);
  }
};

export const removeTouchGhosts = (): void => {
  if (typeof document === 'undefined') return;
  
  // Skip cleanup if important elements are present
  if (document.querySelector('[data-youtube-iframe="true"]') || 
      document.querySelector('[data-youtube-player-container="true"]') ||
      document.querySelector('[role="dialog"]')) {
    return;
  }
  
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
