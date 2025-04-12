
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
          button.style.display = '';
          button.classList.remove('hidden');
          button.classList.add('flex');
          console.log("Support button visibility forced explicitly");
        }
      });
      
      // Also force visibility on the button ref
      if (supportButtonRef.current) {
        supportButtonRef.current.style.display = '';
        supportButtonRef.current.classList.remove('hidden');
        supportButtonRef.current.classList.add('flex');
      }
    };
    
    // Run multiple times to catch any timing issues
    forceButtonVisibility();
    
    // Run again after short delays to catch any late CSS or state changes
    const timers = [
      setTimeout(forceButtonVisibility, 100),
      setTimeout(forceButtonVisibility, 500),
      setTimeout(forceButtonVisibility, 1000),
      setTimeout(forceButtonVisibility, 2000),
      setTimeout(forceButtonVisibility, 5000)
    ];
    
    // Set up a recurring check for visibility
    const intervalTimer = setInterval(forceButtonVisibility, 3000);
    
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(intervalTimer);
    };
  }, []);

  // Another effect to debug drawer state changes
  useEffect(() => {
    console.log(`Support drawer is now ${isOpen ? 'OPEN' : 'CLOSED'}`);
    
    if (isOpen && !isInitialMount.current) {
      // When opening, ensure we debug portals to see what's happening
      debugPortals();
    }
    
    isInitialMount.current = false;
  }, [isOpen]);

  // Function to explicitly open drawer
  const handleOpenDrawer = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Support drawer trigger clicked explicitly");
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
