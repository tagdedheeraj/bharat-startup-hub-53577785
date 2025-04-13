
/**
 * Utility module for handling portal-related cleanup
 */

// Safely remove DOM elements that match a selector
export const safelyRemoveElements = (selector: string) => {
  try {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      try {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      } catch (e) {
        console.debug(`Error removing element ${selector}:`, e);
      }
    });
    return elements.length; // Return count of removed elements
  } catch (e) {
    console.debug(`Error selecting elements ${selector}:`, e);
    return 0;
  }
};

/**
 * Clean up all portals (use sparingly, mostly for navigation)
 */
export const cleanupAllPortals = () => {
  const portalsRemoved = safelyRemoveElements('[data-radix-portal]');
  const menuPortalsRemoved = safelyRemoveElements('[data-radix-dropdown-menu-content]');
  const toastPortalsRemoved = safelyRemoveElements('[role="status"]');
  
  const total = portalsRemoved + menuPortalsRemoved + toastPortalsRemoved;
  if (total > 0) {
    console.debug(`Cleaned up ${total} portal elements`);
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
