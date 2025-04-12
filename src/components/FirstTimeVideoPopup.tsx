
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface FirstTimeVideoPopupProps {
  videoId: string;
}

const FirstTimeVideoPopup = ({ videoId }: FirstTimeVideoPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if this is the first visit
    const hasSeenVideo = localStorage.getItem('hasSeenIntroVideo');
    
    if (!hasSeenVideo) {
      // Show the video popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark that the user has seen the video
        localStorage.setItem('hasSeenIntroVideo', 'true');
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleClose = () => {
    setIsOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-3xl p-0 bg-transparent border-none" onInteractOutside={handleClose}>
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Welcome to Bharat Startup Solution"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors transform hover:scale-110"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FirstTimeVideoPopup;
