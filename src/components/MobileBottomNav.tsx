
import { useIsMobile } from '@/hooks/use-mobile';
import { Home, Info, Briefcase, Shield } from 'lucide-react';
import { NavItem, ContactNavItem, SupportDrawer, MoreMenuSheet } from './mobile-nav';

export default function MobileBottomNav() {
  const isMobile = useIsMobile();
  
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
      style={{ display: 'block', visibility: 'visible', opacity: '1' }} // Inline style to ensure visibility
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
        <div className="relative" style={{ display: 'block', visibility: 'visible', opacity: '1' }}>
          <SupportDrawer />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
        </div>
        
        {/* More Menu */}
        <MoreMenuSheet />
      </nav>
    </div>
  );
}
