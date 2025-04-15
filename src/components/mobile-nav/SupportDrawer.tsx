
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";
import SupportTriggerButton from "./SupportTriggerButton";
import SupportActions from "./SupportActions";

export default function SupportDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <SupportTriggerButton />
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0">
        <div className="flex flex-col h-full overflow-auto py-6">
          <SupportActions />
        </div>
      </SheetContent>
    </Sheet>
  );
}
