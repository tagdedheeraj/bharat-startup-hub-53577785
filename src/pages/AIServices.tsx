
import React from 'react';
import AIServiceCard from '@/components/services/AIServiceCard';
import SectionHeading from '@/components/SectionHeading';
import { aiServices } from '@/data/aiServices';

const AIServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <SectionHeading
          heading="AI Services"
          subheading="NEXT-GEN AI SOLUTIONS"
          description="Transform your business with our cutting-edge AI technologies and solutions"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {aiServices.map((service, index) => (
            <AIServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              pricing={service.pricing}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our AI Services?</h3>
            <p className="text-gray-600">
              We combine cutting-edge AI technology with industry expertise to deliver solutions that drive real business value. 
              From custom chatbots to enterprise-grade AI applications, we help businesses leverage the power of artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;
