
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FundingCardProps {
  amount: string;
  title: string;
  description: string;
  to: string;
  delay?: number;
}

export default function FundingCard({ amount, title, description, to, delay = 0 }: FundingCardProps) {
  return (
    <div 
      className="funding-card flex flex-col h-full animate-scaleIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-brand-50 text-brand-700 font-semibold rounded-lg px-4 py-2 inline-block mb-4 text-sm">
        Up to ₹{amount}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link to={to} className="mt-auto group inline-flex items-center text-brand-700 font-medium">
        Learn More
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
