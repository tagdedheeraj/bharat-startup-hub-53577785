
import { Bot, Brain, Code, Music, PersonStanding, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeading from '@/components/SectionHeading';

interface ServiceTier {
  name: string;
  price: string;
  description: string;
  deliveryTime: string;
  features: string[];
}

interface AIService {
  title: string;
  icon: React.ElementType;
  description: string;
  tiers: ServiceTier[];
}

const services: AIService[] = [
  {
    title: "AI-Powered Chatbot Development",
    icon: Bot,
    description: "Create sophisticated chatbots using cutting-edge language models like GPT-4o, Claude, Gemini, and more. Perfect for customer service, content generation, and automated assistance.",
    tiers: [
      {
        name: "Basic",
        price: "₹30,067",
        description: "AI Blog Writing (Personal Use)",
        deliveryTime: "7-day delivery",
        features: [
          "Ready-made AI Writer web app",
          "Custom GPT writing tool",
          "Bulk article writer for WordPress",
          "Basic customization options"
        ]
      },
      {
        name: "Standard",
        price: "₹50,500",
        description: "Custom Data-Trained Chatbot",
        deliveryTime: "7-day delivery",
        features: [
          "Chatbot trained on your data (PDF, DOC)",
          "Web pages integration",
          "ChatGPT and GPT-4 implementation",
          "Enhanced customization"
        ]
      },
      {
        name: "Premium",
        price: "₹120,000",
        description: "AI Writing (SaaS) Business",
        deliveryTime: "30-day delivery",
        features: [
          "Custom templates integration",
          "DALL-E image generation",
          "ChatGPT advanced features",
          "Stripe payment integration",
          "Modern UI design",
          "RAG implementation"
        ]
      }
    ]
  },
  {
    title: "Full-Stack AI Application Development",
    icon: Code,
    description: "End-to-end development of AI-powered applications, from concept to deployment. We create scalable, production-ready solutions tailored to your business needs.",
    tiers: [
      {
        name: "Basic",
        price: "$15,000",
        description: "Web App with AI Integration",
        deliveryTime: "2-3 months delivery",
        features: [
          "Full-stack web application",
          "Basic AI model integration",
          "User authentication",
          "Essential features implementation"
        ]
      },
      {
        name: "Standard",
        price: "$25,000 - $35,000",
        description: "Advanced AI Platform",
        deliveryTime: "4-6 months delivery",
        features: [
          "Single-tenant or SaaS platform",
          "Multiple AI model integration",
          "Mobile app development",
          "Advanced security features"
        ]
      },
      {
        name: "Premium",
        price: "$40,000 - $50,000",
        description: "Enterprise AI Solution",
        deliveryTime: "6-12 months delivery",
        features: [
          "Dynamic MLOps/LLMOps pipelines",
          "Distributed background jobs",
          "Enterprise-grade security",
          "Latest AI advancements integration",
          "Comprehensive documentation"
        ]
      }
    ]
  },
  {
    title: "AI Fashion Model Generation",
    icon: PersonStanding,
    description: "Transform your clothing designs into professional fashion photography using AI. Create stunning product visualizations for e-commerce, marketing, and social media.",
    tiers: [
      {
        name: "Basic",
        price: "₹5,241",
        description: "Simple Clothing Visualization",
        deliveryTime: "2-day delivery",
        features: [
          "T-Shirt or Hoodie modeling",
          "Front view image",
          "Back view image",
          "Basic customization"
        ]
      },
      {
        name: "Standard",
        price: "₹7,500",
        description: "Complex Clothing Visualization",
        deliveryTime: "3-day delivery",
        features: [
          "Polos and complex clothing",
          "Multiple view angles",
          "Enhanced customization",
          "Professional editing"
        ]
      },
      {
        name: "Premium",
        price: "Custom",
        description: "Premium Fashion Visualization",
        deliveryTime: "4-day delivery",
        features: [
          "Custom clothing designs",
          "Multiple models and poses",
          "Advanced environment settings",
          "Luxury brand quality output"
        ]
      }
    ]
  },
  {
    title: "AI Avatar Spokesperson Videos",
    icon: Video,
    description: "Create professional talking head videos with AI avatars. Perfect for business presentations, educational content, and promotional materials.",
    tiers: [
      {
        name: "Basic",
        price: "₹1,900",
        description: "Short AI Spokesperson Video",
        deliveryTime: "1-day delivery",
        features: [
          "1-minute video duration",
          "Custom AI avatar",
          "Professional voiceover",
          "Subtitles included",
          "Background music"
        ]
      },
      {
        name: "Standard",
        price: "₹2,500",
        description: "Extended AI Spokesperson Video",
        deliveryTime: "2-day delivery",
        features: [
          "2-minute video duration",
          "Premium AI avatar",
          "Professional voiceover",
          "Custom subtitles",
          "Background music selection"
        ]
      },
      {
        name: "Premium",
        price: "₹3,800",
        description: "Professional AI Spokesperson Video",
        deliveryTime: "3-day delivery",
        features: [
          "4-minute video duration",
          "Multiple AI avatars",
          "Professional voiceover",
          "Styled subtitles",
          "Custom background music"
        ]
      }
    ]
  },
  {
    title: "Custom AI Influencer Creation",
    icon: Brain,
    description: "Create your own AI influencer with custom LoRA models. Perfect for brands looking to establish a unique digital presence.",
    tiers: [
      {
        name: "Basic",
        price: "₹18,000",
        description: "AI Influencer Starter",
        deliveryTime: "4-day delivery",
        features: [
          "Custom Flux LoRA model",
          "1 revision included",
          "ComfyUI workflow",
          "Basic training dataset",
          "Setup guide"
        ]
      },
      {
        name: "Standard",
        price: "₹22,000",
        description: "AI Influencer Professional",
        deliveryTime: "7-day delivery",
        features: [
          "Advanced Flux LoRA model",
          "2 revisions included",
          "Enhanced ComfyUI workflow",
          "Expanded training dataset",
          "Video tutorial"
        ]
      },
      {
        name: "Premium",
        price: "₹28,000",
        description: "AI Influencer Enterprise",
        deliveryTime: "10-day delivery",
        features: [
          "Premium Flux LoRA model",
          "3 revisions included",
          "Professional ComfyUI workflow",
          "Comprehensive training",
          "Extended support"
        ]
      }
    ]
  },
  {
    title: "AI Music Composition",
    icon: Music,
    description: "Create unique, AI-generated music compositions tailored to your needs. Perfect for podcasts, videos, games, and more.",
    tiers: [
      {
        name: "Basic",
        price: "₹6,000",
        description: "AI Music Starter",
        deliveryTime: "2-day delivery",
        features: [
          "1-minute track duration",
          "Genre customization",
          "MP3 format delivery",
          "Basic mixing",
          "Commercial license"
        ]
      },
      {
        name: "Standard",
        price: "₹11,000",
        description: "AI Music Plus",
        deliveryTime: "3-day delivery",
        features: [
          "2-3 minute track duration",
          "Genre and mood customization",
          "MP3 & WAV formats",
          "Professional mixing",
          "Optional lyrics",
          "Commercial license"
        ]
      },
      {
        name: "Premium",
        price: "₹19,000",
        description: "AI Music Pro",
        deliveryTime: "4-day delivery",
        features: [
          "5+ minute track duration",
          "Full creative control",
          "Advanced mixing & mastering",
          "Professional lyrics writing",
          "Multiple revisions",
          "Commercial license"
        ]
      }
    ]
  }
];

export default function AIServices() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        heading="AI Services"
        description="Cutting-edge artificial intelligence solutions tailored to your business needs"
        centered
      />

      <div className="grid gap-8 mt-12">
        {services.map((service, index) => (
          <section key={service.title} className="scroll-mt-20" id={`service-${index}`}>
            <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="border-b bg-white/50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <service.icon className="h-8 w-8 text-brand-600" />
                  <div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="mt-2">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {service.tiers.map((tier) => (
                    <Card key={tier.name} className="relative overflow-hidden">
                      <CardHeader>
                        <CardTitle className="flex items-baseline gap-2">
                          <span>{tier.name}</span>
                          <span className="text-2xl font-bold text-brand-600">{tier.price}</span>
                        </CardTitle>
                        <CardDescription>{tier.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-sm text-muted-foreground">{tier.deliveryTime}</div>
                          <ul className="space-y-2 text-sm">
                            {tier.features.map((feature) => (
                              <li key={feature} className="flex items-center">
                                <svg
                                  className=" h-4 w-4 flex-shrink-0 text-brand-600"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="ml-2">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button className="w-full" size="lg">
                            Get Started
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>
    </div>
  );
}
