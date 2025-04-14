
import { memo, useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Home, Info, Briefcase, Shield, LifeBuoy } from 'lucide-react';
import { NavItem, ContactNavItem, SupportDrawer, MoreMenuSheet } from './mobile-nav';
import { isLowPerformanceDevice } from '@/utils/mobilePerformance';

// Define navItems outside component to prevent recreation on renders
const navItems = [
  { icon: Home, label: 'Home', to: '/' },
  { icon: Info, label: 'About', to: '/about' },
  { icon: Briefcase, label: 'Services', to: '/services' },
  { icon: Shield, label: 'CA', to: '/ca-services' },
  { icon: LifeBuoy, label: 'Support', to: '/support' },
];

const MobileBottomNav = () => {
  const isMobile = useIsMobile();
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  
  // Check for low performance device only once on mount
  useEffect(() => {
    setIsLowPerformance(isLowPerformanceDevice());
    
    // Fix for bottom nav causing scroll issues on some mobile browsers
    if (navRef.current && isMobile) {
      // Make bottom nav have a hardware-accelerated layer
      navRef.current.style.transform = 'translateZ(0)';
      navRef.current.style.willChange = 'transform';
      
      // Ensure it doesn't interfere with scrolling
      navRef.current.style.touchAction = 'none';
      
      // Make sure content doesn't get hidden behind bottom nav
      document.body.style.paddingBottom = '70px';
    }
    
    return () => {
      // Clean up padding when component unmounts
      if (isMobile) {
        document.body.style.paddingBottom = '';
      }
    };
  }, [isMobile]);
  
  // Don't render on desktop
  if (!isMobile) return null;
  
  // Simplified render for low performance devices
  if (isLowPerformance) {
    return (
      <div 
        ref={navRef}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden"
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      >
        <nav className="flex justify-around items-center h-16">
          {/* Only show most important navigation items for low performance devices */}
          <NavItem key="/" icon={Home} label="Home" to="/" />
          <NavItem key="/services" icon={Briefcase} label="Services" to="/services" />
          <ContactNavItem />
          <MoreMenuSheet />
        </nav>
      </div>
    );
  }
  
  // Full navigation for standard devices
  return (
    <div 
      ref={navRef}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden"
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <NavItem 
            key={item.to} 
            icon={item.icon} 
            label={item.label} 
            to={item.to} 
          />
        ))}
        
        {/* Contact Link */}
        <ContactNavItem />
        
        {/* Support Drawer */}
        <div className="relative support-section">
          <SupportDrawer />
        </div>
        
        {/* More Menu */}
        <MoreMenuSheet />
      </nav>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(MobileBottomNav);
