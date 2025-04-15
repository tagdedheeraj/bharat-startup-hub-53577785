
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const SolutionCard = ({ title, description, icon: Icon, gradient }: SolutionCardProps) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className={`relative group`}
    >
      <div className={`absolute inset-0 rounded-2xl ${gradient} blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-300`} />
      <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50">
        <div className="flex flex-col h-full space-y-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-500/10 to-brand-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-brand-600" />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-brand-600 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 flex-grow">
            {description}
          </p>
          
          <Button 
            variant="ghost" 
            className="w-full justify-between mt-4 group/btn hover:bg-brand-50"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionCard;
