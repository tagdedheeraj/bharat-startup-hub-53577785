
import React, { ReactNode, useEffect, memo, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import OvalHeader from './3DHeader/OvalHeader';
import Footer from './Footer';
import LegalDisclaimer from './funding/LegalDisclaimer';
import SideDrawerNavigation from './SideDrawerNavigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';
import { isLowPerformanceDevice } from '@/utils/mobile/detection';
import MobileOptimizer from './layout/MobileOptimizer';
import SimpleHeader from './layout/SimpleHeader';
import MainContent from './layout/MainContent';

interface ExtendedCSSProperties extends React.CSSProperties {
  WebkitOverflowScrolling?: 'touch' | 'auto';
}

const Layout = ({ children }: { children?: ReactNode }) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLowPerformance(isLowPerformanceDevice());
  }, []);
  
  const isNotFoundPage = location.pathname === "*" || location.pathname === "/404";

  const bgClass = isLowPerformance 
    ? 'bg-white' 
    : isNotFoundPage 
      ? 'bg-gradient-to-b from-white via-india-white to-india-white/50' 
      : 'bg-gradient-to-b from-india-saffron via-india-white to-india-green';

  return (
    <div 
      className={`flex flex-col min-h-screen ${bgClass}`}
      style={isMobile ? {
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'none'
      } as ExtendedCSSProperties : undefined}
    >
      <MobileOptimizer mainRef={mainRef} />
      
      {!isLowPerformance ? <OvalHeader /> : <SimpleHeader />}
      
      <MainContent ref={mainRef}>
        {children || <Outlet />}
      </MainContent>
      
      <Footer />
      <LegalDisclaimer />
      <SideDrawerNavigation />
      
      {/* Add bottom padding on mobile to account for the bottom navigation */}
      {isMobile && (
        <div className="h-16 md:h-0" aria-hidden="true"></div>
      )}
    </div>
  );
};

export default memo(Layout);
