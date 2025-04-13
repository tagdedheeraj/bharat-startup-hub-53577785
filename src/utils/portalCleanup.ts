
/**
 * Utility to ensure bottom navigation visibility
 */
export const ensureBottomNavVisibility = () => {
  const bottomNav = document.querySelector('.fixed.bottom-0');
  if (bottomNav && bottomNav.classList.contains('hidden')) {
    bottomNav.classList.remove('hidden');
    console.log("Bottom nav visibility restored");
  }
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
 * This is now safe to use with dialogs
 */
export const resetZIndexStacking = () => {
  // Only target specific elements, not dialogs or portals
  const bottomNav = document.querySelector('.fixed.bottom-0');
  if (bottomNav instanceof HTMLElement) {
    bottomNav.style.zIndex = '50';
  }
  
  console.log("Z-index stacking adjusted safely");
};
