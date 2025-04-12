import { useIsMobile } from '@/hooks/use-mobile';
import { Home, Info, Briefcase, Shield, LifeBuoy } from 'lucide-react';
import { NavItem, ContactNavItem, SupportDrawer, MoreMenuSheet } from './mobile-nav';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function MobileBottomNav() {
  const isMobile = useIsMobile();
  const bottomNavRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Force reload of the bottom nav on component mount to ensure visibility
  useEffect(() => {
    console.log("MobileBottomNav mounted - ensuring visibility");
    
    // Run immediately and then periodically to ensure visibility
    const ensureBottomNavVisibility = () => {
      // 1. Ensure the bottom nav container itself is visible
      if (bottomNavRef.current) {
        bottomNavRef.current.classList.remove('hidden');
        bottomNavRef.current.style.display = 'block';
        console.log("Bottom nav container visibility ensured");
      }
      
      // 2. Ensure all bottom nav items are visible
      const navItems = document.querySelectorAll('.fixed.bottom-0 button, .fixed.bottom-0 a, .support-button');
      navItems.forEach(item => {
        if (item instanceof HTMLElement) {
          item.classList.remove('hidden');
          item.style.display = '';
          console.log("Nav item visibility ensured");
        }
      });
      
      // 3. Specifically check for the support button
      const supportButtons = document.querySelectorAll('.support-button');
      supportButtons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.classList.remove('hidden');
          button.classList.add('flex');
          button.style.display = 'flex';
          console.log("Support button visibility specifically ensured");
        }
      });
    };
    
    // Run multiple times to ensure it catches any potential timing issues
    ensureBottomNavVisibility();
    
    // Create an array of timeouts at different intervals
    const timers = [
      setTimeout(ensureBottomNavVisibility, 100),
      setTimeout(ensureBottomNavVisibility, 500),
      setTimeout(ensureBottomNavVisibility, 1000),
      setTimeout(ensureBottomNavVisibility, 2000),
      setTimeout(ensureBottomNavVisibility, 5000)
    ];
    
    // Also set up a regular interval to keep checking
    const intervalTimer = setInterval(() => {
      ensureBottomNavVisibility();
    }, 3000);
    
    // Show a toast notification to verify the bottom nav is working
    setTimeout(() => {
      toast({
        title: "Navigation Ready",
        description: "The bottom navigation is now active and ready to use.",
        duration: 3000,
      });
    }, 1500);
    
    return () => {
      // Clean up all timers on unmount
      timers.forEach(clearTimeout);
      clearInterval(intervalTimer);
    };
  }, [toast]);
  
  if (!isMobile) return null;
  
  const navItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Info, label: 'About', to: '/about' },
    { icon: Briefcase, label: 'Services', to: '/services' },
    { icon: Shield, label: 'CA', to: '/ca-services' },
  ];

  return (
    <div 
      ref={bottomNavRef}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden"
      style={{ display: 'block' }} // Inline style to ensure visibility
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
        
        {/* Support Drawer - Make it more visible */}
        <div className="relative">
          <SupportDrawer />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
        </div>
        
        {/* More Menu */}
        <MoreMenuSheet />
      </nav>
    </div>
  );
}
