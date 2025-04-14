
import { Link } from 'react-router-dom';
import { Phone, Mail, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SupportSection() {
  return (
    <div className="mt-auto px-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">Need Help?</h4>
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full justify-start gap-2"
            asChild
          >
            <Link to="/contact">
              <Phone size={16} />
              <span>Contact Us</span>
            </Link>
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-2"
            asChild
          >
            <a href="mailto:support@bharatstartup.com">
              <Mail size={16} />
              <span>Email Support</span>
            </a>
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-2"
            asChild
          >
            <a href="https://wa.me/919876543210">
              <LifeBuoy size={16} />
              <span>Call Support</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
