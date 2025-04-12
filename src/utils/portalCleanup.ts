
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
    // 4. Do NOT have any dialog content
    
    const hiddenPortals = document.querySelectorAll('[data-radix-portal][style*="display: none"]');
    
    if (hiddenPortals.length > 0) {
      console.log(`Found ${hiddenPortals.length} hidden portals - checking if safe to remove`);
    }
    
    hiddenPortals.forEach(portal => {
      try {
        // Cast portal to HTMLElement to access style property
        const portalElement = portal as HTMLElement;
        const style = window.getComputedStyle(portalElement);
        
        // Don't remove anything that might be dialog related
        const hasDialogContent = portal.querySelectorAll('[role="dialog"], .dialog-content, [data-state]').length > 0;
        
        // Only clean up portals that are DEFINITELY not in use and NOT dialog related
        if (
          style.display === 'none' && 
          !hasDialogContent &&
          !portal.hasAttribute('data-state') && 
          !portal.classList.contains('animate-in') &&
          !portal.classList.contains('slide-in')
        ) {
          console.log("Removing confirmed inactive and non-dialog portal");
          portal.remove();
        } else {
          console.log("Skipping portal cleanup - portal may be dialog related or still active");
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
    if (bottomNav) {
      if (bottomNav instanceof HTMLElement) {
        bottomNav.style.display = 'block';
        bottomNav.style.visibility = 'visible';
        bottomNav.style.opacity = '1';
        bottomNav.classList.remove('hidden');
      }
      console.log("Bottom nav visibility ensured");
    }
    
    // Also ensure support button is visible
    const supportButton = document.querySelector('.support-button');
    if (supportButton) {
      if (supportButton instanceof HTMLElement) {
        supportButton.style.display = 'flex';
        supportButton.style.visibility = 'visible';
        supportButton.style.opacity = '1';
        supportButton.classList.remove('hidden');
        supportButton.classList.add('flex');
      }
      console.log("Support button visibility ensured");
    }
    
    // Check for any invisible nav items and restore them
    const navItems = document.querySelectorAll('.fixed.bottom-0 button, .fixed.bottom-0 a');
    navItems.forEach(item => {
      if (item instanceof HTMLElement) {
        item.style.display = '';
        item.style.visibility = 'visible';
        item.style.opacity = '1';
        item.classList.remove('hidden');
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
    
    // Check for any dialogs
    const dialogs = document.querySelectorAll('[role="dialog"]');
    console.log(`DEBUG: Found ${dialogs.length} dialogs`);
    
    // Check dialog states
    dialogs.forEach((dialog, index) => {
      const state = dialog.getAttribute('data-state');
      const isVisible = dialog instanceof HTMLElement && 
                        window.getComputedStyle(dialog).display !== 'none';
      console.log(`Dialog #${index}: state=${state}, visible=${isVisible}`);
    });
    
    // Log info about each portal
    portals.forEach((portal, index) => {
      // Cast portal to HTMLElement to access style property
      const portalElement = portal as HTMLElement;
      const style = window.getComputedStyle(portalElement);
      const isVisible = style.display !== 'none';
      const hasDialogContent = portal.querySelector('[role="dialog"]') !== null;
      const state = portal.getAttribute('data-state');
      
      console.log(`Portal #${index}: visible=${isVisible}, dialog=${hasDialogContent}, state=${state || 'none'}`);
      
      // If it contains a dialog, force visibility
      if (hasDialogContent && !isVisible && portalElement) {
        portalElement.style.display = 'block';
        portalElement.style.visibility = 'visible';
        portalElement.style.opacity = '1';
        console.log(`Force-enabled visibility of portal #${index} containing dialog`);
      }
    });
  } catch (e) {
    console.debug("Portal debug error:", e);
  }
};

/**
 * Ensures the visibility of all important dialog contents
 * Call this function when you need to make sure dialogs are visible
 */
export const ensureDialogVisibility = () => {
  try {
    // Find any open dialogs that might be hidden
    const dialogs = document.querySelectorAll('[role="dialog"]');
    dialogs.forEach((dialog, index) => {
      if (dialog instanceof HTMLElement) {
        const isVisible = window.getComputedStyle(dialog).display !== 'none';
        if (!isVisible) {
          dialog.style.display = 'block';
          dialog.style.visibility = 'visible';
          dialog.style.opacity = '1';
          console.log(`Force-enabled visibility of hidden dialog #${index}`);
        }
      }
    });
    
    // Also check dialog content elements
    const dialogContents = document.querySelectorAll('.dialog-content, [data-radix-dialog-content]');
    dialogContents.forEach((content, index) => {
      if (content instanceof HTMLElement) {
        const isVisible = window.getComputedStyle(content).display !== 'none';
        if (!isVisible) {
          content.style.display = 'block';
          content.style.visibility = 'visible';
          content.style.opacity = '1';
          console.log(`Force-enabled visibility of hidden dialog content #${index}`);
        }
      }
    });
  } catch (e) {
    console.debug("Dialog visibility error:", e);
  }
};
