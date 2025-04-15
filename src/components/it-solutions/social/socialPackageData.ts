
import { type PackageFeature } from './types';

export interface SocialPackage {
  name: string;
  description: string;
  price: string;
  delivery: string;
  features: PackageFeature[];
  gradient: string;
}

export const socialPackages: SocialPackage[] = [
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

export const comparisonFeatures = [
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
