
import { motion } from "framer-motion";
import { MessageSquare, Image, Calendar, Hash, Video, Users, Check, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

interface PackageFeature {
  text: string;
}

interface SocialPackage {
  name: string;
  description: string;
  price: string;
  delivery: string;
  features: PackageFeature[];
  gradient: string;
}

const socialPackages: SocialPackage[] = [
  {
    name: "Weekly Management",
    description: "7 Days Social Media Management",
    price: "₹3,700",
    delivery: "7 days delivery",
    features: [
      { text: "7 Image Posts/Week" },
      { text: "Profile Optimization" },
      { text: "Bio & Story Highlights" },
      { text: "Hashtag Research" }
    ],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Bi-Weekly Management",
    description: "15 Days Social Media Management",
    price: "₹7,500",
    delivery: "14 days delivery",
    features: [
      { text: "15 Image Posts" },
      { text: "Carousel Posts" },
      { text: "Content Scheduling" },
      { text: "Profile Optimization" },
      { text: "Hashtag Research" }
    ],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "Monthly Management",
    description: "30 Days Social Media Management",
    price: "₹9,999",
    delivery: "30 days delivery",
    features: [
      { text: "30 Image Posts" },
      { text: "4 Carousel Posts" },
      { text: "Video Content" },
      { text: "Content Scheduling" },
      { text: "Hashtag Research" },
      { text: "Community Building" }
    ],
    gradient: "from-amber-500/20 to-orange-500/20"
  }
];

const comparisonFeatures = [
  { feature: "Total Posts", weekly: "7", biWeekly: "15", monthly: "30" },
  { feature: "Image Posts", weekly: "7", biWeekly: "15", monthly: "30" },
  { feature: "Carousel Posts", weekly: false, biWeekly: true, monthly: "4" },
  { feature: "Video Content", weekly: false, biWeekly: false, monthly: true },
  { feature: "Profile Optimization", weekly: true, biWeekly: true, monthly: true },
  { feature: "Bio & Story Highlights", weekly: true, biWeekly: true, monthly: true },
  { feature: "Content Scheduling", weekly: false, biWeekly: true, monthly: true },
  { feature: "Hashtag Research", weekly: true, biWeekly: true, monthly: true },
  { feature: "Community Building", weekly: false, biWeekly: false, monthly: true },
  { feature: "Delivery Time", weekly: "7 days", biWeekly: "14 days", monthly: "30 days" },
  { feature: "Content Approval", weekly: true, biWeekly: true, monthly: true },
  { feature: "Analytics Report", weekly: false, biWeekly: false, monthly: true }
];

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
          {socialPackages.map((pkg, index) => (
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
                    <MessageSquare className="w-6 h-6 text-brand-600" />
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
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Plan Comparison</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-1/4">Features</TableHead>
                  <TableHead>Weekly</TableHead>
                  <TableHead>Bi-Weekly</TableHead>
                  <TableHead>Monthly</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonFeatures.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <TableCell className="font-medium">{item.feature}</TableCell>
                    <TableCell>
                      {typeof item.weekly === 'boolean' ? (
                        item.weekly ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Minus className="w-5 h-5 text-gray-400" />
                        )
                      ) : (
                        item.weekly
                      )}
                    </TableCell>
                    <TableCell>
                      {typeof item.biWeekly === 'boolean' ? (
                        item.biWeekly ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Minus className="w-5 h-5 text-gray-400" />
                        )
                      ) : (
                        item.biWeekly
                      )}
                    </TableCell>
                    <TableCell>
                      {typeof item.monthly === 'boolean' ? (
                        item.monthly ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Minus className="w-5 h-5 text-gray-400" />
                        )
                      ) : (
                        item.monthly
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

export default SocialMediaSection;
