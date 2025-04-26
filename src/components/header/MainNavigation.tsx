
import { useLocation, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavItem from './NavItem';
import { navigationData } from './navigationData';
import { useEffect, useState, useRef } from 'react';

export const MainNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const navigationRef = useRef<HTMLDivElement>(null);

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

  // Handle direct navigation
  const handleDirectNavigation = (path: string) => {
    handleCloseAllMenus();
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Effect to handle clicking outside the navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target as Node)) {
        handleCloseAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <NavigationMenu className="relative z-50" ref={navigationRef}>
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
            onDirectNavigation={handleDirectNavigation}
            closeAllMenus={handleCloseAllMenus}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
