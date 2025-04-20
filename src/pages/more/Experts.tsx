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
    photoUrl: '/lovable-uploads/dhruv-thakar.jpg',
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
      
      {/* Founder Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-4 -top-24 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={founder.photoUrl}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    console.error("Failed to load founder image, using placeholder");
                  }}
                />
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700 font-medium">{founder.experience} Experience</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold">{founder.name}</h2>
                <p className="text-xl text-brand-600 font-medium">{founder.position}</p>
                
                <div className="prose prose-lg text-gray-600">
                  <p className="font-medium text-gray-700">Expertise:</p>
                  <p className="text-gray-600">{founder.expertise}</p>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  {founder.bio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 pt-6">
                  {founder.linkedinUrl && (
                    <a 
                      href={founder.linkedinUrl} 
                      className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#006396] transition-colors shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  )}
                  <a 
                    href={`mailto:${founder.name.toLowerCase().replace(' ', '.')}@bharatstartup.com`} 
                    className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-lg border border-gray-200"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact Directly</span>
                  </a>
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
