
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
  
  // Enhanced cleanup function that runs more frequently and with extra safeguards
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
    
    // Enhanced portal cleanup with extra checks and safety measures
    const cleanupPortals = () => {
      try {
        // Find any orphaned portal elements
        const portalElements = document.querySelectorAll('[data-radix-portal]');
        
        portalElements.forEach((portal) => {
          try {
            // Enhanced check for problematic portals
            const shouldRemove = 
              portal && 
              (!portal.hasChildNodes() || 
               portal.getAttribute('aria-hidden') === 'true' ||
               portal.childNodes.length === 0);
            
            if (shouldRemove) {
              // Only attempt to remove if it's actually in the document
              if (document.body.contains(portal)) {
                try {
                  document.body.removeChild(portal);
                } catch (e) {
                  // This specific error means the node was already removed
                  // or is no longer a child of document.body
                  console.debug("Portal removal failed:", e);
                }
              }
            }
          } catch (e) {
            // Portal might already be gone
            console.debug("Could not process portal element:", e);
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
    // Run portal cleanup more frequently than badge removal
    const badgeInterval = setInterval(removeBadges, 3000);
    const portalInterval = setInterval(cleanupPortals, 1000);
    
    // Cleanup all portals on route change too
    cleanupPortals();
    
    // Clean up intervals on unmount
    return () => {
      clearInterval(badgeInterval);
      clearInterval(portalInterval);
      
      // Final cleanup before unmounting
      removeBadges();
      cleanupPortals();
      
      // Add a slight delay for final cleanup to catch any lingering elements
      setTimeout(cleanupPortals, 100);
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
