
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <motion.div 
      className="mt-16 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
        Need a Custom IT Solution?
      </h3>
      <p className="text-gray-600 mb-8">
        We provide tailored IT solutions to meet your specific business requirements. Our team of experts will work closely with you to understand your needs and deliver the perfect solution.
      </p>
      <Button 
        size="lg"
        className="bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
        onClick={() => window.location.href = '/contact'}
      >
        Get in Touch
      </Button>
    </motion.div>
  );
};

export default CTASection;
