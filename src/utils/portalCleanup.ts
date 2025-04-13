
/**
 * Utility to ensure bottom navigation visibility
 */
export const ensureBottomNavVisibility = () => {
  try {
    // Find all bottom nav elements that should be visible
    const bottomNav = document.querySelector('.fixed.bottom-0');
    if (bottomNav instanceof HTMLElement) {
      bottomNav.style.display = 'block';
      bottomNav.classList.remove('hidden');
      bottomNav.style.zIndex = '40'; // Make sure z-index is set
      console.log("Bottom nav visibility ensured");
    }
    
    // Also ensure support button is visible
    const supportButtons = document.querySelectorAll('.support-button');
    supportButtons.forEach(button => {
      if (button instanceof HTMLElement) {
        button.style.display = 'flex';
        button.classList.remove('hidden');
        button.classList.add('flex');
        button.style.zIndex = '20'; // Set z-index
        console.log("Support button visibility ensured");
      }
    });
    
    // Fix specific support section in MobileBottomNav
    const supportSection = document.querySelector('.relative.support-section');
    if (supportSection instanceof HTMLElement) {
      supportSection.style.display = 'block';
      supportSection.classList.remove('hidden');
      console.log("Support section visibility ensured");
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
    
    // Check dialog states
    dialogs.forEach((dialog, index) => {
      const state = dialog.getAttribute('data-state');
      const isVisible = dialog instanceof HTMLElement && 
                        window.getComputedStyle(dialog).display !== 'none';
      console.log(`Dialog #${index}: state=${state}, visible=${isVisible}`);
    });
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
        dialog.style.zIndex = '200'; // Set high z-index
        console.log("Dialog visibility ensured");
      }
    });
    
    // Also check dialog content elements
    const dialogContents = document.querySelectorAll('[data-radix-dialog-content]');
    dialogContents.forEach((content) => {
      if (content instanceof HTMLElement) {
        content.style.display = 'block';
        content.style.zIndex = '200'; // Set high z-index
        console.log("Dialog content visibility ensured");
      }
    });
  } catch (e) {
    console.debug("Dialog visibility error:", e);
  }
};

/**
 * Cleanup function specifically for orphaned portals - VERY CAUTIOUS VERSION
 * that only removes portals that are definitely no longer in use
 */
export const cleanupOrphanedPortals = () => {
  try {
    // ONLY find 100% orphaned portals with display:none AND data-state="closed"
    const orphanedPortals = document.querySelectorAll(
      '[data-radix-portal][style*="display: none"][data-state="closed"]'
    );
    console.log(`Found ${orphanedPortals.length} orphaned portals to clean up`);
    
    orphanedPortals.forEach((portal) => {
      // Double check this isn't something important
      const isImportantPortal = (
        portal.contains(document.querySelector('.support-button')) ||
        portal.contains(document.querySelector('[class*="drawer"]')) ||
        portal.contains(document.querySelector('[class*="dialog-content"]')) ||
        portal.contains(document.querySelector('[class*="popover-content"]'))
      );
      
      // Only remove if we're sure it's truly orphaned
      if (!isImportantPortal) {
        try {
          portal.remove();
          console.log("Removed confirmed orphaned portal");
        } catch (e) {
          console.debug("Failed to remove orphaned portal:", e);
        }
      } else {
        console.log("Skipped important portal during cleanup");
      }
    });
  } catch (e) {
    console.debug("Portal cleanup error:", e);
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
    
    // Set z-index for dialog overlays
    const dialogOverlays = document.querySelectorAll('[data-radix-dialog-overlay]');
    dialogOverlays.forEach(overlay => {
      if (overlay instanceof HTMLElement) {
        overlay.style.zIndex = '150';
      }
    });
    
    // Set z-index for dialog contents
    const dialogContents = document.querySelectorAll('[data-radix-dialog-content]');
    dialogContents.forEach(content => {
      if (content instanceof HTMLElement) {
        content.style.zIndex = '200';
      }
    });
    
    // Set z-index for drawer overlays
    const drawerOverlays = document.querySelectorAll('[data-vaul-drawer-overlay]');
    drawerOverlays.forEach(overlay => {
      if (overlay instanceof HTMLElement) {
        overlay.style.zIndex = '80';
      }
    });
    
    // Set z-index for drawer contents
    const drawerContents = document.querySelectorAll('[data-vaul-drawer-content]');
    drawerContents.forEach(content => {
      if (content instanceof HTMLElement) {
        content.style.zIndex = '100';
      }
    });
  } catch (e) {
    console.debug("Z-index reset error:", e);
  }
};
