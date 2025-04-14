
import React from 'react';

interface Section {
  id: number;
  name: string;
  content: string;
}

interface PagePreviewProps {
  title: string;
  sections: Section[];
}

const PagePreview: React.FC<PagePreviewProps> = ({ title, sections }) => {
  return (
    <div className="border p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {sections.map((section) => (
        <div key={section.id} className="mb-6">
          <h3 className="text-lg font-medium mb-2">{section.name}</h3>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PagePreview;
