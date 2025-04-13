
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FundingApplicationForm from './funding/FundingApplicationForm';
import { useToast } from '@/hooks/use-toast';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  variant?: 'default' | 'outlined' | 'gradient';
  index?: number;
}

const colorVariants = [
  "from-brand-50 to-brand-100 border-brand-200 hover:border-brand-400 hover:shadow-brand-100/40",
  "from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400 hover:shadow-blue-100/40",
  "from-green-50 to-green-100 border-green-200 hover:border-green-400 hover:shadow-green-100/40",
  "from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400 hover:shadow-purple-100/40",
  "from-amber-50 to-amber-100 border-amber-200 hover:border-amber-400 hover:shadow-amber-100/40",
  "from-rose-50 to-rose-100 border-rose-200 hover:border-rose-400 hover:shadow-rose-100/40",
  "from-cyan-50 to-cyan-100 border-cyan-200 hover:border-cyan-400 hover:shadow-cyan-100/40",
  "from-teal-50 to-teal-100 border-teal-200 hover:border-teal-400 hover:shadow-teal-100/40"
];

export default function ExpertiseCard({ 
  title, 
  description, 
  icon, 
  delay = 0, 
  variant = 'default',
  index = 0
}: ExpertiseCardProps) {
  const [open, setOpen] = useState(false);
  const colorVariant = colorVariants[index % colorVariants.length];
  const { toast } = useToast();
  
  const handleExploreClick = () => {
    console.log("Opening expertise dialog for:", title);
    
    toast({
      title: "Opening Form",
      description: `Preparing information form for ${title}`,
      duration: 2000,
    });
    
    setOpen(true);
  };
  
  const handleFormSuccess = () => {
    setOpen(false);
  };
  
  return (
    <>
      <div 
        className={cn(
          "expertise-card flex flex-col h-full animate-fadeIn rounded-xl p-5 shadow-sm transition-all duration-300",
          variant === 'default' && "bg-white border border-gray-100 hover:border-india-saffron/50 hover:shadow-lg",
          variant === 'gradient' && `bg-gradient-to-tr ${colorVariant} border`,
          variant === 'outlined' && "bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-india-saffron/50 hover:shadow-lg"
        )}
        style={{ animationDelay: `${delay}ms` }}
      >
        {icon && (
          <div className="mb-3 text-brand-600">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        
        <button 
          className="mt-auto group inline-flex items-center text-sm justify-between w-full text-brand-700 font-medium"
          onClick={handleExploreClick}
        >
          <span>Explore</span>
          <span className="flex items-center justify-center bg-gray-100 rounded-full h-7 w-7 transition-transform group-hover:scale-110 group-hover:bg-brand-50">
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </button>
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Explore {title}</DialogTitle>
            <DialogDescription>
              Fill out the form below to learn more about our {title} offerings.
            </DialogDescription>
          </DialogHeader>
          <FundingApplicationForm 
            fundingTitle={title}
            fundingAmount="Contact for pricing"
            onSuccess={handleFormSuccess}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
