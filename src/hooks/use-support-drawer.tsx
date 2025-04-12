
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { debugPortals } from '@/utils/portalCleanup';

export function useSupportDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const supportButtonRef = useRef<HTMLButtonElement>(null);
  const isInitialMount = useRef(true);

  // This effect ensures the drawer is visible after mount
  useEffect(() => {
    console.log("SupportDrawer hook initialized - ensuring visibility");
    
    // Force all support buttons to be visible
    const forceButtonVisibility = () => {
      const supportButtons = document.querySelectorAll('.support-button');
      supportButtons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.style.display = 'flex';
          button.classList.remove('hidden');
          button.classList.add('flex');
          button.style.visibility = 'visible';
          button.style.opacity = '1';
          console.log("Support button visibility forced explicitly");
        }
      });
      
      // Also force visibility on the button ref
      if (supportButtonRef.current) {
        supportButtonRef.current.style.display = 'flex';
        supportButtonRef.current.classList.remove('hidden');
        supportButtonRef.current.classList.add('flex');
        supportButtonRef.current.style.visibility = 'visible';
        supportButtonRef.current.style.opacity = '1';
      }
      
      // Also ensure bottom nav is visible
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav instanceof HTMLElement) {
        bottomNav.style.display = 'block';
        bottomNav.classList.remove('hidden');
        console.log("Bottom nav visibility forced");
      }
    };
    
    // Initial check
    forceButtonVisibility();
    
    // Run again after short delays to catch any timing issues
    const timers = [
      setTimeout(forceButtonVisibility, 100),
      setTimeout(forceButtonVisibility, 500),
      setTimeout(forceButtonVisibility, 1000),
    ];
    
    // Also notify user via toast that support is available
    setTimeout(() => {
      toast({
        title: "Support Available",
        description: "Click the Support button in the bottom navigation if you need help.",
        duration: 3000,
      });
    }, 2000);
    
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [toast]);

  // Another effect to debug drawer state changes
  useEffect(() => {
    console.log(`Support drawer is now ${isOpen ? 'OPEN' : 'CLOSED'}`);
    
    if (isOpen && !isInitialMount.current) {
      // When opening, ensure we debug portals to see what's happening
      debugPortals();
      
      // Also ensure the drawer content is visible after a small delay
      setTimeout(() => {
        const drawerContent = document.querySelector('[role="dialog"]');
        if (drawerContent instanceof HTMLElement) {
          drawerContent.style.display = 'block';
          drawerContent.style.visibility = 'visible';
          drawerContent.style.opacity = '1';
          console.log("Drawer content visibility manually enforced");
        }
      }, 100);
    }
    
    isInitialMount.current = false;
  }, [isOpen]);

  // Function to explicitly open drawer
  const handleOpenDrawer = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Support drawer trigger clicked explicitly");
    
    // Show toast to confirm button click was recognized
    toast({
      title: "Opening Support",
      description: "Loading support options...",
      duration: 2000,
    });
    
    // Set state to open drawer
    setIsOpen(true);
    
    // Debug portals when opening drawer
    setTimeout(() => {
      debugPortals();
    }, 100);
  };

  return {
    isOpen,
    setIsOpen,
    supportButtonRef,
    handleOpenDrawer
  };
}
