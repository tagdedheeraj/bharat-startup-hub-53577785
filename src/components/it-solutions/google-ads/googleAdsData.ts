
import { type GoogleAdsPackage, type ComparisonFeature } from './types';

export const googleAdsPackages: GoogleAdsPackage[] = [
  {
    name: "Starter Plan",
    description: "Get Started with Google Ads PPC",
    price: "₹10,000",
    delivery: "5 days delivery",
    gradient: "from-blue-500/20 to-cyan-500/20",
    features: [
      { text: "2 Ad Groups" },
      { text: "15 Keywords" },
      { text: "Negative Keywords" },
      { text: "Ad Extensions" },
      { text: "Audience Targeting" },
      { text: "Bidding Strategy" },
      { text: "4 Text Ads" },
    ]
  },
  {
    name: "Standard Plan",
    description: "Comprehensive Google Ads Setup",
    price: "₹17,000",
    delivery: "5 days delivery",
    gradient: "from-purple-500/20 to-pink-500/20",
    features: [
      { text: "4 Ad Groups" },
      { text: "35 Keywords" },
      { text: "Negative Keywords" },
      { text: "Ad Extensions" },
      { text: "Audience Targeting" },
      { text: "Bidding Strategy" },
      { text: "8 Text Ads" },
      { text: "1 Free Optimization in 7 Days" },
    ]
  },
  {
    name: "Premium Plan",
    description: "Advanced Google Ads Management",
    price: "₹25,000",
    delivery: "5 days delivery",
    gradient: "from-orange-500/20 to-red-500/20",
    features: [
      { text: "8 Ad Groups" },
      { text: "60 Keywords" },
      { text: "Negative Keywords" },
      { text: "Ad Extensions" },
      { text: "Audience Targeting" },
      { text: "Bidding Strategy" },
      { text: "16 Text Ads" },
      { text: "2 Optimizations in 7 & 14 Days" },
    ]
  }
];

export const comparisonFeatures: ComparisonFeature[] = [
  {
    feature: "Ad Groups",
    starter: "2",
    standard: "4",
    premium: "8"
  },
  {
    feature: "Keywords",
    starter: "15",
    standard: "35",
    premium: "60"
  },
  {
    feature: "Text Ads",
    starter: "4",
    standard: "8",
    premium: "16"
  },
  {
    feature: "Negative Keywords",
    starter: true,
    standard: true,
    premium: true
  },
  {
    feature: "Ad Extensions",
    starter: true,
    standard: true,
    premium: true
  },
  {
    feature: "Audience Targeting",
    starter: true,
    standard: true,
    premium: true
  },
  {
    feature: "Bidding Strategy",
    starter: true,
    standard: true,
    premium: true
  },
  {
    feature: "Free Optimizations",
    starter: "None",
    standard: "1 in 7 Days",
    premium: "2 in 7 & 14 Days"
  }
];
