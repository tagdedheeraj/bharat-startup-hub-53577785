import { motion } from "framer-motion";
import { Link2, Check, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

interface PackageFeature {
  text: string;
}

interface SEOPackage {
  name: string;
  description: string;
  price: string;
  delivery: string;
  features: PackageFeature[];
  gradient: string;
}

const seoPackages: SEOPackage[] = [
  {
    name: "BoostStarter",
    description: "250+ Diversified SEO Backlinks Pack",
    price: "₹8,384",
    delivery: "7 days delivery",
    features: [
      { text: "100 Tier 1 Backlinks" },
      { text: "150 Tier 2 Backlinks" },
      { text: "Drip-Feed Strategy" },
      { text: "E-E-A-T High Authority Links" }
    ],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "RankRise",
    description: "500+ Diversified SEO Backlinks Pack",
    price: "₹14,900",
    delivery: "14 days delivery",
    features: [
      { text: "200 Tier 1 Backlinks" },
      { text: "300 Tier 2 Backlinks" },
      { text: "Drip-Feed Strategy" },
      { text: "E-E-A-T High Authority Links" },
      { text: "Priority Processing" }
    ],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "DominanceMax",
    description: "750+ Diversified SEO Backlinks Pack",
    price: "₹34,945",
    delivery: "21 days delivery",
    features: [
      { text: "300 Tier 1 Backlinks" },
      { text: "450 Tier 2 Backlinks" },
      { text: "Drip-Feed Strategy" },
      { text: "E-E-A-T High Authority Links" },
      { text: "Priority Processing" },
      { text: "Monthly Report" }
    ],
    gradient: "from-amber-500/20 to-orange-500/20"
  }
];

const comparisonFeatures = [
  { feature: "Total Backlinks", boostStarter: "250+", rankRise: "500+", dominanceMax: "750+" },
  { feature: "Tier 1 Backlinks", boostStarter: "100", rankRise: "200", dominanceMax: "300" },
  { feature: "Tier 2 Backlinks", boostStarter: "150", rankRise: "300", dominanceMax: "450" },
  { feature: "Domain Authority", boostStarter: "DA 20-40", rankRise: "DA 30-50", dominanceMax: "DA 40-60" },
  { feature: "Drip-Feed Strategy", boostStarter: true, rankRise: true, dominanceMax: true },
  { feature: "E-E-A-T High Authority Links", boostStarter: true, rankRise: true, dominanceMax: true },
  { feature: "Priority Processing", boostStarter: false, rankRise: true, dominanceMax: true },
  { feature: "Monthly Report", boostStarter: false, rankRise: false, dominanceMax: true },
  { feature: "Delivery Time", boostStarter: "7 days", rankRise: "14 days", dominanceMax: "21 days" },
  { feature: "Support", boostStarter: "Email", rankRise: "Email + Chat", dominanceMax: "Priority Support" },
  { feature: "Link Building Strategy", boostStarter: "Basic", rankRise: "Advanced", dominanceMax: "Premium" },
  { feature: "Niche Relevancy", boostStarter: "Medium", rankRise: "High", dominanceMax: "Very High" }
];

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
          {seoPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className={`bg-gradient-to-br ${pkg.gradient} p-1 rounded-xl group hover:scale-[1.02] transition-transform duration-300`}
            >
              <Card className="h-full bg-white p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                    <Link2 className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{pkg.name}</h3>
                    <p className="text-sm text-gray-600">{pkg.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-600">{pkg.delivery}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="mr-2 text-brand-600">•</span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Detailed Package Comparison</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-1/4">Features</TableHead>
                  <TableHead>BoostStarter</TableHead>
                  <TableHead>RankRise</TableHead>
                  <TableHead>DominanceMax</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonFeatures.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <TableCell className="font-medium">{item.feature}</TableCell>
                    <TableCell>
                      {typeof item.boostStarter === 'boolean' ? (
                        item.boostStarter ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Minus className="w-5 h-5 text-gray-400" />
                        )
                      ) : (
                        item.boostStarter
                      )}
                    </TableCell>
                    <TableCell>
                      {typeof item.rankRise === 'boolean' ? (
                        item.rankRise ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Minus className="w-5 h-5 text-gray-400" />
                        )
                      ) : (
                        item.rankRise
                      )}
                    </TableCell>
                    <TableCell>
                      {typeof item.dominanceMax === 'boolean' ? (
                        item.dominanceMax ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Minus className="w-5 h-5 text-gray-400" />
                        )
                      ) : (
                        item.dominanceMax
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOPackagesSection;
