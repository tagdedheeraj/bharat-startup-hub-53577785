
/**
 * Utility module for handling portal-related cleanup
 * Optimized for better performance with YouTube and dialog safety
 */

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

/**
 * Safely remove DOM elements that match a selector and state
 */
export const safelyRemoveElements = (selector: string, stateFilter?: string) => {
  if (!isBrowser) return 0;
  
  try {
    const elements = document.querySelectorAll(selector);
    let removedCount = 0;
    
    elements.forEach(element => {
      try {
        // Skip YouTube iframes, their containers, or open dialogs
        if (element.querySelector('[data-youtube-iframe="true"]') || 
            element.closest('[data-youtube-player-container="true"]') ||
            element.closest('[role="dialog"][data-state="open"]') ||
            element.closest('[role="alertdialog"][data-state="open"]')) {
          console.log("Skipping cleanup for active element");
          return;
        }
        
        // If we have a stateFilter, only remove elements that match that state
        const state = element.getAttribute('data-state');
        
        // Only remove if no stateFilter provided OR element state matches the filter (e.g., 'closed')
        if (!stateFilter || state === stateFilter) {
          if (element.parentNode) {
            // Before removing, ensure this isn't currently being interacted with
            if (!element.matches(':active, :focus, :hover')) {
              element.parentNode.removeChild(element);
              removedCount++;
            }
          }
        }
      } catch (e) {
        // Silent fail for individual elements
      }
    });
    
    return removedCount; // Return count of removed elements
  } catch (e) {
    return 0;
  }
};

/**
 * Clean up only closed/inactive portals (much safer than removing all)
 */
export const cleanupAllPortals = () => {
  if (!isBrowser) return 0;
  
  // Check if YouTube player or dialog is active - if so, skip cleanup completely
  const hasActiveElement = 
    document.querySelector('[data-youtube-player-container="true"]') !== null ||
    document.querySelector('[role="dialog"][data-state="open"]') !== null ||
    document.querySelector('[role="alertdialog"][data-state="open"]') !== null;
    
  if (hasActiveElement) {
    console.log("Skipping portal cleanup due to active elements");
    return 0;
  }
  
  // Only clean up portals that are explicitly marked as closed
  const portalsRemoved = safelyRemoveElements('[data-radix-portal]', 'closed');
  const menuPortalsRemoved = safelyRemoveElements('[data-radix-dropdown-menu-content]', 'closed');
  const toastPortalsRemoved = safelyRemoveElements('[role="status"][data-state="closed"]');
  const dialogsRemoved = safelyRemoveElements('[role="dialog"][data-state="closed"]');
  const alertsRemoved = safelyRemoveElements('[role="alertdialog"][data-state="closed"]');
  
  return portalsRemoved + menuPortalsRemoved + toastPortalsRemoved + dialogsRemoved + alertsRemoved;
};

/**
 * Mark all portals with current timestamp to track interaction time
 */
export const markPortalInteractions = () => {
  if (!isBrowser) return;
  
  const now = Date.now().toString();
  document.querySelectorAll('[data-radix-portal]').forEach(portal => {
    portal.setAttribute('data-last-interaction', now);
  });
};

export const debugPortals = () => {
  if (!isBrowser) return;
  
  try {
    const portals = document.querySelectorAll('[data-radix-portal]');
    console.log(`Found ${portals.length} portals total`);
    
    // Only log details, don't modify portals
    portals.forEach((portal, index) => {
      const state = portal.getAttribute('data-state');
      console.log(`Portal ${index + 1} state:`, state);
    });
  } catch (e) {
    // Silent fail
  }
};

export const isOffline = (): boolean => {
  return isBrowser && !navigator.onLine;
};
