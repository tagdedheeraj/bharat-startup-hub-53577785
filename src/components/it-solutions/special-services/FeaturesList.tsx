
import { Check } from 'lucide-react';

interface FeaturesListProps {
  features: string[];
}

export default function FeaturesList({ features }: FeaturesListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="flex items-center gap-2 bg-white/20 rounded-lg p-3 backdrop-blur-sm"
        >
          <Check className="text-india-saffron h-5 w-5 flex-shrink-0" />
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  );
}
