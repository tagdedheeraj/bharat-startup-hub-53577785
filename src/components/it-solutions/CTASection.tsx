
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Lightbulb, Wrench, Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <motion.div 
      className="relative mt-16 max-w-4xl mx-auto text-center px-6 py-12 rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {/* Background with gradient and glass effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 via-brand-400/10 to-brand-600/10 backdrop-blur-sm" />
      
      {/* Decorative icons */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-4 left-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Lightbulb className="w-8 h-8 text-brand-600/20" />
        </motion.div>
        <motion.div 
          className="absolute bottom-4 right-8"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Wrench className="w-8 h-8 text-brand-600/20" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-6 inline-flex items-center justify-center gap-2 bg-brand-50 px-4 py-2 rounded-full"
        >
          <Rocket className="w-4 h-4 text-brand-600" />
          <span className="text-sm font-medium text-brand-600">Custom Solutions</span>
        </motion.div>

        <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
          Need a Custom IT Solution?
        </h3>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We provide tailored IT solutions to meet your specific business requirements. Our team of experts will work closely with you to understand your needs and deliver the perfect solution.
        </p>

        <Button 
          size="lg"
          className="bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden group"
          onClick={() => window.location.href = '/contact'}
        >
          <span className="relative z-10">Get in Touch</span>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Button>
      </div>
    </motion.div>
  );
};

export default CTASection;
