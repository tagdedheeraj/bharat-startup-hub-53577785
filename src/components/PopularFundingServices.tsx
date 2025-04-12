
import { useState } from 'react';
import { ArrowRight, IndianRupee, ArrowUpRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import FundingForm from './FundingForm';

interface FundingServiceProps {
  amount: string;
  title: string;
  delay?: number;
  index: number;
}

const FundingService = ({ amount, title, delay = 0, index }: FundingServiceProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
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
  
  return (
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
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="ghost"
                    className="group inline-flex items-center justify-between w-full text-brand-700 font-medium p-0 h-auto hover:bg-transparent"
                  >
                    <span>Avail Now</span>
                    <span className="flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-sm rounded-full h-8 w-8 transition-transform group-hover:scale-110">
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Apply for Funding</DialogTitle>
                    <DialogDescription className="text-sm text-gray-500">
                      Complete the form below to apply for {title} funding.
                    </DialogDescription>
                  </DialogHeader>
                  <FundingForm 
                    fundingTitle={title} 
                    fundingAmount={amount} 
                    onSubmitSuccess={() => setIsDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function PopularFundingServices() {
  const services = [
    { amount: "1 CR", title: "Seed Support Scheme" },
    { amount: "50 Lac", title: "Grant for Textile" },
    { amount: "5 CR", title: "MSME Loans" },
    { amount: "1 CR", title: "NBFC Loans" },
    { amount: "2 CR", title: "NAIFF Loans" },
    { amount: "3 CR", title: "Funds for SC ST & OBC Entrepreneurs" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="MOST POPULAR SERVICES"
          heading="Funding Options For Your Business"
          description="Explore our most sought-after funding services designed to meet the diverse needs of businesses across various sectors."
        />
        
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fadeIn" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <FundingService
                amount={service.amount}
                title={service.title}
                index={index}
              />
            </div>
          ))}
        </div>
        
        <div className="lg:hidden mb-12">
          <Carousel 
            opts={{ 
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 pl-4 pr-2">
                  <FundingService
                    amount={service.amount}
                    title={service.title}
                    index={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative static transform-none mx-0" />
              <CarouselNext className="relative static transform-none mx-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center animate-fadeIn" style={{ animationDelay: "800ms" }}>
          <Link 
            to="/services/funding-consultation" 
            className="btn-primary inline-flex items-center hover:scale-105 transition-transform duration-300"
          >
            View All Funding Options
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
