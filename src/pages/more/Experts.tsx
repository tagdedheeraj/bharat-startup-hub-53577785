
import React from 'react';
import { Link } from 'react-router-dom';
import ExpertCard from '@/components/experts/ExpertCard';
import SectionHeading from '@/components/SectionHeading';

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
  ];

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Our Experts</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Meet our Experts</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Team that Makes it Happen. Meet the brilliant minds that guide, support, and transform your business into a success story.
            </p>
          </div>
        </div>
      </section>
      
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

      <section className="bg-gradient-to-r from-brand-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Our Experts?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our team and discover how our expertise can help your business grow.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertsPage;
