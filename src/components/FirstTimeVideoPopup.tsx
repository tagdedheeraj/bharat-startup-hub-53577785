
import React, { useEffect, useState, useId } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useDialog } from '@/contexts/dialog/DialogProvider';

interface FirstTimeVideoPopupProps {
  videoId: string;
}

const FirstTimeVideoPopup = ({ videoId }: FirstTimeVideoPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogId = useId();
  const { registerDialog, unregisterDialog, updateDialogState } = useDialog();
  
  useEffect(() => {
    // Register this dialog with the dialog context
    registerDialog(dialogId, isOpen);
    
    // Create a session-based flag instead of localStorage
    const hasSeenVideo = sessionStorage.getItem('hasSeenIntroVideo');
    
    if (!hasSeenVideo) {
      // Show the video popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenIntroVideo', 'true');
        // Update dialog state after setting isOpen
        console.log("Opening first-time video popup");
      }, 1500); // Increased delay for reliability
      
      return () => clearTimeout(timer);
    }
    
    return () => {
      console.log("Cleaning up FirstTimeVideoPopup component");
    };
  }, [dialogId, registerDialog]);
  
  // Use a separate useEffect for updating dialog state
  useEffect(() => {
    updateDialogState(dialogId, isOpen);
    console.log("FirstTimeVideoPopup state updated:", isOpen);
  }, [dialogId, isOpen, updateDialogState]);
  
  const handleClose = () => {
    console.log("Closing first-time video popup");
    setIsOpen(false);
  };
  
  // Force open for testing (remove this in production)
  const forceOpen = () => {
    console.log("Forcing open first-time video popup");
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
  console.log("FirstTimeVideoPopup rendering with videoId:", processedVideoId, "isOpen:", isOpen);
  
  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => {
        console.log("Dialog open change:", open);
        setIsOpen(open);
      }}>
        <DialogContent 
          className="sm:max-w-3xl p-0 bg-transparent border-none z-[9700]" 
          onInteractOutside={(e) => {
            e.preventDefault(); // Prevent closing on outside click for video popup
          }}
          onEscapeKeyDown={(e) => {
            e.preventDefault(); // Prevent closing on escape key
          }}
        >
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${processedVideoId}?autoplay=1&rel=0&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`}
              title="Welcome to Bharat Startup Solution"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; playsinline"
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
      
      {/* Developer button to force show the popup - for testing */}
      <button 
        onClick={forceOpen}
        className="fixed bottom-16 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm z-50 opacity-70 hover:opacity-100"
      >
        Show Video Popup
      </button>
    </>
  );
};

export default FirstTimeVideoPopup;
