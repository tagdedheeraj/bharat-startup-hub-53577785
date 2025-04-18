
import React from 'react';
import { Brain, Bot, Code, Image, Video, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from '@/components/SectionHeading';

const AIServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  pricing 
}: { 
  icon: React.ComponentType<{ size?: number }>, 
  title: string, 
  description: string, 
  pricing: { name: string; price: string; features: string[] }[] 
}) => (
  <Card className="bg-white/80 backdrop-blur-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-3">
        <Icon size={32} className="text-brand-500 group-hover:scale-110 transition-transform" />
        <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-3">
        {pricing.map((plan, index) => (
          <div key={index} className="border-t border-gray-100 pt-3">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-gray-700">{plan.name}</h4>
              <span className="text-brand-600 font-bold">{plan.price}</span>
            </div>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-brand-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Button variant="brand" className="w-full mt-4 group">
        Get Started
        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </Button>
    </CardContent>
  </Card>
);

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbot Development",
      description: "Create intelligent, context-aware chatbots using advanced language models.",
      pricing: [
        {
          name: "Basic Plan",
          price: "₹30,067",
          features: [
            "AI Blog Writing",
            "Custom GPT Writing Tool",
            "7-day delivery"
          ]
        },
        {
          name: "Standard Plan",
          price: "₹50,500",
          features: [
            "Chatbot trained on custom data",
            "PDF/Doc/Web Page Integration",
            "7-day delivery"
          ]
        },
        {
          name: "Premium Plan",
          price: "₹1,20,000",
          features: [
            "AI Writing SaaS",
            "Custom Templates",
            "DALL-E Integration",
            "30-day delivery"
          ]
        }
      ]
    },
    {
      icon: Code,
      title: "AI Web App Development",
      description: "Full-stack web applications with cutting-edge AI integration.",
      pricing: [
        {
          name: "Basic",
          price: "$15,000",
          features: [
            "2-3 months development",
            "Fully-fledged web app",
            "Basic AI integration"
          ]
        },
        {
          name: "Standard",
          price: "$25,000-$35,000",
          features: [
            "4-6 months development",
            "Single-tenant or SaaS apps",
            "Multiple AI integrations"
          ]
        },
        {
          name: "Premium",
          price: "$40,000-$50,000",
          features: [
            "6-12 months development",
            "Advanced MLOps/LLMOps",
            "Enhanced security"
          ]
        }
      ]
    },
    // Add other services similarly
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading 
        title="AI Services" 
        subtitle="Transforming Ideas into Intelligent Solutions" 
        description="Cutting-edge AI technologies to elevate your business" 
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <AIServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            pricing={service.pricing}
          />
        ))}
      </div>
    </div>
  );
};

export default AIServicesPage;
