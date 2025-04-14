
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CAServiceTemplateProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  description: string;
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  color: string;
}

export default function CAServiceTemplate({
  title,
  subtitle,
  icon,
  description,
  benefits,
  process,
  color
}: CAServiceTemplateProps) {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <Link to="/ca-services" className="inline-flex items-center text-muted-foreground hover:text-india-saffron mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to CA Services
        </Link>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <SectionHeading
              heading={title}
              description={subtitle}
              centered={false}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground">{description}</p>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-india-saffron mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-96 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className={`overflow-hidden ${color} border-india-white/30`}>
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="bg-white rounded-full p-4 mb-6 shadow-md">
                    {icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>
                  <Button className="w-full bg-gradient-to-r from-india-saffron to-india-green text-white" asChild>
                    <Link to="/contact">Enquire Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <Card className="h-full border-muted/60 hover:border-india-saffron/50 transition-colors group">
                  <CardContent className="p-6">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center bg-india-saffron/10 mb-4 group-hover:bg-india-saffron/20 transition-colors">
                      <span className="font-bold text-india-saffron">{index + 1}</span>
                    </div>
                    <h4 className="font-semibold mb-2 group-hover:text-india-saffron transition-colors">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-2xl mx-auto bg-india-white/20 backdrop-blur-sm p-8 rounded-xl border border-india-white/20 shadow-lg"
          >
            <h3 className="text-xl font-medium mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Our team of experts is ready to help you with your {title.toLowerCase()} needs. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-india-saffron text-india-saffron hover:bg-india-saffron/10">
                <Link to="/ca-services">Explore Other Services</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-india-saffron to-india-green text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
