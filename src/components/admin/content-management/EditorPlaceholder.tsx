
import React from 'react';
import { FileCode } from 'lucide-react';

interface EditorPlaceholderProps {
  message: string;
  submessage: string;
  icon?: React.ReactNode;
}

const EditorPlaceholder: React.FC<EditorPlaceholderProps> = ({ 
  message, 
  submessage, 
  icon = <FileCode className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
}) => {
  return (
    <div className="text-center p-8 border rounded-md">
      {icon}
      <h3 className="text-lg font-medium">{message}</h3>
      <p className="text-muted-foreground">{submessage}</p>
    </div>
  );
};

export default EditorPlaceholder;
