import { ReactNode, useEffect, memo, useState, useRef, CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import OvalHeader from './3DHeader/OvalHeader';
import Footer from './Footer';
import SideDrawerNavigation from './SideDrawerNavigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';
import { isLowPerformanceDevice } from '@/utils/mobilePerformance';

interface ExtendedCSSProperties extends CSSProperties {
  WebkitOverflowScrolling?: 'touch' | 'auto';
}

const Layout = ({ children }: { children?: ReactNode }) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLowPerformance(isLowPerformanceDevice());
    
    if (isMobile) {
      if (mainRef.current) {
        const style = mainRef.current.style as unknown as ExtendedCSSProperties;
        style.WebkitOverflowScrolling = 'touch';
        mainRef.current.style.overscrollBehavior = 'none';
      }
      
      const fixScrollingStyles = () => {
        document.querySelectorAll('.overflow-auto, .overflow-y-auto, [style*="overflow"]').forEach((el) => {
          const style = (el as HTMLElement).style as unknown as ExtendedCSSProperties;
          style.WebkitOverflowScrolling = 'touch';
        });
      };
      
      fixScrollingStyles();
      setTimeout(fixScrollingStyles, 500);
    }
  }, [isMobile]);
  
  const isNotFoundPage = location.pathname === "*" || location.pathname === "/404";

  const bgClass = isLowPerformance 
    ? 'bg-white' 
    : isNotFoundPage 
      ? 'bg-gradient-to-b from-white via-india-white to-india-white/50' 
      : 'bg-gradient-to-b from-india-saffron via-india-white to-india-green';

  const mobileStyles: ExtendedCSSProperties = isMobile ? {
    WebkitOverflowScrolling: 'touch',
    overscrollBehavior: 'none'
  } : {};

  return (
    <div 
      className={`flex flex-col min-h-screen ${bgClass}`}
      style={isMobile ? {
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'none'
      } as ExtendedCSSProperties : undefined}
    >
      {!isLowPerformance && <OvalHeader />}
      
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
      
      <main 
        ref={mainRef}
        className="flex-grow pt-8 pb-12 container mx-auto px-4 sm:px-6 lg:px-8"
        style={isMobile ? {
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'auto'
        } as ExtendedCSSProperties : undefined}
      >
        {children || <Outlet />}
      </main>
      <Footer />
      
      <SideDrawerNavigation />
    </div>
  );
};

export default memo(Layout);
