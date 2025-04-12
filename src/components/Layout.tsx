
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
  
  // Cleanup for any dynamically added elements and portals
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      // Check for any orphaned portals when DOM changes
      const orphanedPortals = document.querySelectorAll('[data-radix-portal][style*="display: none"]');
      orphanedPortals.forEach((portal) => {
        if (portal && portal.parentNode) {
          try {
            portal.parentNode.removeChild(portal);
          } catch (e) {
            console.debug("Failed to remove orphaned portal:", e);
          }
        }
      });
      
      // Remove any Lovable badges or branding that might be dynamically added
      const lovableBadges = document.querySelectorAll('[class*="lovable-"], [id*="lovable-"], .lovable-badge, [class*="badge"], [class*="love"]');
      lovableBadges.forEach((badge) => {
        if (badge && badge.parentNode) {
          try {
            badge.parentNode.removeChild(badge);
          } catch (e) {
            console.debug("Failed to remove lovable badge:", e);
          }
        }
      });
      
      // Check for iframes that might be added dynamically
      const iframes = document.querySelectorAll('iframe:not([src*="youtube"]):not([src*="vimeo"])');
      iframes.forEach((iframe) => {
        // Type cast the element to HTMLIFrameElement to access src property
        const iframeElement = iframe as HTMLIFrameElement;
        if (iframeElement && iframeElement.parentNode && (
          !iframeElement.src || 
          iframeElement.src.includes('lovable') || 
          iframeElement.src.includes('gptengineer') ||
          iframeElement.hasAttribute('style')
        )) {
          try {
            iframeElement.parentNode.removeChild(iframeElement);
          } catch (e) {
            console.debug("Failed to remove suspicious iframe:", e);
          }
        }
      });
      
      // Ensure bottom navigation is always visible - BUT DON'T REMOVE HIDDEN MODALS!
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav && bottomNav.classList.contains('hidden')) {
        bottomNav.classList.remove('hidden');
        console.log("Bottom nav visibility restored by observer");
      }
    });
    
    // Start observing document body for mutations
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'id']
    });
    
    // Run an immediate check for bottom nav visibility
    const checkBottomNav = () => {
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav) {
        bottomNav.classList.remove('hidden');
        console.log("Bottom nav visibility ensured on mount");
      }
    };
    
    // Run multiple times to ensure it catches any timing issues
    checkBottomNav();
    const timer1 = setTimeout(checkBottomNav, 100);
    const timer2 = setTimeout(checkBottomNav, 500);
    const timer3 = setTimeout(checkBottomNav, 1000);
    
    // Cleanup function
    return () => {
      observer.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      
      // Final cleanup of portals - but be careful not to remove active ones
      const portals = document.querySelectorAll('[data-radix-portal][style*="display: none"]');
      portals.forEach((portal) => {
        try {
          if (portal && portal.parentNode) {
            portal.parentNode.removeChild(portal);
          }
        } catch (e) {
          console.debug("Cleanup portal error:", e);
        }
      });
    };
  }, []);

  // Cleanup portals on route changes - but be more selective
  useEffect(() => {
    // Small delay to allow animations to complete
    const timeoutId = setTimeout(() => {
      // Only remove portals that are actually hidden
      const unusedPortals = document.querySelectorAll('[data-radix-portal][style*="display: none"]');
      unusedPortals.forEach((portal) => {
        try {
          if (portal && portal.parentNode) {
            portal.parentNode.removeChild(portal);
          }
        } catch (e) {
          console.debug("Route change cleanup error:", e);
        }
      });
      
      // Ensure bottom navigation is visible after route change
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav) {
        bottomNav.classList.remove('hidden');
        console.log("Bottom nav visibility ensured after route change");
      }
    }, 300);
    
    // Run an immediate check too
    const bottomNav = document.querySelector('.fixed.bottom-0');
    if (bottomNav) {
      bottomNav.classList.remove('hidden');
    }
    
    return () => {
      clearTimeout(timeoutId);
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
