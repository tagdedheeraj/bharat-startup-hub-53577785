import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import HeroSection from '@/components/success-stories/HeroSection';
import FeaturedStory from '@/components/success-stories/FeaturedStory';
import StoryCard from '@/components/success-stories/StoryCard';
import StatCard from '@/components/success-stories/StatCard';
import CTASection from '@/components/success-stories/CTASection';

const SuccessStoriesPage = () => {
  const featuredStories = [
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

  const moreStories = [
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

  return (
    <div>
      <HeroSection />

      {/* Featured Success Stories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FEATURED STORIES"
            heading="Transforming Business Journeys"
            description="Learn how our services have helped these businesses overcome challenges and achieve success."
          />
          
          <div className="space-y-16 mt-12">
            {featuredStories.map((story, index) => (
              <FeaturedStory key={index} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="MORE SUCCESS STORIES"
            heading="Our Growing Portfolio of Success"
            description="Explore more businesses that have thrived with our support."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {moreStories.map((story, index) => (
              <StoryCard key={index} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR IMPACT"
            heading="The Numbers That Define Our Success"
            description="A snapshot of our achievements in helping businesses grow and succeed."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <StatCard value="500+" label="Startups Funded" delay="100ms" />
            <StatCard value="₹1000Cr+" label="Funding Facilitated" delay="200ms" />
            <StatCard value="98%" label="Client Satisfaction" delay="300ms" />
            <StatCard value="25+" label="Industries Served" delay="400ms" />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default SuccessStoriesPage;
