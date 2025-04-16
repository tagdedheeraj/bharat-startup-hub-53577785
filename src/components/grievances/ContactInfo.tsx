
import { Phone, Mail, Clock, Copy, CheckCircle2 } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

export function ContactInfo() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();

  const handleCopy = async (text: string, type: 'email' | 'phone') => {
    await navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
    toast({
      title: "Copied to clipboard",
      description: `${text} has been copied to your clipboard.`,
    });
  };

  return (
    <Card className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg border-white/20 shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="p-8 space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 font-display">Contact Information</h3>
          <p className="text-gray-600">Get in touch with our support team</p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4 group">
            <div className="bg-india-saffron/10 p-3 rounded-xl group-hover:bg-india-saffron/20 transition-colors">
              <Phone className="h-6 w-6 text-india-saffron" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Call us at</p>
              <div className="flex items-center gap-2">
                <a href="tel:+919081622284" className="text-gray-900 hover:text-india-saffron font-medium transition-colors">
                  +91 90816 22284
                </a>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  onClick={() => handleCopy('+919081622284', 'phone')}
                >
                  {copiedPhone ? (
                    <CheckCircle2 className="h-4 w-4 text-india-green" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <div className="bg-india-green/10 p-3 rounded-xl group-hover:bg-india-green/20 transition-colors">
              <Mail className="h-6 w-6 text-india-green" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Email us at</p>
              <div className="flex items-center gap-2">
                <a href="mailto:support@bharatstartupsolution.com" className="text-gray-900 hover:text-india-green font-medium break-all transition-colors">
                  support@bharatstartupsolution.com
                </a>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 flex-shrink-0"
                  onClick={() => handleCopy('support@bharatstartupsolution.com', 'email')}
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="h-4 w-4 text-india-green" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <div className="bg-brand-500/10 p-3 rounded-xl group-hover:bg-brand-500/20 transition-colors">
              <Clock className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Business Hours</p>
              <p className="text-gray-900 font-medium">
                Monday to Friday<br />
                9:00 AM to 6:00 PM IST
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            We aim to respond to all grievances within 24-48 business hours. Your concerns are important to us.
          </p>
        </div>
      </div>
    </Card>
  );
}
