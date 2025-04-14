
import React, { ReactNode, forwardRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ExtendedCSSProperties extends React.CSSProperties {
  WebkitOverflowScrolling?: 'touch' | 'auto';
}

interface MainContentProps {
  children: ReactNode;
}

const MainContent = forwardRef<HTMLDivElement, MainContentProps>(
  ({ children }, ref) => {
    const isMobile = useIsMobile();
    
    return (
      <main 
        ref={ref}
        className="flex-grow pt-8 pb-12 container mx-auto px-4 sm:px-6 lg:px-8"
        style={isMobile ? {
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'auto'
        } as ExtendedCSSProperties : undefined}
      >
        {children}
      </main>
    );
  }
);

MainContent.displayName = 'MainContent';
export default MainContent;
