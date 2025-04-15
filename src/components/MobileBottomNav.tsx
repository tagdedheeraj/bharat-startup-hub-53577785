
import { memo } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Home, Search, MessagesSquare, UserCircle, Wrench } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import SupportDrawer from './mobile-nav/SupportDrawer';

const MobileBottomNav = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  if (!isMobile) return null;
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: MessagesSquare, label: 'Support', component: SupportDrawer },
    { icon: UserCircle, label: 'Account', path: '/account' },
    { icon: Wrench, label: 'Services', path: '/services' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
      <nav className="flex justify-around items-center h-16 px-2">
        {navItems.map(({ icon: Icon, label, path, component: Component }) => {
          if (Component) {
            return (
              <div key={label} className="flex flex-col items-center justify-center w-full h-full">
                <Component />
              </div>
            );
          }
          
          return (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-full transition-colors",
                  location.pathname === path 
                    ? "text-india-saffron hover:text-india-saffron/90" 
                    : "text-gray-500 hover:text-india-saffron"
                )}
              >
                <Icon size={20} />
                <span className="text-xs">{label}</span>
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default memo(MobileBottomNav);
