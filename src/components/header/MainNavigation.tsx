
import { useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavItem from './NavItem';
import { navigationData } from './navigationData';
import { useEffect, useState } from 'react';

export const MainNavigation = () => {
  const location = useLocation();
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  // Close all menus when route changes
  useEffect(() => {
    setActiveItemIndex(null);
  }, [location.pathname]);

  // Function to close all menus
  const handleCloseAllMenus = () => {
    setActiveItemIndex(null);
  };

  // Function to handle menu item click
  const handleMenuItemClick = (index: number) => {
    setActiveItemIndex(prevIndex => prevIndex === index ? null : index);
  };

  // Effect to handle clicking outside the navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navigation = document.querySelector('.navigation-menu-root');
      if (navigation && !navigation.contains(event.target as Node)) {
        handleCloseAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <NavigationMenu className="relative z-30 navigation-menu-root">
      <NavigationMenuList className="flex space-x-1">
        {navigationData.map((item, index) => (
          <NavItem
            key={item.to}
            to={item.to}
            label={item.label}
            active={location.pathname === item.to || (item.children && item.children.some(child => location.pathname === child.to))}
            children={item.children}
            isOpen={activeItemIndex === index}
            onOpenChange={() => handleMenuItemClick(index)}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
