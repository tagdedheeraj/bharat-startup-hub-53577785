
export interface PackageFeature {
  text: string;
}

export interface GoogleAdsPackage {
  name: string;
  description: string;
  price: string;
  delivery: string;
  features: PackageFeature[];
  gradient: string;
}

export interface ComparisonFeature {
  feature: string;
  starter: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
}
