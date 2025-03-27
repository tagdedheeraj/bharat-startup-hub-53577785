
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import NavLink from './NavLink';
import NavDropdown from './NavDropdown';

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

interface DesktopNavProps {
  navItems: NavItem[];
}

const DesktopNav = ({ navItems }: DesktopNavProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {navItems.map((item) => (
        item.children ? (
          <NavDropdown
            key={item.name}
            name={item.name}
            href={item.href}
            children={item.children}
            isActive={isActive}
          />
        ) : (
          <NavLink
            key={item.name}
            to={item.href}
            label={item.name}
            isActive={isActive(item.href)}
          />
        )
      ))}
    </nav>
  );
};

export default DesktopNav;
