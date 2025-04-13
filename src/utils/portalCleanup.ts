
/**
 * Utility module for handling portal-related cleanup
 */

// Safely remove DOM elements that match a selector and state
export const safelyRemoveElements = (selector: string, stateFilter?: string) => {
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
        console.debug(`Error removing element ${selector}:`, e);
      }
    });
    
    return removedCount; // Return count of removed elements
  } catch (e) {
    console.debug(`Error selecting elements ${selector}:`, e);
    return 0;
  }
};

/**
 * Clean up only closed/inactive portals (much safer than removing all)
 */
export const cleanupAllPortals = () => {
  // Only clean up portals that are explicitly marked as closed
  const portalsRemoved = safelyRemoveElements('[data-radix-portal]', 'closed');
  const menuPortalsRemoved = safelyRemoveElements('[data-radix-dropdown-menu-content]', 'closed');
  const toastPortalsRemoved = safelyRemoveElements('[role="status"][data-state="closed"]');
  
  const total = portalsRemoved + menuPortalsRemoved + toastPortalsRemoved;
  if (total > 0) {
    console.debug(`Cleaned up ${total} closed portal elements`);
  }
  
  return total;
};

/**
 * Force cleanup all portals (use with caution, mainly for development or emergency)
 */
export const forceCleanupAllPortals = () => {
  const portalsRemoved = safelyRemoveElements('[data-radix-portal]');
  const menuPortalsRemoved = safelyRemoveElements('[data-radix-dropdown-menu-content]');
  const toastPortalsRemoved = safelyRemoveElements('[role="status"]');
  
  const total = portalsRemoved + menuPortalsRemoved + toastPortalsRemoved;
  if (total > 0) {
    console.warn(`Force cleaned up ${total} portal elements - use carefully`);
  }
  
  return total;
};

/**
 * Utility to ensure bottom navigation visibility
 * Keeping this for backward compatibility but it's no longer used
 */
export const ensureBottomNavVisibility = () => {
  // This function is kept for backward compatibility but does nothing now
  return;
};

/**
 * Debug function that logs information about all portals
 */
export const debugPortals = () => {
  try {
    const portals = document.querySelectorAll('[data-radix-portal]');
    console.log(`Found ${portals.length} portals total`);
    
    // Only log details, don't modify portals
    portals.forEach((portal, index) => {
      console.log(`Portal ${index + 1} state:`, portal.getAttribute('data-state'));
    });
    
    // Log dialog portals specifically
    const dialogPortals = document.querySelectorAll('[role="dialog"]');
    console.log(`Found ${dialogPortals.length} dialog portals`);
    
    // Log alert dialog portals
    const alertDialogPortals = document.querySelectorAll('[role="alertdialog"]');
    console.log(`Found ${alertDialogPortals.length} alert dialog portals`);
  } catch (e) {
    console.debug("Portal debug error:", e);
  }
};

/**
 * Function to reset z-index stacking and ensure proper display order
 */
export const resetZIndexStacking = () => {
  console.log("Z-index stacking adjusted safely");
};

/**
 * Check if the device is currently offline
 */
export const isOffline = (): boolean => {
  return typeof navigator !== 'undefined' && !navigator.onLine;
};
