
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
    registerDialog(dialogId, isOpen);
    const hasSeenVideo = sessionStorage.getItem('hasSeenIntroVideo');
    
    if (!hasSeenVideo) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        updateDialogState(dialogId, true);
        sessionStorage.setItem('hasSeenIntroVideo', 'true');
      }, 2000);
      
      return () => {
        clearTimeout(timer);
        unregisterDialog(dialogId);
      };
    }
    
    return () => {
      unregisterDialog(dialogId);
    };
  }, [dialogId, registerDialog, unregisterDialog, updateDialogState]);
  
  useEffect(() => {
    updateDialogState(dialogId, isOpen);
  }, [dialogId, isOpen, updateDialogState]);
  
  const handleClose = () => {
    setIsOpen(false);
    updateDialogState(dialogId, false);
  };
  
  const forceOpen = () => {
    sessionStorage.removeItem('hasSeenIntroVideo');
    setIsOpen(true);
    updateDialogState(dialogId, true);
  };
  
  const extractVideoId = (videoParam: string): string => {
    if (!/[\/\.]/.test(videoParam)) {
      return videoParam;
    }
    
    const regexPatterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/watch\?.*v=)([^&\?\/#]+)/i,
      /youtube\.com\/watch\?.*v=([^&\?\/#]+)/i,
      /youtu\.be\/([^&\?\/#]+)/i
    ];
    
    for (const regex of regexPatterns) {
      const match = videoParam.match(regex);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    console.warn('Could not extract YouTube video ID, using original value');
    return videoParam;
  };
  
  const processedVideoId = extractVideoId(videoId);
  
  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        updateDialogState(dialogId, open);
      }}>
        <DialogContent 
          className="w-[95%] max-w-3xl p-0 mx-auto bg-transparent border-none z-[9999]" 
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          onEscapeKeyDown={(e) => {
            e.preventDefault();
          }}
        >
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${processedVideoId}?autoplay=1&rel=0`}
              title="Welcome Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/10 hover:bg-white/20 rounded-full p-1.5 sm:p-2 text-white transition-colors transform hover:scale-110"
              aria-label="Close video"
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
      
      {process.env.NODE_ENV === 'development' && (
        <button 
          onClick={forceOpen}
          className="fixed bottom-40 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm z-50 opacity-70 hover:opacity-100"
        >
          Show Video Popup
        </button>
      )}
    </>
  );
};

export default FirstTimeVideoPopup;
