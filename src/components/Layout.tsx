
import { ReactNode, useEffect } from 'react';
import OvalHeader from './3DHeader/OvalHeader';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';
import { debugPortals, ensureBottomNavVisibility } from '@/utils/portalCleanup';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Add a class to adjust background for 404 page
  const isNotFoundPage = location.pathname === "*" || location.pathname === "/404";
  
  // Simpler cleanup that doesn't interfere with dialog functionality
  useEffect(() => {
    console.log("Layout mounted");
    
    // Ensure bottom nav is visible
    const checkBottomNav = () => {
      ensureBottomNavVisibility();
    };
    
    // Run a few times to ensure it catches any timing issues
    checkBottomNav();
    const timer1 = setTimeout(checkBottomNav, 500);
    const timer2 = setTimeout(checkBottomNav, 1000);
    
    // Debug portals for information only
    debugPortals();
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      console.log("Layout unmounted");
    };
  }, []);

  // Much simpler cleanup on route changes
  useEffect(() => {
    console.log("Route changed to:", location.pathname);
    
    // Just ensure bottom nav is visible after route change
    const timeoutId = setTimeout(() => {
      ensureBottomNavVisibility();
    }, 300);
    
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
