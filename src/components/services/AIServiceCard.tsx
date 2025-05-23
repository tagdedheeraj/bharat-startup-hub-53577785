
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PricingPlan } from '@/types/services';
import type { LucideIcon } from 'lucide-react';
import FundingApplicationModal from '@/components/funding/FundingApplicationModal';

interface AIServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  pricing: PricingPlan[];
}

const AIServiceCard = ({ icon: Icon, title, description, pricing }: AIServiceCardProps) => {
  const [open, setOpen] = useState(false);
  
  const handleOpenModal = () => {
    console.log("Opening application form for:", title);
    setOpen(true);
  };

  return (
    <>
      <Card className="bg-white/80 backdrop-blur-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
              <Icon className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-3">
            {pricing.map((plan, index) => (
              <div key={index} className="border-t border-gray-100 pt-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-700">{plan.name}</h4>
                  <span className="text-purple-600 font-bold">{plan.price}</span>
                </div>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-purple-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Button 
            className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white"
            onClick={handleOpenModal}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
      
      {/* Add the FundingApplicationModal component */}
      <FundingApplicationModal
        open={open}
        onOpenChange={setOpen}
        fundingTitle={title}
        fundingAmount={pricing[0]?.price || "Custom"}
      />
    </>
  );
};

export default AIServiceCard;
