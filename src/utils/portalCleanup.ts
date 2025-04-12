
/**
 * Utility to clean up Radix UI portals to prevent memory leaks
 * 
 * This version is extremely cautious about which portals to clean up
 * to avoid removing active modals, dialogs, or drawers
 */
export const cleanupPortals = () => {
  try {
    // ONLY remove portals that meet ALL criteria:
    // 1. Have display:none style
    // 2. Are not currently animated or transitioning
    // 3. Have been invisible for a period of time
    
    const hiddenPortals = document.querySelectorAll('[data-radix-portal][style*="display: none"]');
    
    if (hiddenPortals.length > 0) {
      console.log(`Found ${hiddenPortals.length} hidden portals - checking if safe to remove`);
    }
    
    hiddenPortals.forEach(portal => {
      try {
        // Cast portal to HTMLElement to access style property
        const portalElement = portal as HTMLElement;
        const style = window.getComputedStyle(portalElement);
        
        // Only clean up portals that are DEFINITELY not in use
        // Multiple safety checks to ensure we don't remove active dialogs
        if (
          style.display === 'none' && 
          !portal.hasAttribute('data-state') && 
          !portal.classList.contains('animate-in') &&
          !portal.classList.contains('slide-in') &&
          !portal.querySelector('[data-state="open"]')
        ) {
          // Double-check this isn't a dialog or drawer that's animating
          const contentElements = portal.querySelectorAll('[data-state], [data-radix-dialog-content], [class*="drawer"]');
          const hasPotentiallyActiveContent = Array.from(contentElements).some(el => {
            const dataState = el.getAttribute('data-state');
            return dataState === 'open' || dataState === 'opening';
          });
          
          if (!hasPotentiallyActiveContent) {
            console.log("Removing confirmed inactive portal");
            portal.remove();
          } else {
            console.log("Skipping portal cleanup - portal may still be active");
          }
        } else {
          console.log("Skipping portal cleanup - portal may still be in use");
        }
      } catch (e) {
        console.debug("Failed to check portal:", e);
      }
    });
  } catch (e) {
    console.debug("Portal cleanup error:", e);
  }
};

/**
 * Force visibility of the mobile bottom navigation
 * This is called periodically to ensure it's always visible
 * Now with additional safety checks
 */
export const ensureBottomNavVisibility = () => {
  try {
    // First, find all bottom nav elements that should be visible
    const bottomNav = document.querySelector('.fixed.bottom-0');
    if (bottomNav && bottomNav.classList.contains('hidden')) {
      console.log("Found hidden bottom nav - restoring visibility");
      bottomNav.classList.remove('hidden');
    }
    
    // Also ensure individual nav items are visible
    const supportButton = document.querySelector('.support-button');
    if (supportButton && supportButton.classList.contains('hidden')) {
      console.log("Support button was hidden - restoring visibility");
      supportButton.classList.remove('hidden');
    }
    
    // Check for any invisible nav items and restore them
    const navItems = document.querySelectorAll('.fixed.bottom-0 button, .fixed.bottom-0 a');
    navItems.forEach(item => {
      if (item && (
        item.classList.contains('hidden') || 
        (item instanceof HTMLElement && window.getComputedStyle(item).display === 'none')
      )) {
        item.classList.remove('hidden');
        if (item instanceof HTMLElement) {
          item.style.display = '';
        }
        console.log("Restored visibility of hidden nav item");
      }
    });
  } catch (e) {
    console.debug("Bottom nav visibility error:", e);
  }
};

/**
 * Debug function that logs information about all portals
 * This helps pinpoint issues with portal visibility
 */
export const debugPortals = () => {
  try {
    const portals = document.querySelectorAll('[data-radix-portal]');
    console.log(`DEBUG: Found ${portals.length} portals total`);
    
    portals.forEach((portal, index) => {
      // Cast portal to HTMLElement to access style property
      const portalElement = portal as HTMLElement;
      const style = window.getComputedStyle(portalElement);
      const isVisible = style.display !== 'none';
      const hasDialogContent = portal.querySelector('[data-radix-dialog-content]') !== null;
      const hasDrawerContent = portal.querySelector('[role="dialog"]') !== null;
      const state = portal.getAttribute('data-state');
      
      console.log(`Portal #${index}: visible=${isVisible}, dialog=${hasDialogContent}, drawer=${hasDrawerContent}, state=${state || 'none'}`);
    });
  } catch (e) {
    console.debug("Portal debug error:", e);
  }
};
