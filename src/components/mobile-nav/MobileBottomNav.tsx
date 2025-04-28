
import { memo, useState, useEffect } from 'react';
import { Home, Search, Star, MessagesSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import MobileServicesDrawer from './MobileServicesDrawer';
import ContactNavItem from './ContactNavItem';
import SupportTriggerButton from './SupportTriggerButton';
import { useSupportDrawer } from '@/hooks/use-support-drawer';
import MoreMenuSheet from './MoreMenuSheet';

const MobileBottomNav = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { supportButtonRef, handleOpenDrawer } = useSupportDrawer();
  
  // Hide navigation on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && st > 100) {
        // Scroll down - hide nav
        setShowNav(false);
      } else {
        // Scroll up - show nav
        setShowNav(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  // Don't show on specific pages
  if (location.pathname.includes('/admin')) {
    return null;
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
      showNav ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="relative">
        {/* Floating Support Button - positioned above the navbar */}
        <div className="absolute -top-16 right-5">
          <SupportTriggerButton
            onClick={handleOpenDrawer}
            buttonRef={supportButtonRef}
          />
        </div>
      </div>
      
      <nav className="bg-white border-t border-gray-200 flex items-center justify-around shadow-lg h-16 px-2">
        <NavItem
          icon={Home}
          label="Home"
          to="/"
        />
        
        <MobileServicesDrawer />
        
        <NavItem
          icon={Star}
          label="Success"
          to="/success-stories"
        />
        
        <ContactNavItem />
        
        <div className="flex items-center justify-center w-12 h-full">
          <MoreMenuSheet />
        </div>
      </nav>
    </div>
  );
};

export default memo(MobileBottomNav);
