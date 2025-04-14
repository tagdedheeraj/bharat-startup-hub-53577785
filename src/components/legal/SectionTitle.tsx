
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  icon, 
  className 
}) => {
  return (
    <h2 className={cn(
      "flex items-center gap-2 text-xl font-semibold mt-8 mb-3 pb-2 border-b", 
      className
    )}>
      {icon}
      {children}
    </h2>
  );
};

export default SectionTitle;
