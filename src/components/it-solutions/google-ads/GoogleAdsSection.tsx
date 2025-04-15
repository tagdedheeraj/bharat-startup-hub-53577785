
import { motion } from "framer-motion";
import { GoogleAdsPackageCard } from "./GoogleAdsPackageCard";
import { ComparisonTable } from "./ComparisonTable";
import { googleAdsPackages, comparisonFeatures } from "./googleAdsData";
import { TrendingUp, BarChart, DollarSign, Search } from "lucide-react";

const GoogleAdsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Traffic",
      description: "Drive targeted visitors to your website"
    },
    {
      icon: Search,
      title: "Quality Leads",
      description: "Attract more qualified potential customers"
    },
    {
      icon: BarChart,
      title: "Better Performance",
      description: "Improve ad relevance & quality scores"
    },
    {
      icon: DollarSign,
      title: "Higher ROI",
      description: "Lower cost per click & better returns"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Google Ads PPC Campaigns</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional Google AdWords PPC campaign setup and management to drive targeted traffic 
            to your website and maximize your return on ad spend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-50">
                {<benefit.icon className="w-6 h-6 text-brand-600" />}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

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
          {googleAdsPackages.map((pkg) => (
            <GoogleAdsPackageCard key={pkg.name} pkg={pkg} />
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

export default GoogleAdsSection;
