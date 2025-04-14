
import FundingService from './FundingService';

interface FundingServiceGridProps {
  services: Array<{
    amount: string;
    title: string;
  }>;
}

const FundingServiceGrid = ({ services }: FundingServiceGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-6">
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
  );
};

export default FundingServiceGrid;
