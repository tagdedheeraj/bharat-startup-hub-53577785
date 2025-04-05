
/**
 * Utility to clean up Radix UI portals to prevent memory leaks
 */
export const cleanupPortals = () => {
  try {
    const portals = document.querySelectorAll('[data-radix-portal]');
    portals.forEach(portal => {
      try {
        portal.remove();
      } catch (e) {
        // Silent fail
      }
    });
  } catch (e) {
    // Silent fail
  }
};
