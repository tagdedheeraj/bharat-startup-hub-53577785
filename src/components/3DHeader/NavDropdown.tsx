
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from 'react';

interface NavDropdownItem {
  name: string;
  href: string;
}

interface NavDropdownProps {
  name: string;
  href: string;
  children: NavDropdownItem[];
  isActive: (path: string) => boolean;
}

const NavDropdown = ({ name, href, children, isActive }: NavDropdownProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Close dropdown when route changes
  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

  // Handle portal cleanup before navigation
  const handleNavigation = (path: string) => {
    // Close dropdown first
    setOpen(false);
    
    // Ensure all portals are cleaned up before navigation
    const cleanup = () => {
      try {
        // Find and clean up any dropdown portals
        document.querySelectorAll('[data-radix-portal]').forEach(portal => {
          try {
            if (document.body.contains(portal)) {
              document.body.removeChild(portal);
            }
          } catch (e) {
            console.debug("Portal cleanup failed:", e);
          }
        });
      } catch (e) {
        console.debug("Cleanup failed:", e);
      }
    };
    
    // Run cleanup immediately
    cleanup();
    
    // Use a slightly longer delay for navigation to ensure DOM is stable
    setTimeout(() => {
      // Run one more cleanup before navigating
      cleanup();
      navigate(path);
    }, 100);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "group relative px-3 py-2 font-medium transition-colors",
            isActive(href) 
              ? "text-india-saffron" 
              : "text-black hover:text-india-saffron"
          )}
        >
          <span className="relative z-10 flex items-center">
            {name}
            <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </span>
          <span className={cn(
            "absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
            isActive(href) && "opacity-100"
          )}></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        sideOffset={8}
        className="bg-gradient-to-br from-india-saffron/80 to-india-green/80 backdrop-blur-xl 
          border border-india-white/40 text-black rounded-xl w-60 p-2
          shadow-[0_10px_25px_rgba(0,0,0,0.2)] animate-in zoom-in-95 duration-100"
        onCloseAutoFocus={(e) => {
          // Prevent focus events that might cause issues with portal removal
          e.preventDefault();
        }}
      >
        <div className="px-1 py-1 space-y-1">
          {children.map((child) => (
            <DropdownMenuItem 
              key={child.name} 
              asChild 
              onSelect={(e) => {
                // Prevent the default select behavior
                e.preventDefault();
                // Handle navigation safely
                handleNavigation(child.href);
              }}
            >
              <div 
                className={cn(
                  "flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 group hover:bg-gradient-to-r hover:from-india-white/20 hover:to-india-white/5 cursor-pointer",
                  isActive(child.href) 
                    ? "bg-gradient-to-r from-india-white/30 to-transparent text-black shadow-inner border-l-2 border-india-white" 
                    : "text-black/90 hover:text-black"
                )}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      isActive(child.href) ? "bg-india-saffron animate-pulse" : "bg-india-white/40 group-hover:bg-india-saffron"
                    )}></div>
                    <span className="font-medium">{child.name}</span>
                  </div>
                  <div className="mt-0.5 h-px w-0 bg-gradient-to-r from-india-saffron to-transparent 
                    group-hover:w-full transition-all duration-300"></div>
                </div>
                <ChevronRight className={cn(
                  "h-4 w-4 opacity-0 -translate-x-2 transition-all duration-200",
                  "group-hover:opacity-100 group-hover:translate-x-0"
                )} />
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
