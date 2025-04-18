import { Brain, Bot, Code, Image, Video, Music } from 'lucide-react';
import type { AIService } from '@/types/services';

export const aiServices: AIService[] = [
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
