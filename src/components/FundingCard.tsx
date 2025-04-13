
import { useState } from 'react';
import { ArrowUpRight, IndianRupee } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FundingApplicationForm from './funding/FundingApplicationForm';

interface FundingCardProps {
  amount: string;
  title: string;
  description: string;
  to: string;
  delay?: number;
  variant?: 'default' | 'gradient' | 'outlined';
  index?: number;
}

const colorVariants = [
  "from-brand-50 to-brand-100 border-brand-200 hover:border-brand-400",
  "from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400",
  "from-green-50 to-green-100 border-green-200 hover:border-green-400",
  "from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400",
  "from-amber-50 to-amber-100 border-amber-200 hover:border-amber-400",
  "from-rose-50 to-rose-100 border-rose-200 hover:border-rose-400",
];

export default function FundingCard({ 
  amount, 
  title, 
  description, 
  to, 
  delay = 0, 
  variant = 'default',
  index = 0
}: FundingCardProps) {
  const [open, setOpen] = useState(false);
  const colorVariant = colorVariants[index % colorVariants.length];
  const { toast } = useToast();
  
  const handleAvailNowClick = () => {
    console.log("Opening funding modal for:", title);
    
    toast({
      title: "Opening Application Form",
      description: `Preparing application for ${title}`,
      duration: 2000,
    });
    
    // Set dialog state to open
    setOpen(true);
  };
  
  const handleSuccess = () => {
    setOpen(false);
  };
  
  return (
    <>
      <div 
        className={cn(
          "funding-card flex flex-col h-full animate-scaleIn rounded-xl p-6 shadow-md transition-all duration-300",
          variant === 'default' && "bg-white border border-gray-100 hover:border-india-saffron/50 hover:shadow-lg",
          variant === 'gradient' && `bg-gradient-to-br ${colorVariant} border-2`,
          variant === 'outlined' && "bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-india-saffron/50 hover:shadow-lg"
        )}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="bg-brand-50 text-brand-700 font-semibold rounded-lg px-4 py-2 inline-block mb-4 text-sm flex items-center">
          <IndianRupee className="h-4 w-4 mr-1" />
          <span>Up to {amount}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        
        <Button 
          variant="ghost"
          className="mt-auto group inline-flex items-center justify-between w-full text-brand-700 font-medium p-0 h-auto hover:bg-transparent"
          onClick={handleAvailNowClick}
        >
          <span>Avail Now</span>
          <span className="flex items-center justify-center bg-gray-100 rounded-full h-8 w-8 transition-transform group-hover:scale-110 group-hover:bg-brand-50">
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Button>
      </div>
      
      {/* Separate dialog component outside the funding card */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Apply for Funding</DialogTitle>
            <DialogDescription>
              Complete the form below to apply for funding.
            </DialogDescription>
          </DialogHeader>
          <FundingApplicationForm 
            fundingTitle={title}
            fundingAmount={amount}
            onSuccess={handleSuccess}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
