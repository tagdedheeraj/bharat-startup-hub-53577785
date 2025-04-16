
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, MessagesSquare, UserCircle, LayoutGrid } from 'lucide-react';
import Logo from './Logo';
import TopBar from './TopBar';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MobileMenu from './MobileMenu';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { cn } from '@/lib/utils';
import MobileServicesDrawer from '../mobile-nav/MobileServicesDrawer';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { icon: MessagesSquare, label: 'Support', path: '/contact' },
    { icon: UserCircle, label: 'Account', onClick: handleAccountClick },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-white'
      )}
    >
      <TopBar />
      
      <nav className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          <Logo />
          
          <DesktopNav />
          
          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-2">
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
                    size="icon"
                    onClick={onClick}
                    className={cn(
                      "flex flex-col items-center justify-center gap-1",
                      "hover:bg-purple-500/20 active:scale-95",
                      location.pathname === path ? "text-purple-500" : "text-gray-500"
                    )}
                  >
                    <Icon size={20} />
                  </Button>
                );
              }
              
              return (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate(path)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1",
                    "hover:bg-purple-500/20 active:scale-95",
                    location.pathname === path ? "text-purple-500" : "text-gray-500"
                  )}
                >
                  <Icon size={20} />
                </Button>
              );
            })}
          </div>
        </div>
      </nav>
      
      <MobileMenu 
        isOpen={mobileMenuOpen}
        currentPath={location.pathname}
        toggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        handleMobileItemClick={(path: string, e: React.MouseEvent) => {
          e.preventDefault();
          setMobileMenuOpen(false);
          setTimeout(() => {
            navigate(path);
            window.scrollTo(0, 0);
          }, 10);
        }}
      />
    </header>
  );
}
