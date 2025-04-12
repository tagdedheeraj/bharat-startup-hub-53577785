
/**
 * Utility to clean up Radix UI portals to prevent memory leaks
 * 
 * This version is more selective about which portals to clean up
 * to avoid removing active modals and dialogs
 */
export const cleanupPortals = () => {
  try {
    // Only remove portals that are actually hidden
    // This prevents removing active dialogs and drawers
    const hiddenPortals = document.querySelectorAll('[data-radix-portal][style*="display: none"]');
    
    console.log(`Found ${hiddenPortals.length} hidden portals to clean up`);
    
    hiddenPortals.forEach(portal => {
      try {
        // Double check that this portal is actually hidden
        const style = window.getComputedStyle(portal);
        if (style.display === 'none') {
          portal.remove();
          console.log("Removed hidden portal");
        }
      } catch (e) {
        // Silent fail
        console.debug("Failed to remove portal:", e);
      }
    });
  } catch (e) {
    // Silent fail
    console.debug("Portal cleanup error:", e);
  }
};

/**
 * Force visibility of the mobile bottom navigation
 * This is called periodically to ensure it's always visible
 */
export const ensureBottomNavVisibility = () => {
  try {
    const bottomNav = document.querySelector('.fixed.bottom-0');
    if (bottomNav && bottomNav.classList.contains('hidden')) {
      bottomNav.classList.remove('hidden');
      console.log("Bottom nav visibility restored by utility");
    }
  } catch (e) {
    // Silent fail
    console.debug("Bottom nav visibility error:", e);
  }
};
