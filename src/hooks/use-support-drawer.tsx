
import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

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
