import { useNavigate } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import LiveChat from '@/components/support/LiveChat';
import { useState } from 'react';

type SupportActionProps = {
  onActionComplete: () => void;
};

export default function SupportActions({ onActionComplete }: SupportActionProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showLiveChat, setShowLiveChat] = useState(false);

  const handleSupportAction = (action: string) => {
    console.log(`Support action triggered: ${action}`);
    
    if (action === 'chat') {
      setShowLiveChat(true);
      return;
    }
    
    onActionComplete(); 
    
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
          window.open('mailto:support@bharatstartupsolution.com', '_blank');
          toast({
            title: "Opening email client",
            description: "Your default email client should open shortly."
          });
          break;
        case 'call':
          window.open('https://wa.me/919081622284', '_blank');
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
    console.log(`Navigation from support drawer to: ${path}`);
    onActionComplete();
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  if (showLiveChat) {
    return (
      <div className="p-4">
        <LiveChat />
        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={() => setShowLiveChat(false)}
        >
          Back to Support Options
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 space-y-4">
        <Button 
          className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600" 
          onClick={() => handleSupportAction('chat')}
        >
          <MessageSquare size={16} />
          <span>Start Live Chat</span>
        </Button>
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
      <Button 
        variant="outline" 
        onClick={() => handleNavigation('/faqs')}
        className="w-full mb-4 mx-4"
      >
        View FAQs
      </Button>
    </>
  );
}
