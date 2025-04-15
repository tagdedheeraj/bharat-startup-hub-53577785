
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import SolutionCard from "@/components/it-solutions/SolutionCard";
import CTASection from "@/components/it-solutions/CTASection";
import TechStackSection from "@/components/it-solutions/TechStackSection";
import SEOPackagesSection from "@/components/it-solutions/SEOPackagesSection";
import SocialMediaSection from "@/components/it-solutions/SocialMediaSection";
import GoogleAdsSection from "@/components/it-solutions/google-ads/GoogleAdsSection";
import { solutions } from "@/components/it-solutions/solutionsData";
import SectionImage from "@/components/shared/SectionImage";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-brand-100/50 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 bg-clip-text text-transparent mb-6">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Comprehensive IT solutions tailored for businesses of all sizes. We bring innovation, expertise, and reliability to every project.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 container mx-auto">
        <SectionHeading
          heading="Our Services"
          subheading="IT Solutions"
          description="Explore our comprehensive range of IT services designed to elevate your business"
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
      </div>

      {/* Other Sections with Enhanced Spacing */}
      <div className="space-y-20">
        <SEOPackagesSection />
        <SocialMediaSection />
        <GoogleAdsSection />
        <TechStackSection />
        <CTASection />
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default ITSolutions;
