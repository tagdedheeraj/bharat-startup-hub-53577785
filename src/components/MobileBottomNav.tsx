
import { memo, useEffect, useState } from 'react';
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
  
  // Check for low performance device only once on mount
  useEffect(() => {
    setIsLowPerformance(isLowPerformanceDevice());
  }, []);
  
  // Don't render on desktop
  if (!isMobile) return null;
  
  // Simplified render for low performance devices
  if (isLowPerformance) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden">
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden">
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
