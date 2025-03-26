
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Scene from './Scene';
import { cn } from '@/lib/utils';
import { Search, BellRing, User, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
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
      <span className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-brand-200 to-brand-100 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 inline-block drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
        Bharat Startup Solution
      </span>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-100 via-white to-brand-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
    { name: 'About Us', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'Funding Consultation', href: '/services/funding-consultation' },
        { name: 'Certificate Marketing', href: '/services/certificate-marketing' },
        { name: 'Legal Consultation', href: '/services/legal-consultation' }
      ]
    },
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
      isScrolled ? "py-2" : "py-4"
    )}>
      {/* 3D Background */}
      <Scene />
      
      {/* Glass Effect Container */}
      <div className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300",
        "relative z-10 rounded-full backdrop-blur-xl",
        isScrolled 
          ? "bg-white/10 shadow-lg border border-white/20" 
          : "bg-transparent"
      )}>
        <div className="flex items-center justify-between py-4 px-6">
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
                        "group relative px-4 py-2 text-white hover:text-brand-100 transition-colors",
                        isActive(item.href) && "text-brand-100"
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
                    className="bg-gradient-to-br from-brand-500/30 to-brand-700/30 backdrop-blur-xl 
                      border border-white/40 text-white rounded-xl w-60 p-2
                      shadow-[0_10px_25px_rgba(0,0,0,0.2)] animate-in zoom-in-95 duration-100"
                  >
                    <div className="px-1 py-1 space-y-1">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link
                            to={child.href}
                            className={cn(
                              "flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 group hover:bg-gradient-to-r hover:from-white/20 hover:to-white/5",
                              isActive(child.href) 
                                ? "bg-gradient-to-r from-brand-400/30 to-brand-600/30 text-white shadow-inner border-l-2 border-brand-200" 
                                : "text-white/90 hover:text-white"
                            )}
                          >
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <div className={cn(
                                  "w-1.5 h-1.5 rounded-full",
                                  isActive(child.href) ? "bg-brand-300 animate-pulse" : "bg-white/40 group-hover:bg-brand-300"
                                )}></div>
                                <span className="font-medium">{child.name}</span>
                              </div>
                              <div className="mt-0.5 h-px w-0 bg-gradient-to-r from-brand-100 to-transparent 
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
                    "group relative px-4 py-2 text-white hover:text-brand-100 transition-colors",
                    isActive(item.href) && "text-brand-100"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className={cn(
                    "absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                    isActive(item.href) && "opacity-100"
                  )}></span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                    bg-brand-100 group-hover:w-1/2 transition-all duration-300"></span>
                </Link>
              )
            ))}
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white/90 hover:text-white 
              hover:bg-white/10 transition-all duration-300">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/90 hover:text-white 
              hover:bg-white/10 transition-all duration-300 relative">
              <BellRing size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-brand-500 
                animate-pulse"></span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white/90 hover:text-white 
              hover:bg-white/10 transition-all duration-300">
              <User size={20} />
            </Button>
            <Button 
              className="bg-gradient-to-r from-brand-500/50 to-brand-700/50 text-white hover:from-brand-500/60 hover:to-brand-700/60 backdrop-blur-sm 
                shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-white/30 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                  <div className="font-medium text-white px-4 py-2 flex items-center bg-gradient-to-r from-white/10 to-transparent rounded-lg mb-1">
                    <span className="mr-2">{item.name}</span>
                    <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  </div>
                  <div className="ml-4 space-y-1 pl-2 border-l border-white/30 bg-gradient-to-b from-white/5 to-transparent rounded-r-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={cn(
                          "block px-4 py-2.5 rounded-lg text-white/80 hover:text-white transition-all duration-200 flex items-center",
                          isActive(child.href) 
                            ? "bg-gradient-to-r from-brand-500/20 to-transparent text-white border-l-2 border-brand-300 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]" 
                            : "hover:bg-white/5 hover:border-l-2 hover:border-white/40"
                        )}
                        onClick={toggleMobileMenu}
                      >
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full mr-2",
                          isActive(child.href) ? "bg-brand-300 animate-pulse" : "bg-white/40"
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
                    "block px-4 py-2.5 rounded-lg text-white/80 hover:text-white transition-all duration-200",
                    isActive(item.href) 
                      ? "bg-gradient-to-r from-brand-500/20 to-transparent text-white border-l-2 border-brand-300 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]" 
                      : "hover:bg-white/5 hover:border-l-2 hover:border-white/40"
                  )}
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button 
              className="mt-4 bg-gradient-to-r from-brand-500/50 to-brand-700/50 text-white hover:from-brand-500/60 hover:to-brand-700/60 backdrop-blur-sm 
                border border-white/30 transition-all"
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
