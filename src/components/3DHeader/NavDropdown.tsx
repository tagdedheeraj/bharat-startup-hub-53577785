
import { Link } from 'react-router-dom';
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
  // Add state to properly manage the dropdown open state
  const [open, setOpen] = useState(false);

  // Close dropdown when navigating away
  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

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
        // Force the dropdown to be shown directly in the body to avoid portal issues
        forceMount={open}
      >
        <div className="px-1 py-1 space-y-1">
          {children.map((child) => (
            <DropdownMenuItem key={child.name} asChild onSelect={(e) => {
              // Prevent the default select behavior to avoid race conditions
              e.preventDefault();
              setOpen(false);
            }}>
              <Link
                to={child.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 group hover:bg-gradient-to-r hover:from-india-white/20 hover:to-india-white/5",
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
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
