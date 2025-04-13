
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
            console.log(`Removing element with selector ${selector} and state ${state}`);
            element.parentNode.removeChild(element);
            removedCount++;
          }
        } else {
          console.log(`Skipping element with selector ${selector} because state ${state} doesn't match ${stateFilter}`);
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
  console.log("Cleaning up closed portals only");
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
 * This function is DISABLED to prevent accidentally closing active dialogs
 */
export const forceCleanupAllPortals = () => {
  console.warn("Force cleanup is disabled to prevent accidental closing of active dialogs");
  return 0;
  
  // This code is intentionally disabled
  /*
  const portalsRemoved = safelyRemoveElements('[data-radix-portal]');
  const menuPortalsRemoved = safelyRemoveElements('[data-radix-dropdown-menu-content]');
  const toastPortalsRemoved = safelyRemoveElements('[role="status"]');
  
  const total = portalsRemoved + menuPortalsRemoved + toastPortalsRemoved;
  if (total > 0) {
    console.warn(`Force cleaned up ${total} portal elements - use carefully`);
  }
  
  return total;
  */
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
      const state = portal.getAttribute('data-state');
      console.log(`Portal ${index + 1} state:`, state);
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
 * Check if the device is currently offline
 */
export const isOffline = (): boolean => {
  return typeof navigator !== 'undefined' && !navigator.onLine;
};
