
import { ReactNode, useEffect, useRef } from 'react';
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
  const cleanupIntervalRef = useRef<number | null>(null);
  
  // Add a class to adjust background for 404 page
  const isNotFoundPage = location.pathname === "*" || location.pathname === "/404";
  
  // Run once on component mount to remove any dynamically added badges
  useEffect(() => {
    // Function to safely check if an element exists in the DOM
    const elementExists = (element: Element | null): boolean => {
      if (!element) return false;
      return document.contains(element);
    };
    
    const safeRemoveElement = (element: Element | null) => {
      try {
        // First verify the element exists and is connected to DOM
        if (!element || !elementExists(element)) return false;
        
        // Double check parent node exists before attempting removal
        if (element.parentNode) {
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
      if (!document || !document.body) return; // Guard against document not being available
      
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
        
        // Only try to select if there's a valid selector
        if (allSelectors.trim()) {
          try {
            const badges = document.querySelectorAll(allSelectors);
            
            badges.forEach((badge) => {
              safeRemoveElement(badge);
            });
          } catch (queryError) {
            console.debug("Error in badge query selection:", queryError);
          }
        }
      } catch (error) {
        // Catch any errors that might occur during the badge removal process
        console.debug("Error in badge removal:", error);
      }
    };
    
    // Run immediately, but wrapped in setTimeout to ensure DOM is ready
    setTimeout(removeBadges, 0);
    
    // Set up an interval to check periodically, but with a reasonable interval
    if (cleanupIntervalRef.current) {
      window.clearInterval(cleanupIntervalRef.current);
      cleanupIntervalRef.current = null;
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
