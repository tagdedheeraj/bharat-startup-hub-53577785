
import { Search, ArrowRight, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import NavItem from './NavItem';
import AuthButtons from '../AuthButtons';
import { navigationData } from './navigationData';

const DesktopNav = () => {
  const location = useLocation();
  
  const handleSearchClick = () => {
    toast.info("Search feature coming soon!", {
      description: "Our search functionality will be available in the next update."
    });
  };
  
  const handleNotificationClick = () => {
    toast.info("Notifications feature coming soon!", {
      description: "Our notification system will be available in the next update."
    });
  };

  return (
    <div className="hidden lg:flex justify-between items-center w-full">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-1">
          {navigationData.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              active={location.pathname === item.to || (item.children && item.children.some(child => location.pathname === child.to))}
              children={item.children}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-foreground/70 hover:text-brand-600 relative group transition-all duration-300"
          onClick={handleSearchClick}
        >
          <Search size={20} className="transition-all group-hover:scale-110" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-foreground/70 hover:text-brand-600 relative group transition-all duration-300"
          onClick={handleNotificationClick}
        >
          <Bell size={20} className="transition-all group-hover:scale-110" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
        </Button>
        
        <AuthButtons />
        <Button asChild className="relative group overflow-hidden">
          <Link 
            to="/contact" 
            className="relative z-10 bg-brand-600 text-black px-6 py-2 rounded-md transition-all duration-300 hover:bg-brand-700"
          >
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
