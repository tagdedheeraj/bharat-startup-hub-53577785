
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
  
  // Run once on component mount to remove any dynamically added badges
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
    
    // Clean up any orphaned portal elements that could cause React errors
    const cleanupPortals = () => {
      try {
        // Find any orphaned portal elements
        const portalElements = document.querySelectorAll('[data-radix-portal]');
        
        portalElements.forEach((portal) => {
          // Only remove portal elements that are orphaned (no parent component)
          if (portal && !portal.hasChildNodes()) {
            try {
              document.body.removeChild(portal);
            } catch (e) {
              // Portal might already be gone
              console.debug("Could not remove portal element:", e);
            }
          }
        });
      } catch (error) {
        console.debug("Error cleaning up portals:", error);
      }
    };
    
    // Run immediately
    removeBadges();
    cleanupPortals();
    
    // Also set up an interval to continuously check and remove, but with a longer interval
    // to reduce potential performance impact
    const badgeInterval = setInterval(removeBadges, 2000);
    const portalInterval = setInterval(cleanupPortals, 1000);
    
    // Clean up
    return () => {
      clearInterval(badgeInterval);
      clearInterval(portalInterval);
      cleanupPortals(); // Clean up portals on unmount
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
