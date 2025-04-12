
import { LifeBuoy } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

type SupportTriggerButtonProps = {
  onClick: (e: React.MouseEvent) => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
};

export default function SupportTriggerButton({ onClick, buttonRef }: SupportTriggerButtonProps) {
  const localRef = useRef<HTMLButtonElement>(null);
  
  // Combine refs to ensure we have access even if the parent ref fails
  const setRefs = (element: HTMLButtonElement | null) => {
    // Set the buttonRef from props
    if (buttonRef && 'current' in buttonRef) {
      (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = element;
    }
    
    // Also set our local ref
    if (localRef.current !== element) {
      localRef.current = element;
    }
  };
  
  // Force button visibility
  useEffect(() => {
    const enforceVisibility = () => {
      // Use our local ref as fallback if the main ref isn't working
      const button = buttonRef?.current || localRef.current;
      
      if (button) {
        button.style.display = 'flex';
        button.style.visibility = 'visible';
        button.style.opacity = '1';
        button.classList.remove('hidden');
        button.classList.add('flex');
        console.log("Support button visibility enforced through direct ref");
      }
      
      // Also try to find it by class as a fallback
      const supportButtons = document.querySelectorAll('.support-button');
      supportButtons.forEach(btn => {
        if (btn instanceof HTMLElement) {
          btn.style.display = 'flex';
          btn.style.visibility = 'visible';
          btn.style.opacity = '1';
          btn.classList.remove('hidden');
          btn.classList.add('flex');
          console.log("Support button visibility enforced through class selector");
        }
      });
    };
    
    // Run immediately and at intervals to ensure visibility
    enforceVisibility();
    const timers = [
      setTimeout(enforceVisibility, 100),
      setTimeout(enforceVisibility, 500),
      setTimeout(enforceVisibility, 1000),
      setTimeout(enforceVisibility, 2000),
    ];
    
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [buttonRef]);

  return (
    <button 
      ref={setRefs}
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
