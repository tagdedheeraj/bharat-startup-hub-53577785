
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Scene from './Scene';
import { cn } from '@/lib/utils';
import { Search, BellRing, User, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const Logo = () => (
  <Link to="/" className="relative group z-10">
    <div className="overflow-hidden relative">
      <span className="font-display text-3xl md:text-4xl font-bold 
        bg-gradient-to-r from-white via-brand-200 to-brand-100 
        bg-clip-text text-transparent transition-all duration-300 
        group-hover:scale-105 inline-block drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
        Bharat Startup Solution
      </span>
      <div className="absolute bottom-0 left-0 w-full h-0.5 
        bg-gradient-to-r from-brand-100 via-white to-brand-100 
        transform scale-x-0 group-hover:scale-x-100 
        transition-transform duration-300 origin-left"></div>
    </div>
  </Link>
);

const OvalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'Services', href: '/services' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Contact', href: '/contact' },
  ];

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
              <Link
                key={item.name}
                to={item.href}
                className="group relative px-4 py-2 text-white hover:text-brand-100 transition-colors"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-200"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                  bg-brand-100 group-hover:w-1/2 transition-all duration-300"></span>
              </Link>
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
              className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm 
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
          <nav className="flex flex-col space-y-3 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white py-2 px-4 rounded-full hover:bg-white/10 transition-all"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="mt-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm 
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
