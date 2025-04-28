
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationData } from './navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  currentPath: string;
  handleMobileItemClick: (path: string) => void;
}

const MobileMenu = ({ isOpen, currentPath, handleMobileItemClick }: MobileMenuProps) => {
  return (
    <div
      className={`lg:hidden fixed inset-x-0 z-40 bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ${
        isOpen 
          ? 'top-[var(--header-height)] bottom-0 overflow-auto' 
          : 'top-full bottom-full overflow-hidden'
      }`}
    >
      <div className="px-4 pt-2 pb-5 space-y-3">
        {navigationData.map((item) => {
          if (item.children) {
            return (
              <div key={item.to} className="py-2">
                <div className="font-medium text-brand-700 mb-1">{item.label}</div>
                <div className="ml-4 space-y-1">
                  {item.children.map((child) => (
                    <div
                      key={child.to}
                      className="flex items-center gap-2 py-1.5 text-sm text-gray-600 hover:text-brand-600 transition-colors"
                      onClick={() => handleMobileItemClick(child.to)}
                    >
                      {child.icon && <child.icon size={16} className="text-brand-500" />}
                      {child.label}
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <div
              key={item.to}
              className={`block py-2 cursor-pointer ${
                currentPath === item.to 
                  ? 'text-brand-600 font-medium' 
                  : 'text-gray-600'
              } hover:text-brand-700 transition-colors`}
              onClick={() => handleMobileItemClick(item.to)}
            >
              {item.label}
            </div>
          );
        })}
        <div className="pt-4">
          <Button 
            className="w-full relative group overflow-hidden"
            onClick={() => handleMobileItemClick("/contact")}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
