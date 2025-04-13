
import React, { useEffect } from 'react';
import SectionHeading from '@/components/SectionHeading';

const ClientServiceAgreement = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <SectionHeading
        subheading="LEGAL"
        heading="Client Service Agreement"
        description="Standard service agreement document for our clients"
      />
      
      <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
        <iframe 
          src="https://drive.google.com/file/d/1xO11gJpIXAM-MkmAYKk5tta6dY8Zx9up/preview" 
          width="100%" 
          height="800" 
          className="border-0"
          allow="autoplay"
          title="Client Service Agreement"
        ></iframe>
      </div>
      
      <div className="mt-6 text-center">
        <a 
          href="https://drive.google.com/file/d/1xO11gJpIXAM-MkmAYKk5tta6dY8Zx9up/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Agreement
        </a>
      </div>
    </div>
  );
};

export default ClientServiceAgreement;
