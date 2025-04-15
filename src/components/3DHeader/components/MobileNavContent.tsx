
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NavItem } from '../types';

interface MobileNavContentProps {
  navItems: NavItem[];
  currentPath: string;
  close: () => void;
  handleNavigation: (path: string) => void;
}

const MobileNavContent = ({ navItems, currentPath, close, handleNavigation }: MobileNavContentProps) => (
  <div className="py-6">
    <nav className="flex flex-col space-y-1">
      {navItems.map((item) => (
        item.children ? (
          <div key={item.name} className="py-1.5">
            <div className="font-medium text-india-saffron px-4 py-2 flex items-center bg-gradient-to-r from-white/10 to-transparent rounded-lg mb-1">
              <span className="mr-2">{item.name}</span>
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-india-white/30 to-transparent"></div>
            </div>
            <div className="ml-4 space-y-1 pl-2 border-l border-india-white/30 bg-gradient-to-b from-white/5 to-transparent rounded-r-lg">
              {item.children.map((child) => (
                <button
                  key={child.name}
                  className={cn(
                    "w-full text-left px-4 py-2.5 rounded-lg text-black/80 hover:text-black transition-all duration-200 flex items-center",
                    currentPath.startsWith(child.href) 
                      ? "bg-gradient-to-r from-india-saffron/20 to-transparent text-black border-l-2 border-india-saffron" 
                      : "hover:bg-white/5 hover:border-l-2 hover:border-india-white/40"
                  )}
                  onClick={() => {
                    close();
                    handleNavigation(child.href);
                  }}
                >
                  {child.icon && <child.icon className="h-4 w-4 mr-2 text-india-white/80" />}
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full mr-2",
                    currentPath.startsWith(child.href) ? "bg-india-saffron animate-pulse" : "bg-india-white/40"
                  )}></div>
                  {child.name}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button
            key={item.name}
            className={cn(
              "w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200",
              currentPath === item.href 
                ? "bg-gradient-to-r from-india-saffron/20 to-transparent text-india-saffron border-l-2 border-india-saffron" 
                : "text-black hover:text-india-saffron hover:bg-white/5 hover:border-l-2 hover:border-india-white/40"
            )}
            onClick={() => {
              close();
              handleNavigation(item.href);
            }}
          >
            {item.name}
          </button>
        )
      ))}
    </nav>
    <div className="px-4 mt-6">
      <Button 
        className="w-full bg-gradient-to-r from-india-saffron to-india-green text-black hover:from-india-saffron/90 hover:to-india-green/90"
        onClick={() => {
          close();
          handleNavigation('/contact');
        }}
      >
        Get Started
      </Button>
    </div>
  </div>
);

export default MobileNavContent;
