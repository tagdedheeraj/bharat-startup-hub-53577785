
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

export default function SupportDrawer() {
  const { isOpen, setIsOpen, supportButtonRef, handleOpenDrawer } = useSupportDrawer();

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
