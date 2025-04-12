
import React, { useEffect, useState } from 'react';
import { Mail, Phone, MessageSquare, X } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useIsMobile } from '@/hooks/use-mobile';

const SupportPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Listen for the custom event from MobileBottomNav
    const handleOpenSupport = () => {
      console.log("Support dialog event received");
      setIsOpen(true);
    };
    
    // Using a named function for addEventListener so we can remove it properly
    document.addEventListener('open-support-dialog', handleOpenSupport);
    
    return () => {
      document.removeEventListener('open-support-dialog', handleOpenSupport);
    };
  }, []);
  
  return (
    <>
      {/* Always render the Dialog outside any positioning container for better accessibility */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-6 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display text-india-saffron">How can we help you?</DialogTitle>
            <DialogDescription>
              Choose your preferred way to connect with our support team.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
            <a 
              href="mailto:info@bharatstartup.com" 
              className="flex flex-col items-center gap-3 p-4 border rounded-lg hover:border-india-saffron hover:bg-amber-50 transition-all"
            >
              <div className="p-3 bg-amber-100 rounded-full">
                <Mail className="h-8 w-8 text-india-saffron" />
              </div>
              <h3 className="font-medium">Email Support</h3>
              <p className="text-sm text-center text-gray-500">info@bharatstartup.com</p>
            </a>
            
            <a 
              href="tel:+917046396020" 
              className="flex flex-col items-center gap-3 p-4 border rounded-lg hover:border-india-saffron hover:bg-amber-50 transition-all"
            >
              <div className="p-3 bg-amber-100 rounded-full">
                <Phone className="h-8 w-8 text-india-saffron" />
              </div>
              <h3 className="font-medium">Call Us</h3>
              <p className="text-sm text-center text-gray-500">7046-396-020</p>
            </a>
            
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex flex-col items-center gap-3 p-4 border rounded-lg hover:border-india-saffron hover:bg-amber-50 transition-all">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <MessageSquare className="h-8 w-8 text-india-saffron" />
                  </div>
                  <h3 className="font-medium">Live Chat</h3>
                  <p className="text-sm text-center text-gray-500">Start a conversation</p>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-medium">Chat with us</h4>
                  <p className="text-sm text-gray-500">
                    Our support representatives are available Monday to Friday, 9am to 6pm IST.
                  </p>
                  <Button className="w-full bg-india-saffron hover:bg-amber-600">
                    Start Conversation
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          <DialogFooter>
            <p className="text-xs text-gray-500 text-center mb-2">
              We typically respond within 2-3 hours during business hours
            </p>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* For non-mobile users, show a fixed button at the bottom */}
      {!isMobile && (
        <div className="fixed bottom-4 right-4 z-30">
          <DialogTrigger asChild>
            <Button 
              className="bg-india-saffron text-white rounded-full px-6 py-4 shadow-lg hover:bg-amber-600 transition-all"
              onClick={() => setIsOpen(true)}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              <span>Get Support</span>
            </Button>
          </DialogTrigger>
        </div>
      )}
    </>
  );
};

export default SupportPopup;
