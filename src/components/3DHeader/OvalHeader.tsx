
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Scene from './Scene';
import { cn } from '@/lib/utils';
import { Search, BellRing, User, Menu, X, ChevronDown, ChevronRight, Server } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Logo = () => (
  <Link to="/" className="relative group z-10">
    <div className="overflow-hidden relative">
      <img 
        src="/lovable-uploads/5aa945b6-f31a-46aa-a7dd-0b27f6c14482.png" 
        alt="Bharat Startup Solution" 
        className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-india-saffron via-india-white to-india-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  </Link>
);

const OvalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'Funding Consultation', href: '/services/funding-consultation' },
        { name: 'Certificate Marketing', href: '/services/certificate-marketing' },
        { name: 'Legal Consultation', href: '/services/legal-consultation' }
      ]
    },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Success Stories', href: '/success-stories' },
    { 
      name: 'More', 
      href: '#',
      children: [
        { name: 'Experts', href: '/more/experts' },
        { name: 'MSME Events', href: '/more/msme-events' },
        { name: 'Reviews', href: '/more/reviews' },
        { name: 'Blogs', href: '/more/blogs' },
        { name: 'Compliance', href: '/more/compliance' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      isScrolled ? "py-2" : "py-3"
    )}>
      {/* 3D Background */}
      <Scene />
      
      {/* Glass Effect Container */}
      <div className={cn(
        "container mx-auto transition-all duration-300",
        "relative z-10 rounded-full backdrop-blur-xl",
        isScrolled 
          ? "bg-white/10 shadow-lg border border-white/20" 
          : "bg-transparent"
      )}>
        <div className="flex items-center justify-between py-2 px-4 md:px-6 lg:px-8">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "group relative px-3 py-2 font-medium transition-colors",
                        isActive(item.href) 
                          ? "text-india-saffron" 
                          : "text-black hover:text-india-saffron"
                      )}
                    >
                      <span className="relative z-10 flex items-center">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </span>
                      <span className={cn(
                        "absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                        isActive(item.href) && "opacity-100"
                      )}></span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="bg-gradient-to-br from-india-saffron/80 to-india-green/80 backdrop-blur-xl 
                      border border-india-white/40 text-black rounded-xl w-60 p-2
                      shadow-[0_10px_25px_rgba(0,0,0,0.2)] animate-in zoom-in-95 duration-100"
                  >
                    <div className="px-1 py-1 space-y-1">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link
                            to={child.href}
                            className={cn(
                              "flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 group hover:bg-gradient-to-r hover:from-india-white/20 hover:to-india-white/5",
                              isActive(child.href) 
                                ? "bg-gradient-to-r from-india-white/30 to-transparent text-black shadow-inner border-l-2 border-india-white" 
                                : "text-black/90 hover:text-black"
                            )}
                          >
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <div className={cn(
                                  "w-1.5 h-1.5 rounded-full",
                                  isActive(child.href) ? "bg-india-saffron animate-pulse" : "bg-india-white/40 group-hover:bg-india-saffron"
                                )}></div>
                                <span className="font-medium">{child.name}</span>
                              </div>
                              <div className="mt-0.5 h-px w-0 bg-gradient-to-r from-india-saffron to-transparent 
                                group-hover:w-full transition-all duration-300"></div>
                            </div>
                            <ChevronRight className={cn(
                              "h-4 w-4 opacity-0 -translate-x-2 transition-all duration-200",
                              "group-hover:opacity-100 group-hover:translate-x-0"
                            )} />
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group relative px-3 py-2 font-medium transition-colors",
                    isActive(item.href) 
                      ? "text-india-saffron" 
                      : "text-black hover:text-india-saffron"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className={cn(
                    "absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                    isActive(item.href) && "opacity-100"
                  )}></span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                    bg-india-saffron group-hover:w-1/2 transition-all duration-300"></span>
                </Link>
              )
            ))}
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-black hover:text-india-saffron 
              hover:bg-white/10 transition-all duration-300">
              <Search size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:text-india-saffron 
              hover:bg-white/10 transition-all duration-300 relative">
              <BellRing size={18} />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-india-saffron 
                animate-pulse"></span>
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:text-india-saffron 
              hover:bg-white/10 transition-all duration-300">
              <User size={18} />
            </Button>
            <Button 
              className="bg-gradient-to-r from-india-saffron to-india-green text-black hover:from-india-saffron/90 hover:to-india-green/90 backdrop-blur-sm 
                shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-india-white/30 text-sm
                hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
              size="sm"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-black hover:text-india-saffron"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
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
    </header>
  );
};

export default OvalHeader;
