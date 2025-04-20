
import React from 'react';
import { Link } from 'react-router-dom';
import ExpertCard from '@/components/experts/ExpertCard';
import SectionHeading from '@/components/SectionHeading';

const ExpertsPage = () => {
  const experts = [
    {
      name: 'Dhruv Thakar',
      position: 'Visionary Leader & Entrepreneur',
      expertise: 'Business Development, Real Estate, Angel Investment, Startup Ecosystem Building',
      experience: '10+ years',
      bio: `As a distinguished alumnus of LD College of Engineering and SPIPA, I have cultivated a unique blend of administrative acumen and technological expertise. With a storied career spanning multiple MNCs, including BOB, Chemmanur International, and Quickr, I have honed my skills as a Business Sales Head, driving growth and innovation.

As a trailblazing entrepreneur, I have successfully created my own identity and forged strategic partnerships. My expertise extends to real estate, where I have demonstrated a keen eye for opportunity and investment.

A passionate advocate for startup ecosystems, I have nurtured numerous directors and companies, fostering a culture of innovation and entrepreneurship. As an angel investor, I have supported visionary ventures, empowering them to achieve their full potential.

With a commitment to excellence and a passion for innovation, I continue to shape the business landscape, inspiring a new generation of entrepreneurs and leaders.

Key Highlights:
• Distinguished alumnus of LD College of Engineering and SPIPA
• Business Sales Head with experience in MNCs like BOB, Chemmanur International, and Quickr
• Real estate expert with a proven track record
• Angel investor in multiple companies
• Startup ecosystem builder with a focus on nurturing directors and companies`,
      photoUrl: '/lovable-uploads/8b632a69-1c35-4f82-bfd8-7b29cca0187e.png',
      linkedinUrl: 'https://linkedin.com/in/dhruv-thakar',
    },
    {
      name: 'Priya Sharma',
      position: 'Legal & Compliance Head',
      expertise: 'Corporate Law, Regulatory Compliance, IPR',
      experience: '12+ years',
      bio: 'A seasoned legal professional specializing in corporate law and intellectual property rights. Priya brings extensive experience in handling complex regulatory frameworks and ensuring compliance for businesses across various sectors. Her expertise has been instrumental in helping startups navigate legal challenges.',
      photoUrl: '/lovable-uploads/9e5fe674-093d-408f-b174-4f59a6ea7235.png',
      linkedinUrl: 'https://linkedin.com/in/priya-sharma',
    },
    {
      name: 'Rajesh Kumar',
      position: 'Senior Investment Advisor',
      expertise: 'Investment Strategy, Financial Planning, Market Analysis',
      experience: '15+ years',
      bio: 'With over 15 years of experience in investment banking and financial markets, Rajesh has guided numerous startups and established businesses in their financial journey. His expertise in market analysis and strategic planning has helped companies raise substantial funding and achieve sustainable growth.',
      photoUrl: '/lovable-uploads/6566b2a8-7eca-450d-a989-1c3f27d3fdcd.png',
      linkedinUrl: 'https://linkedin.com/in/rajesh-kumar',
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
            heading="Meet Our Expert Team"
            description="Connect with industry leaders who are shaping the future of business and innovation."
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
