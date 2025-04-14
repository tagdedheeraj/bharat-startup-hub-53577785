import { memo, useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Home, Info, Briefcase, Shield, LifeBuoy } from 'lucide-react';
import { NavItem, ContactNavItem, SupportDrawer, MoreMenuSheet } from './mobile-nav';
import { isLowPerformanceDevice } from '@/utils/mobile/detection';

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
  
  useEffect(() => {
    setIsLowPerformance(isLowPerformanceDevice());
    
    if (navRef.current && isMobile) {
      navRef.current.style.transform = 'translateZ(0)';
      navRef.current.style.willChange = 'transform';
      navRef.current.style.touchAction = 'none';
      document.body.style.paddingBottom = '70px';
    }
    
    return () => {
      if (isMobile) {
        document.body.style.paddingBottom = '';
      }
    };
  }, [isMobile]);
  
  if (!isMobile) return null;
  
  if (isLowPerformance) {
    return (
      <div 
        ref={navRef}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden"
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      >
        <nav className="flex justify-around items-center h-16">
          <NavItem key="/" icon={Home} label="Home" to="/" />
          <NavItem key="/services" icon={Briefcase} label="Services" to="/services" />
          <ContactNavItem />
          <MoreMenuSheet />
        </nav>
      </div>
    );
  }
  
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
        
        <ContactNavItem />
        
        <div className="relative support-section">
          <SupportDrawer />
        </div>
        
        <MoreMenuSheet />
      </nav>
    </div>
  );
};

export default memo(MobileBottomNav);
