
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ExtendedCSSProperties extends React.CSSProperties {
  WebkitOverflowScrolling?: 'touch' | 'auto';
}

interface MobileOptimizerProps {
  mainRef: React.RefObject<HTMLDivElement>;
}

const MobileOptimizer = ({ mainRef }: MobileOptimizerProps) => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) {
      // Add mobile-specific optimizations
      document.documentElement.classList.add('mobile-view');
      
      if (mainRef.current) {
        const style = mainRef.current.style as unknown as ExtendedCSSProperties;
        style.WebkitOverflowScrolling = 'touch';
        mainRef.current.style.overscrollBehavior = 'none';
      }
      
      // Fix scrolling in all overflow areas
      const fixScrollingStyles = () => {
        document.querySelectorAll('.overflow-auto, .overflow-y-auto, [style*="overflow"], [role="tablist"]').forEach((el) => {
          const style = (el as HTMLElement).style as unknown as ExtendedCSSProperties;
          style.WebkitOverflowScrolling = 'touch';
          (el as HTMLElement).classList.add('scrollbar-hide');
        });
      };
      
      // Fix tab overlapping issues
      const fixTabsLayout = () => {
        document.querySelectorAll('[role="tablist"]').forEach((tablist) => {
          tablist.classList.add('flex', 'overflow-x-auto', 'scrollbar-hide');
          
          // Make each tab item not shrink
          tablist.querySelectorAll('[role="tab"]').forEach((tab) => {
            (tab as HTMLElement).style.flexShrink = '0';
            (tab as HTMLElement).style.whiteSpace = 'nowrap';
          });
        });
      };
      
      // Apply fixes
      fixScrollingStyles();
      fixTabsLayout();
      
      // Reapply after DOM changes
      setTimeout(() => {
        fixScrollingStyles();
        fixTabsLayout();
      }, 500);
      
      return () => {
        document.documentElement.classList.remove('mobile-view');
      };
    }
  }, [isMobile, mainRef]);
  
  return null;
};

export default MobileOptimizer;
