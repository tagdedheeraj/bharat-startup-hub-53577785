
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthButtons from '../AuthButtons';

interface MobileNavProps {
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

const MobileNav = ({ toggleMobileMenu, mobileMenuOpen }: MobileNavProps) => {
  const navigate = useNavigate();

  return (
    <div className="lg:hidden flex items-center gap-2">
      <Button variant="ghost" size="icon" className="text-foreground/70">
        <Search size={20} />
      </Button>
      <AuthButtons />
      <button
        type="button"
        className="p-2 rounded-md text-gray-600 hover:text-gray-900 transition-colors"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default MobileNav;
