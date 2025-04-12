
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import FundingService from './FundingService';

interface FundingServiceCarouselProps {
  services: Array<{
    amount: string;
    title: string;
  }>;
}

const FundingServiceCarousel = ({ services }: FundingServiceCarouselProps) => {
  return (
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
  );
};

export default FundingServiceCarousel;
