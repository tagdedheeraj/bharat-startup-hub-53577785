
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef, useCallback } from 'react';
import NavItem from './NavItem';
import { navigationData } from './navigationData';

export const MainNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  
  // Function to close all menus
  const closeAllMenus = useCallback(() => {
    setActiveItemIndex(null);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    closeAllMenus();
  }, [location.pathname, closeAllMenus]);

  // Handle clicking outside to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target as Node)) {
        closeAllMenus();
      }
    };

    const handleScroll = () => {
      closeAllMenus();
    };

    // Add document-wide click listener to ensure we catch all clicks
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    // Add a global click handler on body to ensure menus close
    document.body.addEventListener('click', (e) => {
      // Check if click is outside nav items
      const navItems = document.querySelectorAll('.nav-item-container');
      let insideNavItem = false;
      navItems.forEach(item => {
        if (item.contains(e.target as Node)) {
          insideNavItem = true;
        }
      });
      
      if (!insideNavItem && activeItemIndex !== null) {
        closeAllMenus();
      }
    });
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('click', () => {});
    };
  }, [closeAllMenus, activeItemIndex]);

  // Reset menu state on page load
  useEffect(() => {
    closeAllMenus();
    
    // Fix for any lingering menus - force close after a short delay
    const timer = setTimeout(() => {
      closeAllMenus();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [closeAllMenus]);

  const handleMenuItemClick = (index: number, hasChildren: boolean, path: string) => {
    if (hasChildren) {
      // Close menu if clicking the same menu item, otherwise open the clicked menu and close others
      setActiveItemIndex(prevIndex => prevIndex === index ? null : index);
    } else {
      handleDirectNavigation(path);
    }
  };

  const handleDirectNavigation = (path: string) => {
    closeAllMenus();
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div ref={navigationRef} className="flex relative z-30">
      <div className="flex space-x-1">
        {navigationData.map((item, index) => (
          <div key={item.to} className="nav-item-container">
            <NavItem
              to={item.to}
              label={item.label}
              active={location.pathname === item.to || (item.children && item.children.some(child => location.pathname === child.to))}
              children={item.children}
              isOpen={activeItemIndex === index}
              onItemClick={() => handleMenuItemClick(index, !!item.children, item.to)}
              onChildClick={handleDirectNavigation}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
