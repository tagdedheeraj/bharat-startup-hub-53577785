
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthButtons from '../AuthButtons';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SupportActions from '../mobile-nav/SupportActions';

interface MobileNavProps {
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

const MobileNav = ({ toggleMobileMenu, mobileMenuOpen }: MobileNavProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden flex items-center gap-2">
      <Button variant="ghost" size="icon" className="text-foreground/70">
        <Search size={20} />
      </Button>
      <AuthButtons />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <div className="flex flex-col h-full overflow-auto py-6">
            <SupportActions onActionComplete={() => setIsOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
