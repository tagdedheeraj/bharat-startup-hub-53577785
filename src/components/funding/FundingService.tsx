
import { useState } from 'react';
import { ArrowUpRight, IndianRupee, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FundingApplicationForm from './FundingApplicationForm';

interface FundingServiceProps {
  amount: string;
  title: string;
  delay?: number;
  index: number;
}

const FundingService = ({ amount, title, delay = 0, index }: FundingServiceProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  // Create alternating color schemes
  const colorVariants = [
    "from-brand-50 to-brand-100 border-brand-200",
    "from-blue-50 to-blue-100 border-blue-200",
    "from-green-50 to-green-100 border-green-200",
    "from-purple-50 to-purple-100 border-purple-200",
    "from-amber-50 to-amber-100 border-amber-200",
    "from-rose-50 to-rose-100 border-rose-200",
  ];
  
  const variant = colorVariants[index % colorVariants.length];
  
  const handleOpenModal = () => {
    console.log("Opening funding modal for:", title);
    
    toast({
      title: "Opening Application Form",
      description: `Preparing application for ${title}`,
      duration: 2000,
    });
    
    setOpen(true);
  };
  
  const handleSuccess = () => {
    setOpen(false);
  };
  
  return (
    <>
      <Card 
        className={cn(
          "h-full shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden rounded-xl border-2",
          `bg-gradient-to-br ${variant}`
        )}
        style={{ animationDelay: `${delay}ms` }}
      >
        <CardContent className="p-0">
          <div className="relative h-full">
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/5 to-transparent"></div>
            
            <div className="p-6 relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-2.5 shadow-md">
                  {index % 2 === 0 ? (
                    <IndianRupee className="h-6 w-6 text-brand-700" />
                  ) : (
                    <Award className="h-6 w-6 text-brand-700" />
                  )}
                </div>
                <div className="text-brand-700 font-bold rounded-full px-3 py-1 bg-white/80 backdrop-blur-sm inline-block text-sm shadow-sm">
                  ₹{amount}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>
              
              <div className="mt-auto pt-4">
                <Button 
                  variant="ghost"
                  className="group inline-flex items-center justify-between w-full text-brand-700 font-medium p-0 h-auto hover:bg-transparent"
                  onClick={handleOpenModal}
                >
                  <span>Avail Now</span>
                  <span className="flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-sm rounded-full h-8 w-8 transition-transform group-hover:scale-110">
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Separate dialog component outside the card */}
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
};

export default FundingService;
