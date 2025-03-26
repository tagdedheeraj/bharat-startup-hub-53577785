
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Phone, Mail } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <div className="relative overflow-hidden">
      <span className="font-display text-2xl font-bold bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">Bharat Startup Solution</span>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 to-brand-400"></div>
    </div>
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
  }[];
  toggleMobileMenu?: () => void;
}

const NavItem = ({ to, label, active, children, toggleMobileMenu }: NavItemProps) => {
  if (children) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger className={`${active ? 'text-brand-600' : 'text-foreground/80'} hover:text-brand-600`}>
          {label}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
            {children.map((item) => (
              <li key={item.to}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.to}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-50 hover:text-brand-600 focus:bg-accent focus:text-accent-foreground"
                    onClick={toggleMobileMenu}
                  >
                    <div className="text-sm font-medium leading-none">{item.label}</div>
                    {item.description && (
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {item.description}
                      </p>
                    )}
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
          navigationMenuTriggerStyle(),
          `${active ? 'text-brand-600' : 'text-foreground/80'} hover:text-brand-600`
        )}
        onClick={toggleMobileMenu}
      >
        {label}
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
    { label: 'About Us', to: '/about' },
    {
      label: 'Services',
      to: '/services',
      children: [
        { 
          label: 'Funding Consultation', 
          to: '/services/funding-consultation',
          description: 'Get expert advice on securing funding up to ₹5 CR for your startup or MSME'
        },
        { 
          label: 'Certificate Marketing', 
          to: '/services/certificate-marketing',
          description: 'Enhance your market presence with professional certification services'
        },
        { 
          label: 'Legal Consultation', 
          to: '/services/legal-consultation',
          description: 'Expert legal advice tailored for startups and MSMEs'
        },
      ],
    },
    { label: 'Success Stories', to: '/success-stories' },
    { label: 'Contact Us', to: '/contact' },
    {
      label: 'More',
      to: '/more',
      children: [
        { label: 'Experts', to: '/more/experts', description: 'Meet our team of industry experts' },
        { label: 'MSME Events', to: '/more/msme-events', description: 'Upcoming events and workshops for MSMEs' },
        { label: 'Reviews', to: '/more/reviews', description: 'See what our clients say about our services' },
        { label: 'Blogs', to: '/more/blogs', description: 'Insights and advice for startups and MSMEs' },
        { label: 'Compliance', to: '/more/compliance', description: 'Stay compliant with regulatory requirements' },
      ],
    },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white'}`}>
      {/* Top Bar */}
      <div className="hidden sm:block bg-brand-700 text-white py-1.5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-brand-100 transition-colors">
              <Phone size={14} />
              <span>+91 1234567890</span>
            </a>
            <a href="mailto:info@bharatstartup.com" className="flex items-center gap-1.5 hover:text-brand-100 transition-colors">
              <Mail size={14} />
              <span>info@bharatstartup.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">FAQ</a>
            <span className="text-white/40">|</span>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Support</a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
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
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-brand-600">
              <Search size={20} />
            </Button>
            <Button asChild className="bg-brand-600 hover:bg-brand-700 text-white shadow-sm transition-all">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-foreground/70">
              <Search size={20} />
            </Button>
            <button
              type="button"
              className="p-2 rounded-md text-gray-600 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-5 space-y-3 bg-white border-t border-gray-200 shadow-lg">
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
                        className="block py-1.5 text-sm text-gray-600 hover:text-brand-600"
                        onClick={toggleMobileMenu}
                      >
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
                className={`block py-2 ${currentPath === item.to ? 'text-brand-600 font-medium' : 'text-gray-600'}`}
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4">
            <Button asChild className="w-full bg-brand-600 hover:bg-brand-700 text-white">
              <Link to="/contact" onClick={toggleMobileMenu}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
