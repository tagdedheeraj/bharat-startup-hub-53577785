
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  Shield, 
  ShieldCheck, 
  IndianRupee, 
  FileText, 
  Receipt, 
  FileSpreadsheet 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Scene from './Scene';
import Logo from './components/Logo';
import MobileNavContent from './components/MobileNavContent';
import DesktopNav from './components/DesktopNav';
import AuthButtons from '../AuthButtons';
import { NavItem } from './types';

const OvalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
        { name: 'Certifications', href: '/ca-services/certifications', icon: Shield },
        { name: 'Trademark', href: '/ca-services/trademark', icon: ShieldCheck },
        { name: 'Income Tax', href: '/ca-services/income-tax', icon: IndianRupee },
        { name: 'Accounting', href: '/ca-services/accounting', icon: FileText },
        { name: 'GST', href: '/ca-services/gst', icon: Receipt },
        { name: 'Payroll', href: '/ca-services/payroll', icon: FileSpreadsheet },
        { name: 'Compliance', href: '/ca-services/compliance', icon: Shield }
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
          
          <DesktopNav 
            navItems={navItems}
            currentPath={currentPath}
            isActive={isActive}
            handleNavigation={handleNavigation}
          />
          
          <div className="lg:hidden flex items-center">
            <AuthButtons />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-black hover:text-india-saffron"
                >
                  <Menu size={22} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[80%]">
                <MobileNavContent
                  navItems={navItems}
                  currentPath={currentPath}
                  close={() => {
                    const closeButton = document.querySelector('[data-radix-collection-item]');
                    if (closeButton instanceof HTMLElement) {
                      closeButton.click();
                    }
                  }}
                  handleNavigation={handleNavigation}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OvalHeader;
