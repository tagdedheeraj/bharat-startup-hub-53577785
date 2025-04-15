
import { MessagesSquare } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';
import { Button } from '../ui/button';

type SupportTriggerButtonProps = {
  onClick: (e: React.MouseEvent) => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
};

export default function SupportTriggerButton({ onClick, buttonRef }: SupportTriggerButtonProps) {
  const location = useLocation();
  const isActive = location.pathname === '/support';

  return (
    <Button 
      ref={buttonRef}
      variant="ghost"
      size="icon"
      className={cn(
        "flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-full transition-colors",
        isActive ? "text-india-saffron" : "text-gray-500 hover:text-india-saffron"
      )}
      onClick={onClick}
      aria-label="Support"
    >
      <MessagesSquare size={20} />
      <span className="text-xs">Support</span>
      <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
    </Button>
  );
}
