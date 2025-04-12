
import React from 'react';

interface ContactSectionWrapperProps {
  children: React.ReactNode;
}

const ContactSectionWrapper = ({ children }: ContactSectionWrapperProps) => {
  return (
    <div className="mt-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-india-saffron/20 to-india-green/20 transform rotate-1 rounded-lg"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ContactSectionWrapper;
