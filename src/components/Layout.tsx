
import { ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import OvalHeader from './3DHeader/OvalHeader';
import Footer from './Footer';
import SideDrawerNavigation from './SideDrawerNavigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';
import { debugPortals } from '@/utils/portalCleanup';

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Add a class to adjust background for 404 page
  const isNotFoundPage = location.pathname === "*" || location.pathname === "/404";
  
  // Simpler debug logging
  useEffect(() => {
    console.log("Layout mounted");
    
    // Debug portals for information only, not cleaning up here anymore
    if (process.env.NODE_ENV === 'development') {
      debugPortals();
    }
    
    return () => {
      console.log("Layout unmounted");
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${isNotFoundPage ? 'bg-gradient-to-b from-white via-india-white to-india-white/50' : 'bg-gradient-to-b from-india-saffron via-india-white to-india-green'}`}>
      <OvalHeader />
      <main className="flex-grow pt-8 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
        {children || <Outlet />}
      </main>
      <Footer />
      {/* Use our side drawer navigation */}
      <SideDrawerNavigation />
    </div>
  );
}
