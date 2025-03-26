
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DollarSign, Users, Award, BarChart, Clock, ShieldCheck, Briefcase, TrendingUp, Building } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatisticItemProps {
  icon: React.ReactNode;
  value: string;
  description: string;
  color: string;
}

const StatisticItem = ({ icon, value, description, color }: StatisticItemProps) => (
  <div className={cn(
    "flex flex-col items-center justify-center p-6 rounded-xl h-full w-full transition-all duration-300",
    "border border-white/30 backdrop-blur-sm shadow-lg",
    `bg-gradient-to-br ${color} hover:shadow-xl hover:scale-[1.02]`
  )}>
    <div className="mb-3 p-3 bg-white/20 rounded-full">{icon}</div>
    <h3 className="text-3xl font-bold mb-1">{value}</h3>
    <p className="text-center text-sm">{description}</p>
  </div>
);

const statisticsData = [
  {
    icon: <Users className="h-6 w-6 text-white" />,
    value: "10,000+",
    description: "Reviews",
    color: "from-blue-700/90 to-blue-500/90 text-white"
  },
  {
    icon: <DollarSign className="h-6 w-6 text-white" />,
    value: "₹103 CR+",
    description: "Funds granted to agriculture and animal husbandry",
    color: "from-green-700/90 to-green-500/90 text-white"
  },
  {
    icon: <Building className="h-6 w-6 text-white" />,
    value: "227,000+",
    description: "Startups recognized by government",
    color: "from-violet-700/90 to-violet-500/90 text-white"
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    value: "₹57 CR+",
    description: "Seed funds secured by 320+ businesses",
    color: "from-amber-700/90 to-amber-500/90 text-white"
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    value: "1,500+",
    description: "Tax exemptions to clients",
    color: "from-red-700/90 to-red-500/90 text-white"
  },
  {
    icon: <Briefcase className="h-6 w-6 text-white" />,
    value: "50+",
    description: "Services",
    color: "from-cyan-700/90 to-cyan-500/90 text-white"
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    value: "50,000+",
    description: "Clients from various industries",
    color: "from-pink-700/90 to-pink-500/90 text-white"
  },
  {
    icon: <BarChart className="h-6 w-6 text-white" />,
    value: "750+",
    description: "Growth experts",
    color: "from-indigo-700/90 to-indigo-500/90 text-white"
  },
  {
    icon: <Award className="h-6 w-6 text-white" />,
    value: "4,000+",
    description: "Current projects",
    color: "from-emerald-700/90 to-emerald-500/90 text-white"
  },
  {
    icon: <Clock className="h-6 w-6 text-white" />,
    value: "7+",
    description: "Years of journey",
    color: "from-orange-700/90 to-orange-500/90 text-white"
  }
];

export default function StatisticsSlider() {
  const [api, setApi] = useState<any>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Set up auto-scrolling
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    // Update current slide index when scrolling
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Clean up
    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-16 bg-gradient-to-r from-india-blue/10 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text-india">
          Our Impact in Numbers
        </h2>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {statisticsData.map((item, index) => (
                <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-60">
                  <StatisticItem 
                    icon={item.icon} 
                    value={item.value} 
                    description={item.description} 
                    color={item.color}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="mt-8 flex justify-center gap-2">
              {statisticsData.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentSlide ? "bg-india-saffron" : "bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 hidden md:block">
              <CarouselPrevious className="bg-white/30 hover:bg-white/50" />
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden md:block">
              <CarouselNext className="bg-white/30 hover:bg-white/50" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
