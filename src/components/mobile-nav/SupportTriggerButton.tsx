
import { LifeBuoy } from 'lucide-react';
import React, { useEffect } from 'react';

type SupportTriggerButtonProps = {
  onClick: (e: React.MouseEvent) => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
};

export default function SupportTriggerButton({ onClick, buttonRef }: SupportTriggerButtonProps) {
  // Force button visibility
  useEffect(() => {
    const button = buttonRef?.current;
    
    if (button) {
      // Make button visible
      button.style.display = 'flex';
      button.style.visibility = 'visible';
      button.style.opacity = '1';
      button.classList.remove('hidden');
      button.classList.add('flex');
    }
    
    // Check visibility again after a delay
    const timers = [
      setTimeout(() => {
        if (buttonRef?.current) {
          buttonRef.current.style.display = 'flex';
          buttonRef.current.style.visibility = 'visible';
          buttonRef.current.style.opacity = '1';
        }
      }, 500),
      setTimeout(() => {
        if (buttonRef?.current) {
          buttonRef.current.style.display = 'flex';
          buttonRef.current.style.visibility = 'visible';
          buttonRef.current.style.opacity = '1';
        }
      }, 1000)
    ];
    
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [buttonRef]);

  return (
    <button 
      ref={buttonRef}
      className="support-button flex flex-col items-center justify-center w-full h-full relative opacity-100 visible"
      style={{ display: 'flex' }} // Inline style to force visibility
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
