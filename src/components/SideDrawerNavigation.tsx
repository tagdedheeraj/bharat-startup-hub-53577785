
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from './ui/button';
import {
  HeaderSection,
  MainNavSection,
  SecondaryNavSection,
  CAServicesSection,
  MoreNavSection,
  SupportSection
} from './side-drawer';

export default function SideDrawerNavigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer when route changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleClose = () => setOpen(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 md:hidden">
      {/* Floating Action Button for Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-india-saffron to-india-green text-white border-4 border-white">
            <Menu size={24} className="text-black" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <div className="flex flex-col h-full overflow-auto py-6">
            <HeaderSection onClose={handleClose} />
            <MainNavSection />
            <SecondaryNavSection />
            <CAServicesSection />
            <MoreNavSection />
            <SupportSection />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
