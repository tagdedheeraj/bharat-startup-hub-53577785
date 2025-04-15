
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, BellRing, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene from './Scene';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import AuthButtons from '../AuthButtons';
import DesktopNavItem from './DesktopNavItem';
import { NavItem } from './types';

const navItems: NavItem[] = [
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
    name: 'CA Services', 
    href: '/ca-services',
    children: [
      { name: 'Certifications', href: '/ca-services/certifications' },
      { name: 'Trademark', href: '/ca-services/trademark' },
      { name: 'Income Tax', href: '/ca-services/income-tax' },
      { name: 'Accounting', href: '/ca-services/accounting' },
      { name: 'GST', href: '/ca-services/gst' },
      { name: 'Payroll', href: '/ca-services/payroll' },
      { name: 'Compliance', href: '/ca-services/compliance' }
    ]
  },
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
  }
];

const OvalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

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

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  const handleNavigation = (href: string) => {
    navigate(href);
    window.scrollTo(0, 0);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      isScrolled ? "py-2" : "py-3"
    )}>
      <Scene />
      
      <div className={cn(
        "container mx-auto transition-all duration-300",
        "relative z-10 rounded-full backdrop-blur-xl",
        isScrolled 
          ? "bg-white/10 shadow-lg border border-white/20" 
          : "bg-transparent"
      )}>
        <div className="flex items-center justify-between py-2 px-4 md:px-6 lg:px-8">
          <Logo />
          
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <DesktopNavItem 
                key={item.name}
                item={item}
                isActive={isActive}
                onNavigate={handleNavigation}
              />
            ))}
          </nav>
          
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
            <AuthButtons />
            <Button 
              className="bg-gradient-to-r from-india-saffron to-india-green text-black hover:from-india-saffron/90 hover:to-india-green/90 backdrop-blur-sm 
                shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-india-white/30 text-sm
                hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
              size="sm"
              onClick={() => handleNavigation('/contact')}
            >
              Get Started
            </Button>
          </div>
          
          <div className="lg:hidden flex items-center">
            <AuthButtons />
            <Button
              variant="ghost"
              size="icon"
              className="text-black hover:text-india-saffron"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OvalHeader;
