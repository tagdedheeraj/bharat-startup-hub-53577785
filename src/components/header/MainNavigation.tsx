
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import NavItem from './NavItem';
import { navigationData } from './navigationData';

export const MainNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const navigationRef = useRef<HTMLDivElement>(null);

  // Close all menus when route changes
  useEffect(() => {
    setActiveItemIndex(null);
  }, [location.pathname]);

  // Handle clicking outside the navigation to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target as Node)) {
        setActiveItemIndex(null);
      }
    };

    if (activeItemIndex !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeItemIndex]);

  // Function to handle menu item click
  const handleMenuItemClick = (index: number, hasChildren: boolean, path: string) => {
    if (hasChildren) {
      setActiveItemIndex(prevIndex => prevIndex === index ? null : index);
    } else {
      handleDirectNavigation(path);
    }
  };

  // Handle direct navigation
  const handleDirectNavigation = (path: string) => {
    setActiveItemIndex(null);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div ref={navigationRef} className="flex relative z-30">
      <div className="flex space-x-1">
        {navigationData.map((item, index) => (
          <NavItem
            key={item.to}
            to={item.to}
            label={item.label}
            active={location.pathname === item.to || (item.children && item.children.some(child => location.pathname === child.to))}
            children={item.children}
            isOpen={activeItemIndex === index}
            onItemClick={() => handleMenuItemClick(index, !!item.children, item.to)}
            onChildClick={handleDirectNavigation}
          />
        ))}
      </div>
    </div>
  );
};
