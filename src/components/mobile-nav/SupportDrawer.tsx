
import { useNavigate } from 'react-router-dom';
import { Phone, LifeBuoy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function SupportDrawer() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  // This effect ensures the drawer is visible after mount
  useEffect(() => {
    console.log("SupportDrawer component mounted");
    
    // Force drawer trigger to be visible
    const timer = setTimeout(() => {
      const supportButton = document.querySelector('.support-button');
      if (supportButton) {
        supportButton.classList.remove('hidden');
        console.log("Support button visibility ensured");
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to handle support drawer actions
  const handleSupportAction = (action: string) => {
    setIsOpen(false); // Close drawer first
    
    // Delay action slightly to allow drawer to close
    setTimeout(() => {
      switch(action) {
        case 'contact':
          navigate('/contact');
          toast({
            title: "Navigating to contact page",
            description: "You'll be able to reach our team through the contact form."
          });
          break;
        case 'email':
          window.open('mailto:support@bharatstartup.com', '_blank');
          toast({
            title: "Opening email client",
            description: "Your default email client should open shortly."
          });
          break;
        case 'call':
          window.open('https://wa.me/919876543210', '_blank');
          toast({
            title: "Opening WhatsApp",
            description: "You'll be connected with our support team."
          });
          break;
        default:
          break;
      }
    }, 300);
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    // Delay navigation slightly to allow drawer to close
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button 
          className="support-button flex flex-col items-center justify-center w-full h-full relative"
          onClick={() => {
            console.log("Support drawer trigger clicked");
            setIsOpen(true);
          }}
        >
          <LifeBuoy 
            size={24} 
            className="text-india-saffron animate-pulse" 
            strokeWidth={2.5}
          />
          <span className="text-xs mt-1 font-semibold text-india-saffron">Support</span>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Need Help?</DrawerTitle>
          <DrawerDescription>
            Our support team is here to assist you. Choose how you'd like to get in touch.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <Button 
            className="w-full flex items-center justify-center gap-2" 
            onClick={() => handleSupportAction('contact')}
          >
            <Phone size={16} />
            <span>Contact Us</span>
          </Button>
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2"
            onClick={() => handleSupportAction('email')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>Email Support</span>
          </Button>
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2"
            onClick={() => handleSupportAction('call')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Call Support</span>
          </Button>
        </div>
        <DrawerFooter>
          <Button 
            variant="outline" 
            onClick={() => handleNavigation('/faqs')}
            className="w-full"
          >
            View FAQs
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
