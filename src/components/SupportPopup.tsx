
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
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function SupportPopup() {
  const [open, setOpen] = useState(false);
  
  const handleOpenMail = () => {
    window.open('mailto:support@bharatstartupsolution.com');
    setOpen(false);
  };
  
  const handleOpenPhone = () => {
    window.open('tel:+917046396020');
    setOpen(false);
  };
  
  const handleOpenChat = () => {
    window.open('https://wa.me/917046396020');
    setOpen(false);
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={() => setOpen(true)}
        className="bg-india-saffron hover:bg-india-saffron/90 text-white font-bold flex items-center gap-2"
      >
        <MessageSquare size={18} />
        Support
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Support</DialogTitle>
            <DialogDescription>
              Choose how you'd like to get in touch with our support team.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <Button 
              className="w-full flex items-center justify-start gap-3"
              onClick={handleOpenMail}
            >
              <Mail className="h-5 w-5" />
              <span>Email: support@bharatstartupsolution.com</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-start gap-3"
              onClick={handleOpenPhone}
            >
              <Phone className="h-5 w-5" />
              <span>Call: +91 7046 396020</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-start gap-3"
              onClick={handleOpenChat}
            >
              <MessageSquare className="h-5 w-5" />
              <span>Chat with Support</span>
            </Button>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
