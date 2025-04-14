
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';
import NavItem from './NavItem';

interface DesktopNavProps {
  navigationItems: {
    label: string;
    to: string;
    children?: {
      label: string;
      to: string;
      description?: string;
      icon?: React.ComponentType<any>;
    }[];
  }[];
  currentPath: string;
}

const DesktopNav = ({ navigationItems, currentPath }: DesktopNavProps) => {
  return (
    <div className="hidden lg:flex justify-between items-center w-full">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-1">
          {navigationItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              active={currentPath === item.to || (item.children && item.children.some(child => currentPath === child.to))}
              children={item.children}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-brand-600 relative group transition-all duration-300">
          <Search size={20} className="transition-all group-hover:scale-110" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
        </Button>
        <Button asChild className="relative group overflow-hidden">
          <Link to="/contact" className="relative z-10 bg-brand-600 text-black px-6 py-2 rounded-md transition-all duration-300 hover:bg-brand-700">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DesktopNav;
