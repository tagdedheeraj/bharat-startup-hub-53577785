
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import SolutionCard from "@/components/it-solutions/SolutionCard";
import CTASection from "@/components/it-solutions/CTASection";
import { solutions } from "@/components/it-solutions/solutionsData";

const ITSolutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
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
          <SolutionCard
            key={index}
            {...solution}
          />
        ))}
      </motion.div>

      <CTASection />
    </div>
  );
};

export default ITSolutions;
