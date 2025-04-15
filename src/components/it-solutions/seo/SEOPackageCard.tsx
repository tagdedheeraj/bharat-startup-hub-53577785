
import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOPackage } from "./seoPackageData";

export const SEOPackageCard = ({ pkg }: { pkg: SEOPackage }) => {
  return (
    <motion.div
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
  );
};
