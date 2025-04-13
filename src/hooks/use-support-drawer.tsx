
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
    
    // Ensure the bottom nav and support button remain visible
    ensureBottomNavVisibility();
    
    // Set state to open drawer
    setIsOpen(true);
  };
  
  // Add effect to ensure visibility when drawer opens or closes
  useEffect(() => {
    // When drawer state changes, ensure visibility
    ensureBottomNavVisibility();
    
    // Additional check with slight delay to catch any post-animation issues
    const timer = setTimeout(() => {
      ensureBottomNavVisibility();
    }, 300);
    
    return () => clearTimeout(timer);
  }, [isOpen]);

  return {
    isOpen,
    setIsOpen,
    supportButtonRef,
    handleOpenDrawer
  };
}
