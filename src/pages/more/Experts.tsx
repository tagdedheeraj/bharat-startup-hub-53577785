
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import ExpertCard from '@/components/experts/ExpertCard';
import ExpertsHero from '@/components/experts/ExpertsHero';
import ExpertsCTA from '@/components/experts/ExpertsCTA';

const ExpertsPage = () => {
  const experts = [
    {
      name: 'Dhruv Thakar',
      position: 'Founder & CEO',
      expertise: 'Business Development, Real Estate, Angel Investment',
      experience: '10+ years',
      bio: `As a distinguished alumnus of LD College of Engineering and SPIPA, I have cultivated a unique blend of administrative acumen and technological expertise. With a storied career spanning multiple MNCs, including BOB, Chemmanur International, and Quickr, I have honed my skills as a Business Sales Head, driving growth and innovation.`,
      photoUrl: '/lovable-uploads/41bea343-2e2d-4c51-a6ac-fa0e16b74ea0.png',
      linkedinUrl: 'https://linkedin.com/in/dhruv-thakar',
    },
    // Additional static experts can be added here
  ];

  return (
    <div>
      <ExpertsHero />
      
      {/* Experts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="LEADERSHIP"
            heading="Our Core Team"
            description="Meet the visionaries leading Bharat Startup Solution."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {experts.map((expert, index) => (
              <ExpertCard key={index} {...expert} />
            ))}
          </div>
        </div>
      </section>

      <ExpertsCTA />
    </div>
  );
};

export default ExpertsPage;
