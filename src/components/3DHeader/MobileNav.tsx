
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

interface MobileNavProps {
  navItems: NavItem[];
}

const MobileNav = ({ navItems }: MobileNavProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-black hover:text-india-saffron"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </Button>
      
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
          mobileMenuOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col space-y-1 px-4">
          {navItems.map((item) => (
            item.children ? (
              <div key={item.name} className="py-1.5">
                <div className="font-medium text-india-saffron px-4 py-2 flex items-center bg-gradient-to-r from-white/10 to-transparent rounded-lg mb-1">
                  <span className="mr-2">{item.name}</span>
                  <div className="h-px flex-grow bg-gradient-to-r from-transparent via-india-white/30 to-transparent"></div>
                </div>
                <div className="ml-4 space-y-1 pl-2 border-l border-india-white/30 bg-gradient-to-b from-white/5 to-transparent rounded-r-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      className={cn(
                        "block px-4 py-2.5 rounded-lg text-black/80 hover:text-black transition-all duration-200 flex items-center",
                        isActive(child.href) 
                          ? "bg-gradient-to-r from-india-saffron/20 to-transparent text-black border-l-2 border-india-saffron shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]" 
                          : "hover:bg-white/5 hover:border-l-2 hover:border-india-white/40"
                      )}
                      onClick={toggleMobileMenu}
                    >
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full mr-2",
                        isActive(child.href) ? "bg-india-saffron animate-pulse" : "bg-india-white/40"
                      )}></div>
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-4 py-2.5 rounded-lg transition-all duration-200",
                  isActive(item.href) 
                    ? "bg-gradient-to-r from-india-saffron/20 to-transparent text-india-saffron border-l-2 border-india-saffron shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]" 
                    : "text-black hover:text-india-saffron hover:bg-white/5 hover:border-l-2 hover:border-india-white/40"
                )}
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            )
          ))}
          <Button 
            className="mt-4 bg-gradient-to-r from-india-saffron to-india-green text-black hover:from-india-saffron/90 hover:to-india-green/90 backdrop-blur-sm 
              border border-india-white/30 transition-all"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
