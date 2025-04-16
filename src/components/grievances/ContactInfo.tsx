
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  return (
    <Card className="bg-white">
      <CardContent className="p-6 space-y-6">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-brand-50 p-2 rounded-lg">
              <Phone className="h-5 w-5 text-brand-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call us at</p>
              <a href="tel:+919081622284" className="text-brand-600 hover:text-brand-700 font-medium">
                +91 90816 22284
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-brand-50 p-2 rounded-lg">
              <Mail className="h-5 w-5 text-brand-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email us at</p>
              <a href="mailto:support@bharatstartupsolution.com" className="text-brand-600 hover:text-brand-700 font-medium">
                support@bharatstartupsolution.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Our support team is available Monday to Friday, 9:00 AM to 6:00 PM IST.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
