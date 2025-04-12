
import { useEffect } from 'react';
import { 
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useSupportDrawer } from '@/hooks/use-support-drawer';
import SupportTriggerButton from './SupportTriggerButton';
import SupportActions from './SupportActions';
import { useToast } from '@/hooks/use-toast';

export default function SupportDrawer() {
  const { isOpen, setIsOpen, supportButtonRef, handleOpenDrawer } = useSupportDrawer();
  const { toast } = useToast();
  
  // Add additional effect to ensure drawer is visible
  useEffect(() => {
    // Ensure the support drawer button exists and is visible
    const ensureSupportButtonVisibility = () => {
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
      
      // Also ensure bottom nav is visible
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav instanceof HTMLElement) {
        bottomNav.style.display = 'block';
        bottomNav.style.visibility = 'visible';
        bottomNav.style.opacity = '1';
      }
    };
    
    // Run multiple times to catch any timing issues
    ensureSupportButtonVisibility();
    const timers = [
      setTimeout(ensureSupportButtonVisibility, 200),
      setTimeout(ensureSupportButtonVisibility, 500),
      setTimeout(ensureSupportButtonVisibility, 1000),
      setTimeout(ensureSupportButtonVisibility, 2000),
    ];
    
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);
  
  // Handle drawer open state changes
  useEffect(() => {
    if (isOpen) {
      console.log("Support drawer opened");
      
      // Show toast to confirm drawer is open
      toast({
        title: "Support Options",
        description: "Choose how you'd like to connect with our team.",
        duration: 2000,
      });
    }
  }, [isOpen, toast]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <SupportTriggerButton 
          onClick={handleOpenDrawer} 
          buttonRef={supportButtonRef} 
        />
      </DrawerTrigger>
      <DrawerContent className="bg-white z-50">
        <DrawerHeader>
          <DrawerTitle>Need Help?</DrawerTitle>
          <DrawerDescription>
            Our support team is here to assist you. Choose how you'd like to get in touch.
          </DrawerDescription>
        </DrawerHeader>
        <SupportActions onActionComplete={() => setIsOpen(false)} />
        <DrawerFooter>
          {/* Footer is empty but kept for layout consistency */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
