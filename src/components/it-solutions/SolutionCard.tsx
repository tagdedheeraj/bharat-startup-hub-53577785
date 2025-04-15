
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
      className={`relative group rounded-2xl bg-gradient-to-br ${gradient} p-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
    >
      <div className="h-full bg-white rounded-xl p-6 space-y-4">
        <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-brand-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-brand-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
        <div className="pt-4">
          <Button 
            variant="ghost" 
            className="group/btn w-full justify-between hover:bg-brand-50"
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
