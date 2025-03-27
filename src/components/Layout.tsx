
import { ReactNode } from 'react';
import OvalHeader from './3DHeader/OvalHeader';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  const location = useLocation();
  const cleanupIntervalRef = useRef<number | null>(null);
  
  // Add a class to adjust background for 404 page
  const isNotFoundPage = location.pathname === "*" || location.pathname === "/404";
  
  // Run once on component mount to remove any dynamically added badges
  useEffect(() => {
    const safeRemoveElement = (element: Element) => {
      try {
        // Only attempt to remove if the element has a parent node
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
          return true;
        }
        return false;
      } catch (e) {
        console.debug("Failed to remove element:", e);
        return false;
      }
    };
    
    const removeBadges = () => {
      try {
        // Find any badges that might have been injected
        const selectors = [
          '[class*="lovable"]',
          '[id*="lovable"]',
          '[class*="gptengineer"]',
          '[id*="gptengineer"]',
          'div[style*="position: fixed"]',
          'iframe[src*="lovable"]',
          'iframe[src*="gptengineer"]',
          'iframe[style*="position: fixed"]',
          '[aria-label*="edit with lovable"]',
          '[data-lovable]',
          '.lovable-badge',
          '.lovable-edit-button',
          '#lovable-badge',
          '#gptengineer-select-button'
        ];
        
        // Query all selectors at once
        const allSelectors = selectors.join(',');
        const badges = document.querySelectorAll(allSelectors);
        
        let removedCount = 0;
        badges.forEach((badge) => {
          const removed = safeRemoveElement(badge);
          if (removed) removedCount++;
        });
        
        // If we've removed badges, log success message
        if (removedCount > 0) {
          console.debug(`Successfully removed ${removedCount} badge elements`);
        }
        
        // Also try to detect and remove any iframes that might be added dynamically
        const iframes = document.querySelectorAll('iframe:not([src]), iframe[allow*="clipboard-write"]');
        iframes.forEach((iframe) => {
          safeRemoveElement(iframe);
        });
        
        // Look for and remove portal containers
        const portals = document.querySelectorAll('[id*="portal"], [id*="lovable-root"], [id*="gptengineer-root"]');
        portals.forEach((portal) => {
          safeRemoveElement(portal);
        });
        
      } catch (error) {
        // Catch any errors that might occur during the badge removal process
        console.debug("Error in badge removal:", error);
      }
    };
    
    // Run immediately
    removeBadges();
    
    // Set up an interval to check periodically, but with a reasonable interval
    // to reduce potential performance impact
    if (cleanupIntervalRef.current) {
      window.clearInterval(cleanupIntervalRef.current);
    }
    
    cleanupIntervalRef.current = window.setInterval(removeBadges, 2000);
    
    // Clean up interval on unmount
    return () => {
      if (cleanupIntervalRef.current) {
        window.clearInterval(cleanupIntervalRef.current);
        cleanupIntervalRef.current = null;
      }
    };
  }, []);
  
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
