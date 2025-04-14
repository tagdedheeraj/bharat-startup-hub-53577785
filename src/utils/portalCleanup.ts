
/**
 * Utility module for handling portal-related cleanup
 * Optimized for better performance with YouTube safety
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
        // Skip YouTube iframes or their containers
        if (element.querySelector('[data-youtube-iframe="true"]') || 
            element.closest('[data-youtube-player-container="true"]')) {
          console.log("Skipping cleanup for YouTube player element");
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
  
  // Check if YouTube player is active - if so, skip cleanup completely
  const hasActiveYouTubePlayer = document.querySelector('[data-youtube-player-container="true"]') !== null;
  if (hasActiveYouTubePlayer) {
    console.log("Skipping portal cleanup due to active YouTube player");
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

/**
 * Debug function that logs information about all portals
 */
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

/**
 * Check if the device is currently offline
 */
export const isOffline = (): boolean => {
  return isBrowser && !navigator.onLine;
};
