
import { ReactNode, useEffect, memo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import OvalHeader from './3DHeader/OvalHeader';
import Footer from './Footer';
import SideDrawerNavigation from './SideDrawerNavigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';
import { isLowPerformanceDevice } from '@/utils/mobilePerformance';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  
  // Check for low performance device on mount
  useEffect(() => {
    setIsLowPerformance(isLowPerformanceDevice());
  }, []);
  
  // Add a class to adjust background for 404 page
  const isNotFoundPage = location.pathname === "*" || location.pathname === "/404";

  // Use simpler background for low performance devices
  const bgClass = isLowPerformance 
    ? 'bg-white' 
    : isNotFoundPage 
      ? 'bg-gradient-to-b from-white via-india-white to-india-white/50' 
      : 'bg-gradient-to-b from-india-saffron via-india-white to-india-green';

  return (
    <div className={`flex flex-col min-h-screen ${bgClass}`}>
      {/* Only render 3D header on non-low-performance devices */}
      {!isLowPerformance && <OvalHeader />}
      
      {/* Simple header for low performance devices */}
      {isLowPerformance && (
        <header className="py-4 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <img 
              src="/lovable-uploads/5aa945b6-f31a-46aa-a7dd-0b27f6c14482.png" 
              alt="Bharat Startup Solution" 
              className="h-12 w-auto"
            />
          </div>
        </header>
      )}
      
      <main className="flex-grow pt-8 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
        {children || <Outlet />}
      </main>
      <Footer />
      
      {/* Use our side drawer navigation */}
      <SideDrawerNavigation />
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(Layout);
