
export interface PageConfig {
  id: string;
  name: string;
  sections: {
    id: string;
    name: string;
  }[];
}

export const pageConfigs: PageConfig[] = [
  { 
    id: 'home', 
    name: 'Home Page', 
    sections: [
      { id: 'hero', name: 'Hero Section' },
      { id: 'features', name: 'Features Section' },
      { id: 'testimonials', name: 'Testimonials Section' },
      { id: 'stats', name: 'Statistics Section' },
      { id: 'cta', name: 'CTA Section' }
    ] 
  },
  { 
    id: 'about', 
    name: 'About Us Page', 
    sections: [
      { id: 'hero', name: 'Hero Section' },
      { id: 'team', name: 'Team Section' },
      { id: 'mission', name: 'Mission & Vision' },
      { id: 'values', name: 'Core Values' }
    ] 
  },
  { 
    id: 'services', 
    name: 'Services Page', 
    sections: [
      { id: 'hero', name: 'Hero Section' },
      { id: 'offerings', name: 'Service Offerings' },
      { id: 'process', name: 'Process Section' }
    ] 
  },
  { 
    id: 'it-solutions', 
    name: 'IT Solutions Page', 
    sections: [
      { id: 'hero', name: 'Hero Section' },
      { id: 'services', name: 'Services Section' },
      { id: 'seo', name: 'SEO Packages' },
      { id: 'social', name: 'Social Media' },
      { id: 'google-ads', name: 'Google Ads' },
      { id: 'tech-stack', name: 'Tech Stack' }
    ] 
  },
];
