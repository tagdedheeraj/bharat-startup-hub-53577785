
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Scene from './Scene';
import HeaderLogo from './HeaderLogo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ActionButtons from './ActionButtons';
import { navItems } from './NavConfig';

const OvalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <HeaderLogo />
          
          {/* Desktop Navigation */}
          <DesktopNav navItems={navItems} />
          
          {/* Action Buttons */}
          <ActionButtons />
          
          {/* Mobile Menu Button and Navigation */}
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
};

export default OvalHeader;
