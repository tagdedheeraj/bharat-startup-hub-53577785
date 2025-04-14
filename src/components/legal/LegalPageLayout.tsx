
import React, { ReactNode, useEffect } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Shield, Info, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: 'terms' | 'privacy' | 'disclaimer';
  children: ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  subtitle,
  description,
  icon,
  children
}) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getIcon = () => {
    switch (icon) {
      case 'terms':
        return <FileText className="h-12 w-12 text-india-saffron/80" />;
      case 'privacy':
        return <Shield className="h-12 w-12 text-india-green/80" />;
      case 'disclaimer':
        return <Info className="h-12 w-12 text-brand-500/80" />;
      default:
        return null;
    }
  };

  const getGradientClass = () => {
    switch (icon) {
      case 'terms':
        return 'from-india-saffron/10 to-transparent';
      case 'privacy':
        return 'from-india-green/10 to-transparent';
      case 'disclaimer':
        return 'from-brand-500/10 to-transparent';
      default:
        return '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="flex flex-col items-center mb-8">
        <div className="mb-4 p-4 rounded-full bg-white shadow-md">
          {getIcon()}
        </div>
        <SectionHeading
          subheading={subtitle}
          heading={title}
          description={description}
        />
      </div>
      
      <div className={cn(
        "prose prose-lg max-w-none mt-8 rounded-xl p-8 shadow-lg bg-gradient-to-r",
        getGradientClass()
      )}>
        {children}
      </div>
    </div>
  );
};

export default LegalPageLayout;
