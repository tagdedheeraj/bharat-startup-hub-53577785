
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Mail, Phone, MessageSquare, Headphones } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import LiveChat from "@/components/support/LiveChat";

export default function SupportPopup() {
  const [open, setOpen] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  const handleOpenMail = () => {
    window.open('mailto:support@bharatstartupsolution.com');
    setOpen(false);
  };
  
  const handleOpenPhone = () => {
    window.open('tel:+919081622284');
    setOpen(false);
  };
  
  const handleOpenChat = () => {
    window.open('https://wa.me/919081622284');
    setOpen(false);
  };

  if (showLiveChat) {
    return (
      <div className="fixed bottom-20 right-4 z-50">
        <div className="w-[400px]">
          <LiveChat />
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={() => setShowLiveChat(false)}
          >
            Back to Support Options
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="fixed bottom-20 right-4 z-50">
      <Button 
        onClick={() => setOpen(true)}
        className="bg-india-saffron hover:bg-india-saffron/90 text-white font-bold flex items-center gap-2"
      >
        <MessageSquare size={18} />
        <span className="sm:inline">Support</span>
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[95%] max-w-md mx-auto rounded-lg p-4 sm:p-6 overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">Contact Support</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Choose how you'd like to get in touch with our support team.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-3 py-3 sm:gap-4 sm:py-4">
            <Button 
              className="w-full flex items-center justify-start gap-3 text-xs sm:text-sm"
              onClick={handleOpenMail}
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="truncate">Email: support@bharatstartupsolution.com</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-start gap-3 text-xs sm:text-sm"
              onClick={handleOpenPhone}
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Call: +91 90816 22284</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-start gap-3 text-xs sm:text-sm"
              onClick={handleOpenChat}
            >
              <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Chat with Support</span>
            </Button>

            <Button 
              variant="outline" 
              className="w-full flex items-center justify-start gap-3 text-xs sm:text-sm"
              onClick={() => {
                setOpen(false);
                setShowLiveChat(true);
              }}
            >
              <Headphones className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Live Support</span>
            </Button>
          </div>
          
          <DialogFooter className="sm:justify-end">
            <Button variant="outline" onClick={() => setOpen(false)} className="w-full sm:w-auto">Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
