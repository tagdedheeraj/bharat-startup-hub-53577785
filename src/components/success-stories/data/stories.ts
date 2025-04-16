
interface FeaturedStory {
  name: string;
  industry: string;
  service: string;
  amount?: string;
  description: string;
  testimonial: string;
  person: string;
  position: string;
  image: string;
}

interface Story {
  name: string;
  industry: string;
  service: string;
  result: string;
  image: string;
}

export const featuredStories: FeaturedStory[] = [
  {
    name: "TechInnovate Solutions",
    industry: "Software Development",
    service: "Funding Consultation",
    amount: "₹2.5 CR",
    description: "A promising software startup that secured significant funding to scale their innovative AI-powered business solution.",
    testimonial: "With Bharat Startup Solution's guidance, we secured ₹2.5 CR funding that transformed our business. Their expertise in preparing our pitch and connecting us with the right investors was invaluable.",
    person: "Raj Malhotra",
    position: "Founder & CEO",
    image: "public/lovable-uploads/0433a3aa-ca15-48e9-a229-33964e20a4fd.png"
  },
  {
    name: "GreenHealth Organics",
    industry: "Health & Wellness",
    service: "Legal Consultation",
    amount: "",
    description: "An organic health supplements company that navigated complex regulatory requirements with our legal guidance.",
    testimonial: "The legal team at Bharat Startup Solution helped us navigate the complex regulatory landscape of the health supplements industry. Their expertise ensured we were fully compliant while scaling our operations.",
    person: "Priya Sharma",
    position: "Co-founder",
    image: "public/lovable-uploads/7202be4c-4f99-4147-bc69-d18b503ec173.png"
  },
  {
    name: "EcoManufacture India",
    industry: "Manufacturing",
    service: "Funding & Compliance",
    amount: "₹3 CR",
    description: "A sustainable manufacturing unit that secured funding and streamlined their compliance processes.",
    testimonial: "Bharat Startup Solution's comprehensive approach helped us not only secure ₹3 CR in funding but also establish robust compliance systems. This dual support has been crucial to our rapid growth.",
    person: "Vikram Singh",
    position: "Managing Director",
    image: "public/lovable-uploads/0433a3aa-ca15-48e9-a229-33964e20a4fd.png"
  }
];

export const moreStories: Story[] = [
  {
    name: "FoodTech Express",
    industry: "Food Delivery",
    service: "Funding & Marketing",
    result: "Secured ₹1.8 CR funding and increased market presence",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "EduLearn Platform",
    industry: "EdTech",
    service: "Legal & Certificate Marketing",
    result: "Achieved industry certifications and legal compliance",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "ArtCraft India",
    industry: "Handicrafts",
    service: "MSME Registration & Funding",
    result: "Registered as MSME and secured ₹75 Lac funding",
    image: "https://images.unsplash.com/photo-1509099652299-30938b0aeb63?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "TravelBuddy Apps",
    industry: "Travel Tech",
    service: "Funding Consultation",
    result: "Raised ₹2.2 CR in Series A funding",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "FashionTrend Retail",
    industry: "Fashion",
    service: "Legal & Compliance",
    result: "Streamlined legal structure and compliance processes",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "AgriTech Solutions",
    industry: "Agriculture",
    service: "Funding & Certificate Marketing",
    result: "Secured ₹1.5 CR funding and ISO certification",
    image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];
