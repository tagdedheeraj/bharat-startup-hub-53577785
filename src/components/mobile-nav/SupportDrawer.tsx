
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
