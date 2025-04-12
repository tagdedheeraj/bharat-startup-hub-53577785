
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

export function useSupportDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const supportButtonRef = useRef<HTMLButtonElement>(null);

  // Use effect to ensure button visibility after mount
  useEffect(() => {
    console.log("SupportDrawer hook initialized");
    
    // Force bottom nav and support button visibility
    const ensureVisibility = () => {
      // Ensure support button is visible
      const supportButtons = document.querySelectorAll('.support-button');
      supportButtons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.style.display = 'flex';
          button.style.visibility = 'visible';
          button.style.opacity = '1';
          button.classList.remove('hidden');
          button.classList.add('flex');
        }
      });
      
      // Ensure button ref is visible if it exists
      if (supportButtonRef.current) {
        supportButtonRef.current.style.display = 'flex';
        supportButtonRef.current.style.visibility = 'visible';
        supportButtonRef.current.style.opacity = '1';
      }
      
      // Ensure bottom nav is visible
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav instanceof HTMLElement) {
        bottomNav.style.display = 'block';
        bottomNav.style.visibility = 'visible';
        bottomNav.style.opacity = '1';
      }
    };
    
    // Run multiple times to catch any timing issues
    ensureVisibility();
    const timers = [
      setTimeout(ensureVisibility, 200),
      setTimeout(ensureVisibility, 500), 
      setTimeout(ensureVisibility, 1000),
      setTimeout(ensureVisibility, 2000),
    ];
    
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  // Function to explicitly open drawer
  const handleOpenDrawer = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Support drawer trigger clicked");
    
    // Show toast to confirm button click was recognized
    toast({
      title: "Opening Support",
      description: "Loading support options...",
      duration: 2000,
    });
    
    // Set state to open drawer
    setIsOpen(true);
  };

  return {
    isOpen,
    setIsOpen,
    supportButtonRef,
    handleOpenDrawer
  };
}
