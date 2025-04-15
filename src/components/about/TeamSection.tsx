
import SectionHeading from '@/components/SectionHeading';
import SectionImage from '@/components/shared/SectionImage';

const TeamSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="OUR TEAM"
          heading="Meet the Experts Behind Bharat Startup Solution"
          description="A team of dedicated professionals with expertise in various domains of business development."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <TeamMember
            name="Rajesh Sharma"
            role="Founder & CEO"
            description="With over 20 years of experience in business consulting and venture capital, Rajesh leads our strategic vision."
            sectionName="team-ceo"
            fallbackSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
            delay="100ms"
          />
          
          <TeamMember
            name="Priya Verma"
            role="Legal Director"
            description="A corporate law expert with specialization in startup regulations and compliance frameworks."
            sectionName="team-legal"
            fallbackSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
            delay="200ms"
          />
          
          <TeamMember
            name="Amit Patel"
            role="Head of Funding"
            description="Former investment banker with extensive connections in the venture capital and private equity sectors."
            sectionName="team-funding"
            fallbackSrc="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
            delay="300ms"
          />
        </div>
        
        <div className="text-center mt-12">
          <a href="/more/experts" className="btn-primary inline-flex items-center">
            View Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  sectionName: string;
  fallbackSrc: string;
  delay: string;
}

const TeamMember = ({ name, role, description, sectionName, fallbackSrc, delay }: TeamMemberProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md animate-fadeIn" style={{ animationDelay: delay }}>
    <div className="h-64 bg-gray-200">
      <SectionImage
        pageName="about"
        sectionName={sectionName}
        fallbackSrc={fallbackSrc}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-brand-600 mb-4">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default TeamSection;
