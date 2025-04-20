
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExpertCard from '@/components/experts/ExpertCard';
import SectionHeading from '@/components/SectionHeading';
import { Linkedin, Mail, Star, Award, Trophy, BookOpen } from 'lucide-react';

const ExpertsPage = () => {
  useEffect(() => {
    // Preload the founder image to check if it loads correctly
    const img = new Image();
    img.src = '/lovable-uploads/931afba6-613d-4647-adf7-1a72b7ea9650.png';
    img.onload = () => console.log('Founder image preloaded successfully');
    img.onerror = (e) => console.error('Failed to preload founder image:', e);
  }, []);

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
    photoUrl: '/lovable-uploads/931afba6-613d-4647-adf7-1a72b7ea9650.png',
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
    },
    {
      name: 'Vikram Mehta',
      position: 'Technology Strategist',
      expertise: 'Digital Transformation, AI Implementation, Tech Architecture',
      experience: '14+ years',
      bio: 'Vikram is a technology visionary with expertise in helping businesses navigate digital transformation. His background in AI and machine learning has enabled countless startups to leverage cutting-edge technology for competitive advantage.',
      photoUrl: '/lovable-uploads/1f895d7b-8342-4a9e-8817-3c177ac1b3e4.png',
      linkedinUrl: 'https://linkedin.com/in/vikram-mehta',
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
      
      {/* Enhanced Founder Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-10 -top-32 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-300 rounded-full filter blur-3xl"></div>
          <div className="absolute left-1/3 top-2/3 w-72 h-72 bg-indigo-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 group">
                  <img
                    src={founder.photoUrl}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      console.error("Failed to load founder image, using placeholder");
                      target.onerror = null; // Prevent infinite error loop
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      <span className="font-medium">{founder.experience} Leadership</span>
                    </div>
                    <h3 className="text-2xl font-bold">{founder.name}</h3>
                    <p className="text-white/80">{founder.position}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-800 font-semibold">{founder.experience} Industry Experience</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">
                  {founder.name}
                </h2>
                <p className="text-xl text-brand-600 font-medium">{founder.position}</p>
                
                <div className="flex flex-wrap gap-3 my-4">
                  {founder.expertise.split(', ').map((item, index) => (
                    <span 
                      key={index} 
                      className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 text-sm font-medium shadow-sm border border-gray-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
                <div className="prose prose-lg text-gray-700 max-w-none">
                  {founder.bio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 pt-6">
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
                    href={`mailto:dhruv.thakar@bharatstartup.com`} 
                    className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-lg border border-gray-200"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact Directly</span>
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
                    <Award className="w-7 h-7 text-amber-500 mb-2" />
                    <h4 className="font-semibold text-gray-800">Leadership Excellence</h4>
                    <p className="text-sm text-gray-600">Guided numerous startups to market success</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
                    <Trophy className="w-7 h-7 text-amber-500 mb-2" />
                    <h4 className="font-semibold text-gray-800">Investment Expert</h4>
                    <p className="text-sm text-gray-600">Strategic angel investments in high-growth sectors</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
                    <BookOpen className="w-7 h-7 text-amber-500 mb-2" />
                    <h4 className="font-semibold text-gray-800">Industry Knowledge</h4>
                    <p className="text-sm text-gray-600">Deep insights across multiple business domains</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expert Team Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="LEADERSHIP & EXPERTISE"
            heading="Our Domain Specialists"
            description="Connect with industry leaders who are shaping the future of business and innovation."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
