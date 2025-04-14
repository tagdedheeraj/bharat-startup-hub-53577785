
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
  }, [isMobile, mainRef]);
  
  return null;
};

export default MobileOptimizer;
