
import React from 'react';

const SimpleHeader = () => {
  return (
    <header className="py-4 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <img 
          src="/lovable-uploads/incorpwale-logo.png" 
          alt="InCorpWale"
          className="h-12 w-auto"
        />
      </div>
    </header>
  );
};

export default SimpleHeader;
