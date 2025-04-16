
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, MessagesSquare, UserCircle, LayoutGrid } from 'lucide-react';
import Logo from './Logo';
import TopBar from './TopBar';
import DesktopNav from './DesktopNav';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { cn } from '@/lib/utils';
import MobileServicesDrawer from '../mobile-nav/MobileServicesDrawer';
import SupportDrawer from '../mobile-nav/SupportDrawer';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  
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
    { icon: MessagesSquare, label: 'Support', component: SupportDrawer },
    { icon: UserCircle, label: 'Account', onClick: handleAccountClick },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? 'bg-[#04203E]/90 backdrop-blur-lg shadow-lg'
          : 'bg-[#04203E]'
      )}
    >
      <TopBar />
      
      <nav className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <DesktopNav />
          </div>
          
          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-4">
            {navItems.map(({ icon: Icon, label, path, component: Component, onClick }) => {
              if (Component) {
                return (
                  <div key={label} className="flex items-center">
                    <Component />
                  </div>
                );
              }
              
              if (onClick) {
                return (
                  <Button
                    key={label}
                    variant="ghost"
                    size="sm"
                    onClick={onClick}
                    className={cn(
                      "flex flex-col items-center justify-center gap-1 text-white",
                      "hover:bg-white/10",
                      location.pathname === path ? "text-white" : "text-white/70"
                    )}
                  >
                    <Icon size={20} />
                    <span className="text-xs font-medium">{label}</span>
                  </Button>
                );
              }
              
              return (
                <Button
                  key={label}
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(path)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 text-white",
                    "hover:bg-white/10",
                    location.pathname === path ? "text-white" : "text-white/70"
                  )}
                >
                  <Icon size={20} />
                  <span className="text-xs font-medium">{label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
