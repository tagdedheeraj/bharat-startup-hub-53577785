
export const cleanupDOM = (): void => {
  try {
    // Skip cleanup if any important elements are active
    if (document.querySelector('[data-youtube-iframe="true"]') || 
        document.querySelector('[data-youtube-player-container="true"]') ||
        document.querySelector('[role="dialog"]') ||
        document.querySelector('.popup-overlay')) {
      console.log("Skipping DOM cleanup due to active elements");
      return;
    }
    
    // Only clean up closed portals, not active ones
    const portals = document.querySelectorAll('[data-radix-portal][data-state="closed"]');
    portals.forEach(portal => {
      if (portal.parentNode) {
        portal.parentNode.removeChild(portal);
      }
    });
  } catch (error) {
    console.warn('Error during DOM cleanup:', error);
  }
};

export const removeTouchGhosts = (): void => {
  if (typeof document === 'undefined') return;
  
  // Skip cleanup if important elements are present
  if (document.querySelector('[data-youtube-iframe="true"]') || 
      document.querySelector('[data-youtube-player-container="true"]') ||
      document.querySelector('[role="dialog"]') ||
      document.querySelector('.popup-overlay')) {
    return;
  }
  
  // Be very selective about what's removed to avoid breaking interactions
  const ghostSelectors = [
    'div[style*="position: fixed"][style*="z-index: 999"][style*="opacity: 0"]',
    'div[style*="touch-action: none"][style*="opacity: 0"]'
  ];
  
  ghostSelectors.forEach(selector => {
    try {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        // Skip if element is needed for YouTube or dialogs
        if (el.closest('[data-youtube-player-container="true"]') ||
            el.closest('[role="dialog"]') ||
            el.closest('[role="alertdialog"]') ||
            el.closest('.popup-overlay')) {
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
