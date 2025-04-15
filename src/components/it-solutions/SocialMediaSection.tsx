
import { motion } from "framer-motion";
import { SocialPackageCard } from "./social/SocialPackageCard";
import { ComparisonTable } from "./social/ComparisonTable";
import { socialPackages, comparisonFeatures } from "./social/socialPackageData";

const SocialMediaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Social Media Management</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional marketing services for your brand's social media presence. We specialize in content management, profile optimization, hashtag research, community building, and competitor analysis.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {socialPackages.map((pkg) => (
            <SocialPackageCard key={pkg.name} pkg={pkg} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Plan Comparison</h3>
          <ComparisonTable features={comparisonFeatures} />
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
