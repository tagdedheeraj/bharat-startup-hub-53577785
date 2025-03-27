
import { ReactNode, useEffect } from 'react';
import OvalHeader from './3DHeader/OvalHeader';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Add a class to adjust background for 404 page
  const isNotFoundPage = location.pathname === "*" || location.pathname === "/404";
  
  // Enhanced cleanup function with additional safeguards
  useEffect(() => {
    const removeBadges = () => {
      try {
        // Find and remove any badges that might have been injected
        const badges = document.querySelectorAll(
          '[class*="lovable"],[id*="lovable"],[class*="gptengineer"],[id*="gptengineer"],div[style*="position: fixed"]'
        );
        
        badges.forEach((badge) => {
          try {
            if (badge && badge.parentNode) {
              badge.parentNode.removeChild(badge);
            }
          } catch (e) {
            // Silently handle any errors during individual node removal
            console.debug("Could not remove badge element:", e);
          }
        });
      } catch (error) {
        // Catch any errors that might occur during the badge removal process
        console.debug("Error in badge removal:", error);
      }
    };
    
    // More aggressive portal cleanup with extra safety checks
    const cleanupPortals = () => {
      try {
        // Pre-check to ensure document.body exists and is valid
        if (!document.body) return;
        
        // Find any orphaned portal elements with more specific selectors
        const portalElements = document.querySelectorAll('[data-radix-portal], [role="menu"], [role="tooltip"], [role="dialog"]');
        
        portalElements.forEach((portal) => {
          try {
            // Enhanced check for problematic portals
            const shouldRemove = 
              portal && 
              (!portal.hasChildNodes() || 
               portal.getAttribute('aria-hidden') === 'true' ||
               portal.childNodes.length === 0 ||
               getComputedStyle(portal).opacity === '0');
            
            if (shouldRemove) {
              // First check if portal is actually in the DOM still
              if (document.body.contains(portal)) {
                try {
                  document.body.removeChild(portal);
                } catch (e) {
                  // This specific error means the node is no longer a child
                  console.debug("Portal removal failed:", e);
                }
              }
            }
          } catch (e) {
            // Portal might already be gone
            console.debug("Could not process portal element:", e);
          }
        });
        
        // Also clean up any loose dropdown menus
        const menus = document.querySelectorAll('.radix-dropdown-content');
        menus.forEach(menu => {
          try {
            const parent = menu.parentNode;
            if (parent && document.body.contains(parent)) {
              parent.removeChild(menu);
            }
          } catch (e) {
            console.debug("Menu cleanup failed:", e);
          }
        });
      } catch (error) {
        console.debug("Error cleaning up portals:", error);
      }
    };
    
    // Run immediately on mount and route change
    removeBadges();
    cleanupPortals();
    
    // Set up intervals with different frequencies
    // Run portal cleanup more frequently
    const badgeInterval = setInterval(removeBadges, 3000);
    const portalInterval = setInterval(cleanupPortals, 500); // More frequent cleanup
    
    // Additional interval for very aggressive cleanup during navigation
    const aggressiveCleanupInterval = setInterval(() => {
      if (document.hidden) {
        // Clean more aggressively when tab is not visible
        cleanupPortals();
      }
    }, 200);
    
    // Cleanup all portals on route change too
    cleanupPortals();
    
    // Clean up intervals on unmount
    return () => {
      clearInterval(badgeInterval);
      clearInterval(portalInterval);
      clearInterval(aggressiveCleanupInterval);
      
      // Final cleanup before unmounting - multiple passes with delays
      removeBadges();
      cleanupPortals();
      
      // Add a slight delay for final cleanup to catch any lingering elements
      setTimeout(cleanupPortals, 50);
      setTimeout(cleanupPortals, 150);
    };
  }, [location.pathname]); // Re-run when route changes
  
  return (
    <div className={`flex flex-col min-h-screen ${isNotFoundPage ? 'bg-gradient-to-b from-white via-india-white to-india-white/50' : 'bg-gradient-to-b from-india-saffron via-india-white to-india-green'}`}>
      <OvalHeader />
      <main className="flex-grow pt-8 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      {/* Add padding to the bottom on mobile to prevent content from being hidden behind the nav bar */}
      {isMobile && <div className="h-16"></div>}
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
