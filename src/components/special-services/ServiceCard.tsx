
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  fullTitle: string;
  icon: LucideIcon;
  definition: string;
  features: string[];
  industries: string[];
}

const ServiceCard = ({ title, fullTitle, icon: Icon, definition, features, industries }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border-2 hover:border-brand-500/20 transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-brand-50 to-transparent">
          <div className="flex items-center gap-3">
            <Icon className="h-8 w-8 text-brand-600" />
            <div>
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
              <CardDescription className="text-sm">{fullTitle}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-600 mb-6">{definition}</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-brand-700 mb-2">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="bg-brand-50 text-brand-700">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-brand-700 mb-2">Industries</h4>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <Badge key={index} variant="outline" className="border-brand-200">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
