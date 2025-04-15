
import { Button } from '@/components/ui/button';
import { Search, BellRing, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AuthButtons from '../../AuthButtons';
import { NavItem } from '../types';

interface DesktopNavProps {
  navItems: NavItem[];
  currentPath: string;
  isActive: (path: string) => boolean;
  handleNavigation: (href: string) => void;
}

const DesktopNav = ({ navItems, currentPath, isActive, handleNavigation }: DesktopNavProps) => (
  <nav className="hidden lg:flex items-center space-x-1">
    {navItems.map((item) => (
      item.children ? (
        <DropdownMenu key={item.name}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "group relative px-3 py-2 font-medium transition-colors",
                isActive(item.href) 
                  ? "text-india-saffron" 
                  : "text-black hover:text-india-saffron"
              )}
            >
              <span className="relative z-10 flex items-center">
                {item.name}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </span>
              <span className={cn(
                "absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                isActive(item.href) && "opacity-100"
              )}></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="bg-gradient-to-br from-india-saffron/80 to-india-green/80 backdrop-blur-xl 
              border border-india-white/40 text-black rounded-xl w-60 p-2
              shadow-[0_10px_25px_rgba(0,0,0,0.2)] animate-in zoom-in-95 duration-100"
          >
            <div className="px-1 py-1 space-y-1">
              {item.children.map((child) => (
                <DropdownMenuItem 
                  key={child.name}
                  onClick={() => handleNavigation(child.href)}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-3 text-sm font-medium cursor-pointer transition-all duration-200 group hover:bg-gradient-to-r hover:from-india-white/20 hover:to-india-white/5",
                    isActive(child.href) 
                      ? "bg-gradient-to-r from-india-white/30 to-transparent text-black shadow-inner border-l-2 border-india-white" 
                      : "text-black/90 hover:text-black"
                  )}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      {child.icon && <child.icon className="h-4 w-4 mr-2 text-india-white/80" />}
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        isActive(child.href) ? "bg-india-saffron animate-pulse" : "bg-india-white/40 group-hover:bg-india-saffron"
                      )}></div>
                      <span className="font-medium">{child.name}</span>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          key={item.name}
          to={item.href}
          className={cn(
            "group relative px-3 py-2 font-medium transition-colors",
            isActive(item.href) 
              ? "text-india-saffron" 
              : "text-black hover:text-india-saffron"
          )}
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className="relative z-10">{item.name}</span>
          <span className={cn(
            "absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
            isActive(item.href) && "opacity-100"
          )}></span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
            bg-india-saffron group-hover:w-1/2 transition-all duration-300"></span>
        </Link>
      )
    ))}
    
    <div className="flex items-center gap-3">
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
        onClick={() => {
          handleNavigation('/contact');
          window.scrollTo(0, 0);
        }}
      >
        Get Started
      </Button>
    </div>
  </nav>
);

export default DesktopNav;
