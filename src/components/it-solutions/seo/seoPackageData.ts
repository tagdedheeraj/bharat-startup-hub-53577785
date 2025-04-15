
import { PackageFeature } from './types';

export interface SEOPackage {
  name: string;
  description: string;
  price: string;
  delivery: string;
  features: PackageFeature[];
  gradient: string;
}

export const seoPackages: SEOPackage[] = [
  {
    name: "BoostStarter",
    description: "250+ Diversified SEO Backlinks Pack",
    price: "₹8,384",
    delivery: "7 days delivery",
    features: [
      { text: "100 Tier 1 Backlinks" },
      { text: "150 Tier 2 Backlinks" },
      { text: "Drip-Feed Strategy" },
      { text: "E-E-A-T High Authority Links" }
    ],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "RankRise",
    description: "500+ Diversified SEO Backlinks Pack",
    price: "₹14,900",
    delivery: "14 days delivery",
    features: [
      { text: "200 Tier 1 Backlinks" },
      { text: "300 Tier 2 Backlinks" },
      { text: "Drip-Feed Strategy" },
      { text: "E-E-A-T High Authority Links" },
      { text: "Priority Processing" }
    ],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "DominanceMax",
    description: "750+ Diversified SEO Backlinks Pack",
    price: "₹34,945",
    delivery: "21 days delivery",
    features: [
      { text: "300 Tier 1 Backlinks" },
      { text: "450 Tier 2 Backlinks" },
      { text: "Drip-Feed Strategy" },
      { text: "E-E-A-T High Authority Links" },
      { text: "Priority Processing" },
      { text: "Monthly Report" }
    ],
    gradient: "from-amber-500/20 to-orange-500/20"
  }
];

export const comparisonFeatures = [
  { feature: "Total Backlinks", boostStarter: "250+", rankRise: "500+", dominanceMax: "750+" },
  { feature: "Tier 1 Backlinks", boostStarter: "100", rankRise: "200", dominanceMax: "300" },
  { feature: "Tier 2 Backlinks", boostStarter: "150", rankRise: "300", dominanceMax: "450" },
  { feature: "Domain Authority", boostStarter: "DA 20-40", rankRise: "DA 30-50", dominanceMax: "DA 40-60" },
  { feature: "Drip-Feed Strategy", boostStarter: true, rankRise: true, dominanceMax: true },
  { feature: "E-E-A-T High Authority Links", boostStarter: true, rankRise: true, dominanceMax: true },
  { feature: "Priority Processing", boostStarter: false, rankRise: true, dominanceMax: true },
  { feature: "Monthly Report", boostStarter: false, rankRise: false, dominanceMax: true },
  { feature: "Delivery Time", boostStarter: "7 days", rankRise: "14 days", dominanceMax: "21 days" },
  { feature: "Support", boostStarter: "Email", rankRise: "Email + Chat", dominanceMax: "Priority Support" },
  { feature: "Link Building Strategy", boostStarter: "Basic", rankRise: "Advanced", dominanceMax: "Premium" },
  { feature: "Niche Relevancy", boostStarter: "Medium", rankRise: "High", dominanceMax: "Very High" }
];
