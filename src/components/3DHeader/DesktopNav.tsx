
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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
  const navigate = useNavigate();
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Handle cleanup of any portals when the component unmounts
  useEffect(() => {
    return () => {
      // Final cleanup on unmount
      const cleanupPortals = () => {
        try {
          document.querySelectorAll('[data-radix-portal]').forEach(portal => {
            if (document.body.contains(portal)) {
              try {
                document.body.removeChild(portal);
              } catch (e) {
                console.debug("Portal cleanup on nav unmount failed:", e);
              }
            }
          });
        } catch (e) {
          console.debug("Nav unmount cleanup failed:", e);
        }
      };
      
      cleanupPortals();
      // Do it again after a small delay
      setTimeout(cleanupPortals, 50);
      setTimeout(cleanupPortals, 150);
    };
  }, []);

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
