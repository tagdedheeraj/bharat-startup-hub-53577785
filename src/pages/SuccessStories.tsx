
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import HeroSection from '@/components/success-stories/HeroSection';
import FeaturedStory from '@/components/success-stories/FeaturedStory';
import StoryCard from '@/components/success-stories/StoryCard';
import StatCard from '@/components/success-stories/StatCard';
import CTASection from '@/components/success-stories/CTASection';
import { featuredStories, moreStories } from '@/components/success-stories/data/stories';

const SuccessStoriesPage = () => {
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
