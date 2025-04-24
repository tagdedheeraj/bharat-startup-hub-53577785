
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import AuthButtons from '../AuthButtons';
import NavigationDrawer from './NavigationDrawer';

interface MobileNavProps {
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

const MobileNav = ({ toggleMobileMenu, mobileMenuOpen }: MobileNavProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const handleSearchClick = () => {
    toast.info("Search feature coming soon!", {
      description: "Our search functionality will be available in the next update."
    });
  };
  
  return (
    <div className="lg:hidden flex items-center gap-2">
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-foreground/70 hover:bg-gray-100/50 hover:text-foreground/90"
        onClick={handleSearchClick}
      >
        <Search size={20} />
      </Button>
      <AuthButtons />
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-600 hover:text-gray-900 transition-colors hover:bg-gray-100/50"
        onClick={() => setIsDrawerOpen(true)}
      >
        {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      <NavigationDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default MobileNav;
