
/**
 * Utility to ensure bottom navigation visibility
 */
export const ensureBottomNavVisibility = () => {
  try {
    // Find all bottom nav elements that should be visible
    const bottomNav = document.querySelector('.fixed.bottom-0');
    if (bottomNav instanceof HTMLElement) {
      bottomNav.style.display = 'block';
      console.log("Bottom nav visibility ensured");
    }
  } catch (e) {
    console.debug("Bottom nav visibility error:", e);
  }
};

/**
 * Debug function that logs information about all portals
 */
export const debugPortals = () => {
  try {
    const portals = document.querySelectorAll('[data-radix-portal]');
    console.log(`Found ${portals.length} portals total`);
    
    // Check for any dialogs
    const dialogs = document.querySelectorAll('[role="dialog"]');
    console.log(`Found ${dialogs.length} dialogs`);
  } catch (e) {
    console.debug("Portal debug error:", e);
  }
};

/**
 * Ensures the visibility of all dialog contents
 */
export const ensureDialogVisibility = () => {
  try {
    // Find any open dialogs that might be hidden
    const dialogs = document.querySelectorAll('[role="dialog"][data-state="open"]');
    dialogs.forEach((dialog) => {
      if (dialog instanceof HTMLElement) {
        dialog.style.display = 'block';
        console.log("Dialog visibility ensured");
      }
    });
  } catch (e) {
    console.debug("Dialog visibility error:", e);
  }
};

/**
 * Function to reset z-index stacking and ensure proper display order
 */
export const resetZIndexStacking = () => {
  try {
    // Set z-index for bottom navigation
    const bottomNav = document.querySelector('.fixed.bottom-0');
    if (bottomNav instanceof HTMLElement) {
      bottomNav.style.zIndex = '40';
    }
  } catch (e) {
    console.debug("Z-index reset error:", e);
  }
};
