
import { LifeBuoy } from 'lucide-react';
import React from 'react';

type SupportTriggerButtonProps = {
  onClick: (e: React.MouseEvent) => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
};

export default function SupportTriggerButton({ onClick, buttonRef }: SupportTriggerButtonProps) {
  return (
    <button 
      ref={buttonRef}
      className="support-button flex flex-col items-center justify-center w-full h-full"
      onClick={onClick}
      aria-label="Support"
    >
      <LifeBuoy 
        size={24} 
        className="text-india-saffron animate-pulse" 
        strokeWidth={2.5}
      />
      <span className="text-xs mt-1 font-semibold text-india-saffron">Support</span>
      <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
    </button>
  );
}
