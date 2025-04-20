
import React from 'react';
import { Link } from 'react-router-dom';
import ExpertCard from '@/components/experts/ExpertCard';
import SectionHeading from '@/components/SectionHeading';
import { Linkedin, Mail, Star } from 'lucide-react';

const ExpertsPage = () => {
  const founder = {
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
  };

  const experts = [
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
      
      {/* Founder Spotlight Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FOUNDER SPOTLIGHT"
            heading="Meet Our Visionary Founder"
            description="The driving force behind our success and innovation"
            centered
          />
          
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 h-72 md:h-full overflow-hidden relative">
                  <img
                    src={founder.photoUrl}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                      console.error("Failed to load founder image");
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                  <div className="absolute bottom-4 left-4 flex flex-col md:hidden">
                    <span className="bg-brand-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-2 inline-block self-start">
                      CEO & Founder
                    </span>
                    <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
                  </div>
                </div>
                
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col">
                  <div className="hidden md:block">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-brand-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-block">
                        CEO & Founder
                      </span>
                      <span className="bg-brand-50 text-brand-700 text-sm font-medium px-3 py-1 rounded-full inline-block">
                        {founder.experience} Experience
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-brand-600 font-medium mb-3">{founder.position}</p>
                  </div>
                  
                  <p className="text-gray-700 md:mt-4">
                    <span className="font-medium">Expertise: </span>{founder.expertise}
                  </p>
                  
                  <div className="mt-4 text-gray-600 leading-relaxed space-y-3">
                    {founder.bio.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-100">
                    {founder.linkedinUrl && (
                      <a 
                        href={founder.linkedinUrl} 
                        className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-full transition-colors flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} />
                        <span>Connect on LinkedIn</span>
                      </a>
                    )}
                    <a 
                      href={`mailto:${founder.name.toLowerCase().replace(' ', '.')}@bharatstartup.com`} 
                      className="bg-brand-100 hover:bg-brand-200 text-brand-700 px-4 py-2 rounded-full transition-colors flex items-center gap-2"
                    >
                      <Mail size={20} />
                      <span>Contact Directly</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expert Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="LEADERSHIP & EXPERTISE"
            heading="Meet Our Expert Team"
            description="Connect with industry leaders who are shaping the future of business and innovation."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
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
