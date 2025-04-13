
import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ensureBottomNavVisibility } from '@/utils/portalCleanup';

export function useSupportDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const supportButtonRef = useRef<HTMLButtonElement>(null);

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
    
    // Force ensure the bottom nav and support button remain visible
    const bottomNav = document.querySelector('.fixed.bottom-0');
    if (bottomNav instanceof HTMLElement) {
      bottomNav.style.display = 'block';
      bottomNav.classList.remove('hidden');
    }
    
    // Force ensure support button visibility
    const supportButtons = document.querySelectorAll('.support-button');
    supportButtons.forEach(button => {
      if (button instanceof HTMLElement) {
        button.style.display = 'flex';
      }
    });
    
    // Set state to open drawer
    setIsOpen(true);
  };
  
  // Add effect to ensure visibility when drawer opens or closes
  useEffect(() => {
    // Ensure visibility when drawer state changes
    const ensureVisibility = () => {
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav instanceof HTMLElement) {
        bottomNav.style.display = 'block';
        bottomNav.classList.remove('hidden');
      }
      
      const supportButtons = document.querySelectorAll('.support-button');
      supportButtons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.style.display = 'flex';
        }
      });
    };
    
    // Run visibility checks with multiple timings to catch any issues
    ensureVisibility();
    const timers = [
      setTimeout(ensureVisibility, 100),
      setTimeout(ensureVisibility, 300),
      setTimeout(ensureVisibility, 500)
    ];
    
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [isOpen]);

  return {
    isOpen,
    setIsOpen,
    supportButtonRef,
    handleOpenDrawer
  };
}
