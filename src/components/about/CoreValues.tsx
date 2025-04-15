
import { Users, CheckCircle, Award, Clock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CoreValues = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="CORE VALUES"
          heading="The Principles That Guide Us"
          description="At Bharat Startup Solution, we're driven by these fundamental values in everything we do."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <ValueCard
            icon={<Users className="h-8 w-8 text-brand-600" />}
            title="Client-Centric"
            description="Our clients' success is our priority. We tailor our solutions to meet their unique needs and challenges."
            delay="100ms"
          />
          
          <ValueCard
            icon={<CheckCircle className="h-8 w-8 text-brand-600" />}
            title="Excellence"
            description="We strive for excellence in every service we provide, ensuring the highest quality and professional standards."
            delay="200ms"
          />
          
          <ValueCard
            icon={<Award className="h-8 w-8 text-brand-600" />}
            title="Integrity"
            description="We conduct our business with honesty, transparency, and ethical practices, building trust with our clients."
            delay="300ms"
          />
          
          <ValueCard
            icon={<Clock className="h-8 w-8 text-brand-600" />}
            title="Innovation"
            description="We embrace innovation and continuously evolve our services to meet the changing needs of the business landscape."
            delay="400ms"
          />
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ValueCard = ({ icon, title, description, delay }: ValueCardProps) => (
  <div className="text-center animate-fadeIn" style={{ animationDelay: delay }}>
    <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default CoreValues;
