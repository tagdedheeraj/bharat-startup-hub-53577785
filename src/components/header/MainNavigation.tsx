
import { useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavItem from './NavItem';
import { navigationData } from './navigationData';

export const MainNavigation = () => {
  const location = useLocation();

  return (
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
  );
};
