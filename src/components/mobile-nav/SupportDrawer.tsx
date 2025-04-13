
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
  
  // Handle drawer open state changes
  useEffect(() => {
    if (isOpen) {
      console.log("Support drawer opened");
      
      toast({
        title: "Support Options",
        description: "Choose how you'd like to connect with our team.",
        duration: 2000,
      });
      
      // Force visibility of mobile nav and support button
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav instanceof HTMLElement) {
        bottomNav.style.display = 'block';
        bottomNav.style.visibility = 'visible';
        bottomNav.style.opacity = '1';
        bottomNav.classList.remove('hidden');
      }
      
      const supportButtons = document.querySelectorAll('.support-button');
      supportButtons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.style.display = 'flex';
          button.style.visibility = 'visible';
          button.style.opacity = '1';
        }
      });
    }
  }, [isOpen, toast]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <div className="flex items-center justify-center w-full h-full" style={{ zIndex: 30 }}>
          <SupportTriggerButton 
            onClick={handleOpenDrawer} 
            buttonRef={supportButtonRef} 
          />
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-white" style={{ zIndex: 100 }}>
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
