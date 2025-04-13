
/**
 * Utility to ensure bottom navigation visibility
 */
export const ensureBottomNavVisibility = () => {
  try {
    // Find all bottom nav elements that should be visible
    const bottomNav = document.querySelector('.fixed.bottom-0');
    if (bottomNav instanceof HTMLElement) {
      bottomNav.style.display = 'block';
      bottomNav.style.visibility = 'visible';
      bottomNav.style.opacity = '1';
      bottomNav.classList.remove('hidden');
      bottomNav.style.zIndex = '40'; // Make sure z-index is set
    }
    
    // Also ensure support button is visible
    const supportButtons = document.querySelectorAll('.support-button');
    supportButtons.forEach(button => {
      if (button instanceof HTMLElement) {
        button.style.display = 'flex';
        button.style.visibility = 'visible';
        button.style.opacity = '1';
        button.classList.remove('hidden');
        button.classList.add('flex');
        button.style.zIndex = '20'; // Set z-index
      }
    });
    
    // Fix specific support section in MobileBottomNav
    const supportSection = document.querySelector('.relative.support-section');
    if (supportSection instanceof HTMLElement) {
      supportSection.style.display = 'block';
      supportSection.style.visibility = 'visible';
      supportSection.style.opacity = '1';
      supportSection.classList.remove('hidden');
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
    const dialogs = document.querySelectorAll('[role="dialog"]');
    dialogs.forEach((dialog) => {
      if (dialog instanceof HTMLElement) {
        const isVisible = window.getComputedStyle(dialog).display !== 'none';
        if (!isVisible) {
          dialog.style.display = 'block';
          dialog.style.visibility = 'visible';
          dialog.style.opacity = '1';
          dialog.style.zIndex = '200'; // Set high z-index
        }
      }
    });
    
    // Also check dialog content elements
    const dialogContents = document.querySelectorAll('.dialog-content, [data-radix-dialog-content]');
    dialogContents.forEach((content) => {
      if (content instanceof HTMLElement) {
        const isVisible = window.getComputedStyle(content).display !== 'none';
        if (!isVisible) {
          content.style.display = 'block';
          content.style.visibility = 'visible';
          content.style.opacity = '1';
          content.style.zIndex = '200'; // Set high z-index
        }
      }
    });
  } catch (e) {
    console.debug("Dialog visibility error:", e);
  }
};

/**
 * Cleanup function specifically for orphaned portals
 */
export const cleanupOrphanedPortals = () => {
  try {
    // Find any portals that are no longer in use (display: none)
    const orphanedPortals = document.querySelectorAll('[data-radix-portal][style*="display: none"]');
    console.log(`Found ${orphanedPortals.length} orphaned portals to clean up`);
    
    orphanedPortals.forEach((portal) => {
      try {
        portal.remove();
      } catch (e) {
        console.debug("Failed to remove orphaned portal:", e);
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
