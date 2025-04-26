
import { useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavItem from './NavItem';
import { navigationData } from './navigationData';
import { useEffect } from 'react';

export const MainNavigation = () => {
  const location = useLocation();

  // Close all menus when route changes
  useEffect(() => {
    const closeAllMenus = () => {
      const openTriggers = document.querySelectorAll('[data-state="open"]');
      openTriggers.forEach((trigger) => {
        if (trigger instanceof HTMLElement) {
          trigger.click();
        }
      });
    };
    
    closeAllMenus();
  }, [location.pathname]);

  return (
    <NavigationMenu className="relative z-30">
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
  );
};
