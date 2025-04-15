
import { motion } from "framer-motion";
import { seoPackages, comparisonFeatures } from "./seo/seoPackageData";
import { SEOPackageCard } from "./seo/SEOPackageCard";
import { ComparisonTable } from "./seo/ComparisonTable";

const SEOPackagesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">SEO Backlink Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Boost your website's search engine rankings with our powerful SEO backlink packages. Each plan is designed to improve your site's authority and visibility.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {seoPackages.map((pkg) => (
            <SEOPackageCard key={pkg.name} pkg={pkg} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Detailed Package Comparison</h3>
          <ComparisonTable features={comparisonFeatures} />
        </motion.div>
      </div>
    </section>
  );
};

export default SEOPackagesSection;
