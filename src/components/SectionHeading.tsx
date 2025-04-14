
import { ReactNode } from 'react';

interface SectionHeadingProps {
  subheading?: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

export default function SectionHeading({ 
  subheading, 
  heading, 
  description, 
  align = 'center',
  children 
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };
  
  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[align]}`}>
      {subheading && <p className="sub-heading">{subheading}</p>}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{heading}</h2>
      {description && <p className="text-lg text-gray-600">{description}</p>}
      {children}
    </div>
  );
}
