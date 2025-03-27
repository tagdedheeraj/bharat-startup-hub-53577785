
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
  
  // Comprehensive cleanup for any dynamically added elements and portals
  useEffect(() => {
    // Function to thoroughly clean up all potential portal and dropdown elements
    const cleanupAllPortals = () => {
      try {
        // Clean up any badges that might have been injected
        const badges = document.querySelectorAll(
          '[class*="lovable"],[id*="lovable"],[class*="gptengineer"],[id*="gptengineer"],div[style*="position: fixed"]'
        );
        
        badges.forEach((badge) => {
          try {
            if (badge && badge.parentNode) {
              badge.parentNode.removeChild(badge);
            }
          } catch (e) {
            console.debug("Badge removal error:", e);
          }
        });
        
        // Clean up dropdown and popover portals
        const portals = document.querySelectorAll(
          '[data-radix-portal], [data-radix-dropdown-menu-content], [data-radix-popper-content-wrapper]'
        );
        
        portals.forEach((portal) => {
          try {
            if (portal && document.body.contains(portal)) {
              document.body.removeChild(portal);
            }
          } catch (e) {
            console.debug("Portal removal error:", e);
          }
        });
        
        // Clean toast elements
        const toasts = document.querySelectorAll('[role="status"]');
        toasts.forEach((toast) => {
          try {
            if (toast && toast.parentNode) {
              toast.parentNode.removeChild(toast);
            }
          } catch (e) {
            console.debug("Toast removal error:", e);
          }
        });
      } catch (error) {
        console.debug("Cleanup operation error:", error);
      }
    };
    
    // Run immediately on mount
    cleanupAllPortals();
    
    // Also set up an interval to continuously check and clean up
    const interval = setInterval(cleanupAllPortals, 2000);
    
    // Clean up on unmount
    return () => {
      clearInterval(interval);
      cleanupAllPortals();
    };
  }, []);

  // Clean up portal elements when routes change
  useEffect(() => {
    // Function to clean up any orphaned portal elements
    const cleanupPortalElements = () => {
      try {
        // Target common portal containers and dropdown menus
        const portalElements = document.querySelectorAll(
          '[data-radix-portal], [data-radix-dropdown-menu-content], [data-radix-popper-content-wrapper]'
        );
        
        portalElements.forEach((element) => {
          try {
            if (element) {
              element.remove();
            }
          } catch (e) {
            console.debug("Portal element removal error:", e);
          }
        });
      } catch (error) {
        console.debug("Portal cleanup error:", error);
      }
    };
    
    // Run cleanup when location changes
    cleanupPortalElements();
    
    return () => {
      // Extra cleanup on unmount
      cleanupPortalElements();
    };
  }, [location]);
  
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
