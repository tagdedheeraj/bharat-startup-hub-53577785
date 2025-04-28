import React from 'react';
import ExpertsHero from '@/components/experts/ExpertsHero';
import FounderSection from '@/components/experts/FounderSection';
import ExpertsGrid from '@/components/experts/ExpertsGrid';
import ExpertsContactCTA from '@/components/experts/ExpertsContactCTA';
import TeamSection from '@/components/experts/TeamSection';

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
    photoUrl: 'profiles/experts/dhruv-thakar.png', // Make sure this matches your Firebase Storage path
    linkedinUrl: 'https://linkedin.com/in/dhruv-thakar',
  };

  const experts = [
    {
      name: 'Priya Sharma',
      position: 'Legal & Compliance Head',
      expertise: 'Corporate Law, Regulatory Compliance, IPR',
      experience: '12+ years',
      bio: 'A seasoned legal professional specializing in corporate law and intellectual property rights. Priya brings extensive experience in handling complex regulatory frameworks and ensuring compliance for businesses across various sectors. Her expertise has been instrumental in helping startups navigate legal challenges.',
      photoUrl: 'profiles/experts/priya-sharma.png',
      linkedinUrl: 'https://linkedin.com/in/priya-sharma',
    },
    {
      name: 'Rajesh Kumar',
      position: 'Senior Investment Advisor',
      expertise: 'Investment Strategy, Financial Planning, Market Analysis',
      experience: '15+ years',
      bio: 'With over 15 years of experience in investment banking and financial markets, Rajesh has guided numerous startups and established businesses in their financial journey. His expertise in market analysis and strategic planning has helped companies raise substantial funding and achieve sustainable growth.',
      photoUrl: 'profiles/experts/rajesh-kumar.png',
      linkedinUrl: 'https://linkedin.com/in/rajesh-kumar',
    },
    {
      name: 'Vikram Mehta',
      position: 'Technology Strategist',
      expertise: 'Digital Transformation, AI Implementation, Tech Architecture',
      experience: '14+ years',
      bio: 'Vikram is a technology visionary with expertise in helping businesses navigate digital transformation. His background in AI and machine learning has enabled countless startups to leverage cutting-edge technology for competitive advantage.',
      photoUrl: 'profiles/experts/vikram-mehta.png',
      linkedinUrl: 'https://linkedin.com/in/vikram-mehta',
    }
  ];

  return (
    <div>
      <ExpertsHero />
      <FounderSection founder={founder} />
      <TeamSection />
      <ExpertsGrid experts={experts} />
      <ExpertsContactCTA />
    </div>
  );
};

export default ExpertsPage;
