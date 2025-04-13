
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
      }
    });
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
        }
      }
    });
  } catch (e) {
    console.debug("Dialog visibility error:", e);
  }
};
