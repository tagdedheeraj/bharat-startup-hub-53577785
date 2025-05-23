
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserCircle, LogOut, LayoutDashboard, UserPlus, LogIn } from 'lucide-react';

const AuthButtons = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    // Close on escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2 ml-2">
            <UserCircle className="h-6 w-6" />
            {isAuthenticated && user && (
              <span className="hidden sm:inline">{user.name}</span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 z-50">
          {isAuthenticated && user ? (
            <>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link 
                  to={`/dashboard/${user.role}`} 
                  className="flex items-center gap-2 cursor-pointer w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }} 
                className="flex items-center gap-2 cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link 
                  to="/login" 
                  className="flex items-center gap-2 cursor-pointer w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/register" 
                  className="flex items-center gap-2 cursor-pointer w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AuthButtons;
