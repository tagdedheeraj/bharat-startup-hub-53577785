
import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

export function useSupportDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const supportButtonRef = useRef<HTMLButtonElement>(null);

  const handleOpenDrawer = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Opening Support",
      description: "Loading support options...",
      duration: 2000,
    });
    
    setIsOpen(true);
  };
  
  return {
    isOpen,
    setIsOpen,
    supportButtonRef,
    handleOpenDrawer
  };
}
