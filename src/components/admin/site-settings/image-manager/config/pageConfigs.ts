
export interface SectionConfig {
  id: string;
  name: string;
  label: string;
  description: string;
  dimensionsText: string;
  placeholder: string;
}

export interface PageConfig {
  id: string;
  name: string;
  sections: SectionConfig[];
}

// Convert the existing object to an array of PageConfig objects
export const pageConfigs: PageConfig[] = [
  {
    id: "home",
    name: "Home Page",
    sections: [
      {
        id: "hero",
        name: "hero",
        label: "Hero Section",
        description: "Main banner image for the hero section",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1505628356033-6f6d17459462?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "features",
        name: "features",
        label: "Features Section",
        description: "Background image for the features section",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1587560699230-9646d548d428?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "funding-options",
        name: "funding-options",
        label: "Funding Options Section",
        description: "Image for the funding options section",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1563019778-e511b599c46a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "stats",
        name: "stats",
        label: "Stats Section",
        description: "Background image for the stats section",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1542744166-e35939358f7c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "testimonials",
        name: "testimonials",
        label: "Testimonials Section",
        description: "Background image for the testimonials section",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1488190211105-8b0e6c843b6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "contact",
        name: "contact",
        label: "Contact Section",
        description: "Image for the contact section",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1560264234-aa99859caeca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "cta",
        name: "cta",
        label: "CTA Section",
        description: "Image for the call to action section",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1580927511526-597e31e52372?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]
  },
  {
    id: "about",
    name: "About Page",
    sections: [
      {
        id: "hero",
        name: "hero",
        label: "Hero Section",
        description: "Main banner image for the about page",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "mission",
        name: "mission",
        label: "Mission Section",
        description: "Image representing the company mission",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "values",
        name: "values",
        label: "Values Section",
        description: "Image representing the company values",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1504328348627-697350552c40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "team-ceo",
        name: "team-ceo",
        label: "Team - CEO",
        description: "Image for the CEO/Founder",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "team-legal",
        name: "team-legal",
        label: "Team - Legal Director",
        description: "Image for the Legal Director",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "team-funding",
        name: "team-funding",
        label: "Team - Head of Funding",
        description: "Image for the Head of Funding",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "team-marketing",
        name: "team-marketing",
        label: "Team - Marketing Director",
        description: "Image for the Marketing Director",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "team-tech",
        name: "team-tech",
        label: "Team - Technology Advisor",
        description: "Image for the Technology Advisor",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "team-finance",
        name: "team-finance",
        label: "Team - Financial Consultant",
        description: "Image for the Financial Consultant",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      }
    ]
  },
  {
    id: "services",
    name: "Services Page",
    sections: [
      {
        id: "hero",
        name: "hero",
        label: "Hero Section",
        description: "Main banner image for the services page",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1517245386804-bb43f63cb1ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "consulting",
        name: "consulting",
        label: "Consulting Section",
        description: "Image for the consulting service",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1542744166-e35939358f7c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "funding",
        name: "funding",
        label: "Funding Section",
        description: "Image for the funding service",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1501164333658-c3ab69337913?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "marketing",
        name: "marketing",
        label: "Marketing Section",
        description: "Image for the marketing service",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1486312339633-a8a142d86454?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]
  },
  {
    id: "contact",
    name: "Contact Page",
    sections: [
      {
        id: "hero",
        name: "hero",
        label: "Hero Section",
        description: "Main banner image for the contact page",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1560264234-aa99859caeca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "form-background",
        name: "form-background",
        label: "Form Background",
        description: "Background image for the contact form",
        dimensionsText: "Recommended size: 1920x1080px",
        placeholder: "https://images.unsplash.com/photo-1519389950473-47a04ca0ecd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]
  },
  {
    id: "team",
    name: "Team Members",
    sections: [
      {
        id: "team-ceo",
        name: "team-ceo",
        label: "CEO/Founder",
        description: "Image for the CEO/Founder",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "team-legal",
        name: "team-legal",
        label: "Legal Director",
        description: "Image for the Legal Director",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "team-funding",
        name: "team-funding",
        label: "Head of Funding",
        description: "Image for the Head of Funding",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "team-marketing",
        name: "team-marketing",
        label: "Marketing Director",
        description: "Image for the Marketing Director",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "team-tech",
        name: "team-tech",
        label: "Technology Advisor",
        description: "Image for the Technology Advisor",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "team-finance",
        name: "team-finance",
        label: "Financial Consultant",
        description: "Image for the Financial Consultant",
        dimensionsText: "Recommended size: 400x400px",
        placeholder: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
      }
    ]
  }
];
