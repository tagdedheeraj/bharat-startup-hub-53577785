
export interface PackageFeature {
  text: string;
}

export interface ComparisonFeature {
  feature: string;
  weekly: string | boolean;
  biWeekly: string | boolean;
  monthly: string | boolean;
}
