
import React, { useEffect, useState } from 'react';
import { Mail, Phone, MessageSquare, X } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useIsMobile } from '@/hooks/use-mobile';

const SupportPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Listen for the custom event from MobileBottomNav
    const handleOpenSupport = () => {
      setIsOpen(true);
    };
    
    document.addEventListener('open-support-drawer', handleOpenSupport);
    
    return () => {
      document.removeEventListener('open-support-drawer', handleOpenSupport);
    };
  }, []);
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-16' : 'bottom-0'} left-0 right-0 z-30 flex justify-center`}>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button 
            className="bg-india-saffron text-white rounded-t-lg md:rounded-full px-6 py-2 shadow-lg hover:bg-amber-600 transition-all"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            <span>Get Support</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-6">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-display text-india-saffron">How can we help you?</DrawerTitle>
            <DrawerDescription>
              Choose your preferred way to connect with our support team.
            </DrawerDescription>
          </DrawerHeader>
          
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
          
          <DrawerFooter>
            <p className="text-xs text-gray-500 text-center mb-2">
              We typically respond within 2-3 hours during business hours
            </p>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SupportPopup;
