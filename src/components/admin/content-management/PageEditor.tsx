
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Eye } from 'lucide-react';
import PageEditorForm from './PageEditorForm';
import PagePreview from './PagePreview';
import EditorPlaceholder from './EditorPlaceholder';

interface Page {
  id: number;
  title: string;
  path: string;
}

interface Section {
  id: number;
  name: string;
  content: string;
}

interface PageEditorProps {
  selectedPage: Page | null;
  sections: Section[];
  onSaveContent: (data: any) => void;
}

const PageEditor: React.FC<PageEditorProps> = ({ 
  selectedPage, 
  sections, 
  onSaveContent 
}) => {
  const [editMode, setEditMode] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  if (!selectedPage) {
    return (
      <EditorPlaceholder 
        message="No page selected" 
        submessage="Please select a page from the 'Website Pages' tab to edit its content" 
      />
    );
  }

  const initialValues = {
    title: selectedPage.title,
    content: '',
    metaDescription: `Meta description for ${selectedPage.title}`,
    metaKeywords: `keywords, for, ${selectedPage.title}`,
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">
          Editing: {selectedPage.title}
        </h3>
        <div className="flex gap-2">
          <Button 
            variant={editMode ? "default" : "outline"} 
            onClick={() => { 
              setEditMode(true);
              setPreviewMode(false);
            }}
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button 
            variant={previewMode ? "default" : "outline"} 
            onClick={() => {
              setPreviewMode(true);
              setEditMode(false);
            }}
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
        </div>
      </div>
      
      {editMode ? (
        <PageEditorForm 
          initialValues={initialValues} 
          sections={sections} 
          onSubmit={onSaveContent} 
        />
      ) : previewMode ? (
        <PagePreview 
          title={selectedPage.title} 
          sections={sections} 
        />
      ) : (
        <EditorPlaceholder 
          message="Select an option" 
          submessage="Click 'Edit' to modify page content or 'Preview' to see how it looks" 
        />
      )}
    </div>
  );
};

export default PageEditor;
