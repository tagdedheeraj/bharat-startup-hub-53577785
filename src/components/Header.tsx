
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from './ui/button';
import Logo from './header/Logo';
import TopBar from './header/TopBar';
import MobileMenu from './header/MobileMenu';
import DesktopNav from './header/DesktopNav';
import { navigationItems } from './header/NavigationConfig';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <TooltipProvider>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-lg'
            : 'bg-white'
        }`}
      >
        <TopBar />
        
        {/* Main Navigation with glass effect when scrolled */}
        <nav className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
          <div className="flex justify-between items-center">
            <Logo />
            
            {/* Desktop Menu */}
            <DesktopNav navigationItems={navigationItems} currentPath={currentPath} />
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-foreground/70">
                <Search size={20} />
              </Button>
              <button
                type="button"
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 transition-colors"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
        
        {/* Mobile Menu with smooth animation */}
        <MobileMenu 
          isOpen={mobileMenuOpen}
          toggleMenu={toggleMobileMenu}
          navigationItems={navigationItems}
          currentPath={currentPath}
        />
      </header>
    </TooltipProvider>
  );
}
