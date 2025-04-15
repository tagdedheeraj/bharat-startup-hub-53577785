
import { memo } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Home, Search, MessagesSquare, UserCircle, LayoutGrid } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth';
import MobileServicesDrawer from './MobileServicesDrawer';

const MobileBottomNav = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  if (!isMobile) return null;
  
  const handleAccountClick = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/account');
    }
  };

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: LayoutGrid, label: 'Services', component: MobileServicesDrawer },
    { icon: MessagesSquare, label: 'Support', path: '/contact' },
    { icon: UserCircle, label: 'Account', onClick: handleAccountClick },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-lg border-t border-white/20 shadow-lg z-50 md:hidden">
      <nav className="flex justify-around items-center h-16 px-2">
        {navItems.map(({ icon: Icon, label, path, component: Component, onClick }) => {
          if (Component) {
            return (
              <div key={label} className="flex flex-col items-center justify-center w-full h-full">
                <Component />
              </div>
            );
          }
          
          if (onClick) {
            return (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                onClick={onClick}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-full transition-all duration-300",
                  "hover:bg-purple-500/20 active:scale-95",
                  location.pathname === path ? "text-purple-500" : "text-gray-500"
                )}
              >
                <Icon size={20} />
                <span className="text-xs">{label}</span>
              </Button>
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
                  "flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-full transition-all duration-300",
                  "hover:bg-purple-500/20 active:scale-95",
                  location.pathname === path ? "text-purple-500" : "text-gray-500"
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
