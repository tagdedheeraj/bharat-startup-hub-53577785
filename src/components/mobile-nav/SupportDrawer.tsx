
import { useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";
import SupportTriggerButton from "./SupportTriggerButton";
import SupportActions from "./SupportActions";
import { useSupportDrawer } from '@/hooks/use-support-drawer';

export default function SupportDrawer() {
  const { supportButtonRef, handleOpenDrawer } = useSupportDrawer();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <SupportTriggerButton 
          onClick={handleOpenDrawer}
          buttonRef={supportButtonRef}
        />
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0">
        <div className="flex flex-col h-full overflow-auto py-6">
          <SupportActions onActionComplete={() => {}} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
