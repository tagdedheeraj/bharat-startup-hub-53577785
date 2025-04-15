
import { Award, Target } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const MissionVision = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="MISSION & VISION"
          heading="Driven by Purpose"
          description="Our guiding principles that shape everything we do."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-card rounded-xl p-8 animate-fadeIn" style={{ animationDelay: "100ms" }}>
            <div className="bg-brand-100 p-3 rounded-lg inline-block mb-4">
              <Target className="h-6 w-6 text-brand-700" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower Indian entrepreneurs by providing accessible, comprehensive business solutions that simplify their journey from ideation to success, enabling them to focus on innovation and growth.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-8 animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <div className="bg-brand-100 p-3 rounded-lg inline-block mb-4">
              <Award className="h-6 w-6 text-brand-700" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the catalyst for a new era of entrepreneurship in India, where every innovative idea has the opportunity to transform into a successful business that contributes to national growth and prosperity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
