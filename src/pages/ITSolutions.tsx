
import { Server, Database, Code, Cloud, Lock, Smartphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const ITSolutions = () => {
  const solutions = [
    {
      title: "Web Development",
      description: "Custom web application development using modern frameworks and technologies.",
      icon: Code,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: Smartphone,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure setup, migration, and management.",
      icon: Cloud,
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Database Management",
      description: "Database design, optimization, and administration services.",
      icon: Database,
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Server Management",
      description: "Server setup, maintenance, and performance optimization.",
      icon: Server,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets.",
      icon: Lock,
      gradient: "from-red-500/20 to-rose-500/20"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <SectionHeading
        heading="IT Solutions"
        subheading="Comprehensive IT services for businesses of all sizes"
        align="center"
      />
      
      <motion.div 
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {solutions.map((solution, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`relative group rounded-2xl bg-gradient-to-br ${solution.gradient} p-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
          >
            <div className="h-full bg-white rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-brand-600 transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-600">
                {solution.description}
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
        ))}
      </motion.div>

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
    </div>
  );
};

export default ITSolutions;
