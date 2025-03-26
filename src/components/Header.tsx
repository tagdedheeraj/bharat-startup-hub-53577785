
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <span className="font-display text-2xl font-bold text-brand-700">Bharat Startup Solution</span>
  </Link>
);

interface NavItemProps {
  to: string;
  label: string;
  active: boolean;
  children?: {
    to: string;
    label: string;
  }[];
  toggleMobileMenu?: () => void;
}

const NavItem = ({ to, label, active, children, toggleMobileMenu }: NavItemProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (children) {
    return (
      <div className="relative group">
        <button
          className={`nav-link flex items-center gap-1 ${active ? 'active' : ''}`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {label}
          <ChevronDown size={16} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`absolute z-10 mt-1 min-w-[200px] rounded-lg bg-white shadow-lg border border-gray-100 overflow-hidden transition-all ${dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} lg:opacity-0 lg:group-hover:opacity-100 lg:scale-95 lg:group-hover:scale-100 lg:pointer-events-auto`}>
          <div className="py-1">
            {children.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-4 py-2 text-sm hover:bg-brand-50 hover:text-brand-700"
                onClick={() => {
                  setDropdownOpen(false);
                  toggleMobileMenu && toggleMobileMenu();
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={to}
      className={`nav-link ${active ? 'active' : ''}`}
      onClick={toggleMobileMenu}
    >
      {label}
    </Link>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navigationItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    {
      label: 'Services',
      to: '/services',
      children: [
        { label: 'Funding Consultation', to: '/services/funding-consultation' },
        { label: 'Certificate Marketing', to: '/services/certificate-marketing' },
        { label: 'Legal Consultation', to: '/services/legal-consultation' },
      ],
    },
    { label: 'Success Stories', to: '/success-stories' },
    { label: 'Contact Us', to: '/contact' },
    {
      label: 'More',
      to: '/more',
      children: [
        { label: 'Experts', to: '/more/experts' },
        { label: 'MSME Events', to: '/more/msme-events' },
        { label: 'Reviews', to: '/more/reviews' },
        { label: 'Blogs', to: '/more/blogs' },
        { label: 'Compliance', to: '/more/compliance' },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                active={currentPath === item.to || (item.children && item.children.some(child => currentPath === child.to))}
                children={item.children}
              />
            ))}
            <Link to="/contact" className="btn-primary text-sm">
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
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
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-5 space-y-1 bg-white border-b border-gray-200">
          {navigationItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              active={currentPath === item.to || (item.children && item.children.some(child => currentPath === child.to))}
              children={item.children}
              toggleMobileMenu={toggleMobileMenu}
            />
          ))}
          <div className="pt-4">
            <Link to="/contact" className="btn-primary text-sm block text-center" onClick={toggleMobileMenu}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
