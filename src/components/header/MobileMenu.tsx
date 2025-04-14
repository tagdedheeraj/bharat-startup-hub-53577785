
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationData } from './navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  currentPath: string;
  toggleMobileMenu: () => void;
  handleMobileItemClick: (path: string, e: React.MouseEvent) => void;
}

const MobileMenu = ({ isOpen, currentPath, toggleMobileMenu, handleMobileItemClick }: MobileMenuProps) => {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-4 pt-2 pb-5 space-y-3 bg-white border-t border-gray-100 shadow-lg">
        {navigationData.map((item) => {
          if (item.children) {
            return (
              <div key={item.to} className="py-2">
                <div className="font-medium text-brand-700 mb-1">{item.label}</div>
                <div className="ml-4 space-y-1">
                  {item.children.map((child) => (
                    <a
                      key={child.to}
                      href={child.to}
                      className="flex items-center gap-2 py-1.5 text-sm text-gray-600 hover:text-brand-600 transition-colors"
                      onClick={(e) => handleMobileItemClick(child.to, e)}
                    >
                      {child.icon && <child.icon size={16} className="text-brand-500" />}
                      {child.label}
                    </a>
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
              onClick={() => {
                toggleMobileMenu();
                window.scrollTo(0, 0);
              }}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="pt-4">
          <Button asChild className="w-full relative group overflow-hidden">
            <Link 
              to="/contact" 
              onClick={() => {
                toggleMobileMenu();
                window.scrollTo(0, 0);
              }} 
              className="relative z-10 bg-brand-600 hover:bg-brand-700 text-black"
            >
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
  );
};

export default MobileMenu;
