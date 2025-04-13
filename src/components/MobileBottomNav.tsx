
import { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Home, Info, Briefcase, Shield } from 'lucide-react';
import { NavItem, ContactNavItem, SupportDrawer, MoreMenuSheet } from './mobile-nav';
import { ensureBottomNavVisibility, resetZIndexStacking } from '@/utils/portalCleanup';

export default function MobileBottomNav() {
  const isMobile = useIsMobile();
  
  // Add useEffect to constantly ensure proper visibility
  useEffect(() => {
    // Ensure visibility when component mounts
    const ensureNavVisibility = () => {
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav instanceof HTMLElement) {
        bottomNav.style.display = 'block';
        bottomNav.style.visibility = 'visible';
        bottomNav.style.opacity = '1';
        bottomNav.classList.remove('hidden');
        console.log("MobileBottomNav: Forcing visibility");
      }
      
      // Also check for any hidden support buttons
      const supportButtons = document.querySelectorAll('.support-button');
      supportButtons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.style.display = 'flex';
          button.style.visibility = 'visible';
          button.style.opacity = '1';
          console.log("MobileBottomNav: Support button visibility enforced");
        }
      });
      
      resetZIndexStacking();
    };
    
    ensureNavVisibility();
    
    // Set up checks at different intervals to ensure visibility is maintained
    const timers = [
      setTimeout(ensureNavVisibility, 100),
      setTimeout(ensureNavVisibility, 500),
      setTimeout(ensureNavVisibility, 1000),
      setTimeout(ensureNavVisibility, 2000),
    ];
    
    const intervalId = setInterval(ensureNavVisibility, 5000);
    
    return () => {
      clearInterval(intervalId);
      timers.forEach(clearTimeout);
    };
  }, []);
  
  if (!isMobile) return null;
  
  const navItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Info, label: 'About', to: '/about' },
    { icon: Briefcase, label: 'Services', to: '/services' },
    { icon: Shield, label: 'CA', to: '/ca-services' },
  ];

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden"
      style={{ 
        display: 'block !important', 
        visibility: 'visible !important', 
        opacity: '1 !important',
        zIndex: '40' 
      }} 
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
        
        {/* Support Drawer with improved visibility */}
        <div 
          className="relative support-section" 
          style={{ 
            display: 'block !important', 
            visibility: 'visible !important', 
            opacity: '1 !important', 
            zIndex: '30' 
          }}
        >
          <SupportDrawer />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
        </div>
        
        {/* More Menu */}
        <MoreMenuSheet />
      </nav>
    </div>
  );
}
