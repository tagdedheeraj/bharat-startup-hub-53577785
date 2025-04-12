
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface FirstTimeVideoPopupProps {
  videoId: string;
}

const FirstTimeVideoPopup = ({ videoId }: FirstTimeVideoPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Create a session-based flag instead of localStorage
    const hasSeenVideo = sessionStorage.getItem('hasSeenIntroVideo');
    
    if (!hasSeenVideo) {
      // Show the video popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark that the user has seen the video for this session only
        sessionStorage.setItem('hasSeenIntroVideo', 'true');
      }, 1000); // Reduced delay for faster appearance
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleClose = () => {
    setIsOpen(false);
  };
  
  // Force open for testing (remove this in production)
  const forceOpen = () => {
    sessionStorage.removeItem('hasSeenIntroVideo');
    setIsOpen(true);
  };
  
  // Extract video ID from full YouTube URL if needed
  const extractVideoId = (videoParam: string): string => {
    // If it's already just an ID (no slashes or dots), return it as is
    if (!/[\/\.]/.test(videoParam)) {
      return videoParam;
    }
    
    // Try to extract from various YouTube URL formats
    const regexPatterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/watch\?.*v=)([^&\?\/#]+)/i,
      /youtube\.com\/watch\?.*v=([^&\?\/#]+)/i,
      /youtu\.be\/([^&\?\/#]+)/i
    ];
    
    for (const regex of regexPatterns) {
      const match = videoParam.match(regex);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    // Fallback to the original value if no pattern matches
    console.warn('Could not extract YouTube video ID, using original value');
    return videoParam;
  };
  
  const processedVideoId = extractVideoId(videoId);
  
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-3xl p-0 bg-transparent border-none" onInteractOutside={handleClose}>
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${processedVideoId}?autoplay=1&rel=0`}
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
      
      {/* Developer button to force show the popup - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <button 
          onClick={forceOpen}
          className="fixed bottom-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm z-50 opacity-70 hover:opacity-100"
        >
          Show Video Popup
        </button>
      )}
    </>
  );
};

export default FirstTimeVideoPopup;
