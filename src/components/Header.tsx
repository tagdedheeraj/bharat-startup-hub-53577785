import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone, Mail, ChevronDown, ArrowRight, Globe, BellRing, LifeBuoy, Award, Shield, Briefcase, FileText, Receipt } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const Logo = () => (
  <Link to="/" className="relative group">
    <div className="overflow-hidden relative z-10">
      <img 
        src="/lovable-uploads/5aa945b6-f31a-46aa-a7dd-0b27f6c14482.png" 
        alt="Bharat Startup Solution" 
        className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
    <div className="absolute -inset-1 bg-gradient-to-r from-brand-200/20 to-brand-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
  </Link>
);

interface NavItemProps {
  to: string;
  label: string;
  active: boolean;
  children?: {
    to: string;
    label: string;
    description?: string;
    icon?: React.ComponentType<any>;
  }[];
  toggleMobileMenu?: () => void;
}

const NavItem = ({ to, label, active, children, toggleMobileMenu }: NavItemProps) => {
  if (children) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger 
          className={`${active ? 'text-brand-600 font-medium' : 'text-foreground/80'} hover:text-brand-600 transition-all duration-300`}
        >
          {label}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
            {children.map((item) => (
              <li key={item.to} className="group">
                <NavigationMenuLink asChild>
                  <Link
                    to={item.to}
                    className="block p-4 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-all duration-200 relative overflow-hidden group-hover:shadow-md border border-transparent group-hover:border-brand-100/50"
                    onClick={toggleMobileMenu}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && <item.icon className="h-5 w-5 text-brand-500" />}
                      <div>
                        <div className="font-medium leading-none mb-1">{item.label}</div>
                        {item.description && (
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-500" />
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <Link
        to={to}
        className={cn(
          "group flex items-center relative px-4 py-2 text-sm font-medium transition-colors outline-none",
          active ? "text-brand-600" : "text-foreground/80 hover:text-brand-600"
        )}
        onClick={toggleMobileMenu}
      >
        <span className="relative z-10">{label}</span>
        {active && (
          <span className="absolute inset-0 bg-brand-50 rounded-md -z-0"></span>
        )}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
      </Link>
    </NavigationMenuItem>
  );
};

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

  const navigationItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    {
      label: 'Services',
      to: '/services',
      children: [
        { 
          label: 'Funding Consultation', 
          to: '/services/funding-consultation',
          description: 'Get expert advice on securing funding up to ₹5 CR for your startup or MSME',
          icon: LifeBuoy
        },
        { 
          label: 'Certificate Marketing', 
          to: '/services/certificate-marketing',
          description: 'Enhance your market presence with professional certification services',
          icon: Award
        },
        { 
          label: 'Legal Consultation', 
          to: '/services/legal-consultation',
          description: 'Expert legal advice tailored for startups and MSMEs',
          icon: Shield
        },
        { 
          label: 'CA Services', 
          to: '/services/ca-services',
          description: 'Comprehensive accounting and taxation services for businesses',
          icon: Receipt
        },
      ],
    },
    { label: 'Success Stories', to: '/success-stories' },
    { label: 'Contact Us', to: '/contact' },
    {
      label: 'More',
      to: '/more',
      children: [
        { label: 'Experts', to: '/more/experts', description: 'Meet our team of industry experts', icon: Briefcase },
        { label: 'MSME Events', to: '/more/msme-events', description: 'Upcoming events and workshops for MSMEs', icon: BellRing },
        { label: 'Reviews', to: '/more/reviews', description: 'See what our clients say about our services', icon: FileText },
        { label: 'Blogs', to: '/more/blogs', description: 'Insights and advice for startups and MSMEs', icon: FileText },
        { label: 'Compliance', to: '/more/compliance', description: 'Stay compliant with regulatory requirements', icon: Shield },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-white'
      }`}
    >
      <div className="hidden sm:block relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 animate-gradient-x"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center py-2 text-black">
            <div className="flex items-center space-x-6 text-sm">
              <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-black/80 transition-colors group">
                <div className="relative">
                  <Phone size={14} className="group-hover:animate-ping absolute opacity-0 group-hover:opacity-75" />
                  <Phone size={14} className="relative" />
                </div>
                <span>+91 1234567890</span>
              </a>
              <a href="mailto:info@bharatstartup.com" className="flex items-center gap-1.5 hover:text-black/80 transition-colors group">
                <div className="relative">
                  <Mail size={14} className="group-hover:animate-ping absolute opacity-0 group-hover:opacity-75" />
                  <Mail size={14} className="relative" />
                </div>
                <span>info@bharatstartup.com</span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="relative px-4 py-1 text-xs font-medium rounded-full text-black border border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                <span className="relative z-10">Join our network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <nav className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                {navigationItems.map((item) => (
                  <NavItem
                    key={item.to}
                    to={item.to}
                    label={item.label}
                    active={currentPath === item.to || (item.children && item.children.some(child => currentPath === child.to))}
                    children={item.children}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-brand-600 relative group transition-all duration-300">
              <Search size={20} className="transition-all group-hover:scale-110" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
            </Button>
            <Button asChild className="relative group overflow-hidden">
              <Link to="/contact" className="relative z-10 bg-brand-600 text-black px-6 py-2 rounded-md transition-all duration-300 hover:bg-brand-700">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </Button>
          </div>
          
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
      
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-5 space-y-3 bg-white border-t border-gray-100 shadow-lg">
          {navigationItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.to} className="py-2">
                  <div className="font-medium text-brand-700 mb-1">{item.label}</div>
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="flex items-center gap-2 py-1.5 text-sm text-gray-600 hover:text-brand-600 transition-colors"
                        onClick={toggleMobileMenu}
                      >
                        {child.icon && <child.icon size={16} className="text-brand-500" />}
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`block py-2 ${
                  currentPath === item.to 
                    ? 'text-brand-600 font-medium' 
                    : 'text-gray-600'
                } hover:text-brand-700 transition-colors`}
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4">
            <Button asChild className="w-full relative group overflow-hidden">
              <Link to="/contact" onClick={toggleMobileMenu} className="relative z-10 bg-brand-600 hover:bg-brand-700 text-black">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
