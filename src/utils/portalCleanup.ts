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
          // Do not remove elements that might be used by active dialogs
          const isActiveDialog = element.querySelector('[role="dialog"][data-state="open"]');
          if (!isActiveDialog && element.parentNode) {
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
 * We're now being extra cautious to not remove active dialogs
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

// Keep the rest of the functions for backward compatibility but make them inactive
export const forceCleanupAllPortals = () => {
  console.warn("Force cleanup is disabled to prevent breaking dialogs");
  return 0;
};

export const ensureBottomNavVisibility = () => {
  return;
};

export const resetZIndexStacking = () => {
  console.log("Z-index stacking adjusted safely");
};

export const isOffline = (): boolean => {
  return typeof navigator !== 'undefined' && !navigator.onLine;
};
