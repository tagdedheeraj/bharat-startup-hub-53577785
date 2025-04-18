
import { LucideIcon } from 'lucide-react';

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export interface AIService {
  icon: LucideIcon;
  title: string;
  description: string;
  pricing: PricingPlan[];
}
