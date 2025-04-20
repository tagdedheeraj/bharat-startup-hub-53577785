
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
    {
      name: 'Rajesh Kumar',
      position: 'Senior Investment Advisor',
      expertise: 'Investment Strategy, Financial Planning, Market Analysis',
      experience: '15+ years',
      bio: 'With over 15 years of experience in investment banking and financial markets, Rajesh has guided numerous startups and established businesses in their financial journey. His expertise in market analysis and strategic planning has helped companies raise substantial funding and achieve sustainable growth.',
      photoUrl: '/lovable-uploads/6566b2a8-7eca-450d-a989-1c3f27d3fdcd.png',
      linkedinUrl: 'https://linkedin.com/in/rajesh-kumar',
    },
    {
      name: 'Priya Sharma',
      position: 'Legal & Compliance Head',
      expertise: 'Corporate Law, Regulatory Compliance, IPR',
      experience: '12+ years',
      bio: 'A seasoned legal professional specializing in corporate law and intellectual property rights. Priya brings extensive experience in handling complex regulatory frameworks and ensuring compliance for businesses across various sectors. Her expertise has been instrumental in helping startups navigate legal challenges.',
      photoUrl: '/lovable-uploads/9e5fe674-093d-408f-b174-4f59a6ea7235.png',
      linkedinUrl: 'https://linkedin.com/in/priya-sharma',
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Our Experts</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Meet Our Industry Experts</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team of seasoned professionals brings decades of combined experience across various industries. 
              From business development to legal compliance, our experts are here to guide you through every step of your journey.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="LEADERSHIP & EXPERTISE"
            heading="Our Expert Team"
            description="Meet the professionals who will help transform your business vision into reality."
            centered
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
              Get personalized guidance from our experienced professionals. Schedule a consultation today and take the first step towards your business success.
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
