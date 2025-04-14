
/**
 * Utility module for handling portal-related cleanup
 * Optimized for better mobile performance
 */

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Safely remove DOM elements that match a selector and state
export const safelyRemoveElements = (selector: string, stateFilter?: string) => {
  if (!isBrowser) return 0;
  
  try {
    const elements = document.querySelectorAll(selector);
    let removedCount = 0;
    
    elements.forEach(element => {
      try {
        // If we have a stateFilter, only remove elements that match that state
        const state = element.getAttribute('data-state');
        
        // Only remove if no stateFilter provided OR element state matches the filter (e.g., 'closed')
        if (!stateFilter || state === stateFilter) {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
            removedCount++;
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
 * Optimized for mobile performance
 */
export const cleanupAllPortals = () => {
  if (!isBrowser) return 0;
  
  // Only clean up portals that are explicitly marked as closed
  const portalsRemoved = safelyRemoveElements('[data-radix-portal]', 'closed');
  const menuPortalsRemoved = safelyRemoveElements('[data-radix-dropdown-menu-content]', 'closed');
  const toastPortalsRemoved = safelyRemoveElements('[role="status"][data-state="closed"]');
  const dialogsRemoved = safelyRemoveElements('[role="dialog"][data-state="closed"]');
  const alertsRemoved = safelyRemoveElements('[role="alertdialog"][data-state="closed"]');
  
  const total = portalsRemoved + menuPortalsRemoved + toastPortalsRemoved + dialogsRemoved + alertsRemoved;
  
  // Also clean up any elements that should be removed but don't have proper states
  if (isBrowser) {
    // Check for stale portals (over 30 seconds old with no interactions)
    const now = Date.now();
    document.querySelectorAll('[data-radix-portal]').forEach(portal => {
      const lastInteraction = portal.getAttribute('data-last-interaction');
      if (lastInteraction) {
        const time = parseInt(lastInteraction, 10);
        if (!isNaN(time) && (now - time > 30000)) {
          // Portal is stale, remove it
          if (portal.parentNode) {
            portal.parentNode.removeChild(portal);
          }
        }
      }
    });
  }
  
  return total;
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
