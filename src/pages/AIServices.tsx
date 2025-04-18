
import React from 'react';
import { Brain, Bot, Code, Image, Video, Music, Bot as AIBot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from '@/components/SectionHeading';

type IconComponentProps = React.ComponentProps<typeof Brain>;
type IconComponentType = React.ComponentType<IconComponentProps>;

const AIServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  pricing 
}: { 
  icon: IconComponentType, 
  title: string, 
  description: string, 
  pricing: { name: string; price: string; features: string[] }[] 
}) => (
  <Card className="bg-white/80 backdrop-blur-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
          <Icon className="h-6 w-6" />
        </div>
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
              <span className="text-purple-600 font-bold">{plan.price}</span>
            </div>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
        Get Started
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
    {
      icon: Image,
      title: "AI Fashion Model Generation",
      description: "Showcase your clothing line on custom AI models for marketing and e-commerce.",
      pricing: [
        {
          name: "Basic",
          price: "₹5,241",
          features: [
            "Simple T-Shirt or Hoodie",
            "1 Front & 1 Back Image",
            "2-day delivery"
          ]
        },
        {
          name: "Standard",
          price: "₹7,500",
          features: [
            "Polos, underwear, complex clothing",
            "1 Front & 1 Back Image",
            "3-day delivery"
          ]
        },
        {
          name: "Premium",
          price: "₹12,000",
          features: [
            "Custom clothing designs",
            "Multiple angles",
            "4-day delivery"
          ]
        }
      ]
    },
    {
      icon: Video,
      title: "AI Video Spokesperson",
      description: "Create professional talking head videos using AI avatars or talking photos.",
      pricing: [
        {
          name: "Basic",
          price: "₹1,900",
          features: [
            "1 minute video",
            "Custom AI Avatar + Voiceover",
            "1-day delivery"
          ]
        },
        {
          name: "Standard",
          price: "₹2,500",
          features: [
            "2 minute video",
            "Custom AI Avatar + Voiceover",
            "2-day delivery"
          ]
        },
        {
          name: "Premium",
          price: "₹3,800",
          features: [
            "4 minute video",
            "Custom Avatar + Premium Voiceover",
            "3-day delivery"
          ]
        }
      ]
    },
    {
      icon: Brain,
      title: "Custom AI Influencer",
      description: "Train a custom AI influencer for your brand's marketing and social media.",
      pricing: [
        {
          name: "Basic",
          price: "₹18,000",
          features: [
            "Custom Flux LoRA",
            "ComfyUI workflow",
            "4-day delivery"
          ]
        },
        {
          name: "Standard",
          price: "₹22,000",
          features: [
            "Custom Flux LoRA",
            "2 revisions",
            "7-day delivery"
          ]
        },
        {
          name: "Premium",
          price: "₹28,000",
          features: [
            "Custom Flux LoRA",
            "3 revisions",
            "10-day delivery"
          ]
        }
      ]
    },
    {
      icon: Music,
      title: "AI Music Composition",
      description: "Custom AI-composed music for any project, mood, or occasion.",
      pricing: [
        {
          name: "Basic",
          price: "₹6,000",
          features: [
            "1-minute AI track",
            "MP3 file format",
            "2-day delivery"
          ]
        },
        {
          name: "Standard",
          price: "₹11,000",
          features: [
            "2-3 minute AI track",
            "MP3 & WAV formats",
            "3-day delivery"
          ]
        },
        {
          name: "Premium",
          price: "₹19,000",
          features: [
            "5+ minute AI track",
            "Advanced mixing & mastering",
            "4-day delivery"
          ]
        }
      ]
    }
  ];

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
